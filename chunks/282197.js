n.d(e, { A: () => p });
var l = n(477900);
n(582128);
var i = n(889137),
    a = n(20805),
    r = n(506326),
    s = n(365185),
    o = n(82149),
    c = n(78871),
    u = n(652215);
function d(t) {
    let { entry: e } = t;
    return (0, l.jsx)(l.Fragment, {
        children: [r.$X, r.tR, r.K7, r.fg, r.sp, r.MK].map((t, n) => (0, l.jsx)(t, { entry: e }, `entry-${n}`)),
    });
}
function A(t) {
    let { entry: e } = t;
    return (0, l.jsx)(l.Fragment, { children: [r.Xr].map((t, n) => (0, l.jsx)(t, { entry: e }, `entry-${n}`)) });
}
function f(t) {
    let { entry: e } = t;
    return (0, l.jsx)(l.Fragment, { children: [r.Y8].map((t, n) => (0, l.jsx)(t, { entry: e }, `entry-${n}`)) });
}
function p(t) {
    let { user: e, activity: n, className: p } = t,
        g = (0, s.A)({ activity: n, user: e }),
        m = (0, o.Cy)(n)
            ? []
            : n.type === u.$pd.PLAYING
              ? [c.cy, c.QA]
              : n.type === u.$pd.LISTENING
                ? [c.QA]
                : n.type === u.$pd.WATCHING
                  ? [c.QA, c.Rq]
                  : n.type === u.$pd.COMPETING
                    ? [c.QA]
                    : [];
    return 0 === m.length
        ? null
        : (0, l.jsxs)(r.mG, {
              location: r.N5.USER_PROFILE,
              className: p,
              children: [
                  m.map((t, e) => (0, l.jsx)(t, { activity: n }, `activity-${e}`)),
                  (0, i.YW)(g)
                      .when(a.qQ, (t) => (0, l.jsx)(d, { entry: t }))
                      .when(a.UQ, (t) => (0, l.jsx)(A, { entry: t }))
                      .when(a.p6, (t) => (0, l.jsx)(f, { entry: t }))
                      .otherwise(() => null),
              ],
          });
}
