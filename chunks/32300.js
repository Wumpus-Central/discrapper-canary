n.d(t, {
    NW: () => d,
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
    defaultConfig: { useOverlayV3: !1 },
    treatments: [
        {
            id: 1,
            label: 'Use Overlay V3',
            config: { useOverlayV3: !0 }
        }
    ]
});
function s(e) {
    return a.useExperiment({ location: e }).useOverlayV3;
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return a.getCurrentConfig({ location: e }, { autoTrackExposure: t }).useOverlayV3;
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
    return l.getCurrentConfig({ location: e }, { autoTrackExposure: t }).useOverlayV3Tech;
}
function c(e) {
    return l.useExperiment({ location: e }).useOverlayV3Tech;
}
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return o(e, t) || u(e, t);
}
function f(e) {
    let t = s(e),
        n = c(e);
    return t || n;
}
