l.d(t, { I6: () => m, UY: () => u, bx: () => c, ck: () => i, e0: () => o, gw: () => d });
var n = l(477900),
    a = l(582128),
    r = l(333007);
let [s, i] = (0, l(786300).A)();
function o(e) {
    let { children: t } = e,
        [l, r] = a.useState(null),
        [i, o] = a.useState(null),
        [u, c] = a.useState(null),
        d = a.useMemo(
            () => ({
                setCheckoutFooterContentNode: r,
                checkoutFooterContentNode: l,
                checkoutHeaderElementNode: i,
                setCheckoutHeaderElementNode: o,
                checkoutFooterLineItemNode: u,
                setCheckoutFooterLineItemNode: c,
            }),
            [l, r, i, o, u, c],
        );
    return (0, n.jsx)(s.Provider, { value: d, children: t });
}
function u(e) {
    let { children: t } = e,
        { checkoutHeaderElementNode: l } = i();
    return null == l ? null : r.createPortal(t, l);
}
function c(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: l } = i();
    return null == l ? null : r.createPortal(t, l);
}
function d(e) {
    let { children: t } = e,
        { checkoutFooterLineItemNode: l } = i();
    return null == l ? null : r.createPortal(t, l);
}
function m() {
    let e = a.useContext(s);
    return null == e ? null : e.checkoutFooterLineItemNode;
}
