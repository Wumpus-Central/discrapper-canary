n.d(t, {
    X: () => l,
    z: () => c
});
var r = n(200651),
    i = n(192379),
    a = n(541049),
    o = n(210887);
let s = i.createContext({
    profileType: null,
    theme: o.Z.themePreferenceForSystemTheme((0, a.Z)()),
    primaryColor: null,
    secondaryColor: null
});
function l(e) {
    let { profileType: t, theme: n, primaryColor: a, secondaryColor: o, children: l } = e,
        c = i.useMemo(
            () => ({
                profileType: t,
                theme: n,
                primaryColor: a,
                secondaryColor: o
            }),
            [t, n, a, o]
        );
    return (0, r.jsx)(s.Provider, {
        value: c,
        children: l
    });
}
let c = () => i.useContext(s);
