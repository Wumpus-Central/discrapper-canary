n.d(t, {
    A: () => h,
});
var r = n(627968);
n(64700);
var i = n(889137),
    a = n(20805),
    s = n(506326),
    o = n(365185),
    l = n(82149),
    c = n(78871),
    u = n(652215);
let d = (e) =>
    (0, l.Cy)(e)
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

function f(e) {
    let { entry: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: [s.$X, s.tR, s.K7, s.fg, s.sp, s.MK].map((e, n) =>
            (0, r.jsx)(
                e,
                {
                    entry: t,
                },
                "entry-".concat(n),
            ),
        ),
    });
}

function p(e) {
    let { entry: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: [s.Xr].map((e, n) =>
            (0, r.jsx)(
                e,
                {
                    entry: t,
                },
                "entry-".concat(n),
            ),
        ),
    });
}

function _(e) {
    let { entry: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: [s.Y8].map((e, n) =>
            (0, r.jsx)(
                e,
                {
                    entry: t,
                },
                "entry-".concat(n),
            ),
        ),
    });
}

function h(e) {
    let { user: t, activity: n, className: l } = e,
        c = (0, o.A)({
            activity: n,
            user: t,
        }),
        u = d(n);
    return 0 === u.length
        ? null
        : (0, r.jsxs)(s.mG, {
              location: s.N5.USER_PROFILE,
              className: l,
              children: [
                  u.map((e, t) =>
                      (0, r.jsx)(
                          e,
                          {
                              activity: n,
                          },
                          "activity-".concat(t),
                      ),
                  ),
                  (0, i.YW)(c)
                      .when(a.qQ, (e) =>
                          (0, r.jsx)(f, {
                              entry: e,
                          }),
                      )
                      .when(a.UQ, (e) =>
                          (0, r.jsx)(p, {
                              entry: e,
                          }),
                      )
                      .when(a.p6, (e) =>
                          (0, r.jsx)(_, {
                              entry: e,
                          }),
                      )
                      .otherwise(() => null),
              ],
          });
}
