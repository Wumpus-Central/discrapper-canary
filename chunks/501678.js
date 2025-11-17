n.d(t, { g6: () => a });
var r = n(54381),
    l = n(473749);
let i = l.createContext(null);
function a(e) {
    let { blockType: t, children: n } = e,
        a = l.useMemo(() => ({ blockType: t }), [t]);
    return (0, r.jsx)(i.Provider, {
        value: a,
        children: n,
    });
}
