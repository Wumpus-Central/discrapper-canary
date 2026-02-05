"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    i = n(64700),
    a = n(954571);
function s(e) {
    let t = i.forwardRef((t, n) =>
        (0, r.jsx)(a.AnalyticsContext.Consumer, {
            children: (i) => (0, r.jsx)(e, { ...t, ref: n, analyticsContext: i }),
        }),
    );
    return (t.displayName = `withAnalyticsContext(${e.displayName ?? e.name})`), t;
}
