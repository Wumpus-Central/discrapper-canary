n.d(t, { G: () => l });
let i = (0, n(945810).mj)({
    name: "2025-12-video-stats-for-nerds",
    kind: "user",
    defaultConfig: { enableVideoStatsForNerds: !1 },
    variations: { 0: { enableVideoStatsForNerds: !1 }, 1: { enableVideoStatsForNerds: !0 } },
});
function l(e) {
    let { location: t } = e;
    return i.getConfig({ location: t });
}
