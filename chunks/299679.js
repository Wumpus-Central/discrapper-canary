n.d(t, { Ar: () => c, dB: () => l });
var i = n(627968),
    r = n(64700);
let s = r.createContext(null);
function c() {
    return r.useContext(s);
}
function l(e) {
    let { newValue: t, children: n } = e,
        r = { ...c(), ...t };
    return (0, i.jsx)(s.Provider, { value: r, children: n });
}
