n.d(t, { Z: () => d });
var r,
    i = n(442837),
    o = n(570140),
    a = n(871465);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = {
    soundpack: a.YC.CLASSIC,
    lastSoundpackExperimentId: null
};
function c(e) {
    let { soundpack: t, forExperimentId: n } = e;
    l = {
        soundpack: t,
        lastSoundpackExperimentId: void 0 !== n ? n : l.lastSoundpackExperimentId
    };
}
class u extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && ((l = e), Object.values(a.YC).includes(l.soundpack) || (l.soundpack = a.YC.CLASSIC));
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
s(u, 'displayName', 'SoundpackStore'), s(u, 'persistKey', 'SoundpackStore');
let d = new u(o.Z, { SET_SOUNDPACK: c });
