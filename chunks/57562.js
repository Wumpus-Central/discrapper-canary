n.d(t, {
    D: () => d,
    T: () => c
});
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(570140),
    l = n(955204),
    a = n(510273),
    o = n(388032);
function c(e) {
    s.Z.dispatch({
        type: 'POGGERMODE_ACHIEVEMENT_UNLOCK',
        achievementId: e
    });
}
function d(e, t) {
    let n = (0, l.oX)(e);
    null != n &&
        (0, r.showToast)(
            (0, r.createToast)(o.intl.string(o.t.MPpEUF), r.ToastType.CUSTOM, {
                position: r.ToastPosition.BOTTOM,
                component: (0, i.jsx)(a.Z, {
                    achievement: n,
                    unlocked: t
                }),
                duration: 6000
            })
        );
}
