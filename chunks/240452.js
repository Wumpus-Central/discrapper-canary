n.d(t, { w: () => a });
var r = n(427164),
    i = n(480218);
let l = (0, r.le)({
    name: "2025-12-video-stats-for-nerds",
    kind: "user",
    defaultConfig: { enableVideoStatsForNerds: !1 },
    variations: {
        0: { enableVideoStatsForNerds: !1 },
        1: { enableVideoStatsForNerds: !0 },
    },
});
function a(e) {
    let { location: t } = e,
        { isInHoldout: n } = i._.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? { enableVideoStatsForNerds: !1 } : l.getConfig({ location: t });
}
