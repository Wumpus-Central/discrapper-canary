n.d(t, { UY: () => u, bx: () => c, ck: () => a, e0: () => s });
var r = n(477900),
    l = n(582128),
    i = n(333007);
let [o, a] = (0, n(786300).A)();
function s(e) {
    let { children: t } = e,
        [n, i] = l.useState(null),
        [a, s] = l.useState(null),
        u = l.useMemo(
            () => ({
                setCheckoutFooterContentNode: i,
                checkoutFooterContentNode: n,
                checkoutHeaderElementNode: a,
                setCheckoutHeaderElementNode: s,
            }),
            [n, i, a, s],
        );
    return (0, r.jsx)(o.Provider, { value: u, children: t });
}
function u(e) {
    let { children: t } = e,
        { checkoutHeaderElementNode: n } = a();
    return null == n ? null : i.createPortal(t, n);
}
function c(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: n } = a();
    return null == n ? null : i.createPortal(t, n);
}
