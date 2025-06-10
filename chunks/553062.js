a.d(e, {
    A: () => R,
    R: () => N
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
function N(t, e = {}) {
    let a,
        d = new Map(),
        A = !1,
        f = 'externalFinish',
        T = !e.disableAutoFinish,
        p = [],
        { idleTimeout: L = R.idleTimeout, finalTimeout: h = R.finalTimeout, childSpanTimeout: O = R.childSpanTimeout, beforeSpanEnd: D } = e,
        g = (0, n.s3)();
    if (!g || !(0, c.z)()) return new l.b();
    let P = (0, n.nZ)(),
        C = (0, s.HN)(),
        y = (function (t) {
            let e = (0, I.qp)(t);
            return (0, E.D)((0, n.nZ)(), e), o.X && _.kg.log('[Tracing] Started span is an idle span'), e;
        })(t);
    function m() {
        a && (clearTimeout(a), (a = void 0));
    }
    function v(t) {
        m(),
            (a = setTimeout(() => {
                !A && 0 === d.size && T && ((f = 'idleTimeout'), y.end(t));
            }, L));
    }
    function U(t) {
        a = setTimeout(() => {
            !A && T && ((f = 'heartbeatFailed'), y.end(t));
        }, O);
    }
    function S(t) {
        (A = !0), d.clear(), p.forEach((t) => t()), (0, E.D)(P, C);
        let e = (0, s.XU)(y),
            { start_timestamp: a } = e;
        if (!a) return;
        (e.data || {})[i.ju] || y.setAttribute(i.ju, f), _.kg.log(`[Tracing] Idle span "${e.op}" finished`);
        let r = (0, s.Dp)(y).filter((t) => t !== y),
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
            (!c || !i) && ((0, s.ed)(y, e), n++);
        }),
            n > 0 && y.setAttribute('sentry.idle_span_discarded_spans', n);
    }
    return (
        (y.end = new Proxy(y.end, {
            apply(t, e, a) {
                D && D(y);
                let [_, ...n] = a,
                    o = _ || (0, r.ph)(),
                    i = (0, s.$k)(o),
                    c = (0, s.Dp)(y).filter((t) => t !== y);
                if (!c.length) return S(i), Reflect.apply(t, e, [i, ...n]);
                let E = c.map((t) => (0, s.XU)(t).timestamp).filter((t) => !!t),
                    l = E.length ? Math.max(...E) : void 0,
                    u = (0, s.XU)(y).start_timestamp,
                    I = Math.min(u ? u + h / 1000 : 1 / 0, Math.max(u || -1 / 0, Math.min(i, l || 1 / 0)));
                return S(I), Reflect.apply(t, e, [I, ...n]);
            }
        })),
        p.push(
            g.on('spanStart', (t) => {
                var e;
                A || t === y || (0, s.XU)(t).timestamp || ((0, s.Dp)(y).includes(t) && ((e = t.spanContext().spanId), m(), d.set(e, !0), U((0, r.ph)() + O / 1000)));
            })
        ),
        p.push(
            g.on('spanEnd', (t) => {
                if (!A) {
                    var e;
                    (e = t.spanContext().spanId), d.has(e) && d.delete(e), 0 === d.size && v((0, r.ph)() + L / 1000);
                }
            })
        ),
        p.push(
            g.on('idleSpanEnableAutoFinish', (t) => {
                t === y && ((T = !0), v(), d.size && U());
            })
        ),
        e.disableAutoFinish || v(),
        setTimeout(() => {
            A ||
                (y.setStatus({
                    code: u.jt,
                    message: 'deadline_exceeded'
                }),
                (f = 'finalTimeout'),
                y.end());
        }, h),
        y
    );
}
