n.d(t, {
    B: () => s,
    g: () => a,
});
var r = n(600975),
    i = n(688151);
let a = (0, r.C)({
    kind: "guild",
    id: "2025-10_voice_invite_suggestions",
    label: "Voice Invite Suggestions",
    defaultConfig: {
        enabled: !1,
    },
    commonTriggerPoint: i.$G.VOICE_CALL,
    treatments: [
        {
            id: 1,
            label: "Voice Invite Suggestions - Enabled",
            config: {
                enabled: !0,
            },
        },
    ],
});

function s(e) {
    let { autoTrackExposure: t, location: n, guildId: r } = e;
    return a.useExperiment(
        {
            guildId: r,
            location: n,
        },
        {
            autoTrackExposure: t,
        },
    );
}
