n.d(t, { UY: () => u, bx: () => c, ck: () => s, e0: () => a });
var l = n(627968),
    r = n(64700),
    i = n(340287);
let [o, s] = (0, n(786300).A)();
function a(e) {
    let { children: t } = e,
        [n, i] = r.useState(null),
        [s, a] = r.useState(null),
        u = r.useMemo(
            () => ({
                setCheckoutFooterContentNode: i,
                checkoutFooterContentNode: n,
                checkoutHeaderElementNode: s,
                setCheckoutHeaderElementNode: a,
            }),
            [n, i, s, a],
        );
    return (0, l.jsx)(o.Provider, { value: u, children: t });
}
function u(e) {
    let { children: t } = e,
        { checkoutHeaderElementNode: n } = s();
    return null == n ? null : i.createPortal(t, n);
}
function c(e) {
    let { children: t } = e,
        { checkoutFooterContentNode: n } = s();
    return null == n ? null : i.createPortal(t, n);
}
