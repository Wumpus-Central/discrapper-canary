"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153),
    a = n(235079);
let s = { soundpack: a.i.CLASSIC, lastSoundpackExperimentId: null };
function o(e) {
    let { soundpack: t, forExperimentId: n } = e;
    s = { soundpack: t, lastSoundpackExperimentId: void 0 !== n ? n : s.lastSoundpackExperimentId };
}
class l extends r.Ay.PersistedStore {
    static displayName = "SoundpackStore";
    static persistKey = "SoundpackStore";
    initialize(e) {
        null != e && ((s = e), Object.values(a.i).includes(s.soundpack) || (s.soundpack = a.i.CLASSIC));
    }
    getState() {
        return s;
    }
    getSoundpack() {
        return s.soundpack;
    }
    getLastSoundpackExperimentId() {
        return s.lastSoundpackExperimentId;
    }
}
let u = new l(i.h, { SET_SOUNDPACK: o });
