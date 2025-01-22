r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(906732),
    a = r(202527),
    o = r(168308),
    s = r(547972),
    l = r(332325);
function u(e) {
    let { onClose: n } = e,
        { shouldMergeGameSettings: r } = a.b.getCurrentConfig({ location: 'useOpenGameSettings' }),
        { analyticsLocations: u } = (0, i.ZP)();
    if (!!(0, o.Jw)())
        return () => {
            (0, s.Z)(r ? l.Z.MY_GAMES : l.Z.ACTIVITY_PRIVACY, {
                analyticsLocations: u,
                onClose: n
            });
        };
}
