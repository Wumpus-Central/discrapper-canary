l.d(t, { rW: () => a });
var n = l(627968),
    r = l(64700);
let s = r.createContext(null);
function a(e) {
    let { blockType: t, children: l } = e,
        a = r.useMemo(() => ({ blockType: t }), [t]);
    return (0, n.jsx)(s.Provider, {
        value: a,
        children: l,
    });
}
