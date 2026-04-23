n.d(t, { U: () => _, _: () => u });
var i = n(627968);
n(64700);
var E = n(691540),
    l = n(857250),
    a = n(97483),
    s = n(73153),
    r = n(927018),
    o = n(249581),
    c = n(985018);
function u(e) {
    s.h.dispatch({ type: "POGGERMODE_ACHIEVEMENT_UNLOCK", achievementId: e });
}
function _(e, t) {
    let n = (0, r.vM)(e);
    null != n &&
        (0, E.P0)(
            (0, l.o)(c.intl.string(c.t.MPpEUA), a.Ck.CUSTOM, {
                position: a.xJ.BOTTOM,
                component: (0, i.jsx)(o.A, { achievement: n, unlocked: t }),
                duration: 6e3,
            }),
        );
}
