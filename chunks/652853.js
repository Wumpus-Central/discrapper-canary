n.d(t, {
    X: () => l,
    z: () => c
});
var r = n(255367),
    i = n(73800),
    o = n(541049),
    a = n(210887);
let s = i.createContext({
    theme: a.Z.themePreferenceForSystemTheme((0, o.Z)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null
});
function l(e) {
    let { theme: t, themeType: n, primaryColor: o, secondaryColor: a, children: l } = e,
        c = i.useMemo(
            () => ({
                theme: t,
                themeType: n,
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
