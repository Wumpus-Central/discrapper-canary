_.d(e, {
    A: () => N,
    R: () => A,
});
var a = _(101284),
    r = _(622916),
    n = _(263449),
    o = _(255768),
    E = _(988097),
    i = _(73453),
    c = _(99342),
    s = _(696486),
    l = _(789112),
    I = _(793373),
    R = _(152228);
let N = {
    idleTimeout: 1000,
    finalTimeout: 30000,
    childSpanTimeout: 15000,
};
function A(t, e = {}) {
    let _,
        u = new Map(),
        T = !1,
        d = "externalFinish",
        f = !e.disableAutoFinish,
        O = [],
        {
            idleTimeout: L = N.idleTimeout,
            finalTimeout: p = N.finalTimeout,
            childSpanTimeout: C = N.childSpanTimeout,
            beforeSpanEnd: P,
        } = e,
        h = (0, n.s3)();
    if (!h || !(0, i.z)()) return new l.b();
    let D = (0, n.nZ)(),
        S = (0, s.HN)(),
        g = (function (t) {
            let e = (0, R.qp)(t);
            return (0, c.D)((0, n.nZ)(), e), o.X && r.kg.log("[Tracing] Started span is an idle span"), e;
        })(t);
    function y() {
        _ && (clearTimeout(_), (_ = void 0));
    }
    function m(t) {
        y(),
            (_ = setTimeout(() => {
                !T && 0 === u.size && f && ((d = "idleTimeout"), g.end(t));
            }, L));
    }
    function G(t) {
        _ = setTimeout(() => {
            !T && f && ((d = "heartbeatFailed"), g.end(t));
        }, C);
    }
    function v(t) {
        (T = !0), u.clear(), O.forEach((t) => t()), (0, c.D)(D, S);
        let e = (0, s.XU)(g),
            { start_timestamp: _ } = e;
        if (!_) return;
        (e.data || {})[E.ju] || g.setAttribute(E.ju, d), r.kg.log(`[Tracing] Idle span "${e.op}" finished`);
        let a = (0, s.Dp)(g).filter((t) => t !== g),
            n = 0;
        a.forEach((e) => {
            e.isRecording() &&
                (e.setStatus({
                    code: I.jt,
                    message: "cancelled",
                }),
                e.end(t),
                o.X && r.kg.log("[Tracing] Cancelling span since span ended early", JSON.stringify(e, void 0, 2)));
            let { timestamp: _ = 0, start_timestamp: a = 0 } = (0, s.XU)(e),
                E = a <= t,
                i = _ - a <= (p + L) / 1000;
            if (o.X) {
                let t = JSON.stringify(e, void 0, 2);
                E
                    ? i || r.kg.log("[Tracing] Discarding span since it finished after idle span final timeout", t)
                    : r.kg.log("[Tracing] Discarding span since it happened after idle span was finished", t);
            }
            (!i || !E) && ((0, s.ed)(g, e), n++);
        }),
            n > 0 && g.setAttribute("sentry.idle_span_discarded_spans", n);
    }
    return (
        (g.end = new Proxy(g.end, {
            apply(t, e, _) {
                P && P(g);
                let [r, ...n] = _,
                    o = r || (0, a.ph)(),
                    E = (0, s.$k)(o),
                    i = (0, s.Dp)(g).filter((t) => t !== g);
                if (!i.length) return v(E), Reflect.apply(t, e, [E, ...n]);
                let c = i.map((t) => (0, s.XU)(t).timestamp).filter((t) => !!t),
                    l = c.length ? Math.max(...c) : void 0,
                    I = (0, s.XU)(g).start_timestamp,
                    R = Math.min(I ? I + p / 1000 : 1 / 0, Math.max(I || -1 / 0, Math.min(E, l || 1 / 0)));
                return v(R), Reflect.apply(t, e, [R, ...n]);
            },
        })),
        O.push(
            h.on("spanStart", (t) => {
                var e;
                T ||
                    t === g ||
                    (0, s.XU)(t).timestamp ||
                    ((0, s.Dp)(g).includes(t) &&
                        ((e = t.spanContext().spanId), y(), u.set(e, !0), G((0, a.ph)() + C / 1000)));
            }),
        ),
        O.push(
            h.on("spanEnd", (t) => {
                if (!T) {
                    var e;
                    (e = t.spanContext().spanId), u.has(e) && u.delete(e), 0 === u.size && m((0, a.ph)() + L / 1000);
                }
            }),
        ),
        O.push(
            h.on("idleSpanEnableAutoFinish", (t) => {
                t === g && ((f = !0), m(), u.size && G());
            }),
        ),
        e.disableAutoFinish || m(),
        setTimeout(() => {
            T ||
                (g.setStatus({
                    code: I.jt,
                    message: "deadline_exceeded",
                }),
                (d = "finalTimeout"),
                g.end());
        }, p),
        g
    );
}
