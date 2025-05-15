n.d(t, { Z: () => l });
var r = n(906732),
    i = n(202527),
    o = n(168308),
    a = n(547972),
    s = n(332325);
function l(e) {
    let { onClose: t } = e,
        { shouldMergeGameSettings: n } = i.b.getCurrentConfig({ location: 'useOpenGameSettings' }),
        { analyticsLocations: l } = (0, r.ZP)();
    if ((0, o.Jw)())
        return () => {
            (0, a.Z)(n ? s.Z.MY_GAMES : s.Z.ACTIVITY_PRIVACY, {
                analyticsLocations: l,
                onClose: t
            });
        };
}
