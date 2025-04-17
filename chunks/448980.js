n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(278074),
    o = n(26033),
    a = n(297781),
    s = n(649700),
    l = n(750154),
    c = n(16779),
    u = n(981631);
let d = (e) => ((0, l.dS)(e) ? [] : e.type === u.IIU.PLAYING ? [c.ho, c.Xh] : e.type === u.IIU.LISTENING ? [c.ho] : e.type === u.IIU.WATCHING ? [c.ho, c.Rg] : []);
function f(e) {
    let { entry: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: [a.U9, a.wO, a.f, a.n8, a.v1, a.pQ].map((e, n) => (0, r.jsx)(e, { entry: t }, 'entry-'.concat(n)))
    });
}
function _(e) {
    let { entry: t } = e;
    return (0, r.jsx)(r.Fragment, { children: [a.E6].map((e, n) => (0, r.jsx)(e, { entry: t }, 'entry-'.concat(n))) });
}
function p(e) {
    let { entry: t } = e;
    return (0, r.jsx)(r.Fragment, { children: [a.An].map((e, n) => (0, r.jsx)(e, { entry: t }, 'entry-'.concat(n))) });
}
function h(e) {
    let { user: t, activity: n, className: l } = e,
        c = (0, s.Z)({
            activity: n,
            user: t
        }),
        u = d(n);
    return 0 === u.length
        ? null
        : (0, r.jsxs)(a.Gk, {
              location: a.Gt.USER_PROFILE,
              className: l,
              children: [
                  u.map((e, t) => (0, r.jsx)(e, { activity: n }, 'activity-'.concat(t))),
                  (0, i.EQ)(c)
                      .when(o.Cb, (e) => (0, r.jsx)(f, { entry: e }))
                      .when(o.Q0, (e) => (0, r.jsx)(_, { entry: e }))
                      .when(o.KF, (e) => (0, r.jsx)(p, { entry: e }))
                      .otherwise(() => null)
              ]
          });
}
