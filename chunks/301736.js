n.d(t, {
    A: () => l,
});
var r = n(688810),
    i = n(80422),
    a = n(682262),
    s = n(725177),
    o = n(857266);

function l() {
    let { shouldMergeGameSettings: e } = i.X.getCurrentConfig({
            location: "useOpenGameSettings",
        }),
        { analyticsLocations: t } = (0, r.Ay)();
    if ((0, a.Pi)())
        return () => {
            (0, s.A)(e ? o.J.MY_GAMES : o.J.ACTIVITY_PRIVACY, {
                analyticsLocations: t,
            });
        };
}
