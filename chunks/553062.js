a.d(e, {
    A: () => u,
    R: () => A,
});
var r = a(101284),
    _ = a(622916),
    n = a(263449),
    o = a(255768),
    i = a(988097),
    E = a(73453),
    c = a(99342),
    s = a(696486),
    l = a(789112),
    I = a(793373),
    R = a(152228);
let u = {
    idleTimeout: 1000,
    finalTimeout: 30000,
    childSpanTimeout: 15000,
};
function A(t, e = {}) {
    let a,
        N = new Map(),
        T = !1,
        d = "externalFinish",
        f = !e.disableAutoFinish,
        L = [],
        {
            idleTimeout: p = u.idleTimeout,
            finalTimeout: O = u.finalTimeout,
            childSpanTimeout: h = u.childSpanTimeout,
            beforeSpanEnd: P,
        } = e,
        C = (0, n.s3)();
    if (!C || !(0, E.z)()) return new l.b();
    let D = (0, n.nZ)(),
        g = (0, s.HN)(),
        S = (function (t) {
            let e = (0, R.qp)(t);
            return (0, c.D)((0, n.nZ)(), e), o.X && _.kg.log("[Tracing] Started span is an idle span"), e;
        })(t);
    function m() {
        a && (clearTimeout(a), (a = void 0));
    }
    function v(t) {
        m(),
            (a = setTimeout(() => {
                !T && 0 === N.size && f && ((d = "idleTimeout"), S.end(t));
            }, p));
    }
    function y(t) {
        a = setTimeout(() => {
            !T && f && ((d = "heartbeatFailed"), S.end(t));
        }, h);
    }
    function U(t) {
        (T = !0), N.clear(), L.forEach((t) => t()), (0, c.D)(D, g);
        let e = (0, s.XU)(S),
            { start_timestamp: a } = e;
        if (!a) return;
        (e.data || {})[i.ju] || S.setAttribute(i.ju, d), _.kg.log(`[Tracing] Idle span "${e.op}" finished`);
        let r = (0, s.Dp)(S).filter((t) => t !== S),
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
                E = a - r <= (O + p) / 1000;
            if (o.X) {
                let t = JSON.stringify(e, void 0, 2);
                i
                    ? E || _.kg.log("[Tracing] Discarding span since it finished after idle span final timeout", t)
                    : _.kg.log("[Tracing] Discarding span since it happened after idle span was finished", t);
            }
            (!E || !i) && ((0, s.ed)(S, e), n++);
        }),
            n > 0 && S.setAttribute("sentry.idle_span_discarded_spans", n);
    }
    return (
        (S.end = new Proxy(S.end, {
            apply(t, e, a) {
                P && P(S);
                let [_, ...n] = a,
                    o = _ || (0, r.ph)(),
                    i = (0, s.$k)(o),
                    E = (0, s.Dp)(S).filter((t) => t !== S);
                if (!E.length) return U(i), Reflect.apply(t, e, [i, ...n]);
                let c = E.map((t) => (0, s.XU)(t).timestamp).filter((t) => !!t),
                    l = c.length ? Math.max(...c) : void 0,
                    I = (0, s.XU)(S).start_timestamp,
                    R = Math.min(I ? I + O / 1000 : 1 / 0, Math.max(I || -1 / 0, Math.min(i, l || 1 / 0)));
                return U(R), Reflect.apply(t, e, [R, ...n]);
            },
        })),
        L.push(
            C.on("spanStart", (t) => {
                var e;
                T ||
                    t === S ||
                    (0, s.XU)(t).timestamp ||
                    ((0, s.Dp)(S).includes(t) &&
                        ((e = t.spanContext().spanId), m(), N.set(e, !0), y((0, r.ph)() + h / 1000)));
            }),
        ),
        L.push(
            C.on("spanEnd", (t) => {
                if (!T) {
                    var e;
                    (e = t.spanContext().spanId), N.has(e) && N.delete(e), 0 === N.size && v((0, r.ph)() + p / 1000);
                }
            }),
        ),
        L.push(
            C.on("idleSpanEnableAutoFinish", (t) => {
                t === S && ((f = !0), v(), N.size && y());
            }),
        ),
        e.disableAutoFinish || v(),
        setTimeout(() => {
            T ||
                (S.setStatus({
                    code: I.jt,
                    message: "deadline_exceeded",
                }),
                (d = "finalTimeout"),
                S.end());
        }, O),
        S
    );
}
