n.d(t, { Z: () => i });
var r = n(427164),
    o = n(480218);
let l = (0, r.le)({
    name: "2025-09-video-qoe-metrics-tracking",
    kind: "user",
    defaultConfig: { externalAnalyticsEnabled: !1 },
    variations: {
        0: { externalAnalyticsEnabled: !1 },
        1: { externalAnalyticsEnabled: !0 },
    },
});
function i(e) {
    let { location: t } = e,
        { isInHoldout: n } = o._.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? { externalAnalyticsEnabled: !1 } : l.getConfig({ location: t });
}
