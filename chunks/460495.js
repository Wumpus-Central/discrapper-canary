"use strict";
n.d(t, { P: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(444927),
    o = n(38405),
    l = n(166532),
    u = n(615310),
    c = n(94420);
function d() {
    return (
        !(function () {
            let e = (0, u.bB)(),
                { purchaseState: t, setPurchaseState: n } = (0, c.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, l.zT)(e, t, n);
        })(),
        null
    );
}
function _(e) {
    let { loadId: t, discoverySessionId: n, children: l } = e,
        u = (0, a.A)(() => {
            let e = t ?? (0, s.A)();
            return (
                o.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: n, startTime: Date.now() }
            );
        }),
        [_] = r.useState(() => (0, c.y$)({ contextMetadata: u }));
    return (0, i.jsxs)(c.Ni, { value: _, children: [(0, i.jsx)(d, {}), l] });
}
