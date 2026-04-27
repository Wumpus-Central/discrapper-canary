n.d(t, { Mk: () => s, iM: () => r });
var i = n(627968),
    l = n(64700);
let a = l.createContext(null);
function s() {
    return l.useContext(a);
}
function r(e) {
    let { tab: t, children: n } = e,
        s = l.useMemo(() => ({ tab: t }), [t]);
    return (0, i.jsx)(a.Provider, { value: s, children: n });
}
