"use strict";
n.d(t, { E: () => E, H: () => c, M8: () => m, NI: () => h, aS: () => d, o0: () => f, sq: () => l });
var r = n(812729),
    i = n.n(r),
    s = n(600975),
    a = n(945810);
let o = (0, a.mj)({
    name: "2026-03-overlay-default-keybind",
    kind: "user",
    defaultConfig: { keybindOverride: void 0 },
    variations: {
        1: { keybindOverride: "ctrl+tab" },
        2: { keybindOverride: "alt+x" },
        3: { keybindOverride: "ctrl+l" },
    },
});
function l(e) {
    return o.getConfig({ location: e });
}
let u = (0, s.C)({
    kind: "user",
    id: "2025-10_overlay_negative_widget_testing",
    label: "Overlay Negative Widget Testing",
    defaultConfig: {
        voiceWidgetDefaultUnpinned: !1,
        videoWidgetDefaultUnpinned: !1,
        disableWelcomeNotification: !1,
        notificationsDefaultOff: !1,
        unlockedOnlyDefaultOverlay: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Voice Widget Default Unpinned",
            config: {
                voiceWidgetDefaultUnpinned: !0,
                videoWidgetDefaultUnpinned: !1,
                disableWelcomeNotification: !1,
                notificationsDefaultOff: !1,
                unlockedOnlyDefaultOverlay: !1,
            },
        },
        {
            id: 2,
            label: "Video Widget Default Unpinned",
            config: {
                voiceWidgetDefaultUnpinned: !1,
                videoWidgetDefaultUnpinned: !0,
                disableWelcomeNotification: !1,
                notificationsDefaultOff: !1,
                unlockedOnlyDefaultOverlay: !1,
            },
        },
        {
            id: 3,
            label: "Disable Welcome Notification",
            config: {
                voiceWidgetDefaultUnpinned: !1,
                videoWidgetDefaultUnpinned: !1,
                disableWelcomeNotification: !0,
                notificationsDefaultOff: !1,
                unlockedOnlyDefaultOverlay: !1,
            },
        },
        {
            id: 4,
            label: "Notifications Default Off",
            config: {
                voiceWidgetDefaultUnpinned: !1,
                videoWidgetDefaultUnpinned: !1,
                disableWelcomeNotification: !1,
                notificationsDefaultOff: !0,
                unlockedOnlyDefaultOverlay: !1,
            },
        },
        {
            id: 5,
            label: "Unlocked Only Default Overlay",
            config: {
                voiceWidgetDefaultUnpinned: !1,
                videoWidgetDefaultUnpinned: !1,
                disableWelcomeNotification: !1,
                notificationsDefaultOff: !1,
                unlockedOnlyDefaultOverlay: !0,
            },
        },
    ],
});
function c(e) {
    let t = d(e, !1);
    if (i()(u.definition.defaultConfig, t)) return "control";
    let n = u.definition.treatments.find((e) => i()(e.config, t));
    return null == n ? "control" : `treatment-${n.id}`;
}
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return u.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let _ = (0, s.C)({
    id: "2025-11_overlay_welcome_notification",
    label: "Overlay Welcome Notification",
    kind: "user",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Modular Experience", config: { enabled: !0 } }],
});
function f(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return _.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let p = (0, a.mj)({
    name: "2025-11-overlay-chat",
    kind: "user",
    defaultConfig: { hasChat: !1, hasFriendList: !1, showNowPlayingForDifferentGames: !1 },
    variations: {
        1: { hasChat: !0, hasFriendList: !1, showNowPlayingForDifferentGames: !1 },
        2: { hasChat: !0, hasFriendList: !0, showNowPlayingForDifferentGames: !1 },
        3: { hasChat: !0, hasFriendList: !0, showNowPlayingForDifferentGames: !0 },
    },
});
function h(e) {
    return p.getConfig({ location: e });
}
function m(e) {
    return p.useConfig({ location: e });
}
function E() {
    d("OVERLAY_INITIALIZED"), f("OVERLAY_INITIALIZED"), h("OVERLAY_INITIALIZED");
}
