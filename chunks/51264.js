n.d(t, { A: () => g });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(506774),
    d = n(397927),
    c = n(521502),
    u = n(380610),
    A = n(828184),
    _ = n(985018),
    h = n(85497);
let m = "isHideDevBanner",
    g = () => {
        let [e, t] = (0, a.useState)(o.w.get(m, "false")?.toString() === "true"),
            n = (0, s.bG)([c.A], () => ((0, u.kK)() ? c.A.getCurrentBuildOverride().overrides?.discord_web : null));
        if (e) return null;
        let r = () => {
                o.w.set(m, !0), t(!0);
            },
            g = () =>
                (0, i.jsx)(d.DUT, {
                    onClick: r,
                    className: h.b,
                    "aria-label": _.intl.string(_.t.WAI6xu),
                    children: (0, i.jsx)(d.PGe, { size: "md", color: "currentColor", className: h.ut }),
                });
        return null != n
            ? (0, i.jsxs)("div", {
                  className: l()(h.Wz, h.DM),
                  children: [(0, i.jsx)(A.A, { className: h.Kk }), _.intl.string(_.t.Wj3LW4), (0, i.jsx)(g, {})],
              })
            : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL
              ? (0, i.jsxs)("div", {
                    className: l()(h.Wz, h.mr),
                    children: [
                        (0, i.jsx)(A.A, { className: h.Kk }),
                        _.intl.format(_.t.uyrfYF, { buildNumber: "526208" }),
                        (0, i.jsx)(g, {}),
                    ],
                })
              : null;
    };
