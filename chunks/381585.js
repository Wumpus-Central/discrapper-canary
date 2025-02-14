n.d(t, {
    k0: () => a,
    sp: () => s
});
var l = n(200651),
    r = n(192379);
let i = r.createContext(null);
function s() {
    return r.useContext(i);
}
function a(e) {
    let { newValue: t, children: n } = e,
        a = s(),
        o = r.useMemo(
            () => ({
                ...a,
                ...t
            }),
            [a, t]
        );
    return (0, l.jsx)(i.Provider, {
        value: o,
        children: n
    });
}
