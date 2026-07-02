i.d(t, { A: () => l });
var r = i(64700),
    s = i(287809),
    n = i(975732);
function l() {
    let { analyticsLocations: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, r.useCallback)(() => {
        let t = s.default.getCurrentUser();
        null != t && (0, n.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: e });
    }, [e]);
}
