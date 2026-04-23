n.d(t, { bx: () => d, ck: () => l, e0: () => s });
var r = n(627968),
    a = n(64700),
    i = n(340287);
let [o, l] = (0, n(786300).A)(),
    s = (e) => {
        let { children: t } = e,
            [n, i] = a.useState(null),
            [l, s] = a.useState({}),
            d = a.useMemo(
                () => ({
                    setCheckoutFooterContentNode: i,
                    checkoutFooterContentNode: n,
                    checkoutHeaderConfigs: l,
                    setCheckoutHeaderConfigs: s,
                }),
                [n, i, l, s],
            );
        return (0, r.jsx)(o.Provider, { value: d, children: t });
    };
function d(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: n } = l();
    return null == n ? null : i.createPortal(t, n);
}
