n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(506774),
    c = n(397927),
    u = n(521502),
    d = n(380610),
    p = n(828184),
    f = n(985018),
    h = n(908874);
let A = "isHideDevBanner",
    g = () => {
        var e;
        let [t, n] = (0, i.useState)((null == (e = o.w.get(A, "false")) ? void 0 : e.toString()) === "true"),
            l = (0, s.bG)([u.A], () => {
                var e;
                return (0, d.kK)()
                    ? null == (e = u.A.getCurrentBuildOverride().overrides)
                        ? void 0
                        : e.discord_web
                    : null;
            });
        if (t) return null;
        let g = () => {
                o.w.set(A, !0), n(!0);
            },
            m = () =>
                (0, r.jsx)(c.DUT, {
                    onClick: g,
                    className: h.b,
                    "aria-label": f.intl.string(f.t.WAI6xu),
                    children: (0, r.jsx)(c.PGe, {
                        size: "md",
                        color: "currentColor",
                        className: h.ut,
                    }),
                });
        return null != l
            ? (0, r.jsxs)("div", {
                  className: a()(h.Wz, h.DM),
                  children: [
                      (0, r.jsx)(p.A, {
                          className: h.Kk,
                      }),
                      f.intl.string(f.t.Wj3LW4),
                      (0, r.jsx)(m, {}),
                  ],
              })
            : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL
              ? (0, r.jsxs)("div", {
                    className: a()(h.Wz, h.mr),
                    children: [
                        (0, r.jsx)(p.A, {
                            className: h.Kk,
                        }),
                        f.intl.format(f.t.uyrfYF, {
                            buildNumber: "488230",
                        }),
                        (0, r.jsx)(m, {}),
                    ],
                })
              : null;
    };
