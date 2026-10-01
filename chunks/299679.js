n.d(t, { Ar: () => c, dB: () => u });
var i = n(477900),
    r = n(582128);
let s = r.createContext(null);
function c() {
    return r.useContext(s);
}
function u(e) {
    let { newValue: t, children: n } = e,
        r = { ...c(), ...t };
    return (0, i.jsx)(s.Provider, { value: r, children: n });
}
