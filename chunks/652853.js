r.d(n, {
    X: function () {
        return c;
    },
    z: function () {
        return d;
    }
});
var i,
    a = r(200651),
    o = r(192379),
    s = r(541049),
    l = r(231338);
let u = o.createContext({
    profileType: null,
    theme: null !== (i = (0, s.Z)()) && void 0 !== i ? i : l.BR.DARK,
    primaryColor: null,
    secondaryColor: null
});
function c(e) {
    let { profileType: n, theme: r, primaryColor: i, secondaryColor: s, children: l } = e,
        c = o.useMemo(
            () => ({
                profileType: n,
                theme: r,
                primaryColor: i,
                secondaryColor: s
            }),
            [n, r, i, s]
        );
    return (0, a.jsx)(u.Provider, {
        value: c,
        children: l
    });
}
let d = () => o.useContext(u);
