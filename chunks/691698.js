n.d(t, { cT: () => i });
let r = (0, n(818083).B)({
    kind: "guild",
    id: "2025-08_boost_progress_bar_cta",
    label: "Boost Progress Bar CTA",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "enabled",
            config: { enabled: !0 },
        },
    ],
});
function i(e, t) {
    return r.useExperiment(
        {
            guildId: e,
            location: t,
        },
        { autoTrackExposure: !0 },
    ).enabled;
}
