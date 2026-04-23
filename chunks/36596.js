"use strict";
n.d(t, { i: () => i });
let r = (0, n(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
function i(e) {
    let { performanceAnalyticsEnabled: t } = r.getConfig({ location: e });
    return t;
}
