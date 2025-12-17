n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(433517),
    c = n(481060),
    u = n(304761),
    d = n(865427),
    p = n(820254),
    f = n(388032),
    g = n(187794);
let h = "isHideDevBanner",
    m = () => {
        var e;
        let [t, n] = (0, i.useState)((null == (e = s.K.get(h, "false")) ? void 0 : e.toString()) === "true"),
            l = (0, o.e7)([u.C], () => {
                var e;
                return (0, d.fD)()
                    ? null == (e = u.C.getCurrentBuildOverride().overrides)
                        ? void 0
                        : e.discord_web
                    : null;
            });
        if (t) return null;
        let m = () => {
                s.K.set(h, !0), n(!0);
            },
            b = () =>
                (0, r.jsx)(c.P3F, {
                    onClick: m,
                    className: g.closeButton,
                    "aria-label": f.intl.string(f.t.WAI6xu),
                    children: (0, r.jsx)(c.Dio, {
                        size: "md",
                        color: "currentColor",
                        className: g.closeIcon,
                    }),
                });
        return null != l
            ? (0, r.jsxs)("div", {
                  className: a()(g.devBanner, g.buildOverride),
                  children: [(0, r.jsx)(p.Z, { className: g.icon }), f.intl.string(f.t.Wj3LW4), (0, r.jsx)(b, {})],
              })
            : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL
              ? (0, r.jsxs)("div", {
                    className: a()(g.devBanner, g.staging),
                    children: [
                        (0, r.jsx)(p.Z, { className: g.icon }),
                        f.intl.format(f.t.uyrfYF, { buildNumber: "481003" }),
                        (0, r.jsx)(b, {}),
                    ],
                })
              : null;
    };
