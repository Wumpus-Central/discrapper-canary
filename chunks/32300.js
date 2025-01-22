r.d(n, {
    NW: function () {
        return f;
    },
    Rb: function () {
        return l;
    },
    XE: function () {
        return p;
    },
    b4: function () {
        return c;
    },
    o4: function () {
        return s;
    },
    zu: function () {
        return u;
    }
});
var i = r(818083),
    a = r(987338);
let o = (0, i.B)({
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
    return o.useExperiment({ location: e }).useOverlayV3;
}
function l(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return o.getCurrentConfig({ location: e }, { autoTrackExposure: n }).useOverlayV3;
}
let u = (0, i.B)({
    kind: 'user',
    id: '2024-12_overlay_v3_tech',
    label: 'Overlay V3 Shared Tech Experiment',
    defaultConfig: { useOverlayV3Tech: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Use Overlay V3 Tech',
            config: { useOverlayV3Tech: !0 }
        }
    ]
});
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return u.getCurrentConfig({ location: e }, { autoTrackExposure: n }).useOverlayV3Tech;
}
function d(e) {
    return u.useExperiment({ location: e }).useOverlayV3Tech;
}
function f(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return l(e, n) || c(e, n);
}
function p(e) {
    let n = s(e),
        r = d(e);
    return n || r;
}
