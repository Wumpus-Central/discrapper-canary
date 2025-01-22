r.d(n, {
    c: function () {
        return l;
    }
});
var i = r(570140),
    a = r(626135),
    o = r(474873),
    s = r(981631);
function l(e, n) {
    a.default.track(s.rMx.SOUNDPACK_UPDATED, {
        soundpack: e,
        previous_soundpack: o.Z.getSoundpack()
    }),
        i.Z.dispatch({
            type: 'SET_SOUNDPACK',
            soundpack: e,
            forExperimentId: n
        });
}
