n.d(t, {
    k0: () => s,
    sp: () => i
});
var r = n(200651),
    l = n(192379);
let a = l.createContext(null);
function i() {
    return l.useContext(a);
}
function s(e) {
    let { newValue: t, children: n } = e,
        s = i(),
        o = l.useMemo(
            () => ({
                ...s,
                ...t
            }),
            [s, t]
        );
    return (0, r.jsx)(a.Provider, {
        value: o,
        children: n
    });
}
