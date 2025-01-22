r.d(n, {
    r8: function () {
        return a;
    },
    wn: function () {
        return o;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2025-01_friend_tiers_ui',
    label: 'Slayer Friend Tiers UI',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable game friend features in app',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: n, autoTrackExposure: r = !0 } = e,
        { enabled: a } = i.getCurrentConfig({ location: n }, { autoTrackExposure: r });
    return a;
}
function o(e) {
    let { location: n, autoTrackExposure: r = !0 } = e,
        { enabled: a } = i.useExperiment({ location: n }, { autoTrackExposure: r });
    return a;
}
