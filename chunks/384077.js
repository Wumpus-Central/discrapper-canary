var i = n(945810),
    r = n(723702);
let a = (0, i.mj)({
    name: "2026-10-desktop-game-perf",
    kind: "user",
    defaultConfig: {
        nativeSystemCpuTimes: !1,
        overlayOnlyAnimatesItself: !1,
        fullscreenPopupOcclusion: !1,
        overlayHiddenWavePaused: !1,
        renderOverlayWhileMinimized: !1,
        notificationIconCpuCanvas: !1,
    },
    variations: {
        0: {
            nativeSystemCpuTimes: !1,
            overlayOnlyAnimatesItself: !1,
            fullscreenPopupOcclusion: !1,
            overlayHiddenWavePaused: !1,
            renderOverlayWhileMinimized: !1,
            notificationIconCpuCanvas: !1,
        },
        1: {
            nativeSystemCpuTimes: !0,
            overlayOnlyAnimatesItself: !0,
            fullscreenPopupOcclusion: !0,
            overlayHiddenWavePaused: !0,
            renderOverlayWhileMinimized: !0,
            notificationIconCpuCanvas: !0,
        },
    },
});
n.d(
    t,
    {},
    {
        AG: function () {
            return (0, r.xl)() && a.getConfig({ location: "icon_cropping_utils" }).notificationIconCpuCanvas;
        },
        G$: function (e) {
            return (0, r.xl)() && (0, r.uF)() && a.getConfig({ location: e }).fullscreenPopupOcclusion;
        },
        ZT: function (e) {
            return (0, r.xl)() && (0, r.uF)() && a.getConfig({ location: e }).renderOverlayWhileMinimized;
        },
        lT: function () {
            return (0, r.xl)() && a.getConfig({ location: "overlay_voice_user" }).overlayHiddenWavePaused;
        },
        uD: function () {
            return (
                (0, r.xl)() && (0, r.uF)() && a.getConfig({ location: "system_metrics_sample" }).nativeSystemCpuTimes
            );
        },
        vf: function (e) {
            return a.getConfig({ location: e });
        },
        z1: function () {
            return (
                (0, r.xl)() &&
                (0, r.uF)() &&
                a.getConfig({ location: "avatar_speaking_styles" }).overlayOnlyAnimatesItself
            );
        },
    },
);
