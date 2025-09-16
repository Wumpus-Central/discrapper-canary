n.d(t, {
    A0: () => a,
    Lz: () => r,
    ZO: () => i,
});
let r = (0, n(818083).B)({
    kind: "guild",
    id: "2025-08_portkey_enabled",
    label: "Portkey Enabled",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable Portkey",
            config: { enabled: !0 },
        },
    ],
});
function i(e, t) {
    return r.getCurrentConfig(
        {
            guildId: e,
            location: t,
        },
        { autoTrackExposure: !1 },
    ).enabled;
}
function a(e, t) {
    return r.useExperiment(
        {
            guildId: e,
            location: t,
        },
        { autoTrackExposure: !1 },
    ).enabled;
}
