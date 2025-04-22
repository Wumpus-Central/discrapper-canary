n.d(t, {
    X: () => l,
    z: () => c
});
var r = n(200651),
    i = n(192379),
    a = n(541049),
    o = n(210887);
let s = i.createContext({
    theme: o.Z.themePreferenceForSystemTheme((0, a.Z)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null
});
function l(e) {
    let { theme: t, themeType: n, primaryColor: a, secondaryColor: o, children: l } = e,
        c = i.useMemo(
            () => ({
                theme: t,
                themeType: n,
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
