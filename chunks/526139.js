n.d(t, {
    M: () => o,
    c: () => a,
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: "guild",
    id: "2025-12_voice_channel_hoisting",
    label: "Voice Channel Hoisting",
    commonTriggerPoint: i.$P.VOICE_CALL,
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
function o(e, t) {
    return a.useExperiment(
        {
            guildId: e,
            location: t,
        },
        { autoTrackExposure: !1 },
    );
}
