n.d(t, {
    W: () => a,
    o: () => o,
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: "guild",
    id: "2025-10_voice_invite_suggestions",
    label: "Voice Invite Suggestions",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.VOICE_CALL,
    treatments: [
        {
            id: 1,
            label: "Voice Invite Suggestions - Enabled",
            config: { enabled: !0 },
        },
    ],
});
function o(e) {
    let { autoTrackExposure: t, location: n, guildId: r } = e;
    return a.useExperiment(
        {
            guildId: r,
            location: n,
        },
        { autoTrackExposure: t },
    );
}
