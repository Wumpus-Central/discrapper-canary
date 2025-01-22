r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(192379),
    a = r(230711),
    o = r(906732),
    s = r(18438);
r(778825);
var l = r(981631),
    u = r(526761);
function c() {
    let { guild: e, scrollPosition: n, analyticsLocation: r, analyticsLocations: c, openWithoutBackstack: d } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { analyticsLocations: f } = (0, o.ZP)();
    return (0, i.useCallback)(() => {
        null != e && (0, s.Fq)(e, null != c ? c : f);
        a.Z.open(l.oAB.PROFILE_CUSTOMIZATION, null != e ? u.NB.GUILD : u.NB.USER_PROFILE, {
            analyticsLocation: r,
            analyticsLocations: c,
            openWithoutBackstack: d,
            scrollPosition: n
        });
    }, [e, n, r, c, d, f]);
}
