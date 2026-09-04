n.d(t, { UY: () => u, bx: () => c, ck: () => a, e0: () => s });
var r = n(477900),
    l = n(582128),
    o = n(333007);
let [i, a] = (0, n(786300).A)();
function s(e) {
    let { children: t } = e,
        [n, o] = l.useState(null),
        [a, s] = l.useState(null),
        u = l.useMemo(
            () => ({
                setCheckoutFooterContentNode: o,
                checkoutFooterContentNode: n,
                checkoutHeaderElementNode: a,
                setCheckoutHeaderElementNode: s,
            }),
            [n, o, a, s],
        );
    return (0, r.jsx)(i.Provider, { value: u, children: t });
}
function u(e) {
    let { children: t } = e,
        { checkoutHeaderElementNode: n } = a();
    return null == n ? null : o.createPortal(t, n);
}
function c(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: n } = a();
    return null == n ? null : o.createPortal(t, n);
}
