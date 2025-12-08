n.d(t, { g6: () => s });
var r = n(54381),
    l = n(473749);
let i = l.createContext(null);
function s(e) {
    let { blockType: t, children: n } = e,
        s = l.useMemo(() => ({ blockType: t }), [t]);
    return (0, r.jsx)(i.Provider, {
        value: s,
        children: n,
    });
}
