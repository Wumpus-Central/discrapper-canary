s.d(t, { A: () => i });
var n = s(477900),
    a = s(582128),
    l = s(174459);
function i(e) {
    let t = a.forwardRef((t, s) =>
        (0, n.jsx)(l.AnalyticsContext.Consumer, {
            children: (a) => (0, n.jsx)(e, { ...t, ref: s, analyticsContext: a }),
        }),
    );
    return ((t.displayName = `withAnalyticsContext(${e.displayName ?? e.name})`), t);
}
