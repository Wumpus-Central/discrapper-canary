l.d(t, { I6: () => m, UY: () => u, bx: () => c, ck: () => i, e0: () => o, gw: () => d });
var n = l(477900),
    r = l(582128),
    a = l(333007);
let [s, i] = (0, l(786300).A)();
function o(e) {
    let { children: t } = e,
        [l, a] = r.useState(null),
        [i, o] = r.useState(null),
        [u, c] = r.useState(null),
        d = r.useMemo(
            () => ({
                setCheckoutFooterContentNode: a,
                checkoutFooterContentNode: l,
                checkoutHeaderElementNode: i,
                setCheckoutHeaderElementNode: o,
                checkoutFooterLineItemNode: u,
                setCheckoutFooterLineItemNode: c,
            }),
            [l, a, i, o, u, c],
        );
    return (0, n.jsx)(s.Provider, { value: d, children: t });
}
function u(e) {
    let { children: t } = e,
        { checkoutHeaderElementNode: l } = i();
    return null == l ? null : a.createPortal(t, l);
}
function c(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: l } = i();
    return null == l ? null : a.createPortal(t, l);
}
function d(e) {
    let { children: t } = e,
        { checkoutFooterLineItemNode: l } = i();
    return null == l ? null : a.createPortal(t, l);
}
function m() {
    let e = r.useContext(s);
    return null == e ? null : e.checkoutFooterLineItemNode;
}
