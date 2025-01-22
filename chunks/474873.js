var i,
    a = r(442837),
    o = r(570140),
    s = r(871465);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = {
    soundpack: s.YC.CLASSIC,
    lastSoundpackExperimentId: null
};
function c(e) {
    let { soundpack: n, forExperimentId: r } = e;
    u = {
        soundpack: n,
        lastSoundpackExperimentId: void 0 !== r ? r : u.lastSoundpackExperimentId
    };
}
class d extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && ((u = e), !Object.values(s.YC).includes(u.soundpack) && (u.soundpack = s.YC.CLASSIC));
    }
    getState() {
        return u;
    }
    getSoundpack() {
        return u.soundpack;
    }
    getLastSoundpackExperimentId() {
        return u.lastSoundpackExperimentId;
    }
}
l(d, 'displayName', 'SoundpackStore'), l(d, 'persistKey', 'SoundpackStore'), (n.Z = new d(o.Z, { SET_SOUNDPACK: c }));
