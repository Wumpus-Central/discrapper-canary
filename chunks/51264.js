n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(506774),
    d = n(939249),
    u = n(789645),
    c = n(521502),
    A = n(380610),
    h = n(828184),
    _ = n(985018),
    E = n(932553);
let p = "isHideDevBanner",
    m = () => {
        let [e, t] = (0, r.useState)(o.w.get(p, "false")?.toString() === "true"),
            n = (0, s.bG)([c.A], () => ((0, A.kK)() ? c.A.getCurrentBuildOverride().overrides?.discord_web : null));
        if (e) return null;
        let a = () => {
                o.w.set(p, !0), t(!0);
            },
            m = () =>
                (0, i.jsx)(d.D, {
                    onClick: a,
                    className: E.b,
                    "aria-label": _.intl.string(_.t.WAI6xu),
                    children: (0, i.jsx)(u.P, { size: "md", color: "currentColor", className: E.ut }),
                });
        return null != n
            ? (0, i.jsxs)("div", {
                  className: l()(E.Wz, E.DM),
                  children: [(0, i.jsx)(h.A, { className: E.Kk }), _.intl.string(_.t.Wj3LW4), (0, i.jsx)(m, {})],
              })
            : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL
              ? (0, i.jsxs)("div", {
                    className: l()(E.Wz, E.mr),
                    children: [
                        (0, i.jsx)(h.A, { className: E.Kk }),
                        _.intl.format(_.t.uyrfYF, { buildNumber: "534149" }),
                        (0, i.jsx)(m, {}),
                    ],
                })
              : null;
    };
