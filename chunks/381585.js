n.d(t, {
    k0: function () {
        return a;
    },
    sp: function () {
        return s;
    }
});
var r = n(200651),
    i = n(192379);
let l = i.createContext(null);
function s() {
    return i.useContext(l);
}
function a(e) {
    let { newValue: t, children: n } = e,
        a = s(),
        o = i.useMemo(
            () => ({
                ...a,
                ...t
            }),
            [a, t]
        );
    return (0, r.jsx)(l.Provider, {
        value: o,
        children: n
    });
}
