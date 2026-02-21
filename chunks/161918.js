n.d(t, { Mk: () => i, iM: () => u });
var r = n(627968),
    l = n(64700);
let a = l.createContext(null);
function i() {
    return l.useContext(a);
}
function u(e) {
    let { tab: t, children: n } = e,
        i = l.useMemo(() => ({ tab: t }), [t]);
    return (0, r.jsx)(a.Provider, { value: i, children: n });
}
