r.d(n, {
    WR: function () {
        return o;
    },
    gY: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2025-01_advanced_server_join',
    label: 'Advanced Server Join Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Advanced Server Join',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: n } = e;
    return i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 }).enabled;
}
function o(e) {
    let { location: n } = e;
    return i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 }).enabled;
}
