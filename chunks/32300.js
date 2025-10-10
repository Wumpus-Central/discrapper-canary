n.d(t, {
    F3: () => P,
    J0: () => b,
    NW: () => c,
    OV: () => o,
    RD: () => y,
    Rb: () => l,
    Se: () => p,
    Sy: () => R,
    XE: () => u,
    YB: () => g,
    Yo: () => d,
    aq: () => I,
    dj: () => f,
    eV: () => C,
    hS: () => h,
    lj: () => v,
    mB: () => m,
    o4: () => s,
    qA: () => E,
    tU: () => S,
    td: () => _,
});
var r = n(818083),
    i = n(427164),
    a = n(987338);
let o = (0, r.B)({
    kind: "user",
    id: "2024-10_overlay_v3",
    label: "Overlay V3 Shared Context OOP",
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    defaultConfig: {
        overlayV3tech: !1,
        overlayV3UI: !1,
        allowActivityWidget: !1,
        allowNowPlaying: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Use Overlay V3, All features included.",
            config: {
                overlayV3tech: !0,
                overlayV3UI: !0,
                allowActivityWidget: !0,
                allowNowPlaying: !0,
            },
        },
        {
            id: 2,
            label: 'Use Overlay V3, Minus "Now Playing" Notif.',
            config: {
                overlayV3tech: !0,
                overlayV3UI: !0,
                allowActivityWidget: !0,
                allowNowPlaying: !1,
            },
        },
        {
            id: 3,
            label: "Use Overlay V3 minus any activity",
            config: {
                overlayV3tech: !0,
                overlayV3UI: !0,
                allowActivityWidget: !1,
                allowNowPlaying: !1,
            },
        },
        {
            id: 4,
            label: "Use Overlay V3 tech with Overlay 2 UI",
            config: {
                overlayV3tech: !0,
                overlayV3UI: !1,
                allowActivityWidget: !1,
                allowNowPlaying: !1,
            },
        },
    ],
});
function s(e) {
    return o.useExperiment({ location: e });
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return o.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return l(e, t).overlayV3tech;
}
function u(e) {
    return s(e).overlayV3tech;
}
function d(e) {
    return l(e).allowNowPlaying;
}
let f = (0, r.B)({
    kind: "user",
    id: "2025-06_overlay_raf_manager",
    label: "Overlay RAF Manager",
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable RAF Manager",
            config: { enabled: !0 },
        },
    ],
});
function _(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return f.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let p = (0, r.B)({
    kind: "user",
    id: "2025-06_overlay_render_timeout",
    label: "Overlay Render Timeout",
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    defaultConfig: {
        shortTimeout: 8000,
        longTimeout: 12000,
    },
    treatments: [
        {
            id: 1,
            label: "Shortest Timeouts (2s, 3s)",
            config: {
                shortTimeout: 2000,
                longTimeout: 3000,
            },
        },
        {
            id: 2,
            label: "Medium Timeouts (4s, 6s)",
            config: {
                shortTimeout: 4000,
                longTimeout: 6000,
            },
        },
        {
            id: 3,
            label: "Longer Timeouts (16s, 24s)",
            config: {
                shortTimeout: 16000,
                longTimeout: 24000,
            },
        },
    ],
});
function h(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return p.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let m = (0, r.B)({
    kind: "user",
    id: "2025-07_overlay_default_disable",
    label: "Overlay Default Disable",
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable Default Disable Behavior",
            config: { enabled: !0 },
        },
    ],
});
function g(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return m.getCurrentConfig({ location: e }, { autoTrackExposure: t }).enabled;
}
let E = (0, r.B)({
    kind: "user",
    id: "2025-07_overlay_oop_nudge",
    label: "Overlay OOP Nudge",
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    defaultConfig: {
        useContextualNudge: !1,
        disableNudge: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Enable Contextual Nudge",
            config: {
                useContextualNudge: !0,
                disableNudge: !1,
            },
        },
        {
            id: 2,
            label: "No Nudge",
            config: {
                useContextualNudge: !1,
                disableNudge: !0,
            },
        },
    ],
});
function b(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return E.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
var y = (function (e) {
    return (
        (e[(e.GREEN_BUTTON_WITH_TEXT = 0)] = "GREEN_BUTTON_WITH_TEXT"),
        (e[(e.GRAY_BUTTON_WITH_TEXT = 1)] = "GRAY_BUTTON_WITH_TEXT"),
        (e[(e.SINGLE_ICON_BUTTON = 2)] = "SINGLE_ICON_BUTTON"),
        e
    );
})({});
let O = (0, i.le)({
    name: "2025-08-overlay-stream-watch-nudge",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        designVariant: null,
    },
    variations: {
        1: {
            enabled: !0,
            designVariant: 0,
        },
        2: {
            enabled: !0,
            designVariant: 1,
        },
        3: {
            enabled: !0,
            designVariant: 2,
        },
    },
});
function v(e) {
    return O.getConfig({ location: e });
}
function I(e) {
    return O.useConfig({ location: e });
}
let T = (0, r.B)({
    kind: "user",
    id: "2025-10_overlay_v3_one_click_go_live",
    label: "Overlay V3 One Click Go Live",
    defaultConfig: {
        oneClickGoLiveEnabled: !1,
        useStreamCtaCopy: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Use Stream CTA Copy",
            config: {
                oneClickGoLiveEnabled: !1,
                useStreamCtaCopy: !0,
            },
        },
        {
            id: 2,
            label: "Enable One Click Go Live with Stream CTA Copy",
            config: {
                oneClickGoLiveEnabled: !0,
                useStreamCtaCopy: !0,
            },
        },
    ],
});
function S(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return T.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let A = (0, i.le)({
    name: "2025-09-overlay-default-keybind",
    kind: "user",
    defaultConfig: { keybindOverride: void 0 },
    variations: { 1: { keybindOverride: "alt+a" } },
});
function C(e) {
    return A.getConfig({ location: e });
}
let N = (0, r.B)({
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
function R(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return N.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
function P() {
    v("OVERLAY_INITIALIZED"), S("OVERLAY_INITIALIZED"), R("OVERLAY_INITIALIZED");
}
