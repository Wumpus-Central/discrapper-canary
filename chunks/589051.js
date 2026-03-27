"use strict";
n.d(t, {
    E: () => S,
    H: () => _,
    M8: () => T,
    NI: () => I,
    X4: () => g,
    aS: () => f,
    lR: () => u,
    m5: () => l,
    o0: () => h,
    sq: () => c,
});
var r = n(812729),
    i = n.n(r),
    s = n(600975),
    a = n(945810);
let o = (0, s.C)({
    kind: "user",
    id: "2025-10_overlay_v3_one_click_go_live",
    label: "Overlay V3 One Click Go Live",
    defaultConfig: { oneClickGoLiveEnabled: !1, useStreamCtaCopy: !1 },
    treatments: [
        { id: 1, label: "Use Stream CTA Copy", config: { oneClickGoLiveEnabled: !1, useStreamCtaCopy: !0 } },
        {
            id: 2,
            label: "Enable One Click Go Live with Stream CTA Copy",
            config: { oneClickGoLiveEnabled: !0, useStreamCtaCopy: !0 },
        },
    ],
});
function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return o.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let u = (0, s.C)({
    id: "2025-10_overlay_default_keybind",
    label: "Overlay Default Keybind",
    kind: "user",
    defaultConfig: { keybindOverride: void 0 },
    treatments: [
        { id: 1, label: "Ctrl + Tab Keybind", config: { keybindOverride: "ctrl+tab" } },
        { id: 2, label: "Alt + X Keybind", config: { keybindOverride: "alt+x" } },
        { id: 3, label: "Ctrl + L Keybind", config: { keybindOverride: "ctrl+l" } },
    ],
});
function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return u.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let d = (0, s.C)({
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
function _(e) {
    let t = f(e, !1);
    if (i()(d.definition.defaultConfig, t)) return "control";
    let n = d.definition.treatments.find((e) => i()(e.config, t));
    return null == n ? "control" : `treatment-${n.id}`;
}
function f(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return d.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let p = (0, s.C)({
    id: "2025-11_overlay_welcome_notification",
    label: "Overlay Welcome Notification",
    kind: "user",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Modular Experience", config: { enabled: !0 } }],
});
function h(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return p.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let m = (0, s.C)({
    id: "2025-11_overlay_bug_reporter",
    label: "Overlay Bug Reporter",
    kind: "user",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Bug Reporter", config: { enabled: !0 } }],
});
function E(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return m.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
function g(e) {
    return m.useExperiment({ location: e }).enabled;
}
let A = (0, a.mj)({
    name: "2025-11-overlay-chat",
    kind: "user",
    defaultConfig: { hasChat: !1, hasFriendList: !1, showNowPlayingForDifferentGames: !1 },
    variations: {
        1: { hasChat: !0, hasFriendList: !1, showNowPlayingForDifferentGames: !1 },
        2: { hasChat: !0, hasFriendList: !0, showNowPlayingForDifferentGames: !1 },
        3: { hasChat: !0, hasFriendList: !0, showNowPlayingForDifferentGames: !0 },
    },
});
function I(e) {
    return A.getConfig({ location: e });
}
function T(e) {
    return A.useConfig({ location: e });
}
function S() {
    l("OVERLAY_INITIALIZED"),
        f("OVERLAY_INITIALIZED"),
        h("OVERLAY_INITIALIZED"),
        E("OVERLAY_INITIALIZED"),
        I("OVERLAY_INITIALIZED");
}
