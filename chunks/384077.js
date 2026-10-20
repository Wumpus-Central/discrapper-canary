n.d(t, { u: () => s, z: () => l });
var i = n(945810),
    r = n(723702);
let a = (0, i.mj)({
    name: "2026-10-desktop-game-perf",
    kind: "user",
    defaultConfig: { nativeSystemCpuTimes: !1, overlayOnlyAnimatesItself: !1 },
    variations: {
        0: { nativeSystemCpuTimes: !1, overlayOnlyAnimatesItself: !1 },
        1: { nativeSystemCpuTimes: !0, overlayOnlyAnimatesItself: !0 },
    },
});
function s() {
    return (
        (0, r.isDesktop)() &&
        (0, r.isWindows)() &&
        a.getConfig({ location: "system_metrics_sample" }).nativeSystemCpuTimes
    );
}
function l() {
    return (
        (0, r.isDesktop)() &&
        (0, r.isWindows)() &&
        a.getConfig({ location: "avatar_speaking_styles" }).overlayOnlyAnimatesItself
    );
}
