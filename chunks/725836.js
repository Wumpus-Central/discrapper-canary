n.d(t, { I6: () => s, UY: () => a, bx: () => b, ck: () => h, e0: () => u, gw: () => o });
var i = n(477900),
    d = n(582128),
    r = n(333007);
let [l, h] = (0, n(786300).A)();
function u(e) {
    let { children: t } = e,
        [n, r] = d.useState(null),
        [h, u] = d.useState(null),
        [a, b] = d.useState(null),
        o = d.useMemo(
            () => ({
                setCheckoutFooterContentNode: r,
                checkoutFooterContentNode: n,
                checkoutHeaderElementNode: h,
                setCheckoutHeaderElementNode: u,
                checkoutFooterLineItemNode: a,
                setCheckoutFooterLineItemNode: b,
            }),
            [n, r, h, u, a, b],
        );
    return (0, i.jsx)(l.Provider, { value: o, children: t });
}
function a(e) {
    let { children: t } = e,
        { checkoutHeaderElementNode: n } = h();
    return null == n ? null : r.createPortal(t, n);
}
function b(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: n } = h();
    return null == n ? null : r.createPortal(t, n);
}
function o(e) {
    let { children: t } = e,
        { checkoutFooterLineItemNode: n } = h();
    return null == n ? null : r.createPortal(t, n);
}
function s() {
    let e = d.useContext(l);
    return null == e ? null : e.checkoutFooterLineItemNode;
}
