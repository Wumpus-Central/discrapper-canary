s.d(t, { A: () => l });
var n = s(477900);
s(582128);
var a = s(174459);
function l(e) {
    let t = (t) => {
        let { ref: s, ...l } = t;
        return (0, n.jsx)(a.AnalyticsContext.Consumer, {
            children: (t) => (0, n.jsx)(e, { ...l, ref: s, analyticsContext: t }),
        });
    };
    return ((t.displayName = `withAnalyticsContext(${e.displayName ?? e.name})`), t);
}
