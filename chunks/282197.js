var l = e(477900);
e(582128);
var i = e(889137),
    a = e(350835),
    r = e(20805),
    s = e(506326),
    o = e(365185),
    c = e(82149),
    u = e(78871);
function d(t) {
    let { entry: n } = t;
    return (0, l.jsx)(l.Fragment, {
        children: [s.$X, s.tR, s.K7, s.fg, s.sp, s.MK].map((t, e) => (0, l.jsx)(t, { entry: n }, `entry-${e}`)),
    });
}
function A(t) {
    let { entry: n } = t;
    return (0, l.jsx)(l.Fragment, { children: [s.Xr].map((t, e) => (0, l.jsx)(t, { entry: n }, `entry-${e}`)) });
}
function f(t) {
    let { entry: n } = t;
    return (0, l.jsx)(l.Fragment, { children: [s.Y8].map((t, e) => (0, l.jsx)(t, { entry: n }, `entry-${e}`)) });
}
e.d(
    n,
    {},
    {
        A: function (t) {
            let { user: n, activity: e, className: g } = t,
                m = (0, o.A)({ activity: e, user: n }),
                p = (0, c.Cy)(e)
                    ? []
                    : e.type === a.$.PLAYING
                      ? [u.cy, u.QA]
                      : e.type === a.$.LISTENING
                        ? [u.QA]
                        : e.type === a.$.WATCHING
                          ? [u.QA, u.Rq]
                          : e.type === a.$.COMPETING
                            ? [u.QA]
                            : [];
            return 0 === p.length
                ? null
                : (0, l.jsxs)(s.mG, {
                      location: s.N5.USER_PROFILE,
                      className: g,
                      children: [
                          p.map((t, n) => (0, l.jsx)(t, { activity: e }, `activity-${n}`)),
                          (0, i.YW)(m)
                              .when(r.qQ, (t) => (0, l.jsx)(d, { entry: t }))
                              .when(r.UQ, (t) => (0, l.jsx)(A, { entry: t }))
                              .when(r.p6, (t) => (0, l.jsx)(f, { entry: t }))
                              .otherwise(() => null),
                      ],
                  });
        },
    },
);
