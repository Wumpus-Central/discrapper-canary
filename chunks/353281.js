t.d(l, { H: () => o, J: () => i });
var n = t(477900),
    r = t(582128);
let a = (0, r.createContext)(null);
function i(e) {
    let { navigateToStorefrontPage: l, viewProductDetails: t, children: i } = e,
        o = r.useMemo(() => ({ navigateToStorefrontPage: l, viewProductDetails: t }), [l, t]);
    return (0, n.jsx)(a.Provider, { value: o, children: i });
}
function o() {
    let e = (0, r.useContext)(a);
    return { navigateToStorefrontPage: e?.navigateToStorefrontPage, viewProductDetails: e?.viewProductDetails };
}
