i.d(t, { A: () => a });
var s = i(582128),
    n = i(287809),
    r = i(402860);
function a() {
    let { analyticsLocations: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, s.useCallback)(() => {
        let t = n.default.getCurrentUser();
        null != t && (0, r.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: e });
    }, [e]);
}
