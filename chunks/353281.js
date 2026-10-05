t.d(l, { H: () => s, J: () => i });
var n = t(477900),
    r = t(582128);
let a = (0, r.createContext)(null);
function i(e) {
    let { navigateToStorefrontPage: l, viewProductDetails: t, children: i } = e,
        s = r.useMemo(() => ({ navigateToStorefrontPage: l, viewProductDetails: t }), [l, t]);
    return (0, n.jsx)(a.Provider, { value: s, children: i });
}
function s() {
    let e = (0, r.useContext)(a);
    return { navigateToStorefrontPage: e?.navigateToStorefrontPage, viewProductDetails: e?.viewProductDetails };
}
