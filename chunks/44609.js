n.d(t, {
    WR: () => a,
    gY: () => r,
    m4: () => s
});
let i = (0, n(818083).B)({
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
function r(e) {
    let { location: t } = e;
    return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled;
}
function a(e) {
    let { location: t } = e;
    return i.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}
function s(e) {
    let { location: t } = e;
    return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).allowServerMute;
}
