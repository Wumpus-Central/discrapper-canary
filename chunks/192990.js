r.d(t, {
    A: () => I,
    R: () => p,
});
var n = r(343573),
    a = r(98076),
    i = r(509440),
    o = r(4757),
    _ = r(8062),
    s = r(451542),
    c = r(354023),
    E = r(82255),
    l = r(25855),
    u = r(366000),
    d = r(700868);
let I = {
    idleTimeout: 1000,
    finalTimeout: 30000,
    childSpanTimeout: 15000,
};
function p(e, t = {}) {
    let r,
        R = new Map(),
        T = !1,
        A = "externalFinish",
        N = !t.disableAutoFinish,
        f = [],
        {
            idleTimeout: O = I.idleTimeout,
            finalTimeout: h = I.finalTimeout,
            childSpanTimeout: D = I.childSpanTimeout,
            beforeSpanEnd: S,
        } = t,
        C = (0, i.s3)();
    if (!C || !(0, s.z)()) return new l.b();
    let L = (0, i.nZ)(),
        g = (0, E.HN)(),
        m = (function (e) {
            let t = (0, d.qp)(e);
            return (0, c.D)((0, i.nZ)(), t), o.X && a.kg.log("[Tracing] Started span is an idle span"), t;
        })(e);
    function y() {
        r && (clearTimeout(r), (r = void 0));
    }
    function P(e) {
        y(),
            (r = setTimeout(() => {
                !T && 0 === R.size && N && ((A = "idleTimeout"), m.end(e));
            }, O));
    }
    function v(e) {
        r = setTimeout(() => {
            !T && N && ((A = "heartbeatFailed"), m.end(e));
        }, D);
    }
    function w(e) {
        (T = !0), R.clear(), f.forEach((e) => e()), (0, c.D)(L, g);
        let t = (0, E.XU)(m),
            { start_timestamp: r } = t;
        if (!r) return;
        (t.data || {})[_.ju] || m.setAttribute(_.ju, A), a.kg.log(`[Tracing] Idle span "${t.op}" finished`);
        let n = (0, E.Dp)(m).filter((e) => e !== m),
            i = 0;
        n.forEach((t) => {
            t.isRecording() &&
                (t.setStatus({
                    code: u.jt,
                    message: "cancelled",
                }),
                t.end(e),
                o.X && a.kg.log("[Tracing] Cancelling span since span ended early", JSON.stringify(t, void 0, 2)));
            let { timestamp: r = 0, start_timestamp: n = 0 } = (0, E.XU)(t),
                _ = n <= e,
                s = r - n <= (h + O) / 1000;
            if (o.X) {
                let e = JSON.stringify(t, void 0, 2);
                _
                    ? s || a.kg.log("[Tracing] Discarding span since it finished after idle span final timeout", e)
                    : a.kg.log("[Tracing] Discarding span since it happened after idle span was finished", e);
            }
            (!s || !_) && ((0, E.ed)(m, t), i++);
        }),
            i > 0 && m.setAttribute("sentry.idle_span_discarded_spans", i);
    }
    return (
        (m.end = new Proxy(m.end, {
            apply(e, t, r) {
                S && S(m);
                let [a, ...i] = r,
                    o = a || (0, n.ph)(),
                    _ = (0, E.$k)(o),
                    s = (0, E.Dp)(m).filter((e) => e !== m);
                if (!s.length) return w(_), Reflect.apply(e, t, [_, ...i]);
                let c = s.map((e) => (0, E.XU)(e).timestamp).filter((e) => !!e),
                    l = c.length ? Math.max(...c) : void 0,
                    u = (0, E.XU)(m).start_timestamp,
                    d = Math.min(u ? u + h / 1000 : 1 / 0, Math.max(u || -1 / 0, Math.min(_, l || 1 / 0)));
                return w(d), Reflect.apply(e, t, [d, ...i]);
            },
        })),
        f.push(
            C.on("spanStart", (e) => {
                var t;
                T ||
                    e === m ||
                    (0, E.XU)(e).timestamp ||
                    ((0, E.Dp)(m).includes(e) &&
                        ((t = e.spanContext().spanId), y(), R.set(t, !0), v((0, n.ph)() + D / 1000)));
            }),
        ),
        f.push(
            C.on("spanEnd", (e) => {
                if (!T) {
                    var t;
                    (t = e.spanContext().spanId), R.has(t) && R.delete(t), 0 === R.size && P((0, n.ph)() + O / 1000);
                }
            }),
        ),
        f.push(
            C.on("idleSpanEnableAutoFinish", (e) => {
                e === m && ((N = !0), P(), R.size && v());
            }),
        ),
        t.disableAutoFinish || P(),
        setTimeout(() => {
            T ||
                (m.setStatus({
                    code: u.jt,
                    message: "deadline_exceeded",
                }),
                (A = "finalTimeout"),
                m.end());
        }, h),
        m
    );
}
