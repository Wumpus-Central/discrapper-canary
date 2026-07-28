"use strict";
n.d(t, { A: () => s });
var i = n(477900),
    r = n(582128),
    a = n(174459);
function s(e) {
    let t = r.forwardRef((t, n) =>
        (0, i.jsx)(a.AnalyticsContext.Consumer, {
            children: (r) => (0, i.jsx)(e, { ...t, ref: n, analyticsContext: r }),
        }),
    );
    return (t.displayName = `withAnalyticsContext(${e.displayName ?? e.name})`), t;
}
