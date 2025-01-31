n.d(t, {
    X: () => u,
    z: () => c
});
var i,
    r = n(200651),
    a = n(192379),
    s = n(541049),
    o = n(231338);
let l = a.createContext({
    profileType: null,
    theme: null !== (i = (0, s.Z)()) && void 0 !== i ? i : o.BR.DARK,
    primaryColor: null,
    secondaryColor: null
});
function u(e) {
    let { profileType: t, theme: n, primaryColor: i, secondaryColor: s, children: o } = e,
        u = a.useMemo(
            () => ({
                profileType: t,
                theme: n,
                primaryColor: i,
                secondaryColor: s
            }),
            [t, n, i, s]
        );
    return (0, r.jsx)(l.Provider, {
        value: u,
        children: o
    });
}
let c = () => a.useContext(l);
