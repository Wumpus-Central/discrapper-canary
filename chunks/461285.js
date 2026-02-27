"use strict";
n.d(t, { I: () => i });
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-06_audio_bitrate_adaptation",
    label: "Audio Bitrate Adaptation",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable audio bitrate adaptation", config: { enabled: !0 } }],
});
function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return r.getCurrentConfig({ location: e }, { autoTrackExposure: t });
}
