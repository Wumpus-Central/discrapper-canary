n.d(t, {
    Tq: () => a,
    W: () => i
});
let r = (0, n(818083).B)({
    kind: 'guild',
    id: '2025-06_booster_enhanced_role_colors',
    label: 'Booster Enhanced Role Colors',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enabled',
            config: { enabled: !0 }
        }
    ]
});
function i(e, t) {
    return r.useExperiment(
        {
            guildId: e,
            location: t
        },
        { autoTrackExposure: !1 }
    ).enabled;
}
function a(e, t) {
    return r.getCurrentConfig(
        {
            guildId: e,
            location: t
        },
        { autoTrackExposure: !1 }
    ).enabled;
}
