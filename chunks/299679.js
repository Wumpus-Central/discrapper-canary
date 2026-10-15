n.d(t, { Ar: () => c, dB: () => l });
var r = n(477900),
    i = n(582128);
let s = i.createContext(null);
function c() {
    return i.useContext(s);
}
function l(e) {
    let { newValue: t, children: n } = e,
        l = c(),
        o = i.useMemo(() => ({ ...l, ...t }), [l, t]);
    return (0, r.jsx)(s.Provider, { value: o, children: n });
}
