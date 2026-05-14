l.d(t, { H: () => i, J: () => s });
var n = l(627968),
    a = l(64700);
let r = (0, a.createContext)(null);
function s(e) {
    let { renderHeader: t, getSocialLayerStorefrontLink: l, children: s } = e,
        i = a.useMemo(() => ({ renderHeader: t, getSocialLayerStorefrontLink: l }), [t, l]);
    return (0, n.jsx)(r.Provider, { value: i, children: s });
}
function i() {
    let e = (0, a.useContext)(r);
    return { renderHeader: e?.renderHeader, getSocialLayerStorefrontLink: e?.getSocialLayerStorefrontLink };
}
