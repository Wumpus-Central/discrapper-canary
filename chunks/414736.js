n.d(t, { U: () => d, _: () => c });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(73153),
    a = n(927018),
    l = n(249581),
    o = n(985018);
function c(e) {
    r.h.dispatch({ type: "POGGERMODE_ACHIEVEMENT_UNLOCK", achievementId: e });
}
function d(e, t) {
    let n = (0, a.vM)(e);
    null != n &&
        (0, s.showToast)(
            (0, s.createToast)(o.intl.string(o.t.MPpEUA), s.ToastType.CUSTOM, {
                position: s.ToastPosition.BOTTOM,
                component: (0, i.jsx)(l.A, { achievement: n, unlocked: t }),
                duration: 6e3,
            }),
        );
}
