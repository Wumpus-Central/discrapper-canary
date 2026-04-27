n.d(t, { R9: () => r, uM: () => s });
var i = n(627968),
    l = n(64700);
let a = l.createContext(null);
function s() {
    return l.useContext(a);
}
function r(e) {
    let { newValue: t, children: n } = e,
        r = s(),
        o = l.useMemo(() => ({ ...r, ...t }), [r, t]);
    return (0, i.jsx)(a.Provider, { value: o, children: n });
}
