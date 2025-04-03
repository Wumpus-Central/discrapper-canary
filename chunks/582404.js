n.d(t, { A: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-03_guild_profile_discovery',
    label: 'Enables guild profile dialog on guild discovery cards',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
