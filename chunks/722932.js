r.d(n, {
    X0: function () {
        return l;
    },
    uH: function () {
        return s;
    },
    zv: function () {
        return o;
    }
});
var i = r(818083),
    a = r(987338);
let o = (0, i.B)({
    id: '2024-11_soundmoji_rendering',
    label: 'Render soundmojis',
    kind: 'user',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function s(e) {
    let { location: n } = e;
    return o.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }).enabled;
}
function l(e) {
    let { location: n } = e;
    return o.useExperiment({ location: n }, { autoTrackExposure: !1 }).enabled;
}
