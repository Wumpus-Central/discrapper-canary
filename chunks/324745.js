n.d(t, { Z: () => l });
var r = n(906732),
    i = n(202527),
    a = n(168308),
    o = n(547972),
    s = n(332325);
function l(e) {
    let { onClose: t } = e,
        { shouldMergeGameSettings: n } = i.b.getCurrentConfig({ location: 'useOpenGameSettings' }),
        { analyticsLocations: l } = (0, r.ZP)();
    if ((0, a.Jw)())
        return () => {
            (0, o.Z)(n ? s.Z.MY_GAMES : s.Z.ACTIVITY_PRIVACY, {
                analyticsLocations: l,
                onClose: t
            });
        };
}
