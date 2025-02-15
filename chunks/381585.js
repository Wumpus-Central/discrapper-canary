n.d(t, {
    k0: () => s,
    sp: () => a
});
var l = n(200651),
    r = n(192379);
let i = r.createContext(null);
function a() {
    return r.useContext(i);
}
function s(e) {
    let { newValue: t, children: n } = e,
        s = a(),
        o = r.useMemo(
            () => ({
                ...s,
                ...t
            }),
            [s, t]
        );
    return (0, l.jsx)(i.Provider, {
        value: o,
        children: n
    });
}
