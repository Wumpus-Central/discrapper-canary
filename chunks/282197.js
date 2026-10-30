n.d(e, { A: () => g });
var l = n(477900);
n(582128);
var i = n(889137),
    a = n(350835),
    r = n(20805),
    s = n(506326),
    o = n(365185),
    c = n(82149),
    u = n(78871);
function d(t) {
    let { entry: e } = t;
    return (0, l.jsx)(l.Fragment, {
        children: [s.$X, s.tR, s.K7, s.fg, s.sp, s.MK].map((t, n) => (0, l.jsx)(t, { entry: e }, `entry-${n}`)),
    });
}
function A(t) {
    let { entry: e } = t;
    return (0, l.jsx)(l.Fragment, { children: [s.Xr].map((t, n) => (0, l.jsx)(t, { entry: e }, `entry-${n}`)) });
}
function f(t) {
    let { entry: e } = t;
    return (0, l.jsx)(l.Fragment, { children: [s.Y8].map((t, n) => (0, l.jsx)(t, { entry: e }, `entry-${n}`)) });
}
function g(t) {
    let { user: e, activity: n, className: g } = t,
        m = (0, o.A)({ activity: n, user: e }),
        x = (0, c.Cy)(n)
            ? []
            : n.type === a.$.PLAYING
              ? [u.cy, u.QA]
              : n.type === a.$.LISTENING
                ? [u.QA]
                : n.type === a.$.WATCHING
                  ? [u.QA, u.Rq]
                  : n.type === a.$.COMPETING
                    ? [u.QA]
                    : [];
    return 0 === x.length
        ? null
        : (0, l.jsxs)(s.mG, {
              location: s.N5.USER_PROFILE,
              className: g,
              children: [
                  x.map((t, e) => (0, l.jsx)(t, { activity: n }, `activity-${e}`)),
                  (0, i.YW)(m)
                      .when(r.qQ, (t) => (0, l.jsx)(d, { entry: t }))
                      .when(r.UQ, (t) => (0, l.jsx)(A, { entry: t }))
                      .when(r.p6, (t) => (0, l.jsx)(f, { entry: t }))
                      .otherwise(() => null),
              ],
          });
}
