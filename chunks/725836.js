n.d(t, { I6: () => f, UY: () => c, bx: () => s, ck: () => o, e0: () => i, gw: () => d });
var r = n(477900),
    l = n(582128),
    u = n(333007);
let [a, o] = (0, n(786300).A)();
function i(e) {
    let { children: t } = e,
        [n, u] = l.useState(null),
        [o, i] = l.useState(null),
        [c, s] = l.useState(null),
        d = l.useMemo(
            () => ({
                setCheckoutFooterContentNode: u,
                checkoutFooterContentNode: n,
                checkoutHeaderElementNode: o,
                setCheckoutHeaderElementNode: i,
                checkoutFooterLineItemNode: c,
                setCheckoutFooterLineItemNode: s,
            }),
            [n, u, o, i, c, s],
        );
    return (0, r.jsx)(a.Provider, { value: d, children: t });
}
function c(e) {
    let { children: t } = e,
        { checkoutHeaderElementNode: n } = o();
    return null == n ? null : u.createPortal(t, n);
}
function s(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: n } = o();
    return null == n ? null : u.createPortal(t, n);
}
function d(e) {
    let { children: t } = e,
        { checkoutFooterLineItemNode: n } = o();
    return null == n ? null : u.createPortal(t, n);
}
function f() {
    let e = l.useContext(a);
    return null == e ? null : e.checkoutFooterLineItemNode;
}
