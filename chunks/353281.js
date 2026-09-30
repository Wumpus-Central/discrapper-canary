t.d(l, { H: () => s, J: () => i });
var r = t(477900),
    n = t(582128);
let a = (0, n.createContext)(null);
function i(e) {
    let { renderHeader: l, getSocialLayerStorefrontLink: t, children: i } = e,
        s = n.useMemo(() => ({ renderHeader: l, getSocialLayerStorefrontLink: t }), [l, t]);
    return (0, r.jsx)(a.Provider, { value: s, children: i });
}
function s() {
    let e = (0, n.useContext)(a);
    return { renderHeader: e?.renderHeader, getSocialLayerStorefrontLink: e?.getSocialLayerStorefrontLink };
}
