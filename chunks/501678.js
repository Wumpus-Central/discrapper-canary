n.d(t, {
    Vc: () => a,
    g6: () => s,
});
var r = n(951288),
    l = n(647438);
let i = l.createContext(null);
function a() {
    return l.useContext(i);
}
function s(e) {
    let { blockType: t, children: n } = e,
        a = l.useMemo(() => ({ blockType: t }), [t]);
    return (0, r.jsx)(i.Provider, {
        value: a,
        children: n,
    });
}
