n.d(t, {
    A: () => p,
    R: () => f,
});
var r = n(343573),
    i = n(98076),
    a = n(509440),
    o = n(4757),
    _ = n(8062),
    s = n(451542),
    c = n(354023),
    E = n(82255),
    l = n(25855),
    u = n(366000),
    d = n(700868);
let p = {
    idleTimeout: 1000,
    finalTimeout: 30000,
    childSpanTimeout: 15000,
};
function f(e, t = {}) {
    let n,
        I = new Map(),
        T = !1,
        R = "externalFinish",
        A = !t.disableAutoFinish,
        N = [],
        {
            idleTimeout: h = p.idleTimeout,
            finalTimeout: O = p.finalTimeout,
            childSpanTimeout: S = p.childSpanTimeout,
            beforeSpanEnd: L,
        } = t,
        g = (0, a.s3)();
    if (!g || !(0, s.z)()) return new l.b();
    let m = (0, a.nZ)(),
        D = (0, E.HN)(),
        C = (function (e) {
            let t = (0, d.qp)(e);
            return (0, c.D)((0, a.nZ)(), t), o.X && i.kg.log("[Tracing] Started span is an idle span"), t;
        })(e);
    function y() {
        n && (clearTimeout(n), (n = void 0));
    }
    function P(e) {
        y(),
            (n = setTimeout(() => {
                !T && 0 === I.size && A && ((R = "idleTimeout"), C.end(e));
            }, h));
    }
    function v(e) {
        n = setTimeout(() => {
            !T && A && ((R = "heartbeatFailed"), C.end(e));
        }, S);
    }
    function b(e) {
        (T = !0), I.clear(), N.forEach((e) => e()), (0, c.D)(m, D);
        let t = (0, E.XU)(C),
            { start_timestamp: n } = t;
        if (!n) return;
        (t.data || {})[_.ju] || C.setAttribute(_.ju, R), i.kg.log(`[Tracing] Idle span "${t.op}" finished`);
        let r = (0, E.Dp)(C).filter((e) => e !== C),
            a = 0;
        r.forEach((t) => {
            t.isRecording() &&
                (t.setStatus({
                    code: u.jt,
                    message: "cancelled",
                }),
                t.end(e),
                o.X && i.kg.log("[Tracing] Cancelling span since span ended early", JSON.stringify(t, void 0, 2)));
            let { timestamp: n = 0, start_timestamp: r = 0 } = (0, E.XU)(t),
                _ = r <= e,
                s = n - r <= (O + h) / 1000;
            if (o.X) {
                let e = JSON.stringify(t, void 0, 2);
                _
                    ? s || i.kg.log("[Tracing] Discarding span since it finished after idle span final timeout", e)
                    : i.kg.log("[Tracing] Discarding span since it happened after idle span was finished", e);
            }
            (!s || !_) && ((0, E.ed)(C, t), a++);
        }),
            a > 0 && C.setAttribute("sentry.idle_span_discarded_spans", a);
    }
    return (
        (C.end = new Proxy(C.end, {
            apply(e, t, n) {
                L && L(C);
                let [i, ...a] = n,
                    o = i || (0, r.ph)(),
                    _ = (0, E.$k)(o),
                    s = (0, E.Dp)(C).filter((e) => e !== C);
                if (!s.length) return b(_), Reflect.apply(e, t, [_, ...a]);
                let c = s.map((e) => (0, E.XU)(e).timestamp).filter((e) => !!e),
                    l = c.length ? Math.max(...c) : void 0,
                    u = (0, E.XU)(C).start_timestamp,
                    d = Math.min(u ? u + O / 1000 : 1 / 0, Math.max(u || -1 / 0, Math.min(_, l || 1 / 0)));
                return b(d), Reflect.apply(e, t, [d, ...a]);
            },
        })),
        N.push(
            g.on("spanStart", (e) => {
                var t;
                T ||
                    e === C ||
                    (0, E.XU)(e).timestamp ||
                    ((0, E.Dp)(C).includes(e) &&
                        ((t = e.spanContext().spanId), y(), I.set(t, !0), v((0, r.ph)() + S / 1000)));
            }),
        ),
        N.push(
            g.on("spanEnd", (e) => {
                if (!T) {
                    var t;
                    (t = e.spanContext().spanId), I.has(t) && I.delete(t), 0 === I.size && P((0, r.ph)() + h / 1000);
                }
            }),
        ),
        N.push(
            g.on("idleSpanEnableAutoFinish", (e) => {
                e === C && ((A = !0), P(), I.size && v());
            }),
        ),
        t.disableAutoFinish || P(),
        setTimeout(() => {
            T ||
                (C.setStatus({
                    code: u.jt,
                    message: "deadline_exceeded",
                }),
                (R = "finalTimeout"),
                C.end());
        }, O),
        C
    );
}
