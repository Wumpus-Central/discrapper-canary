e.d(n, { A: () => p });
var i = e(627968);
e(64700);
var l = e(889137),
    r = e(20805),
    a = e(506326),
    s = e(365185),
    o = e(82149),
    c = e(78871),
    u = e(652215);
function d(t) {
    let { entry: n } = t;
    return (0, i.jsx)(i.Fragment, {
        children: [a.$X, a.tR, a.K7, a.fg, a.sp, a.MK].map((t, e) => (0, i.jsx)(t, { entry: n }, `entry-${e}`)),
    });
}
function A(t) {
    let { entry: n } = t;
    return (0, i.jsx)(i.Fragment, { children: [a.Xr].map((t, e) => (0, i.jsx)(t, { entry: n }, `entry-${e}`)) });
}
function x(t) {
    let { entry: n } = t;
    return (0, i.jsx)(i.Fragment, { children: [a.Y8].map((t, e) => (0, i.jsx)(t, { entry: n }, `entry-${e}`)) });
}
function p(t) {
    let { user: n, activity: e, className: p } = t,
        f = (0, s.A)({ activity: e, user: n }),
        _ = (0, o.Cy)(e)
            ? []
            : e.type === u.$pd.PLAYING
              ? [c.QA, c.cy]
              : e.type === u.$pd.LISTENING
                ? [c.QA]
                : e.type === u.$pd.WATCHING
                  ? [c.QA, c.Rq]
                  : e.type === u.$pd.COMPETING
                    ? [c.QA]
                    : [];
    return 0 === _.length
        ? null
        : (0, i.jsxs)(a.mG, {
              location: a.N5.USER_PROFILE,
              className: p,
              children: [
                  _.map((t, n) => (0, i.jsx)(t, { activity: e }, `activity-${n}`)),
                  (0, l.YW)(f)
                      .when(r.qQ, (t) => (0, i.jsx)(d, { entry: t }))
                      .when(r.UQ, (t) => (0, i.jsx)(A, { entry: t }))
                      .when(r.p6, (t) => (0, i.jsx)(x, { entry: t }))
                      .otherwise(() => null),
              ],
          });
}
