n.d(t, {
    W: () => o,
    o: () => s,
});
var r = n(818083),
    i = n(973285),
    a = n(987338);
let o = (0, r.B)({
    kind: "guild",
    id: "2025-10_voice_invite_suggestions",
    label: "Voice Invite Suggestions",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.VOICE_CALL,
    treatments: [
        {
            id: 1,
            label: "Voice Invite Suggestions - Enabled",
            config: { enabled: !0 },
        },
    ],
});
function s(e) {
    let { autoTrackExposure: t, location: n, guildId: r } = e,
        { enabled: a } = i.W.useExperiment({
            guildId: r,
            location: n,
        });
    return o.useExperiment(
        {
            guildId: r,
            location: n,
        },
        {
            autoTrackExposure: t,
            disable: !a,
        },
    );
}
