"use strict";
n.d(t, { P: () => u });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(444927),
    o = n(38405),
    l = n(94420);
function u(e) {
    let { loadId: t, discoverySessionId: n, children: u } = e,
        c = (0, a.A)(() => {
            let e = t ?? (0, s.A)();
            return (
                o.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: n, startTime: Date.now() }
            );
        }),
        [d] = r.useState(() => (0, l.y$)({ contextMetadata: c }));
    return (0, i.jsx)(l.Ni, { value: d, children: u });
}
