u.d(t, { R9: () => i, uM: () => c });
var n = u(477900),
    r = u(582128);
let s = r.createContext(null);
function c() {
    return r.useContext(s);
}
function i(e) {
    let { newValue: t, children: u } = e,
        i = c(),
        o = r.useMemo(() => ({ ...i, ...t }), [i, t]);
    return (0, n.jsx)(s.Provider, { value: o, children: u });
}
