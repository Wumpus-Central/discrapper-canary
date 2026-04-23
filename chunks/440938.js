n.d(t, { R9: () => r, uM: () => a });
var i = n(627968),
    l = n(64700);
let s = l.createContext(null);
function a() {
    return l.useContext(s);
}
function r(e) {
    let { newValue: t, children: n } = e,
        r = a(),
        o = l.useMemo(() => ({ ...r, ...t }), [r, t]);
    return (0, i.jsx)(s.Provider, { value: o, children: n });
}
