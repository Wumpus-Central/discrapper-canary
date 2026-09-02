n.d(t, { UY: () => a, bx: () => c, ck: () => s, e0: () => u });
var r = n(477900),
    l = n(582128),
    i = n(333007);
let [o, s] = (0, n(786300).A)();
function u(e) {
    let { children: t } = e,
        [n, i] = l.useState(null),
        [s, u] = l.useState(null),
        a = l.useMemo(
            () => ({
                setCheckoutFooterContentNode: i,
                checkoutFooterContentNode: n,
                checkoutHeaderElementNode: s,
                setCheckoutHeaderElementNode: u,
            }),
            [n, i, s, u],
        );
    return (0, r.jsx)(o.Provider, { value: a, children: t });
}
function a(e) {
    let { children: t } = e,
        { checkoutHeaderElementNode: n } = s();
    return null == n ? null : i.createPortal(t, n);
}
function c(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: n } = s();
    return null == n ? null : i.createPortal(t, n);
}
