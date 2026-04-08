n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(506774),
    d = n(397927),
    c = n(521502),
    u = n(380610),
    A = n(828184),
    h = n(985018),
    _ = n(534788);
let m = "isHideDevBanner",
    p = () => {
        let [e, t] = (0, r.useState)(o.w.get(m, "false")?.toString() === "true"),
            n = (0, s.bG)([c.A], () => ((0, u.kK)() ? c.A.getCurrentBuildOverride().overrides?.discord_web : null));
        if (e) return null;
        let a = () => {
                o.w.set(m, !0), t(!0);
            },
            p = () =>
                (0, i.jsx)(d.DUT, {
                    onClick: a,
                    className: _.b,
                    "aria-label": h.intl.string(h.t.WAI6xu),
                    children: (0, i.jsx)(d.PGe, { size: "md", color: "currentColor", className: _.ut }),
                });
        return null != n
            ? (0, i.jsxs)("div", {
                  className: l()(_.Wz, _.DM),
                  children: [(0, i.jsx)(A.A, { className: _.Kk }), h.intl.string(h.t.Wj3LW4), (0, i.jsx)(p, {})],
              })
            : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL
              ? (0, i.jsxs)("div", {
                    className: l()(_.Wz, _.mr),
                    children: [
                        (0, i.jsx)(A.A, { className: _.Kk }),
                        h.intl.format(h.t.uyrfYF, { buildNumber: "525595" }),
                        (0, i.jsx)(p, {}),
                    ],
                })
              : null;
    };
