n.d(t, { U: () => h, _: () => u });
var i = n(627968);
n(64700);
var l = n(691540),
    s = n(857250),
    r = n(97483),
    a = n(228366),
    o = n(927018),
    d = n(249581),
    c = n(985018);
function u(e) {
    a.h.dispatch({ type: "POGGERMODE_ACHIEVEMENT_UNLOCK", achievementId: e });
}
function h(e, t) {
    let n = (0, o.vM)(e);
    null != n &&
        (0, l.P0)(
            (0, s.o)(c.intl.string(c.t.MPpEUA), r.Ck.CUSTOM, {
                position: r.xJ.BOTTOM,
                component: (0, i.jsx)(d.A, { achievement: n, unlocked: t }),
                duration: 6e3,
            }),
        );
}
