n.d(t, { G: () => o });
var r = n(945810),
    l = n(332628);
let i = (0, r.mj)({
    name: "2025-12-video-stats-for-nerds",
    kind: "user",
    defaultConfig: { enableVideoStatsForNerds: !1 },
    variations: {
        0: { enableVideoStatsForNerds: !1 },
        1: { enableVideoStatsForNerds: !0 },
    },
});
function o(e) {
    let { location: t } = e,
        { isInHoldout: n } = l.i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? { enableVideoStatsForNerds: !1 } : i.getConfig({ location: t });
}
