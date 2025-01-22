n.d(t, {
    r8: function () {
        return r;
    },
    wn: function () {
        return s;
    }
});
let i = (0, n(818083).B)({
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
function r(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: r } = i.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return r;
}
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: r } = i.useExperiment({ location: t }, { autoTrackExposure: n });
    return r;
}
