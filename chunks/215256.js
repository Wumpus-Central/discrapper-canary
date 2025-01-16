o.d(n, {
    M: function () {
        return a;
    },
    f: function () {
        return t;
    }
});
let t = (0, o(818083).B)({
    kind: 'user',
    id: '2024-12_global_discovery_apps_logged_out',
    label: 'Global Discovery Apps - Logged Out',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: n } = e;
    return t.useExperiment({ location: n }, { autoTrackExposure: !1 }).enabled;
}
