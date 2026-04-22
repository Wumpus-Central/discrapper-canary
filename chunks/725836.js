n.d(t, { bx: () => u, ck: () => s, e0: () => o });
var l = n(627968),
    i = n(64700),
    a = n(340287);
let [r, s] = (0, n(786300).A)(),
    o = (e) => {
        let { children: t } = e,
            [n, a] = i.useState(null),
            [s, o] = i.useState({}),
            u = i.useMemo(
                () => ({
                    setCheckoutFooterContentNode: a,
                    checkoutFooterContentNode: n,
                    checkoutHeaderConfigs: s,
                    setCheckoutHeaderConfigs: o,
                }),
                [n, a, s, o],
            );
        return (0, l.jsx)(r.Provider, { value: u, children: t });
    };
function u(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: n } = s();
    return null == n ? null : a.createPortal(t, n);
}
