"use strict";
n.d(t, { A: () => a });
var l = n(627968),
    i = n(64700),
    s = n(954571);
function a(e) {
    let t = i.forwardRef((t, n) =>
        (0, l.jsx)(s.AnalyticsContext.Consumer, {
            children: (i) => (0, l.jsx)(e, { ...t, ref: n, analyticsContext: i }),
        }),
    );
    return (t.displayName = `withAnalyticsContext(${e.displayName ?? e.name})`), t;
}
