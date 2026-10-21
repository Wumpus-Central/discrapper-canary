a.d(t, { A: () => r });
var n = a(582128),
    s = a(287809),
    i = a(402860);
function r() {
    let { analyticsLocations: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, n.useCallback)(() => {
        let t = s.default.getCurrentUser();
        null != t && (0, i.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: e });
    }, [e]);
}
