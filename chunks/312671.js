n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366),
    a = n(235079);
let s = { soundpack: a.i.CLASSIC, lastSoundpackExperimentId: null };
class l extends i.Ay.PersistedStore {
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
let o = new l(r.h, {
    SET_SOUNDPACK: function (e) {
        let { soundpack: t, forExperimentId: n } = e;
        s = { soundpack: t, lastSoundpackExperimentId: void 0 !== n ? n : s.lastSoundpackExperimentId };
    },
});
