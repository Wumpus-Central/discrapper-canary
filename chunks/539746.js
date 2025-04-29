n.d(t, {
    J$: () => o,
    _J: () => a,
    xG: () => s
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2024-06_game_profile_experiment',
    label: 'Enables the Game Profile',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: n } = o.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return n;
}
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: n } = o.useExperiment({ location: e }, { autoTrackExposure: t });
    return n;
}
