n.d(t, {
    Vc: () => o,
    g6: () => s,
});
var r = n(951288),
    i = n(647438);
let a = i.createContext(null);
function o() {
    return i.useContext(a);
}
function s(e) {
    let { blockType: t, children: n } = e,
        o = i.useMemo(() => ({ blockType: t }), [t]);
    return (0, r.jsx)(a.Provider, {
        value: o,
        children: n,
    });
}
