n.d(t, { g6: () => o });
var r = n(54381),
    l = n(473749);
let i = l.createContext(null);
function o(e) {
    let { blockType: t, children: n } = e,
        o = l.useMemo(() => ({ blockType: t }), [t]);
    return (0, r.jsx)(i.Provider, {
        value: o,
        children: n,
    });
}
