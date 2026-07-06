t.d(n, { bx: () => o, ck: () => a, e0: () => c });
var l = t(627968),
    r = t(64700),
    i = t(340287);
let [s, a] = (0, t(786300).A)();
function c(e) {
    let { children: n } = e,
        [t, i] = r.useState(null),
        [a, c] = r.useState({}),
        o = r.useMemo(
            () => ({
                setCheckoutFooterContentNode: i,
                checkoutFooterContentNode: t,
                checkoutHeaderConfigs: a,
                setCheckoutHeaderConfigs: c,
            }),
            [t, i, a, c],
        );
    return (0, l.jsx)(s.Provider, { value: o, children: n });
}
function o(e) {
    let { children: n } = e,
        { checkoutFooterContentNode: t } = a();
    return null == t ? null : i.createPortal(n, t);
}
