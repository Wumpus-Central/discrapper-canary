t.d(n, {
    M: function () {
        return o;
    },
    f: function () {
        return l;
    }
});
let l = (0, t(818083).B)({
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
function o(e) {
    let { location: n } = e;
    return l.useExperiment({ location: n }, { autoTrackExposure: !1 }).enabled;
}
