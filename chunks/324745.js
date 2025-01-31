n.d(t, { Z: () => l });
var i = n(906732),
    r = n(202527),
    a = n(168308),
    s = n(547972),
    o = n(332325);
function l(e) {
    let { onClose: t } = e,
        { shouldMergeGameSettings: n } = r.b.getCurrentConfig({ location: 'useOpenGameSettings' }),
        { analyticsLocations: l } = (0, i.ZP)();
    if ((0, a.Jw)())
        return () => {
            (0, s.Z)(n ? o.Z.MY_GAMES : o.Z.ACTIVITY_PRIVACY, {
                analyticsLocations: l,
                onClose: t
            });
        };
}
