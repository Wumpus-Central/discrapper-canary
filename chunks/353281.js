l.d(t, { H: () => s, J: () => a });
var n = l(477900),
    r = l(582128);
let i = (0, r.createContext)(null);
function a(e) {
    let { renderHeader: t, getSocialLayerStorefrontLink: l, children: a } = e,
        s = r.useMemo(() => ({ renderHeader: t, getSocialLayerStorefrontLink: l }), [t, l]);
    return (0, n.jsx)(i.Provider, { value: s, children: a });
}
function s() {
    let e = (0, r.useContext)(i);
    return { renderHeader: e?.renderHeader, getSocialLayerStorefrontLink: e?.getSocialLayerStorefrontLink };
}
