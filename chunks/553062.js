a.d(e, {
    A: () => R,
    R: () => A
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
    I = a(793373),
    u = a(152228);
let R = {
    idleTimeout: 1000,
    finalTimeout: 30000,
    childSpanTimeout: 15000
};
function A(t, e = {}) {
    let a,
        T = new Map(),
        N = !1,
        d = 'externalFinish',
        L = !e.disableAutoFinish,
        p = [],
        { idleTimeout: f = R.idleTimeout, finalTimeout: O = R.finalTimeout, childSpanTimeout: h = R.childSpanTimeout, beforeSpanEnd: D } = e,
        P = (0, n.s3)();
    if (!P || !(0, c.z)()) return new l.b();
    let g = (0, n.nZ)(),
        C = (0, s.HN)(),
        y = (function (t) {
            let e = (0, u.qp)(t);
            return (0, E.D)((0, n.nZ)(), e), o.X && _.kg.log('[Tracing] Started span is an idle span'), e;
        })(t);
    function m() {
        a && (clearTimeout(a), (a = void 0));
    }
    function v(t) {
        m(),
            (a = setTimeout(() => {
                !N && 0 === T.size && L && ((d = 'idleTimeout'), y.end(t));
            }, f));
    }
    function U(t) {
        a = setTimeout(() => {
            !N && L && ((d = 'heartbeatFailed'), y.end(t));
        }, h);
    }
    function S(t) {
        (N = !0), T.clear(), p.forEach((t) => t()), (0, E.D)(g, C);
        let e = (0, s.XU)(y),
            { start_timestamp: a } = e;
        if (!a) return;
        (e.data || {})[i.ju] || y.setAttribute(i.ju, d), _.kg.log(`[Tracing] Idle span "${e.op}" finished`);
        let r = (0, s.Dp)(y).filter((t) => t !== y),
            n = 0;
        r.forEach((e) => {
            e.isRecording() &&
                (e.setStatus({
                    code: I.jt,
                    message: 'cancelled'
                }),
                e.end(t),
                o.X && _.kg.log('[Tracing] Cancelling span since span ended early', JSON.stringify(e, void 0, 2)));
            let { timestamp: a = 0, start_timestamp: r = 0 } = (0, s.XU)(e),
                i = r <= t,
                c = a - r <= (O + f) / 1000;
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
                    I = (0, s.XU)(y).start_timestamp,
                    u = Math.min(I ? I + O / 1000 : 1 / 0, Math.max(I || -1 / 0, Math.min(i, l || 1 / 0)));
                return S(u), Reflect.apply(t, e, [u, ...n]);
            }
        })),
        p.push(
            P.on('spanStart', (t) => {
                var e;
                N || t === y || (0, s.XU)(t).timestamp || ((0, s.Dp)(y).includes(t) && ((e = t.spanContext().spanId), m(), T.set(e, !0), U((0, r.ph)() + h / 1000)));
            })
        ),
        p.push(
            P.on('spanEnd', (t) => {
                if (!N) {
                    var e;
                    (e = t.spanContext().spanId), T.has(e) && T.delete(e), 0 === T.size && v((0, r.ph)() + f / 1000);
                }
            })
        ),
        p.push(
            P.on('idleSpanEnableAutoFinish', (t) => {
                t === y && ((L = !0), v(), T.size && U());
            })
        ),
        e.disableAutoFinish || v(),
        setTimeout(() => {
            N ||
                (y.setStatus({
                    code: I.jt,
                    message: 'deadline_exceeded'
                }),
                (d = 'finalTimeout'),
                y.end());
        }, O),
        y
    );
}
