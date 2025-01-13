r.d(n, {
    NW: function () {
        return d;
    },
    Rb: function () {
        return o;
    },
    XE: function () {
        return f;
    },
    b4: function () {
        return u;
    },
    o4: function () {
        return s;
    }
});
var i = r(818083);
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
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return a.getCurrentConfig({ location: e }, { autoTrackExposure: n }).useOverlayV3;
}
let l = (0, i.B)({
    kind: 'user',
    id: '2024-12_overlay_v3_tech',
    label: 'Overlay V3 Shared Tech Experiment',
    defaultConfig: { useOverlayV3Tech: !1 },
    treatments: [
        {
            id: 1,
            label: 'Use Overlay V3 Tech',
            config: { useOverlayV3Tech: !0 }
        }
    ]
});
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return l.getCurrentConfig({ location: e }, { autoTrackExposure: n }).useOverlayV3Tech;
}
function c(e) {
    return l.useExperiment({ location: e }).useOverlayV3Tech;
}
function d(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return o(e, n) || u(e, n);
}
function f(e) {
    let n = s(e),
        r = c(e);
    return n || r;
}
