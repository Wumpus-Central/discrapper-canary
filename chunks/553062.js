a.d(e, {
    A: () => d,
    R: () => R
});
var r = a(101284),
    _ = a(622916),
    n = a(263449),
    o = a(255768),
    i = a(988097),
    c = a(73453),
    s = a(99342),
    E = a(696486),
    l = a(789112),
    u = a(793373),
    I = a(152228);
let d = {
    idleTimeout: 1000,
    finalTimeout: 30000,
    childSpanTimeout: 15000
};
function R(t, e = {}) {
    let a,
        N = new Map(),
        f = !1,
        A = 'externalFinish',
        T = !e.disableAutoFinish,
        p = [],
        { idleTimeout: L = d.idleTimeout, finalTimeout: h = d.finalTimeout, childSpanTimeout: O = d.childSpanTimeout, beforeSpanEnd: P } = e,
        g = (0, n.s3)();
    if (!g || !(0, c.z)()) return new l.b();
    let D = (0, n.nZ)(),
        C = (0, E.HN)(),
        v = (function (t) {
            let e = (0, I.qp)(t);
            return (0, s.D)((0, n.nZ)(), e), o.X && _.kg.log('[Tracing] Started span is an idle span'), e;
        })(t);
    function m() {
        a && (clearTimeout(a), (a = void 0));
    }
    function y(t) {
        m(),
            (a = setTimeout(() => {
                !f && 0 === N.size && T && ((A = 'idleTimeout'), v.end(t));
            }, L));
    }
    function S(t) {
        a = setTimeout(() => {
            !f && T && ((A = 'heartbeatFailed'), v.end(t));
        }, O);
    }
    function U(t) {
        (f = !0), N.clear(), p.forEach((t) => t()), (0, s.D)(D, C);
        let e = (0, E.XU)(v),
            { start_timestamp: a } = e;
        if (!a) return;
        (e.data || {})[i.ju] || v.setAttribute(i.ju, A), _.kg.log(`[Tracing] Idle span "${e.op}" finished`);
        let r = (0, E.Dp)(v).filter((t) => t !== v),
            n = 0;
        r.forEach((e) => {
            e.isRecording() &&
                (e.setStatus({
                    code: u.jt,
                    message: 'cancelled'
                }),
                e.end(t),
                o.X && _.kg.log('[Tracing] Cancelling span since span ended early', JSON.stringify(e, void 0, 2)));
            let { timestamp: a = 0, start_timestamp: r = 0 } = (0, E.XU)(e),
                i = r <= t,
                c = a - r <= (h + L) / 1000;
            if (o.X) {
                let t = JSON.stringify(e, void 0, 2);
                i ? c || _.kg.log('[Tracing] Discarding span since it finished after idle span final timeout', t) : _.kg.log('[Tracing] Discarding span since it happened after idle span was finished', t);
            }
            (!c || !i) && ((0, E.ed)(v, e), n++);
        }),
            n > 0 && v.setAttribute('sentry.idle_span_discarded_spans', n);
    }
    return (
        (v.end = new Proxy(v.end, {
            apply(t, e, a) {
                P && P(v);
                let [_, ...n] = a,
                    o = _ || (0, r.ph)(),
                    i = (0, E.$k)(o),
                    c = (0, E.Dp)(v).filter((t) => t !== v);
                if (!c.length) return U(i), Reflect.apply(t, e, [i, ...n]);
                let s = c.map((t) => (0, E.XU)(t).timestamp).filter((t) => !!t),
                    l = s.length ? Math.max(...s) : void 0,
                    u = (0, E.XU)(v).start_timestamp,
                    I = Math.min(u ? u + h / 1000 : 1 / 0, Math.max(u || -1 / 0, Math.min(i, l || 1 / 0)));
                return U(I), Reflect.apply(t, e, [I, ...n]);
            }
        })),
        p.push(
            g.on('spanStart', (t) => {
                var e;
                f || t === v || (0, E.XU)(t).timestamp || ((0, E.Dp)(v).includes(t) && ((e = t.spanContext().spanId), m(), N.set(e, !0), S((0, r.ph)() + O / 1000)));
            })
        ),
        p.push(
            g.on('spanEnd', (t) => {
                if (!f) {
                    var e;
                    (e = t.spanContext().spanId), N.has(e) && N.delete(e), 0 === N.size && y((0, r.ph)() + L / 1000);
                }
            })
        ),
        p.push(
            g.on('idleSpanEnableAutoFinish', (t) => {
                t === v && ((T = !0), y(), N.size && S());
            })
        ),
        e.disableAutoFinish || y(),
        setTimeout(() => {
            f ||
                (v.setStatus({
                    code: u.jt,
                    message: 'deadline_exceeded'
                }),
                (A = 'finalTimeout'),
                v.end());
        }, h),
        v
    );
}
