a.d(e, {
    A: () => R,
    R: () => d
});
var r = a(101284),
    n = a(622916),
    _ = a(263449),
    o = a(255768),
    i = a(988097),
    c = a(73453),
    s = a(99342),
    E = a(696486),
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
        A = new Map(),
        f = !1,
        p = 'externalFinish',
        N = !e.disableAutoFinish,
        T = [],
        { idleTimeout: L = R.idleTimeout, finalTimeout: h = R.finalTimeout, childSpanTimeout: O = R.childSpanTimeout, beforeSpanEnd: D } = e,
        g = (0, _.s3)();
    if (!g || !(0, c.z)()) return new l.b();
    let P = (0, _.nZ)(),
        m = (0, E.HN)(),
        y = (function (t) {
            let e = (0, I.qp)(t);
            return (0, s.D)((0, _.nZ)(), e), o.X && n.kg.log('[Tracing] Started span is an idle span'), e;
        })(t);
    function v() {
        a && (clearTimeout(a), (a = void 0));
    }
    function C(t) {
        v(),
            (a = setTimeout(() => {
                !f && 0 === A.size && N && ((p = 'idleTimeout'), y.end(t));
            }, L));
    }
    function S(t) {
        a = setTimeout(() => {
            !f && N && ((p = 'heartbeatFailed'), y.end(t));
        }, O);
    }
    function G(t) {
        (f = !0), A.clear(), T.forEach((t) => t()), (0, s.D)(P, m);
        let e = (0, E.XU)(y),
            { start_timestamp: a } = e;
        if (!a) return;
        (e.data || {})[i.ju] || y.setAttribute(i.ju, p), n.kg.log(`[Tracing] Idle span "${e.op}" finished`);
        let r = (0, E.Dp)(y).filter((t) => t !== y),
            _ = 0;
        r.forEach((e) => {
            e.isRecording() &&
                (e.setStatus({
                    code: u.jt,
                    message: 'cancelled'
                }),
                e.end(t),
                o.X && n.kg.log('[Tracing] Cancelling span since span ended early', JSON.stringify(e, void 0, 2)));
            let { timestamp: a = 0, start_timestamp: r = 0 } = (0, E.XU)(e),
                i = r <= t,
                c = a - r <= (h + L) / 1000;
            if (o.X) {
                let t = JSON.stringify(e, void 0, 2);
                i ? c || n.kg.log('[Tracing] Discarding span since it finished after idle span final timeout', t) : n.kg.log('[Tracing] Discarding span since it happened after idle span was finished', t);
            }
            (!c || !i) && ((0, E.ed)(y, e), _++);
        }),
            _ > 0 && y.setAttribute('sentry.idle_span_discarded_spans', _);
    }
    return (
        (y.end = new Proxy(y.end, {
            apply(t, e, a) {
                D && D(y);
                let [n, ..._] = a,
                    o = n || (0, r.ph)(),
                    i = (0, E.$k)(o),
                    c = (0, E.Dp)(y).filter((t) => t !== y);
                if (!c.length) return G(i), Reflect.apply(t, e, [i, ..._]);
                let s = c.map((t) => (0, E.XU)(t).timestamp).filter((t) => !!t),
                    l = s.length ? Math.max(...s) : void 0,
                    u = (0, E.XU)(y).start_timestamp,
                    I = Math.min(u ? u + h / 1000 : 1 / 0, Math.max(u || -1 / 0, Math.min(i, l || 1 / 0)));
                return G(I), Reflect.apply(t, e, [I, ..._]);
            }
        })),
        T.push(
            g.on('spanStart', (t) => {
                var e;
                f || t === y || (0, E.XU)(t).timestamp || ((0, E.Dp)(y).includes(t) && ((e = t.spanContext().spanId), v(), A.set(e, !0), S((0, r.ph)() + O / 1000)));
            })
        ),
        T.push(
            g.on('spanEnd', (t) => {
                if (!f) {
                    var e;
                    (e = t.spanContext().spanId), A.has(e) && A.delete(e), 0 === A.size && C((0, r.ph)() + L / 1000);
                }
            })
        ),
        T.push(
            g.on('idleSpanEnableAutoFinish', (t) => {
                t === y && ((N = !0), C(), A.size && S());
            })
        ),
        e.disableAutoFinish || C(),
        setTimeout(() => {
            f ||
                (y.setStatus({
                    code: u.jt,
                    message: 'deadline_exceeded'
                }),
                (p = 'finalTimeout'),
                y.end());
        }, h),
        y
    );
}
