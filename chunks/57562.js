n.d(t, {
    D: () => d,
    T: () => c
});
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(570140),
    a = n(955204),
    l = n(510273),
    o = n(388032);
function c(e) {
    s.Z.dispatch({
        type: 'POGGERMODE_ACHIEVEMENT_UNLOCK',
        achievementId: e
    });
}
function d(e, t) {
    let n = (0, a.oX)(e);
    null != n &&
        (0, i.showToast)(
            (0, i.createToast)(o.NW.string(o.t.MPpEUF), i.ToastType.CUSTOM, {
                position: i.ToastPosition.BOTTOM,
                component: (0, r.jsx)(l.Z, {
                    achievement: n,
                    unlocked: t
                }),
                duration: 6000
            })
        );
}
