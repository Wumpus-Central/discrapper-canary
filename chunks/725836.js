n.d(t, { bx: () => d, ck: () => i, e0: () => c });
var l = n(627968),
    r = n(64700),
    a = n(340287);
let [s, i] = (0, n(786300).A)(),
    c = (e) => {
        let { children: t } = e,
            [n, a] = r.useState(null),
            [i, c] = r.useState({}),
            d = r.useMemo(
                () => ({
                    setCheckoutFooterContentNode: a,
                    checkoutFooterContentNode: n,
                    checkoutHeaderConfigs: i,
                    setCheckoutHeaderConfigs: c,
                }),
                [n, a, i, c],
            );
        return (0, l.jsx)(s.Provider, { value: d, children: t });
    };
function d(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: n } = i();
    return null == n ? null : a.createPortal(t, n);
}
