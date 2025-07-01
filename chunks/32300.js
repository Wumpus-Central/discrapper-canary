n.d(t, {
    NW: () => l,
    OV: () => a,
    Rb: () => s,
    Se: () => _,
    XE: () => c,
    Yo: () => u,
    dj: () => d,
    hS: () => p,
    o4: () => o,
    td: () => f
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2024-10_overlay_v3',
    label: 'Overlay V3 Shared Context OOP',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: {
        overlayV3tech: !1,
        overlayV3UI: !1,
        allowActivityWidget: !1,
        allowNowPlaying: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Use Overlay V3, All features included.',
            config: {
                overlayV3tech: !0,
                overlayV3UI: !0,
                allowActivityWidget: !0,
                allowNowPlaying: !0
            }
        },
        {
            id: 2,
            label: 'Use Overlay V3, Minus "Now Playing" Notif.',
            config: {
                overlayV3tech: !0,
                overlayV3UI: !0,
                allowActivityWidget: !0,
                allowNowPlaying: !1
            }
        },
        {
            id: 3,
            label: 'Use Overlay V3 minus any activity',
            config: {
                overlayV3tech: !0,
                overlayV3UI: !0,
                allowActivityWidget: !1,
                allowNowPlaying: !1
            }
        },
        {
            id: 4,
            label: 'Use Overlay V3 tech with Overlay 2 UI',
            config: {
                overlayV3tech: !0,
                overlayV3UI: !1,
                allowActivityWidget: !1,
                allowNowPlaying: !1
            }
        }
    ]
});
function o(e) {
    return a.useExperiment({ location: e });
}
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return a.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return s(e, t).overlayV3tech;
}
function c(e) {
    return o(e).overlayV3tech;
}
function u(e) {
    return s(e).allowNowPlaying;
}
let d = (0, r.B)({
    kind: 'user',
    id: '2025-06_overlay_raf_manager',
    label: 'Overlay RAF Manager',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable RAF Manager',
            config: { enabled: !0 }
        }
    ]
});
function f(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return d.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let _ = (0, r.B)({
    kind: 'user',
    id: '2025-06_overlay_render_timeout',
    label: 'Overlay Render Timeout',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: {
        shortTimeout: 8000,
        longTimeout: 12000
    },
    treatments: [
        {
            id: 1,
            label: 'Shortest Timeouts (2s, 3s)',
            config: {
                shortTimeout: 2000,
                longTimeout: 3000
            }
        },
        {
            id: 2,
            label: 'Medium Timeouts (4s, 6s)',
            config: {
                shortTimeout: 4000,
                longTimeout: 6000
            }
        },
        {
            id: 3,
            label: 'Longer Timeouts (16s, 24s)',
            config: {
                shortTimeout: 16000,
                longTimeout: 24000
            }
        }
    ]
});
function p(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return _.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
