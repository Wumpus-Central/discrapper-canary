n.d(t, {
    F: () => r,
    S: () => i,
});
let r = (0, n(818083).B)({
    kind: "guild",
    id: "2026-01_voice_channel_duration_mobile",
    label: "Voice Channel Duration (Mobile)",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Display the duration next to the Voice Channel",
            config: { enabled: !0 },
        },
    ],
});
function i(e, t) {
    return r.useExperiment({
        guildId: e,
        location: t,
    }).enabled;
}
