var r = n(143803),
    i = n(75109),
    o = n(128377),
    a = n(690094),
    s = n(978862);
function l() {
    let e = (0, i.E)();
    return (0, r.h)(e).getCurrentScope();
}
n.d(
    t,
    {},
    {
        KU: function () {
            return l().getClient();
        },
        m6: function () {
            return (0, s.B)("globalScope", () => new o.H());
        },
        o5: l,
        rB: function (...e) {
            let t = (0, i.E)(),
                n = (0, r.h)(t);
            if (2 === e.length) {
                let [t, r] = e;
                return t ? n.withSetIsolationScope(t, r) : n.withIsolationScope(r);
            }
            return n.withIsolationScope(e[0]);
        },
        rm: function () {
            let e = (0, i.E)();
            return (0, r.h)(e).getIsolationScope();
        },
        v4: function (...e) {
            let t = (0, i.E)(),
                n = (0, r.h)(t);
            if (2 === e.length) {
                let [t, r] = e;
                return t ? n.withSetScope(t, r) : n.withScope(r);
            }
            return n.withScope(e[0]);
        },
        vn: function (e) {
            let { traceId: t, spanId: n, parentSpanId: r } = e.getPropagationContext();
            return (0, a.Ce)({ trace_id: t, span_id: n, parent_span_id: r });
        },
    },
);
