n.d(t, { UY: () => a, bx: () => c, ck: () => u, e0: () => s });
var l = n(477900),
    r = n(582128),
    i = n(333007);
let [o, u] = (0, n(786300).A)();
function s(e) {
    let { children: t } = e,
        [n, i] = r.useState(null),
        [u, s] = r.useState(null),
        a = r.useMemo(
            () => ({
                setCheckoutFooterContentNode: i,
                checkoutFooterContentNode: n,
                checkoutHeaderElementNode: u,
                setCheckoutHeaderElementNode: s,
            }),
            [n, i, u, s],
        );
    return (0, l.jsx)(o.Provider, { value: a, children: t });
}
function a(e) {
    let { children: t } = e,
        { checkoutHeaderElementNode: n } = u();
    return null == n ? null : i.createPortal(t, n);
}
function c(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: n } = u();
    return null == n ? null : i.createPortal(t, n);
}
