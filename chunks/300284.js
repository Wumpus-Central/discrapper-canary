n.d(t, { Z: () => l });
var r = n(473749),
    i = n(18438),
    a = n(313789),
    o = n(981631),
    s = n(526761);
function l() {
    let {
        guild: e,
        scrollPosition: t,
        analyticsLocation: l,
        analyticsLocations: c,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, r.useCallback)(() => {
        null != e && (0, i.Fq)(e);
        {
            let { openUserSettings: t } = n(518596);
            t(a.n.PROFILE_PANEL, {
                section: o.oAB.PROFILE_CUSTOMIZATION,
                subsection: null != e ? s.NB.GUILD : s.NB.USER_PROFILE,
                analyticsLocation: l,
                analyticsLocations: c,
            });
        }
    }, [e, t, l, c]);
}
n(778825), n(663389);
