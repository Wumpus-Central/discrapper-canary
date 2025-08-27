n.d(t, { q: () => b }), n(35282);
var r = n(951288),
    i = n(647438),
    o = n(657707),
    a = n(974674),
    s = n(159691),
    l = n(481060),
    c = n(550385),
    u = n(781391),
    d = n(575196),
    f = n(233398),
    _ = n(629452),
    p = n(874893),
    h = n(119475),
    m = n(388032),
    g = n(306518);
let E = (e) => e.map((e) => "#".concat(e)),
    b = (e) => {
        let { sharedClientTheme: t, from: n } = e,
            { setAll: i } = (0, f.Ig)();
        return (0, _.b)("Share Client Theme Widget")
            ? (0, r.jsxs)("div", {
                  className: g.container,
                  children: [
                      (0, r.jsx)(v, {
                          from: n,
                          sharedClientTheme: t,
                      }),
                      (0, r.jsx)(s.zx, {
                          text: m.intl.string(m.t.SKNnqq),
                          variant: "primary",
                          onClick: () => {
                              (0, c.XO)(c.wh.CUSTOM_THEME, { from: c.tE.SHARE_MESSAGE }),
                                  i({
                                      colors: E(t.colors),
                                      chassisMixAmount: t.base_mix,
                                      gradientAngle: t.gradient_angle,
                                  }),
                                  (0, u.y)(y(t.base_theme));
                          },
                      }),
                  ],
              })
            : null;
    },
    y = (e) => p.yW[e],
    O = (e, t) =>
        e.split(" ").map((e, n) =>
            "__USERNAME__" !== e
                ? (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [e, " "],
                      },
                      n,
                  )
                : (0, r.jsxs)(
                      "span",
                      {
                          className: g.avatarContainer,
                          children: [
                              (0, r.jsx)(a.qE, {
                                  "aria-label": t.username,
                                  src: t.getAvatarURL(null, 20),
                                  size: l.EFr.SIZE_20,
                              }),
                              " ",
                              t.username,
                              " ",
                          ],
                      },
                      n,
                  ),
        ),
    v = (e) => {
        let { sharedClientTheme: t, from: n } = e,
            a = i.useMemo(() => {
                var e;
                return (0, d.yz)(E(t.colors), null != (e = t.gradient_angle) ? e : 0);
            }, [t.colors, t.gradient_angle]);
        return (0, r.jsxs)("div", {
            className: g.themePreviewContainer,
            children: [
                (0, r.jsx)("div", {
                    className: g.colorPreview,
                    style: { background: "".concat(a) },
                }),
                (0, r.jsxs)("div", {
                    className: g.sharedByContainer,
                    children: [
                        (0, r.jsxs)(l.X6q, {
                            variant: "heading-md/semibold",
                            className: g.sharedTitle,
                            children: [m.intl.string(h.default.KSBBpK), " ", (0, r.jsx)(o.SrA, {})],
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            className: g.sharedBy,
                            children: O("".concat(m.intl.format(h.default.fQPSER, { username: "__USERNAME__" })), n),
                        }),
                    ],
                }),
            ],
        });
    };
