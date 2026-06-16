r.d(t, { Mk: () => o, iM: () => u });
var i = r(627968),
    n = r(64700);
let l = n.createContext(null);
function o() {
    return n.useContext(l);
}
function u(e) {
    let { tab: t, children: r } = e,
        o = n.useMemo(() => ({ tab: t }), [t]);
    return (0, i.jsx)(l.Provider, { value: o, children: r });
}
