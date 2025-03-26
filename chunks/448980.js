n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(278074),
    o = n(26033),
    a = n(297781),
    s = n(649700),
    l = n(16779),
    c = n(981631);
let u = (e) => (e.type === c.IIU.PLAYING ? [l.ho, l.Xh] : e.type === c.IIU.LISTENING ? [l.ho] : e.type === c.IIU.WATCHING ? [l.ho, l.Rg] : []);
function d(e) {
    let { entry: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: [a.U9, a.wO, a.f, a.n8, a.v1, a.pQ].map((e, n) => (0, r.jsx)(e, { entry: t }, 'entry-'.concat(n)))
    });
}
function f(e) {
    let { entry: t } = e;
    return (0, r.jsx)(r.Fragment, { children: [a.E6].map((e, n) => (0, r.jsx)(e, { entry: t }, 'entry-'.concat(n))) });
}
function _(e) {
    let { entry: t } = e;
    return (0, r.jsx)(r.Fragment, { children: [a.An].map((e, n) => (0, r.jsx)(e, { entry: t }, 'entry-'.concat(n))) });
}
function p(e) {
    let { user: t, activity: n, className: l } = e,
        c = (0, s.Z)({
            activity: n,
            user: t
        }),
        p = u(n);
    return 0 === p.length
        ? null
        : (0, r.jsxs)(a.Gk, {
              location: a.Gt.USER_PROFILE,
              className: l,
              children: [
                  p.map((e, t) => (0, r.jsx)(e, { activity: n }, 'activity-'.concat(t))),
                  (0, i.EQ)(c)
                      .when(o.Cb, (e) => (0, r.jsx)(d, { entry: e }))
                      .when(o.Q0, (e) => (0, r.jsx)(f, { entry: e }))
                      .when(o.KF, (e) => (0, r.jsx)(_, { entry: e }))
                      .otherwise(() => null)
              ]
          });
}
