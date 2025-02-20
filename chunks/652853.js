n.d(t, {
    X: () => c,
    z: () => u
});
var r,
    i = n(200651),
    o = n(192379),
    a = n(541049),
    s = n(231338);
let l = o.createContext({
    profileType: null,
    theme: null !== (r = (0, a.Z)()) && void 0 !== r ? r : s.BR.DARK,
    primaryColor: null,
    secondaryColor: null
});
function c(e) {
    let { profileType: t, theme: n, primaryColor: r, secondaryColor: a, children: s } = e,
        c = o.useMemo(
            () => ({
                profileType: t,
                theme: n,
                primaryColor: r,
                secondaryColor: a
            }),
            [t, n, r, a]
        );
    return (0, i.jsx)(l.Provider, {
        value: c,
        children: s
    });
}
let u = () => o.useContext(l);
