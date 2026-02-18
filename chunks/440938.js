a.d(e, { R9: () => i, uM: () => s });
var n = a(627968),
    l = a(64700);
let r = l.createContext(null);
function s() {
    return l.useContext(r);
}
function i(t) {
    let { newValue: e, children: a } = t,
        i = s(),
        o = l.useMemo(() => ({ ...i, ...e }), [i, e]);
    return (0, n.jsx)(r.Provider, { value: o, children: a });
}
