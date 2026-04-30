"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(889137),
    s = n(20805),
    a = n(506326),
    o = n(365185),
    l = n(82149),
    u = n(78871),
    c = n(652215);
function d(e) {
    let { entry: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: [a.$X, a.tR, a.K7, a.fg, a.sp, a.MK].map((e, n) => (0, i.jsx)(e, { entry: t }, `entry-${n}`)),
    });
}
function _(e) {
    let { entry: t } = e;
    return (0, i.jsx)(i.Fragment, { children: [a.Xr].map((e, n) => (0, i.jsx)(e, { entry: t }, `entry-${n}`)) });
}
function f(e) {
    let { entry: t } = e;
    return (0, i.jsx)(i.Fragment, { children: [a.Y8].map((e, n) => (0, i.jsx)(e, { entry: t }, `entry-${n}`)) });
}
function h(e) {
    let { user: t, activity: n, className: h } = e,
        p = (0, o.A)({ activity: n, user: t }),
        E = (0, l.Cy)(n)
            ? []
            : n.type === c.$pd.PLAYING
              ? [u.QA, u.cy]
              : n.type === c.$pd.LISTENING
                ? [u.QA]
                : n.type === c.$pd.WATCHING
                  ? [u.QA, u.Rq]
                  : n.type === c.$pd.COMPETING
                    ? [u.QA]
                    : [];
    return 0 === E.length
        ? null
        : (0, i.jsxs)(a.mG, {
              location: a.N5.USER_PROFILE,
              className: h,
              children: [
                  E.map((e, t) => (0, i.jsx)(e, { activity: n }, `activity-${t}`)),
                  (0, r.YW)(p)
                      .when(s.qQ, (e) => (0, i.jsx)(d, { entry: e }))
                      .when(s.UQ, (e) => (0, i.jsx)(_, { entry: e }))
                      .when(s.p6, (e) => (0, i.jsx)(f, { entry: e }))
                      .otherwise(() => null),
              ],
          });
}
