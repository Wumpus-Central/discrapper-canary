n.d(t, { Ar: () => a, dB: () => r });
var i = n(627968),
    l = n(64700);
let s = l.createContext(null);
function a() {
    return l.useContext(s);
}
function r(e) {
    let { newValue: t, children: n } = e,
        l = { ...a(), ...t };
    return (0, i.jsx)(s.Provider, { value: l, children: n });
}
