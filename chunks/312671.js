n.d(t, { A: () => d });
var r,
    i = n(311907),
    a = n(73153),
    s = n(235079);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = {
    soundpack: s.i.CLASSIC,
    lastSoundpackExperimentId: null,
};
function c(e) {
    let { soundpack: t, forExperimentId: n } = e;
    l = {
        soundpack: t,
        lastSoundpackExperimentId: void 0 !== n ? n : l.lastSoundpackExperimentId,
    };
}
class u extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && ((l = e), Object.values(s.i).includes(l.soundpack) || (l.soundpack = s.i.CLASSIC));
    }
    getState() {
        return l;
    }
    getSoundpack() {
        return l.soundpack;
    }
    getLastSoundpackExperimentId() {
        return l.lastSoundpackExperimentId;
    }
}
o(u, "displayName", "SoundpackStore"), o(u, "persistKey", "SoundpackStore");
let d = new u(a.h, { SET_SOUNDPACK: c });
