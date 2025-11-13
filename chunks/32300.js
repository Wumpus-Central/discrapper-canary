n.d(t, {
    F3: () => x,
    KK: () => w,
    NW: () => d,
    OV: () => l,
    RD: () => y,
    Rb: () => u,
    Se: () => m,
    Sy: () => P,
    XE: () => f,
    YB: () => b,
    Yo: () => _,
    ZU: () => A,
    aq: () => I,
    dj: () => p,
    eV: () => C,
    hS: () => g,
    hb: () => R,
    lj: () => v,
    mB: () => E,
    o4: () => c,
    tU: () => S,
    td: () => h,
});
var r = n(348327),
    i = n.n(r),
    a = n(818083),
    o = n(427164),
    s = n(987338);
let l = (0, a.B)({
    kind: "user",
    id: "2024-10_overlay_v3",
    label: "Overlay V3 Shared Context OOP",
    commonTriggerPoint: s.$P.CONNECTION_OPEN,
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
function c(e) {
    return l.useExperiment({ location: e });
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return l.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return u(e, t).overlayV3tech;
}
function f(e) {
    return c(e).overlayV3tech;
}
function _(e) {
    return u(e).allowNowPlaying;
}
let p = (0, a.B)({
    kind: "user",
    id: "2025-06_overlay_raf_manager",
    label: "Overlay RAF Manager",
    commonTriggerPoint: s.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable RAF Manager",
            config: { enabled: !0 },
        },
    ],
});
function h(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return p.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let m = (0, a.B)({
    kind: "user",
    id: "2025-06_overlay_render_timeout",
    label: "Overlay Render Timeout",
    commonTriggerPoint: s.$P.CONNECTION_OPEN,
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
function g(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return m.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let E = (0, a.B)({
    kind: "user",
    id: "2025-07_overlay_default_disable",
    label: "Overlay Default Disable",
    commonTriggerPoint: s.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable Default Disable Behavior",
            config: { enabled: !0 },
        },
    ],
});
function b(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return E.getCurrentConfig({ location: e }, { autoTrackExposure: t }).enabled;
}
var y = (function (e) {
    return (
        (e[(e.GREEN_BUTTON_WITH_TEXT = 0)] = "GREEN_BUTTON_WITH_TEXT"),
        (e[(e.GRAY_BUTTON_WITH_TEXT = 1)] = "GRAY_BUTTON_WITH_TEXT"),
        (e[(e.SINGLE_ICON_BUTTON = 2)] = "SINGLE_ICON_BUTTON"),
        e
    );
})({});
let O = (0, o.le)({
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
let T = (0, a.B)({
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
let A = (0, a.B)({
    id: "2025-10_overlay_default_keybind",
    label: "Overlay Default Keybind",
    kind: "user",
    defaultConfig: { keybindOverride: void 0 },
    treatments: [
        {
            id: 1,
            label: "Ctrl + Tab Keybind",
            config: { keybindOverride: "ctrl+tab" },
        },
        {
            id: 2,
            label: "Alt + X Keybind",
            config: { keybindOverride: "alt+x" },
        },
        {
            id: 3,
            label: "Ctrl + L Keybind",
            config: { keybindOverride: "ctrl+l" },
        },
    ],
});
function C(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return A.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let N = (0, a.B)({
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
    let t = P(e, !1);
    if (i()(N.definition.defaultConfig, t)) return "control";
    let n = N.definition.treatments.find((e) => i()(e.config, t));
    return null == n ? "control" : "treatment-".concat(n.id);
}
function P(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return N.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let D = (0, a.B)({
    id: "2025-11_overlay_welcome_notification",
    label: "Overlay Welcome Notification",
    kind: "user",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Modular Experience",
            config: { enabled: !0 },
        },
    ],
});
function w(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return D.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
function x() {
    v("OVERLAY_INITIALIZED"), S("OVERLAY_INITIALIZED"), P("OVERLAY_INITIALIZED"), w("OVERLAY_INITIALIZED");
}
