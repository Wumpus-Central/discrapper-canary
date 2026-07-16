"use strict";
n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var r = n(889137),
    a = n(20805),
    s = n(506326),
    l = n(365185),
    o = n(82149),
    d = n(78871),
    c = n(652215);
function u(e) {
    let { entry: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: [s.$X, s.tR, s.K7, s.fg, s.sp, s.MK].map((e, n) => (0, i.jsx)(e, { entry: t }, `entry-${n}`)),
    });
}
function _(e) {
    let { entry: t } = e;
    return (0, i.jsx)(i.Fragment, { children: [s.Xr].map((e, n) => (0, i.jsx)(e, { entry: t }, `entry-${n}`)) });
}
function E(e) {
    let { entry: t } = e;
    return (0, i.jsx)(i.Fragment, { children: [s.Y8].map((e, n) => (0, i.jsx)(e, { entry: t }, `entry-${n}`)) });
}
function A(e) {
    let { user: t, activity: n, className: A } = e,
        h = (0, l.A)({ activity: n, user: t }),
        I = (0, o.Cy)(n)
            ? []
            : n.type === c.$pd.PLAYING
              ? [d.cy, d.QA]
              : n.type === c.$pd.LISTENING
                ? [d.QA]
                : n.type === c.$pd.WATCHING
                  ? [d.QA, d.Rq]
                  : n.type === c.$pd.COMPETING
                    ? [d.QA]
                    : [];
    return 0 === I.length
        ? null
        : (0, i.jsxs)(s.mG, {
              location: s.N5.USER_PROFILE,
              className: A,
              children: [
                  I.map((e, t) => (0, i.jsx)(e, { activity: n }, `activity-${t}`)),
                  (0, r.YW)(h)
                      .when(a.qQ, (e) => (0, i.jsx)(u, { entry: e }))
                      .when(a.UQ, (e) => (0, i.jsx)(_, { entry: e }))
                      .when(a.p6, (e) => (0, i.jsx)(E, { entry: e }))
                      .otherwise(() => null),
              ],
          });
}
