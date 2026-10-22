n.d(t, { Mk: () => a, iM: () => l });
var r = n(477900),
    i = n(582128);
let s = i.createContext(null);
function a() {
    return i.useContext(s);
}
function l(e) {
    let { tab: t, children: n } = e,
        a = i.useMemo(() => ({ tab: t }), [t]);
    return (0, r.jsx)(s.Provider, { value: a, children: n });
}
