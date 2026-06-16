"use strict";
n.d(t, { bx: () => u, ck: () => o, e0: () => l });
var i = n(627968),
    r = n(64700),
    s = n(340287);
let [a, o] = (0, n(786300).A)(),
    l = (e) => {
        let { children: t } = e,
            [n, s] = r.useState(null),
            [o, l] = r.useState({}),
            u = r.useMemo(
                () => ({
                    setCheckoutFooterContentNode: s,
                    checkoutFooterContentNode: n,
                    checkoutHeaderConfigs: o,
                    setCheckoutHeaderConfigs: l,
                }),
                [n, s, o, l],
            );
        return (0, i.jsx)(a.Provider, { value: u, children: t });
    };
function u(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: n } = o();
    return null == n ? null : s.createPortal(t, n);
}
