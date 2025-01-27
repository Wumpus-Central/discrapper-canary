n.d(t, {
    k0: function () {
        return s;
    },
    sp: function () {
        return a;
    }
});
var r = n(200651),
    i = n(192379);
let l = i.createContext(null);
function a() {
    return i.useContext(l);
}
function s(e) {
    let { newValue: t, children: n } = e,
        s = a(),
        o = i.useMemo(
            () => ({
                ...s,
                ...t
            }),
            [s, t]
        );
    return (0, r.jsx)(l.Provider, {
        value: o,
        children: n
    });
}
