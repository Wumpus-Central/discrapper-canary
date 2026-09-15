l.d(t, { I6: () => m, UY: () => c, bx: () => d, ck: () => i, e0: () => u, gw: () => o });
var n = l(477900),
    s = l(582128),
    r = l(333007);
let [a, i] = (0, l(786300).A)();
function u(e) {
    let { children: t } = e,
        [l, r] = s.useState(null),
        [i, u] = s.useState(null),
        [c, d] = s.useState(null),
        o = s.useMemo(
            () => ({
                setCheckoutFooterContentNode: r,
                checkoutFooterContentNode: l,
                checkoutHeaderElementNode: i,
                setCheckoutHeaderElementNode: u,
                checkoutFooterLineItemNode: c,
                setCheckoutFooterLineItemNode: d,
            }),
            [l, r, i, u, c, d],
        );
    return (0, n.jsx)(a.Provider, { value: o, children: t });
}
function c(e) {
    let { children: t } = e,
        { checkoutHeaderElementNode: l } = i();
    return null == l ? null : r.createPortal(t, l);
}
function d(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: l } = i();
    return null == l ? null : r.createPortal(t, l);
}
function o(e) {
    let { children: t } = e,
        { checkoutFooterLineItemNode: l } = i();
    return null == l ? null : r.createPortal(t, l);
}
function m() {
    let e = s.useContext(a);
    return null == e ? null : e.checkoutFooterLineItemNode;
}
