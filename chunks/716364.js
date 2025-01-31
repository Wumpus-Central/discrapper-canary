n.d(t, { c: () => o });
var i = n(570140),
    r = n(626135),
    a = n(474873),
    s = n(981631);
function o(e, t) {
    r.default.track(s.rMx.SOUNDPACK_UPDATED, {
        soundpack: e,
        previous_soundpack: a.Z.getSoundpack()
    }),
        i.Z.dispatch({
            type: 'SET_SOUNDPACK',
            soundpack: e,
            forExperimentId: t
        });
}
