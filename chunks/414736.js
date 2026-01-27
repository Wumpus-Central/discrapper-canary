n.d(t, {
    U: () => d,
    _: () => c,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(73153),
    s = n(927018),
    a = n(249581),
    o = n(985018);

function c(e) {
    l.h.dispatch({
        type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
        achievementId: e,
    });
}

function d(e, t) {
    let n = (0, s.vM)(e);
    null != n &&
        (0, i.showToast)(
            (0, i.createToast)(o.intl.string(o.t.MPpEUA), i.ToastType.CUSTOM, {
                position: i.ToastPosition.BOTTOM,
                component: (0, r.jsx)(a.A, {
                    achievement: n,
                    unlocked: t,
                }),
                duration: 6e3,
            }),
        );
}
