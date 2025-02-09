n.d(t, {
    D: () => d,
    T: () => c
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(570140),
    s = n(955204),
    l = n(510273),
    o = n(388032);
function c(e) {
    a.Z.dispatch({
        type: 'POGGERMODE_ACHIEVEMENT_UNLOCK',
        achievementId: e
    });
}
function d(e, t) {
    let n = (0, s.oX)(e);
    null != n &&
        (0, r.showToast)(
            (0, r.createToast)(o.intl.string(o.t.MPpEUF), r.ToastType.CUSTOM, {
                position: r.ToastPosition.BOTTOM,
                component: (0, i.jsx)(l.Z, {
                    achievement: n,
                    unlocked: t
                }),
                duration: 6000
            })
        );
}
