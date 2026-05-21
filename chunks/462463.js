l.d(t, { A: () => s });
var i = l(64700),
    r = l(287809),
    a = l(975732);
function s() {
    let { analyticsLocations: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, i.useCallback)(() => {
        let t = r.default.getCurrentUser();
        null != t && (0, a.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: e });
    }, [e]);
}
