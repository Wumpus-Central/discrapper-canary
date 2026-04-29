s.d(t, { A: () => i });
var a = s(64700),
    r = s(287809),
    l = s(975732);
function i() {
    let { analyticsLocations: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, a.useCallback)(() => {
        let t = r.default.getCurrentUser();
        null != t && (0, l.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: e });
    }, [e]);
}
