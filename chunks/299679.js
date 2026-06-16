t.d(e, { Ar: () => l, dB: () => c });
var n = t(627968),
    s = t(64700);
let r = s.createContext(null);
function l() {
    return s.useContext(r);
}
function c(i) {
    let { newValue: e, children: t } = i,
        s = { ...l(), ...e };
    return (0, n.jsx)(r.Provider, { value: s, children: t });
}
