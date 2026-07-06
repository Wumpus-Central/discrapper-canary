e.d(n, { A: () => p });
var i = e(627968);
e(64700);
var l = e(889137),
    a = e(20805),
    r = e(506326),
    s = e(365185),
    o = e(82149),
    c = e(78871),
    u = e(652215);
function d(t) {
    let { entry: n } = t;
    return (0, i.jsx)(i.Fragment, {
        children: [r.$X, r.tR, r.K7, r.fg, r.sp, r.MK].map((t, e) => (0, i.jsx)(t, { entry: n }, `entry-${e}`)),
    });
}
function A(t) {
    let { entry: n } = t;
    return (0, i.jsx)(i.Fragment, { children: [r.Xr].map((t, e) => (0, i.jsx)(t, { entry: n }, `entry-${e}`)) });
}
function x(t) {
    let { entry: n } = t;
    return (0, i.jsx)(i.Fragment, { children: [r.Y8].map((t, e) => (0, i.jsx)(t, { entry: n }, `entry-${e}`)) });
}
function p(t) {
    let { user: n, activity: e, className: p } = t,
        f = (0, s.A)({ activity: e, user: n }),
        _ = (0, o.Cy)(e)
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
    return 0 === _.length
        ? null
        : (0, i.jsxs)(r.mG, {
              location: r.N5.USER_PROFILE,
              className: p,
              children: [
                  _.map((t, n) => (0, i.jsx)(t, { activity: e }, `activity-${n}`)),
                  (0, l.YW)(f)
                      .when(a.qQ, (t) => (0, i.jsx)(d, { entry: t }))
                      .when(a.UQ, (t) => (0, i.jsx)(A, { entry: t }))
                      .when(a.p6, (t) => (0, i.jsx)(x, { entry: t }))
                      .otherwise(() => null),
              ],
          });
}
