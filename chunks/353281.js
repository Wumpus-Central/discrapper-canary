l.d(t, { H: () => s, J: () => i });
var r = l(477900),
    n = l(582128);
let a = (0, n.createContext)(null);
function i(e) {
    let { renderHeader: t, getSocialLayerStorefrontLink: l, children: i } = e,
        s = n.useMemo(() => ({ renderHeader: t, getSocialLayerStorefrontLink: l }), [t, l]);
    return (0, r.jsx)(a.Provider, { value: s, children: i });
}
function s() {
    let e = (0, n.useContext)(a);
    return { renderHeader: e?.renderHeader, getSocialLayerStorefrontLink: e?.getSocialLayerStorefrontLink };
}
