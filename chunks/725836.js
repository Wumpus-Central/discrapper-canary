r.d(t, { bx: () => o, ck: () => u, e0: () => s });
var n = r(627968),
    a = r(64700),
    l = r(340287);
let [i, u] = (0, r(786300).A)(),
    s = (e) => {
        let { children: t } = e,
            [r, l] = a.useState(null),
            [u, s] = a.useState({}),
            o = a.useMemo(
                () => ({
                    setCheckoutFooterContentNode: l,
                    checkoutFooterContentNode: r,
                    checkoutHeaderConfigs: u,
                    setCheckoutHeaderConfigs: s,
                }),
                [r, l, u, s],
            );
        return (0, n.jsx)(i.Provider, { value: o, children: t });
    };
function o(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: r } = u();
    return null == r ? null : l.createPortal(t, r);
}
