i.d(t, { A: () => s });
var r = i(64700),
    l = i(287809),
    a = i(975732);
function s() {
    let { analyticsLocations: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, r.useCallback)(() => {
        let t = l.default.getCurrentUser();
        null != t && (0, a.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: e });
    }, [e]);
}
