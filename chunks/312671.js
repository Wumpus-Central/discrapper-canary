n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366),
    l = n(235079);
let a = { soundpack: l.i.CLASSIC, lastSoundpackExperimentId: null };
class s extends i.Ay.PersistedStore {
    static displayName = "SoundpackStore";
    static persistKey = "SoundpackStore";
    initialize(e) {
        null != e && ((a = e), Object.values(l.i).includes(a.soundpack) || (a.soundpack = l.i.CLASSIC));
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
let o = new s(r.h, {
    SET_SOUNDPACK: function (e) {
        let { soundpack: t, forExperimentId: n } = e;
        a = { soundpack: t, lastSoundpackExperimentId: void 0 !== n ? n : a.lastSoundpackExperimentId };
    },
});
