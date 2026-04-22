i.d(t, { i: () => l });
let r = (0, i(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
function l(e) {
    let { performanceAnalyticsEnabled: t } = r.getConfig({ location: e });
    return t;
}
