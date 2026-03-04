l.d(t, { Mk: () => i, iM: () => s });
var n = l(627968),
    r = l(64700);
let a = r.createContext(null);
function i() {
    return r.useContext(a);
}
function s(e) {
    let { tab: t, children: l } = e,
        i = r.useMemo(() => ({ tab: t }), [t]);
    return (0, n.jsx)(a.Provider, { value: i, children: l });
}
