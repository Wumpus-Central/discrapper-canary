r.d(t, { Mk: () => l, iM: () => a });
var n = r(477900),
    i = r(582128);
let s = i.createContext(null);
function l() {
    return i.useContext(s);
}
function a(e) {
    let { tab: t, children: r } = e,
        l = i.useMemo(() => ({ tab: t }), [t]);
    return (0, n.jsx)(s.Provider, { value: l, children: r });
}
