r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(627341);
var a = r(200651);
r(192379);
var o = r(278074),
    s = r(26033),
    l = r(297781),
    u = r(649700),
    c = r(16779),
    d = r(981631);
function f(e) {
    let { entry: n } = e;
    return (0, a.jsx)(a.Fragment, {
        children: [l.U9, l.wO, l.f, l.n8, l.v1, l.pQ].map((e, r) => (0, a.jsx)(e, { entry: n }, 'entry-'.concat(r)))
    });
}
function p(e) {
    let { entry: n } = e;
    return (0, a.jsx)(a.Fragment, { children: [l.E6].map((e, r) => (0, a.jsx)(e, { entry: n }, 'entry-'.concat(r))) });
}
function h(e) {
    let { entry: n } = e;
    return (0, a.jsx)(a.Fragment, { children: [l.An].map((e, r) => (0, a.jsx)(e, { entry: n }, 'entry-'.concat(r))) });
}
function _(e) {
    let { user: n, activity: r, className: i } = e,
        _ = (0, u.Z)({
            activity: r,
            user: n
        }),
        m = (0, o.EQ)(r)
            .with({ type: d.IIU.PLAYING }, () => [c.ho, c.Xh])
            .with({ type: d.IIU.LISTENING }, () => [c.ho])
            .with({ type: d.IIU.WATCHING }, () => [c.ho, c.Rg])
            .otherwise(() => []);
    return 0 === m.length
        ? null
        : (0, a.jsxs)(l.Gk, {
              location: l.Gt.USER_PROFILE,
              className: i,
              children: [
                  m.map((e, n) => (0, a.jsx)(e, { activity: r }, 'activity-'.concat(n))),
                  (0, o.EQ)(_)
                      .when(s.Cb, (e) => (0, a.jsx)(f, { entry: e }))
                      .when(s.Q0, (e) => (0, a.jsx)(p, { entry: e }))
                      .when(s.KF, (e) => (0, a.jsx)(h, { entry: e }))
                      .otherwise(() => null)
              ]
          });
}
