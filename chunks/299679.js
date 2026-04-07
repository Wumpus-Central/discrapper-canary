t.d(e, { Ar: () => o, dB: () => c });
var s = t(627968),
    n = t(64700);
let r = n.createContext(null);
function o() {
    return n.useContext(r);
}
function c(i) {
    let { newValue: e, children: t } = i,
        n = { ...o(), ...e };
    return (0, s.jsx)(r.Provider, { value: n, children: t });
}
