"use strict";
n.d(t, { bx: () => u, ck: () => o, e0: () => l });
var r = n(627968),
    i = n(64700),
    a = n(340287);
let [s, o] = (0, n(786300).A)(),
    l = (e) => {
        let { children: t } = e,
            [n, a] = i.useState(null),
            [o, l] = i.useState({}),
            u = i.useMemo(
                () => ({
                    setCheckoutFooterContentNode: a,
                    checkoutFooterContentNode: n,
                    checkoutHeaderConfigs: o,
                    setCheckoutHeaderConfigs: l,
                }),
                [n, a, o, l],
            );
        return (0, r.jsx)(s.Provider, { value: u, children: t });
    };
function u(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: n } = o();
    return null == n ? null : a.createPortal(t, n);
}
