n.d(t, { Z: () => l });
var r = n(73800),
    i = n(230711),
    o = n(18438),
    a = n(981631),
    s = n(526761);
function l() {
    let { guild: e, scrollPosition: t, analyticsLocation: n, analyticsLocations: l, openWithoutBackstack: c } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, r.useCallback)(() => {
        null != e && (0, o.Fq)(e),
            i.Z.open(a.oAB.PROFILE_CUSTOMIZATION, null != e ? s.NB.GUILD : s.NB.USER_PROFILE, {
                analyticsLocation: n,
                analyticsLocations: l,
                openWithoutBackstack: c,
                scrollPosition: t
            });
    }, [e, t, n, l, c]);
}
n(778825), n(663389);
