"use strict";
n.d(t, { A: () => r });
var l = n(477900),
    i = n(582128),
    s = n(174459);
function r(e) {
    let t = i.forwardRef((t, n) =>
        (0, l.jsx)(s.AnalyticsContext.Consumer, {
            children: (i) => (0, l.jsx)(e, { ...t, ref: n, analyticsContext: i }),
        }),
    );
    return (t.displayName = `withAnalyticsContext(${e.displayName ?? e.name})`), t;
}
