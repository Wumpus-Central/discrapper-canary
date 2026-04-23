"use strict";
n.d(t, { bx: () => u, ck: () => o, e0: () => l });
var r = n(627968),
    i = n(64700),
    s = n(340287);
let [a, o] = (0, n(786300).A)(),
    l = (e) => {
        let { children: t } = e,
            [n, s] = i.useState(null),
            [o, l] = i.useState({}),
            u = i.useMemo(
                () => ({
                    setCheckoutFooterContentNode: s,
                    checkoutFooterContentNode: n,
                    checkoutHeaderConfigs: o,
                    setCheckoutHeaderConfigs: l,
                }),
                [n, s, o, l],
            );
        return (0, r.jsx)(a.Provider, { value: u, children: t });
    };
function u(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: n } = o();
    return null == n ? null : s.createPortal(t, n);
}
