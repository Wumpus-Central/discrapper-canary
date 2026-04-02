r.d(t, { A: () => i });
var a = r(64700),
    n = r(287809),
    s = r(657331);
function i() {
    let { analyticsLocations: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, a.useCallback)(() => {
        let t = n.default.getCurrentUser();
        null != t && (0, s.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: e });
    }, [e]);
}
