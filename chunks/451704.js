(n.r(t), n.d(t, { getIsNativeSystemCpuTimesEnabled: () => s }));
var i = n(945810),
    r = n(723702);
let a = (0, i.mj)({
    name: "2026-10-desktop-game-perf",
    kind: "user",
    defaultConfig: { nativeSystemCpuTimes: !1 },
    variations: { 0: { nativeSystemCpuTimes: !1 }, 1: { nativeSystemCpuTimes: !0 } },
});
function s() {
    return (
        (0, r.isDesktop)() &&
        (0, r.isWindows)() &&
        a.getConfig({ location: "system_metrics_sample" }).nativeSystemCpuTimes
    );
}
