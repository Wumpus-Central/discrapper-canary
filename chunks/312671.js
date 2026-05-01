n.d(t, { A: () => o });
var i = n(17928),
    l = n(228366),
    a = n(235079);
let r = { soundpack: a.i.CLASSIC, lastSoundpackExperimentId: null };
class s extends i.Ay.PersistedStore {
    static displayName = "SoundpackStore";
    static persistKey = "SoundpackStore";
    initialize(e) {
        null != e && ((r = e), Object.values(a.i).includes(r.soundpack) || (r.soundpack = a.i.CLASSIC));
    }
    getState() {
        return r;
    }
    getSoundpack() {
        return r.soundpack;
    }
    getLastSoundpackExperimentId() {
        return r.lastSoundpackExperimentId;
    }
}
let o = new s(l.h, {
    SET_SOUNDPACK: function (e) {
        let { soundpack: t, forExperimentId: n } = e;
        r = { soundpack: t, lastSoundpackExperimentId: void 0 !== n ? n : r.lastSoundpackExperimentId };
    },
});
