n.d(t, {
    D: () => d,
    T: () => c
});
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(570140),
    l = n(955204),
    a = n(510273),
    o = n(388032);
function c(e) {
    r.Z.dispatch({
        type: 'POGGERMODE_ACHIEVEMENT_UNLOCK',
        achievementId: e
    });
}
function d(e, t) {
    let n = (0, l.oX)(e);
    null != n &&
        (0, s.showToast)(
            (0, s.createToast)(o.intl.string(o.t.MPpEUF), s.ToastType.CUSTOM, {
                position: s.ToastPosition.BOTTOM,
                component: (0, i.jsx)(a.Z, {
                    achievement: n,
                    unlocked: t
                }),
                duration: 6000
            })
        );
}
