n.d(t, {
    D: function () {
        return d;
    },
    T: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
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
    if (null != n)
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
