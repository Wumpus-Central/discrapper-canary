n.d(t, { Ar: () => c, dB: () => l });
var r = n(627968),
    i = n(64700);
let s = i.createContext(null);
function c() {
    return i.useContext(s);
}
function l(e) {
    let { newValue: t, children: n } = e,
        i = { ...c(), ...t };
    return (0, r.jsx)(s.Provider, { value: i, children: n });
}
