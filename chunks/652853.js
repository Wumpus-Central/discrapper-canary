n.d(t, {
    X: () => l,
    z: () => c
});
var r = n(200651),
    i = n(192379),
    o = n(541049),
    a = n(210887);
let s = i.createContext({
    profileType: null,
    theme: a.Z.themePreferenceForSystemTheme((0, o.Z)()),
    primaryColor: null,
    secondaryColor: null
});
function l(e) {
    let { profileType: t, theme: n, primaryColor: o, secondaryColor: a, children: l } = e,
        c = i.useMemo(
            () => ({
                profileType: t,
                theme: n,
                primaryColor: o,
                secondaryColor: a
            }),
            [t, n, o, a]
        );
    return (0, r.jsx)(s.Provider, {
        value: c,
        children: l
    });
}
let c = () => i.useContext(s);
