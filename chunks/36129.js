n.d(t, { q: () => y }), n(35282);
var r = n(951288),
    i = n(647438),
    a = n(657707),
    o = n(974674),
    s = n(159691),
    l = n(481060),
    c = n(550385),
    u = n(739566),
    d = n(781391),
    f = n(575196),
    _ = n(233398),
    p = n(47760),
    h = n(629452),
    m = n(119475),
    g = n(388032),
    E = n(306518);
let b = (e) => e.map((e) => "#".concat(e)),
    y = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            { setAll: i } = (0, _.Ig)();
        return (0, h.b)("Share Client Theme Widget") && void 0 !== n
            ? (0, r.jsxs)("div", {
                  className: E.container,
                  children: [
                      (0, r.jsx)(v, { message: t }),
                      (0, r.jsx)(s.zx, {
                          text: g.intl.string(g.t.SKNnqq),
                          fullWidth: !0,
                          variant: "primary",
                          onClick: () => {
                              (0, c.XO)(c.wh.CUSTOM_THEME, { from: c.tE.SHARE_MESSAGE }),
                                  i({
                                      colors: b(n.colors),
                                      chassisMixAmount: n.base_mix,
                                      gradientAngle: n.gradient_angle,
                                  }),
                                  (0, d.y)((0, p.e)(n.base_theme));
                          },
                      }),
                  ],
              })
            : null;
    },
    O = (e, t, n) =>
        e.split(" ").map((e, a) =>
            "__USERNAME__" !== e
                ? (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [e, " "],
                      },
                      a,
                  )
                : (0, r.jsxs)(
                      "span",
                      {
                          className: E.avatarContainer,
                          children: [
                              (0, r.jsx)(o.qE, {
                                  "aria-label": n,
                                  src: t.getAvatarURL(null, 20),
                                  size: l.EFr.SIZE_20,
                              }),
                              " ",
                              n,
                              " ",
                          ],
                      },
                      a,
                  ),
        ),
    v = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            o = (0, u.ZP)(t),
            s = i.useMemo(() => {
                var e;
                return void 0 === n ? "" : (0, f.yz)(b(n.colors), null != (e = n.gradient_angle) ? e : 0);
            }, [n]);
        return void 0 === n
            ? null
            : (0, r.jsxs)("div", {
                  className: E.themePreviewContainer,
                  children: [
                      (0, r.jsx)("div", {
                          className: E.colorPreview,
                          style: { background: "".concat(s) },
                      }),
                      (0, r.jsxs)("div", {
                          className: E.sharedByContainer,
                          children: [
                              (0, r.jsxs)(l.X6q, {
                                  variant: "heading-md/semibold",
                                  className: E.sharedTitle,
                                  children: [g.intl.string(m.default.KSBBpK), " ", (0, r.jsx)(a.SrA, {})],
                              }),
                              (0, r.jsx)(l.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-secondary",
                                  className: E.sharedBy,
                                  children: O(
                                      "".concat(g.intl.format(m.default.fQPSER, { username: "__USERNAME__" })),
                                      t.author,
                                      o.nick,
                                  ),
                              }),
                          ],
                      }),
                  ],
              });
    };
