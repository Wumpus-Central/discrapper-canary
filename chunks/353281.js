t.d(l, { H: () => s, J: () => i });
var r = t(477900),
    n = t(582128);
let a = (0, n.createContext)(null);
function i(e) {
    let { navigateToStorefrontPage: l, viewProductDetails: t, children: i } = e,
        s = n.useMemo(() => ({ navigateToStorefrontPage: l, viewProductDetails: t }), [l, t]);
    return (0, r.jsx)(a.Provider, { value: s, children: i });
}
function s() {
    let e = (0, n.useContext)(a);
    return { navigateToStorefrontPage: e?.navigateToStorefrontPage, viewProductDetails: e?.viewProductDetails };
}
