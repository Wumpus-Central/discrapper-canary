e.d(n, { A: () => p });
var l = e(477900);
e(582128);
var i = e(889137),
    r = e(20805),
    a = e(506326),
    s = e(365185),
    o = e(82149),
    c = e(78871),
    u = e(652215);
function d(t) {
    let { entry: n } = t;
    return (0, l.jsx)(l.Fragment, {
        children: [a.$X, a.tR, a.K7, a.fg, a.sp, a.MK].map((t, e) => (0, l.jsx)(t, { entry: n }, `entry-${e}`)),
    });
}
function A(t) {
    let { entry: n } = t;
    return (0, l.jsx)(l.Fragment, { children: [a.Xr].map((t, e) => (0, l.jsx)(t, { entry: n }, `entry-${e}`)) });
}
function x(t) {
    let { entry: n } = t;
    return (0, l.jsx)(l.Fragment, { children: [a.Y8].map((t, e) => (0, l.jsx)(t, { entry: n }, `entry-${e}`)) });
}
function p(t) {
    let { user: n, activity: e, className: p } = t,
        f = (0, s.A)({ activity: e, user: n }),
        m = (0, o.Cy)(e)
            ? []
            : e.type === u.$pd.PLAYING
              ? [c.cy, c.QA]
              : e.type === u.$pd.LISTENING
                ? [c.QA]
                : e.type === u.$pd.WATCHING
                  ? [c.QA, c.Rq]
                  : e.type === u.$pd.COMPETING
                    ? [c.QA]
                    : [];
    return 0 === m.length
        ? null
        : (0, l.jsxs)(a.mG, {
              location: a.N5.USER_PROFILE,
              className: p,
              children: [
                  m.map((t, n) => (0, l.jsx)(t, { activity: e }, `activity-${n}`)),
                  (0, i.YW)(f)
                      .when(r.qQ, (t) => (0, l.jsx)(d, { entry: t }))
                      .when(r.UQ, (t) => (0, l.jsx)(A, { entry: t }))
                      .when(r.p6, (t) => (0, l.jsx)(x, { entry: t }))
                      .otherwise(() => null),
              ],
          });
}
