n.d(t, { Z: () => l });
var r = n(192379),
    i = n(230711),
    a = n(18438),
    o = n(981631),
    s = n(526761);
function l() {
    let { guild: e, scrollPosition: t, analyticsLocation: n, analyticsLocations: l, openWithoutBackstack: c } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, r.useCallback)(() => {
        null != e && (0, a.Fq)(e),
            i.Z.open(o.oAB.PROFILE_CUSTOMIZATION, null != e ? s.NB.GUILD : s.NB.USER_PROFILE, {
                analyticsLocation: n,
                analyticsLocations: l,
                openWithoutBackstack: c,
                scrollPosition: t
            });
    }, [e, t, n, l, c]);
}
n(778825), n(663389);
