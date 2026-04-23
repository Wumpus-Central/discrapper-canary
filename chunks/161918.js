n.d(t, { Mk: () => a, iM: () => r });
var i = n(627968),
    l = n(64700);
let s = l.createContext(null);
function a() {
    return l.useContext(s);
}
function r(e) {
    let { tab: t, children: n } = e,
        a = l.useMemo(() => ({ tab: t }), [t]);
    return (0, i.jsx)(s.Provider, { value: a, children: n });
}
