n.d(t, {
    k0: () => s,
    sp: () => a
});
var r = n(200651),
    l = n(192379);
let i = l.createContext(null);
function a() {
    return l.useContext(i);
}
function s(e) {
    let { newValue: t, children: n } = e,
        s = a(),
        o = l.useMemo(
            () => ({
                ...s,
                ...t
            }),
            [s, t]
        );
    return (0, r.jsx)(i.Provider, {
        value: o,
        children: n
    });
}
