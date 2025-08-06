n.d(t, {
    WR: () => o,
    gY: () => i,
    m4: () => a
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-01_advanced_server_join',
    label: 'Advanced Server Join Experiment',
    defaultConfig: {
        enabled: !1,
        allowServerMute: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable Advanced Server Join w/ Server Mute',
            config: {
                enabled: !0,
                allowServerMute: !0
            }
        },
        {
            id: 2,
            label: 'Enable Advanced Server Join w/o Server Mute',
            config: {
                enabled: !0,
                allowServerMute: !1
            }
        }
    ]
});
function i(e) {
    let { location: t } = e;
    return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled;
}
function o(e) {
    let { location: t } = e;
    return r.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}
function a(e) {
    let { location: t } = e;
    return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).allowServerMute;
}
