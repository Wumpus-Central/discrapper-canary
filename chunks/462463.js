s.d(t, { A: () => l });
var n = s(64700),
    a = s(287809),
    r = s(975732);
function l() {
    let { analyticsLocations: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, n.useCallback)(() => {
        let t = a.default.getCurrentUser();
        null != t && (0, r.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: e });
    }, [e]);
}
