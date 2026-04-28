l.d(e, { bx: () => o, ck: () => a, e0: () => c });
var n = l(627968),
    r = l(64700),
    i = l(340287);
let [s, a] = (0, l(786300).A)(),
    c = (t) => {
        let { children: e } = t,
            [l, i] = r.useState(null),
            [a, c] = r.useState({}),
            o = r.useMemo(
                () => ({
                    setCheckoutFooterContentNode: i,
                    checkoutFooterContentNode: l,
                    checkoutHeaderConfigs: a,
                    setCheckoutHeaderConfigs: c,
                }),
                [l, i, a, c],
            );
        return (0, n.jsx)(s.Provider, { value: o, children: e });
    };
function o(t) {
    let { children: e } = t,
        { checkoutFooterContentNode: l } = a();
    return null == l ? null : i.createPortal(e, l);
}
