a.d(e, {
    A: () => R,
    R: () => d
});
var r = a(101284),
    _ = a(622916),
    n = a(263449),
    o = a(255768),
    i = a(988097),
    c = a(73453),
    E = a(99342),
    s = a(696486),
    l = a(789112),
    u = a(793373),
    I = a(152228);
let R = {
    idleTimeout: 1000,
    finalTimeout: 30000,
    childSpanTimeout: 15000
};
function d(t, e = {}) {
    let a,
        N = new Map(),
        A = !1,
        f = 'externalFinish',
        T = !e.disableAutoFinish,
        p = [],
        { idleTimeout: L = R.idleTimeout, finalTimeout: h = R.finalTimeout, childSpanTimeout: O = R.childSpanTimeout, beforeSpanEnd: D } = e,
        g = (0, n.s3)();
    if (!g || !(0, c.z)()) return new l.b();
    let P = (0, n.nZ)(),
        y = (0, s.HN)(),
        C = (function (t) {
            let e = (0, I.qp)(t);
            return (0, E.D)((0, n.nZ)(), e), o.X && _.kg.log('[Tracing] Started span is an idle span'), e;
        })(t);
    function m() {
        a && (clearTimeout(a), (a = void 0));
    }
    function v(t) {
        m(),
            (a = setTimeout(() => {
                !A && 0 === N.size && T && ((f = 'idleTimeout'), C.end(t));
            }, L));
    }
    function S(t) {
        a = setTimeout(() => {
            !A && T && ((f = 'heartbeatFailed'), C.end(t));
        }, O);
    }
    function U(t) {
        (A = !0), N.clear(), p.forEach((t) => t()), (0, E.D)(P, y);
        let e = (0, s.XU)(C),
            { start_timestamp: a } = e;
        if (!a) return;
        (e.data || {})[i.ju] || C.setAttribute(i.ju, f), _.kg.log(`[Tracing] Idle span "${e.op}" finished`);
        let r = (0, s.Dp)(C).filter((t) => t !== C),
            n = 0;
        r.forEach((e) => {
            e.isRecording() &&
                (e.setStatus({
                    code: u.jt,
                    message: 'cancelled'
                }),
                e.end(t),
                o.X && _.kg.log('[Tracing] Cancelling span since span ended early', JSON.stringify(e, void 0, 2)));
            let { timestamp: a = 0, start_timestamp: r = 0 } = (0, s.XU)(e),
                i = r <= t,
                c = a - r <= (h + L) / 1000;
            if (o.X) {
                let t = JSON.stringify(e, void 0, 2);
                i ? c || _.kg.log('[Tracing] Discarding span since it finished after idle span final timeout', t) : _.kg.log('[Tracing] Discarding span since it happened after idle span was finished', t);
            }
            (!c || !i) && ((0, s.ed)(C, e), n++);
        }),
            n > 0 && C.setAttribute('sentry.idle_span_discarded_spans', n);
    }
    return (
        (C.end = new Proxy(C.end, {
            apply(t, e, a) {
                D && D(C);
                let [_, ...n] = a,
                    o = _ || (0, r.ph)(),
                    i = (0, s.$k)(o),
                    c = (0, s.Dp)(C).filter((t) => t !== C);
                if (!c.length) return U(i), Reflect.apply(t, e, [i, ...n]);
                let E = c.map((t) => (0, s.XU)(t).timestamp).filter((t) => !!t),
                    l = E.length ? Math.max(...E) : void 0,
                    u = (0, s.XU)(C).start_timestamp,
                    I = Math.min(u ? u + h / 1000 : 1 / 0, Math.max(u || -1 / 0, Math.min(i, l || 1 / 0)));
                return U(I), Reflect.apply(t, e, [I, ...n]);
            }
        })),
        p.push(
            g.on('spanStart', (t) => {
                var e;
                A || t === C || (0, s.XU)(t).timestamp || ((0, s.Dp)(C).includes(t) && ((e = t.spanContext().spanId), m(), N.set(e, !0), S((0, r.ph)() + O / 1000)));
            })
        ),
        p.push(
            g.on('spanEnd', (t) => {
                if (!A) {
                    var e;
                    (e = t.spanContext().spanId), N.has(e) && N.delete(e), 0 === N.size && v((0, r.ph)() + L / 1000);
                }
            })
        ),
        p.push(
            g.on('idleSpanEnableAutoFinish', (t) => {
                t === C && ((T = !0), v(), N.size && S());
            })
        ),
        e.disableAutoFinish || v(),
        setTimeout(() => {
            A ||
                (C.setStatus({
                    code: u.jt,
                    message: 'deadline_exceeded'
                }),
                (f = 'finalTimeout'),
                C.end());
        }, h),
        C
    );
}
