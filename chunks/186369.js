n.d(t, {
    S: () => a,
    b: () => s,
});
var r = n(600975),
    i = n(688151);
let a = (0, r.C)({
    kind: "guild",
    id: "2025-12_voice_channel_hoisting",
    label: "Voice Channel Hoisting",
    commonTriggerPoint: i.$G.VOICE_CALL,
    defaultConfig: {
        enableWaveformIcon: !1,
        enableHighlight: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Both waveform and highlight",
            config: {
                enableWaveformIcon: !0,
                enableHighlight: !0,
            },
        },
        {
            id: 2,
            label: "Waveform icon only",
            config: {
                enableWaveformIcon: !0,
                enableHighlight: !1,
            },
        },
    ],
});

function s(e, t) {
    return a.useExperiment(
        {
            guildId: e,
            location: t,
        },
        {
            autoTrackExposure: !1,
        },
    );
}
