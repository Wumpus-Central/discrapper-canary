n.d(t, { I6: () => m, UY: () => c, bx: () => d, ck: () => i, e0: () => o, gw: () => u });
var l = n(477900),
    r = n(582128),
    s = n(333007);
let [a, i] = (0, n(786300).A)();
function o(e) {
    let { children: t } = e,
        [n, s] = r.useState(null),
        [i, o] = r.useState(null),
        [c, d] = r.useState(null),
        u = r.useMemo(
            () => ({
                setCheckoutFooterContentNode: s,
                checkoutFooterContentNode: n,
                checkoutHeaderElementNode: i,
                setCheckoutHeaderElementNode: o,
                checkoutFooterLineItemNode: c,
                setCheckoutFooterLineItemNode: d,
            }),
            [n, s, i, o, c, d],
        );
    return (0, l.jsx)(a.Provider, { value: u, children: t });
}
function c(e) {
    let { children: t } = e,
        { checkoutHeaderElementNode: n } = i();
    return null == n ? null : s.createPortal(t, n);
}
function d(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: n } = i();
    return null == n ? null : s.createPortal(t, n);
}
function u(e) {
    let { children: t } = e,
        { checkoutFooterLineItemNode: n } = i();
    return null == n ? null : s.createPortal(t, n);
}
function m() {
    let e = r.useContext(a);
    return null == e ? null : e.checkoutFooterLineItemNode;
}
