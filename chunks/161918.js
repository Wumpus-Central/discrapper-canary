n.d(t, { Mk: () => s, iM: () => a });
var r = n(477900),
    i = n(582128);
let l = i.createContext(null);
function s() {
    return i.useContext(l);
}
function a(e) {
    let { tab: t, children: n } = e,
        s = i.useMemo(() => ({ tab: t }), [t]);
    return (0, r.jsx)(l.Provider, { value: s, children: n });
}
