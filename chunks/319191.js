"use strict";
let r;
n.d(t, { A: () => u });
var i = n(311907),
    a = n(73153),
    s = n(194486);
let o = () => {
    r = r === s.B.BASIC ? s.B.PREMIUM : s.B.BASIC;
};
class l extends i.Ay.PersistedStore {
    static displayName = "VoiceChannelEffectsPersistedStore";
    static persistKey = "VoiceChannelEffectsPersistedStore";
    initialize(e) {
        r = e?.animationType ?? s.B.PREMIUM;
    }
    getState() {
        return { animationType: r };
    }
}
let u = new l(a.h, { VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: o });
