"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366),
    s = n(235079);
let a = { soundpack: s.i.CLASSIC, lastSoundpackExperimentId: null };
class o extends i.Ay.PersistedStore {
    static displayName = "SoundpackStore";
    static persistKey = "SoundpackStore";
    initialize(e) {
        null != e && ((a = e), Object.values(s.i).includes(a.soundpack) || (a.soundpack = s.i.CLASSIC));
    }
    getState() {
        return a;
    }
    getSoundpack() {
        return a.soundpack;
    }
    getLastSoundpackExperimentId() {
        return a.lastSoundpackExperimentId;
    }
}
let l = new o(r.h, {
    SET_SOUNDPACK: function (e) {
        let { soundpack: t, forExperimentId: n } = e;
        a = { soundpack: t, lastSoundpackExperimentId: void 0 !== n ? n : a.lastSoundpackExperimentId };
    },
});
