"use strict";
n.d(t, {
    E: () => N,
    H: () => h,
    LA: () => l,
    M8: () => v,
    NI: () => y,
    X4: () => T,
    aS: () => m,
    lR: () => _,
    m5: () => d,
    o0: () => g,
    oA: () => u,
    sq: () => f,
});
var r = n(812729),
    i = n.n(r),
    s = n(600975),
    a = n(945810),
    o = n(688151);
let l = (0, s.C)({
    kind: "user",
    id: "2025-07_overlay_default_disable",
    label: "Overlay Default Disable",
    commonTriggerPoint: o.$G.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Default Disable Behavior", config: { enabled: !0 } }],
});
function u(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return l.getCurrentConfig({ location: e }, { autoTrackExposure: t }).enabled;
}
let c = (0, s.C)({
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
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return c.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let _ = (0, s.C)({
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
function f(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return _.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let p = (0, s.C)({
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
function h(e) {
    let t = m(e, !1);
    if (i()(p.definition.defaultConfig, t)) return "control";
    let n = p.definition.treatments.find((e) => i()(e.config, t));
    return null == n ? "control" : `treatment-${n.id}`;
}
function m(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return p.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let E = (0, s.C)({
    id: "2025-11_overlay_welcome_notification",
    label: "Overlay Welcome Notification",
    kind: "user",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Modular Experience", config: { enabled: !0 } }],
});
function g(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return E.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let A = (0, s.C)({
    id: "2025-11_overlay_bug_reporter",
    label: "Overlay Bug Reporter",
    kind: "user",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Bug Reporter", config: { enabled: !0 } }],
});
function I(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return A.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
function T(e) {
    return A.useExperiment({ location: e }).enabled;
}
let S = (0, a.mj)({
    name: "2025-11-overlay-chat",
    kind: "user",
    defaultConfig: { hasChat: !1, hasFriendList: !1, showNowPlayingForDifferentGames: !1 },
    variations: {
        1: { hasChat: !0, hasFriendList: !1, showNowPlayingForDifferentGames: !1 },
        2: { hasChat: !0, hasFriendList: !0, showNowPlayingForDifferentGames: !1 },
        3: { hasChat: !0, hasFriendList: !0, showNowPlayingForDifferentGames: !0 },
    },
});
function y(e) {
    return S.getConfig({ location: e });
}
function v(e) {
    return S.useConfig({ location: e });
}
function N() {
    d("OVERLAY_INITIALIZED"),
        m("OVERLAY_INITIALIZED"),
        g("OVERLAY_INITIALIZED"),
        I("OVERLAY_INITIALIZED"),
        y("OVERLAY_INITIALIZED");
}
