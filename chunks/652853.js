n.d(t, {
    X: () => l,
    z: () => c,
});
var r = n(54381),
    i = n(473749),
    a = n(541049),
    o = n(210887);
let s = i.createContext({
    theme: o.Z.themePreferenceForSystemTheme((0, a.Z)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null,
    userId: null,
});
function l(e) {
    let { theme: t, themeType: n, primaryColor: a, secondaryColor: o, userId: l, children: c } = e,
        u = i.useMemo(
            () => ({
                theme: t,
                themeType: n,
                primaryColor: a,
                secondaryColor: o,
                userId: l,
            }),
            [t, n, a, o, l],
        );
    return (0, r.jsx)(s.Provider, {
        value: u,
        children: c,
    });
}
let c = () => i.useContext(s);
