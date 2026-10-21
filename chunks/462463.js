n.d(t, { A: () => r });
var a = n(582128),
    s = n(287809),
    i = n(402860);
function r() {
    let { analyticsLocations: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, a.useCallback)(() => {
        let t = s.default.getCurrentUser();
        null != t && (0, i.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: e });
    }, [e]);
}
