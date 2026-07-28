n.d(t, { Mk: () => l, iM: () => a });
var r = n(477900),
    i = n(582128);
let s = i.createContext(null);
function l() {
    return i.useContext(s);
}
function a(e) {
    let { tab: t, children: n } = e,
        l = i.useMemo(() => ({ tab: t }), [t]);
    return (0, r.jsx)(s.Provider, { value: l, children: n });
}
