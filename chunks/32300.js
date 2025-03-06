n.d(t, {
    NW: () => d,
    OV: () => o,
    Rb: () => s,
    XE: () => f,
    Yo: () => p,
    b4: () => c,
    o4: () => a,
    w0: () => _,
    zu: () => l
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2024-10_overlay_v3',
    label: 'Overlay V3 Shared Context OOP',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: {
        overlayV3tech: !1,
        overlayV3UI: !1,
        allowActivityWidget: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Use Overlay V3, All features included.',
            config: {
                overlayV3tech: !0,
                overlayV3UI: !0,
                allowActivityWidget: !0
            }
        },
        {
            id: 2,
            label: 'Use Overlay V3, Minus The Activity Widget.',
            config: {
                overlayV3tech: !0,
                overlayV3UI: !0,
                allowActivityWidget: !1
            }
        },
        {
            id: 3,
            label: 'Use Overlay V3 tech with Overlay 2 UI',
            config: {
                overlayV3tech: !0,
                overlayV3UI: !1,
                allowActivityWidget: !1
            }
        }
    ]
});
function a(e) {
    return o.useExperiment({ location: e });
}
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return o.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let l = (0, r.B)({
    kind: 'user',
    id: '2024-12_overlay_v3_tech',
    label: 'Overlay V3 Shared Tech Experiment',
    defaultConfig: { useOverlayV3Tech: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Use Overlay V3 Tech',
            config: { useOverlayV3Tech: !0 }
        }
    ]
});
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return !!l.getCurrentConfig({ location: e }, { autoTrackExposure: t }).useOverlayV3Tech || s(e, t).overlayV3tech;
}
function u(e) {
    let t = l.useExperiment({ location: e }),
        n = a(e);
    return t.useOverlayV3Tech || n.overlayV3tech;
}
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return s(e, t).overlayV3tech || c(e, t);
}
function f(e) {
    let t = a(e),
        n = u(e);
    return t.overlayV3tech || n;
}
let _ = (0, r.B)({
    kind: 'user',
    id: '2025-03_overlay_v3_now_playing',
    label: 'Overlay V3 Now Playing Experiment',
    defaultConfig: { useOverlayNowPlaying: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Overlay Now Playing',
            config: { useOverlayNowPlaying: !0 }
        }
    ]
});
function p(e) {
    return _.getCurrentConfig({ location: e }).useOverlayNowPlaying;
}
