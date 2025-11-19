n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(433517),
    c = n(481060),
    u = n(304761),
    d = n(865427),
    p = n(820254),
    f = n(388032),
    h = n(94226);
let g = "isHideDevBanner",
    m = () => {
        var e;
        let [t, n] = (0, i.useState)((null == (e = o.K.get(g, "false")) ? void 0 : e.toString()) === "true"),
            l = (0, s.e7)([u.C], () => {
                var e;
                return (0, d.fD)()
                    ? null == (e = u.C.getCurrentBuildOverride().overrides)
                        ? void 0
                        : e.discord_web
                    : null;
            });
        if (t) return null;
        let m = () => {
                o.K.set(g, !0), n(!0);
            },
            _ = () =>
                (0, r.jsx)(c.P3F, {
                    onClick: m,
                    className: h.closeButton,
                    "aria-label": f.intl.string(f.t.WAI6xu),
                    children: (0, r.jsx)(c.Dio, {
                        size: "md",
                        color: "currentColor",
                        className: h.closeIcon,
                    }),
                });
        return null != l
            ? (0, r.jsxs)("div", {
                  className: a()(h.devBanner, h.buildOverride),
                  children: [(0, r.jsx)(p.Z, { className: h.icon }), f.intl.string(f.t.Wj3LW4), (0, r.jsx)(_, {})],
              })
            : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL
              ? (0, r.jsxs)("div", {
                    className: a()(h.devBanner, h.staging),
                    children: [
                        (0, r.jsx)(p.Z, { className: h.icon }),
                        f.intl.format(f.t.uyrfYF, { buildNumber: "469895" }),
                        (0, r.jsx)(_, {}),
                    ],
                })
              : null;
    };
