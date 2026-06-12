"use strict";
n.d(t, { S: () => s, b: () => a });
var i = n(600975),
    r = n(688151);
let s = (0, i.C)({
    kind: "guild",
    id: "2025-12_voice_channel_hoisting",
    label: "Voice Channel Hoisting",
    commonTriggerPoint: r.$G.VOICE_CALL,
    defaultConfig: { enableWaveformIcon: !1, enableHighlight: !1 },
    treatments: [
        { id: 1, label: "Both waveform and highlight", config: { enableWaveformIcon: !0, enableHighlight: !0 } },
        { id: 2, label: "Waveform icon only", config: { enableWaveformIcon: !0, enableHighlight: !1 } },
    ],
});
function a(e, t) {
    return s.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 });
}
