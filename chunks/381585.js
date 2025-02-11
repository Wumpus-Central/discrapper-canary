n.d(t, {
    k0: () => a,
    sp: () => s
});
var r = n(200651),
    l = n(192379);
let i = l.createContext(null);
function s() {
    return l.useContext(i);
}
function a(e) {
    let { newValue: t, children: n } = e,
        a = s(),
        o = l.useMemo(
            () => ({
                ...a,
                ...t
            }),
            [a, t]
        );
    return (0, r.jsx)(i.Provider, {
        value: o,
        children: n
    });
}
