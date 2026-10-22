l.d(t, { H: () => o, J: () => i });
var n = l(477900),
    r = l(582128);
let a = (0, r.createContext)(null);
function i(e) {
    let { navigateToStorefrontPage: t, viewProductDetails: l, children: i } = e,
        o = r.useMemo(() => ({ navigateToStorefrontPage: t, viewProductDetails: l }), [t, l]);
    return (0, n.jsx)(a.Provider, { value: o, children: i });
}
function o() {
    let e = (0, r.useContext)(a);
    return { navigateToStorefrontPage: e?.navigateToStorefrontPage, viewProductDetails: e?.viewProductDetails };
}
