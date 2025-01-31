n.d(t, { Z: () => _ }), n(627341);
var i = n(200651);
n(192379);
var r = n(278074),
    a = n(26033),
    s = n(297781),
    o = n(649700),
    l = n(16779),
    u = n(981631);
function c(e) {
    let { entry: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: [s.U9, s.wO, s.f, s.n8, s.v1, s.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
    });
}
function d(e) {
    let { entry: t } = e;
    return (0, i.jsx)(i.Fragment, { children: [s.E6].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n))) });
}
function f(e) {
    let { entry: t } = e;
    return (0, i.jsx)(i.Fragment, { children: [s.An].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n))) });
}
function _(e) {
    let { user: t, activity: n, className: _ } = e,
        p = (0, o.Z)({
            activity: n,
            user: t
        }),
        h = (0, r.EQ)(n)
            .with({ type: u.IIU.PLAYING }, () => [l.ho, l.Xh])
            .with({ type: u.IIU.LISTENING }, () => [l.ho])
            .with({ type: u.IIU.WATCHING }, () => [l.ho, l.Rg])
            .otherwise(() => []);
    return 0 === h.length
        ? null
        : (0, i.jsxs)(s.Gk, {
              location: s.Gt.USER_PROFILE,
              className: _,
              children: [
                  h.map((e, t) => (0, i.jsx)(e, { activity: n }, 'activity-'.concat(t))),
                  (0, r.EQ)(p)
                      .when(a.Cb, (e) => (0, i.jsx)(c, { entry: e }))
                      .when(a.Q0, (e) => (0, i.jsx)(d, { entry: e }))
                      .when(a.KF, (e) => (0, i.jsx)(f, { entry: e }))
                      .otherwise(() => null)
              ]
          });
}
