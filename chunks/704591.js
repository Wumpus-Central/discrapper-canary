"use strict";
n.d(t, { AA: () => s, Ym: () => l, ks: () => a, tj: () => o });
var r = n(600975),
    i = n(688151);
let a = (0, r.C)({
    id: "2024-11_soundmoji_sending",
    label: "Send soundmojis",
    kind: "user",
    defaultConfig: { enabled: !1, showSoundmojiInEmojiPicker: !1 },
    commonTriggerPoint: i.$G.CONNECTION_OPEN,
    treatments: [
        { id: 1, label: "Enabled w/o emoji section", config: { enabled: !0, showSoundmojiInEmojiPicker: !1 } },
        { id: 2, label: "Enabled w/ emoji section", config: { enabled: !0, showSoundmojiInEmojiPicker: !0 } },
    ],
});
function s(e) {
    let { location: t } = e;
    return a.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function o(e) {
    let { location: t } = e;
    return a.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function l(e) {
    let { location: t } = e;
    return a.useExperiment({ location: t }, { autoTrackExposure: !1 }).showSoundmojiInEmojiPicker;
}
