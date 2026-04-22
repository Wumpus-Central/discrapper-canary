"use strict";
let r;
n.d(t, { A: () => l });
var i = n(311907),
    s = n(73153),
    a = n(194486);
class o extends i.Ay.PersistedStore {
    static displayName = "VoiceChannelEffectsPersistedStore";
    static persistKey = "VoiceChannelEffectsPersistedStore";
    initialize(e) {
        r = e?.animationType ?? a.B.PREMIUM;
    }
    getState() {
        return { animationType: r };
    }
}
let l = new o(s.h, {
    VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: () => {
        r = r === a.B.BASIC ? a.B.PREMIUM : a.B.BASIC;
    },
});
