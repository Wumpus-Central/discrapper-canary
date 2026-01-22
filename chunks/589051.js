n.d(t, {
    E: () => w,
    Fg: () => m,
    H: () => v,
    Jo: () => u,
    LA: () => f,
    QC: () => g,
    X4: () => R,
    Yz: () => d,
    aS: () => S,
    cB: () => l,
    lR: () => y,
    m5: () => b,
    o0: () => T,
    oA: () => p,
    sq: () => O,
    wD: () => _,
    wG: () => c,
});
var r = n(812729),
    i = n.n(r),
    a = n(600975),
    s = n(945810),
    o = n(688151);
let l = (0, a.C)({
    kind: "user",
    id: "2025-06_overlay_raf_manager",
    label: "Overlay RAF Manager",
    commonTriggerPoint: o.$G.CONNECTION_OPEN,
    defaultConfig: {
        enabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Enable RAF Manager",
            config: {
                enabled: !0,
            },
        },
    ],
});

function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return l.getCurrentConfig(
        {
            location: e,
        },
        {
            autoTrackExposure: t,
        },
    );
}
let u = (0, a.C)({
    kind: "user",
    id: "2025-06_overlay_render_timeout",
    label: "Overlay Render Timeout",
    commonTriggerPoint: o.$G.CONNECTION_OPEN,
    defaultConfig: {
        shortTimeout: 8e3,
        longTimeout: 12e3,
    },
    treatments: [
        {
            id: 1,
            label: "Shortest Timeouts (2s, 3s)",
            config: {
                shortTimeout: 2e3,
                longTimeout: 3e3,
            },
        },
        {
            id: 2,
            label: "Medium Timeouts (4s, 6s)",
            config: {
                shortTimeout: 4e3,
                longTimeout: 6e3,
            },
        },
        {
            id: 3,
            label: "Longer Timeouts (16s, 24s)",
            config: {
                shortTimeout: 16e3,
                longTimeout: 24e3,
            },
        },
    ],
});

function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return u.getCurrentConfig(
        {
            location: e,
        },
        {
            autoTrackExposure: t,
        },
    );
}
let f = (0, a.C)({
    kind: "user",
    id: "2025-07_overlay_default_disable",
    label: "Overlay Default Disable",
    commonTriggerPoint: o.$G.CONNECTION_OPEN,
    defaultConfig: {
        enabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Enable Default Disable Behavior",
            config: {
                enabled: !0,
            },
        },
    ],
});

function p(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return f.getCurrentConfig(
        {
            location: e,
        },
        {
            autoTrackExposure: t,
        },
    ).enabled;
}
var _ = (function (e) {
    return (
        (e[(e.GREEN_BUTTON_WITH_TEXT = 0)] = "GREEN_BUTTON_WITH_TEXT"),
        (e[(e.GRAY_BUTTON_WITH_TEXT = 1)] = "GRAY_BUTTON_WITH_TEXT"),
        (e[(e.SINGLE_ICON_BUTTON = 2)] = "SINGLE_ICON_BUTTON"),
        e
    );
})({});
let h = (0, s.mj)({
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

function m(e) {
    return h.getConfig({
        location: e,
    });
}

function g(e) {
    return h.useConfig({
        location: e,
    });
}
let E = (0, a.C)({
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

function b(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return E.getCurrentConfig(
        {
            location: e,
        },
        {
            autoTrackExposure: t,
        },
    );
}
let y = (0, a.C)({
    id: "2025-10_overlay_default_keybind",
    label: "Overlay Default Keybind",
    kind: "user",
    defaultConfig: {
        keybindOverride: void 0,
    },
    treatments: [
        {
            id: 1,
            label: "Ctrl + Tab Keybind",
            config: {
                keybindOverride: "ctrl+tab",
            },
        },
        {
            id: 2,
            label: "Alt + X Keybind",
            config: {
                keybindOverride: "alt+x",
            },
        },
        {
            id: 3,
            label: "Ctrl + L Keybind",
            config: {
                keybindOverride: "ctrl+l",
            },
        },
    ],
});

function O(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return y.getCurrentConfig(
        {
            location: e,
        },
        {
            autoTrackExposure: t,
        },
    );
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

function v(e) {
    let t = S(e, !1);
    if (i()(A.definition.defaultConfig, t)) return "control";
    let n = A.definition.treatments.find((e) => i()(e.config, t));
    return null == n ? "control" : "treatment-".concat(n.id);
}

function S(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return A.getCurrentConfig(
        {
            location: e,
        },
        {
            autoTrackExposure: t,
        },
    );
}
let I = (0, a.C)({
    id: "2025-11_overlay_welcome_notification",
    label: "Overlay Welcome Notification",
    kind: "user",
    defaultConfig: {
        enabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Modular Experience",
            config: {
                enabled: !0,
            },
        },
    ],
});

function T(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return I.getCurrentConfig(
        {
            location: e,
        },
        {
            autoTrackExposure: t,
        },
    );
}
let C = (0, a.C)({
    id: "2025-11_overlay_bug_reporter",
    label: "Overlay Bug Reporter",
    kind: "user",
    defaultConfig: {
        enabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Enable Bug Reporter",
            config: {
                enabled: !0,
            },
        },
    ],
});

function N(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return C.getCurrentConfig(
        {
            location: e,
        },
        {
            autoTrackExposure: t,
        },
    );
}

function R(e) {
    return C.useExperiment({
        location: e,
    }).enabled;
}

function w() {
    m("OVERLAY_INITIALIZED"),
        b("OVERLAY_INITIALIZED"),
        S("OVERLAY_INITIALIZED"),
        T("OVERLAY_INITIALIZED"),
        N("OVERLAY_INITIALIZED");
}
