"use strict";
n.d(t, {
    E: () => D,
    Fg: () => _,
    H: () => I,
    LA: () => l,
    M8: () => O,
    NI: () => R,
    QC: () => f,
    X4: () => b,
    aS: () => T,
    lR: () => g,
    m5: () => p,
    o0: () => S,
    oA: () => u,
    sq: () => E,
    wD: () => c,
});
var r = n(812729),
    i = n.n(r),
    a = n(600975),
    s = n(945810),
    o = n(688151);
let l = (0, a.C)({
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
var c = (function (e) {
    return (
        (e[(e.GREEN_BUTTON_WITH_TEXT = 0)] = "GREEN_BUTTON_WITH_TEXT"),
        (e[(e.GRAY_BUTTON_WITH_TEXT = 1)] = "GRAY_BUTTON_WITH_TEXT"),
        (e[(e.SINGLE_ICON_BUTTON = 2)] = "SINGLE_ICON_BUTTON"),
        e
    );
})({});
let d = (0, s.mj)({
    name: "2025-08-overlay-stream-watch-nudge",
    kind: "user",
    defaultConfig: { enabled: !1, designVariant: null },
    variations: {
        1: { enabled: !0, designVariant: 0 },
        2: { enabled: !0, designVariant: 1 },
        3: { enabled: !0, designVariant: 2 },
    },
});
function _(e) {
    return d.getConfig({ location: e });
}
function f(e) {
    return d.useConfig({ location: e });
}
let h = (0, a.C)({
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
function p(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return h.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let g = (0, a.C)({
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
function E(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return g.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let A = (0, a.C)({
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
function I(e) {
    let t = T(e, !1);
    if (i()(A.definition.defaultConfig, t)) return "control";
    let n = A.definition.treatments.find((e) => i()(e.config, t));
    return null == n ? "control" : `treatment-${n.id}`;
}
function T(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return A.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let y = (0, a.C)({
    id: "2025-11_overlay_welcome_notification",
    label: "Overlay Welcome Notification",
    kind: "user",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Modular Experience", config: { enabled: !0 } }],
});
function S(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return y.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let v = (0, a.C)({
    id: "2025-11_overlay_bug_reporter",
    label: "Overlay Bug Reporter",
    kind: "user",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Bug Reporter", config: { enabled: !0 } }],
});
function C(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return v.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
function b(e) {
    return v.useExperiment({ location: e }).enabled;
}
let N = (0, s.mj)({
    name: "2025-11-overlay-chat",
    kind: "user",
    defaultConfig: { hasChat: !1, hasFriendList: !1, showNowPlayingForDifferentGames: !1 },
    variations: {
        1: { hasChat: !0, hasFriendList: !1, showNowPlayingForDifferentGames: !1 },
        2: { hasChat: !0, hasFriendList: !0, showNowPlayingForDifferentGames: !1 },
        3: { hasChat: !0, hasFriendList: !0, showNowPlayingForDifferentGames: !0 },
    },
});
function R(e) {
    return N.getConfig({ location: e });
}
function O(e) {
    return N.useConfig({ location: e });
}
function D() {
    _("OVERLAY_INITIALIZED"),
        p("OVERLAY_INITIALIZED"),
        T("OVERLAY_INITIALIZED"),
        S("OVERLAY_INITIALIZED"),
        C("OVERLAY_INITIALIZED"),
        R("OVERLAY_INITIALIZED");
}
