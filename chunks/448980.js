n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(278074),
    a = n(26033),
    o = n(297781),
    s = n(649700),
    l = n(750154),
    c = n(16779),
    u = n(981631);
let d = (e) => ((0, l.dS)(e) ? [] : e.type === u.IIU.PLAYING ? [c.ho, c.Xh] : e.type === u.IIU.LISTENING ? [c.ho] : e.type === u.IIU.WATCHING ? [c.ho, c.Rg] : []);
function f(e) {
    let { entry: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: [o.U9, o.wO, o.f, o.n8, o.v1, o.pQ].map((e, n) => (0, r.jsx)(e, { entry: t }, 'entry-'.concat(n)))
    });
}
function _(e) {
    let { entry: t } = e;
    return (0, r.jsx)(r.Fragment, { children: [o.E6].map((e, n) => (0, r.jsx)(e, { entry: t }, 'entry-'.concat(n))) });
}
function p(e) {
    let { entry: t } = e;
    return (0, r.jsx)(r.Fragment, { children: [o.An].map((e, n) => (0, r.jsx)(e, { entry: t }, 'entry-'.concat(n))) });
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
        : (0, r.jsxs)(o.Gk, {
              location: o.Gt.USER_PROFILE,
              className: l,
              children: [
                  u.map((e, t) => (0, r.jsx)(e, { activity: n }, 'activity-'.concat(t))),
                  (0, i.EQ)(c)
                      .when(a.Cb, (e) => (0, r.jsx)(f, { entry: e }))
                      .when(a.Q0, (e) => (0, r.jsx)(_, { entry: e }))
                      .when(a.KF, (e) => (0, r.jsx)(p, { entry: e }))
                      .otherwise(() => null)
              ]
          });
}
