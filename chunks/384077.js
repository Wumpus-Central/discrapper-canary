n.d(t, { G$: () => l, uD: () => o, vf: () => s, z1: () => d });
var i = n(945810),
    r = n(723702);
let a = (0, i.mj)({
    name: "2026-10-desktop-game-perf",
    kind: "user",
    defaultConfig: { nativeSystemCpuTimes: !1, overlayOnlyAnimatesItself: !1, fullscreenPopupOcclusion: !1 },
    variations: {
        0: { nativeSystemCpuTimes: !1, overlayOnlyAnimatesItself: !1, fullscreenPopupOcclusion: !1 },
        1: { nativeSystemCpuTimes: !0, overlayOnlyAnimatesItself: !0, fullscreenPopupOcclusion: !0 },
    },
});
function s(e) {
    return a.getConfig({ location: e });
}
function l(e) {
    return (0, r.isDesktop)() && (0, r.isWindows)() && a.getConfig({ location: e }).fullscreenPopupOcclusion;
}
function o() {
    return (
        (0, r.isDesktop)() &&
        (0, r.isWindows)() &&
        a.getConfig({ location: "system_metrics_sample" }).nativeSystemCpuTimes
    );
}
function d() {
    return (
        (0, r.isDesktop)() &&
        (0, r.isWindows)() &&
        a.getConfig({ location: "avatar_speaking_styles" }).overlayOnlyAnimatesItself
    );
}
