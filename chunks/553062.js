a.d(e, {
    A: () => R,
    R: () => d,
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
    childSpanTimeout: 15000,
};
function d(t, e = {}) {
    let a,
        N = new Map(),
        A = !1,
        T = "externalFinish",
        f = !e.disableAutoFinish,
        L = [],
        {
            idleTimeout: p = R.idleTimeout,
            finalTimeout: h = R.finalTimeout,
            childSpanTimeout: O = R.childSpanTimeout,
            beforeSpanEnd: P,
        } = e,
        g = (0, n.s3)();
    if (!g || !(0, c.z)()) return new l.b();
    let D = (0, n.nZ)(),
        C = (0, s.HN)(),
        m = (function (t) {
            let e = (0, u.qp)(t);
            return (0, E.D)((0, n.nZ)(), e), o.X && _.kg.log("[Tracing] Started span is an idle span"), e;
        })(t);
    function v() {
        a && (clearTimeout(a), (a = void 0));
    }
    function S(t) {
        v(),
            (a = setTimeout(() => {
                !A && 0 === N.size && f && ((T = "idleTimeout"), m.end(t));
            }, p));
    }
    function y(t) {
        a = setTimeout(() => {
            !A && f && ((T = "heartbeatFailed"), m.end(t));
        }, O);
    }
    function U(t) {
        (A = !0), N.clear(), L.forEach((t) => t()), (0, E.D)(D, C);
        let e = (0, s.XU)(m),
            { start_timestamp: a } = e;
        if (!a) return;
        (e.data || {})[i.ju] || m.setAttribute(i.ju, T), _.kg.log(`[Tracing] Idle span "${e.op}" finished`);
        let r = (0, s.Dp)(m).filter((t) => t !== m),
            n = 0;
        r.forEach((e) => {
            e.isRecording() &&
                (e.setStatus({
                    code: I.jt,
                    message: "cancelled",
                }),
                e.end(t),
                o.X && _.kg.log("[Tracing] Cancelling span since span ended early", JSON.stringify(e, void 0, 2)));
            let { timestamp: a = 0, start_timestamp: r = 0 } = (0, s.XU)(e),
                i = r <= t,
                c = a - r <= (h + p) / 1000;
            if (o.X) {
                let t = JSON.stringify(e, void 0, 2);
                i
                    ? c || _.kg.log("[Tracing] Discarding span since it finished after idle span final timeout", t)
                    : _.kg.log("[Tracing] Discarding span since it happened after idle span was finished", t);
            }
            (!c || !i) && ((0, s.ed)(m, e), n++);
        }),
            n > 0 && m.setAttribute("sentry.idle_span_discarded_spans", n);
    }
    return (
        (m.end = new Proxy(m.end, {
            apply(t, e, a) {
                P && P(m);
                let [_, ...n] = a,
                    o = _ || (0, r.ph)(),
                    i = (0, s.$k)(o),
                    c = (0, s.Dp)(m).filter((t) => t !== m);
                if (!c.length) return U(i), Reflect.apply(t, e, [i, ...n]);
                let E = c.map((t) => (0, s.XU)(t).timestamp).filter((t) => !!t),
                    l = E.length ? Math.max(...E) : void 0,
                    I = (0, s.XU)(m).start_timestamp,
                    u = Math.min(I ? I + h / 1000 : 1 / 0, Math.max(I || -1 / 0, Math.min(i, l || 1 / 0)));
                return U(u), Reflect.apply(t, e, [u, ...n]);
            },
        })),
        L.push(
            g.on("spanStart", (t) => {
                var e;
                A ||
                    t === m ||
                    (0, s.XU)(t).timestamp ||
                    ((0, s.Dp)(m).includes(t) &&
                        ((e = t.spanContext().spanId), v(), N.set(e, !0), y((0, r.ph)() + O / 1000)));
            }),
        ),
        L.push(
            g.on("spanEnd", (t) => {
                if (!A) {
                    var e;
                    (e = t.spanContext().spanId), N.has(e) && N.delete(e), 0 === N.size && S((0, r.ph)() + p / 1000);
                }
            }),
        ),
        L.push(
            g.on("idleSpanEnableAutoFinish", (t) => {
                t === m && ((f = !0), S(), N.size && y());
            }),
        ),
        e.disableAutoFinish || S(),
        setTimeout(() => {
            A ||
                (m.setStatus({
                    code: I.jt,
                    message: "deadline_exceeded",
                }),
                (T = "finalTimeout"),
                m.end());
        }, h),
        m
    );
}
