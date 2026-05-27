"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    r = n(287809),
    s = n(975732);
function a() {
    let { analyticsLocations: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, i.useCallback)(() => {
        let t = r.default.getCurrentUser();
        null != t && (0, s.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: e });
    }, [e]);
}
