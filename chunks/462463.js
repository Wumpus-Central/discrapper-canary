i.d(t, { A: () => a });
var r = i(64700),
    n = i(287809),
    s = i(975732);
function a() {
    let { analyticsLocations: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, r.useCallback)(() => {
        let t = n.default.getCurrentUser();
        null != t && (0, s.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: e });
    }, [e]);
}
