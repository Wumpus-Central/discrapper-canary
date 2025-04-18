n.d(t, { c: () => s });
var r = n(570140),
    i = n(626135),
    a = n(474873),
    o = n(981631);
function s(e, t) {
    i.default.track(o.rMx.SOUNDPACK_UPDATED, {
        soundpack: e,
        previous_soundpack: a.Z.getSoundpack()
    }),
        r.Z.dispatch({
            type: 'SET_SOUNDPACK',
            soundpack: e,
            forExperimentId: t
        });
}
