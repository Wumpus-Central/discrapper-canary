n.d(t, {
    WR: function () {
        return r;
    }
});
let i = (0, n(818083).B)({
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
function r(e) {
    let { location: t } = e;
    return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled;
}
