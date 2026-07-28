i.d(t, { A: () => a });
var s = i(582128),
    r = i(287809),
    n = i(975732);
function a() {
    let { analyticsLocations: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, s.useCallback)(() => {
        let t = r.default.getCurrentUser();
        null != t && (0, n.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: e });
    }, [e]);
}
