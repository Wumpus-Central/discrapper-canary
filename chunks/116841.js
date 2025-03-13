n.d(t, { c: () => i });
let r = (0, n(987170).Z)({
    kind: 'user',
    id: '2025-03_activity_privacy_per_guild_settings',
    label: 'Show per-guild activity privacy settings',
    defaultConfig: { showPerGuildActivityStatusSetting: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show settings',
            config: { showPerGuildActivityStatusSetting: !0 }
        }
    ]
});
function i(e) {
    return r.useExperiment({ location: e }, { autoTrackExposure: !0 });
}
