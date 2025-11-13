n.d(t, { o: () => a });
var i = n(818083),
    r = n(973285);
let l = (0, i.B)({
    kind: "guild",
    id: "2025-10_voice_invite_suggestions",
    label: "Voice Invite Suggestions",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Voice Invite Suggestions - Enabled",
            config: { enabled: !0 },
        },
    ],
});
function a(e) {
    let { autoTrackExposure: t, location: n, guildId: i } = e,
        { enabled: a } = r.W.useExperiment({
            guildId: i,
            location: n,
        });
    return l.useExperiment(
        {
            guildId: i,
            location: n,
        },
        {
            autoTrackExposure: t,
            disable: !a,
        },
    );
}
