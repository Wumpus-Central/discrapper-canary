n.d(t, {
    U: () => d,
    _: () => u,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(73153),
    s = n(927018),
    o = n(249581),
    l = n(985018);
let c = 6e3;

function u(e) {
    a.h.dispatch({
        type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
        achievementId: e,
    });
}

function d(e, t) {
    let n = (0, s.vM)(e);
    null != n &&
        (0, i.showToast)(
            (0, i.createToast)(l.intl.string(l.t.MPpEUA), i.ToastType.CUSTOM, {
                position: i.ToastPosition.BOTTOM,
                component: (0, r.jsx)(o.A, {
                    achievement: n,
                    unlocked: t,
                }),
                duration: c,
            }),
        );
}
