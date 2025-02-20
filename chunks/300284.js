n.d(t, { Z: () => c });
var r = n(192379),
    i = n(230711),
    o = n(906732),
    a = n(18438),
    s = n(981631),
    l = n(526761);
function c() {
    let { guild: e, scrollPosition: t, analyticsLocation: n, analyticsLocations: c, openWithoutBackstack: u } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { analyticsLocations: d } = (0, o.ZP)();
    return (0, r.useCallback)(() => {
        null != e && (0, a.Fq)(e, null != c ? c : d),
            i.Z.open(s.oAB.PROFILE_CUSTOMIZATION, null != e ? l.NB.GUILD : l.NB.USER_PROFILE, {
                analyticsLocation: n,
                analyticsLocations: c,
                openWithoutBackstack: u,
                scrollPosition: t
            });
    }, [e, t, n, c, u, d]);
}
n(778825), n(663389);
