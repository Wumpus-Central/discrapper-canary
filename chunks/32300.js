n.d(t, {
    NW: () => d,
    OV: () => a,
    Rb: () => o,
    XE: () => f,
    b4: () => u,
    o4: () => s,
    zu: () => l
});
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
    kind: 'user',
    id: '2024-10_overlay_v3',
    label: 'Overlay V3 Shared Context OOP',
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
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
function s(e) {
    return a.useExperiment({ location: e });
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return a.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
let l = (0, i.B)({
    kind: 'user',
    id: '2024-12_overlay_v3_tech',
    label: 'Overlay V3 Shared Tech Experiment',
    defaultConfig: { useOverlayV3Tech: !1 },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Use Overlay V3 Tech',
            config: { useOverlayV3Tech: !0 }
        }
    ]
});
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return !!l.getCurrentConfig({ location: e }, { autoTrackExposure: t }).useOverlayV3Tech || o(e, t).overlayV3tech;
}
function c(e) {
    let t = l.useExperiment({ location: e }),
        n = s(e);
    return t.useOverlayV3Tech || n.overlayV3tech;
}
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return o(e, t).overlayV3tech || u(e, t);
}
function f(e) {
    let t = s(e),
        n = c(e);
    return t.overlayV3tech || n;
}
