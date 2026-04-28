t.d(e, { Ar: () => l, dB: () => c });
var s = t(627968),
    n = t(64700);
let r = n.createContext(null);
function l() {
    return n.useContext(r);
}
function c(i) {
    let { newValue: e, children: t } = i,
        n = { ...l(), ...e };
    return (0, s.jsx)(r.Provider, { value: n, children: t });
}
