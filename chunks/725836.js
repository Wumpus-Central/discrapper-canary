"use strict";
r.d(t, { bx: () => c, ck: () => l, e0: () => o });
var i = r(627968),
    a = r(64700),
    n = r(340287);
let [s, l] = (0, r(786300).A)(),
    o = (e) => {
        let { children: t } = e,
            [r, n] = a.useState(null),
            [l, o] = a.useState({}),
            c = a.useMemo(
                () => ({
                    setCheckoutFooterContentNode: n,
                    checkoutFooterContentNode: r,
                    checkoutHeaderConfigs: l,
                    setCheckoutHeaderConfigs: o,
                }),
                [r, n, l, o],
            );
        return (0, i.jsx)(s.Provider, { value: c, children: t });
    };
function c(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: r } = l();
    return null == r ? null : n.createPortal(t, r);
}
