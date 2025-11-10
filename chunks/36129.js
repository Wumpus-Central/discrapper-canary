n.d(t, { q: () => C }), n(35282);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n(990547),
    s = n(525769),
    l = n(657707),
    c = n(974674),
    u = n(159691),
    d = n(481060),
    f = n(213609),
    _ = n(312871),
    p = n(550385),
    h = n(739566),
    m = n(781391),
    g = n(626135),
    E = n(575196),
    b = n(233398),
    y = n(47760),
    O = n(629452),
    v = n(981631),
    I = n(531421),
    S = n(388032),
    T = n(306518);
let A = (e) => e.map((e) => "#".concat(e)),
    C = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            { setAll: i } = (0, b.Ig)();
        return (0, O.b)("Share Client Theme Widget") && void 0 !== n
            ? (0, r.jsxs)("div", {
                  className: T.container,
                  children: [
                      (0, r.jsx)(R, { message: t }),
                      (0, r.jsx)(u.zxk, {
                          text: S.intl.string(S.t.SKNnqq),
                          fullWidth: !0,
                          variant: "primary",
                          onClick: () => {
                              g.default.track(v.rMx.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                                  (0, p.XO)(p.wh.CUSTOM_THEME, { from: p.tE.SHARE_MESSAGE }),
                                  i({
                                      colors: A(n.colors),
                                      chassisMixAmount: n.base_mix,
                                      gradientAngle: n.gradient_angle,
                                  }),
                                  (0, m.y)((0, y.e)(n.base_theme));
                          },
                      }),
                  ],
              })
            : null;
    },
    N = (e, t, n) =>
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
                          className: T.avatarContainer,
                          children: [
                              (0, r.jsx)(c.qE, {
                                  "aria-label": n,
                                  src: t.getAvatarURL(null, 20),
                                  size: d.EFr.SIZE_20,
                              }),
                              " ",
                              n,
                              " ",
                          ],
                      },
                      a,
                  ),
        ),
    R = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            c = (0, h.ZP)(t),
            u = i.useMemo(
                () =>
                    (0, a.once)(() => {
                        (0, f.h)({
                            type: o.ImpressionTypes.VIEW,
                            name: s.z.CUSTOM_THEME_SHARE,
                            properties: {},
                        });
                    }),
                [],
            ),
            p = (0, _.Z)({
                onVisible: () => {
                    u();
                },
                threshold: 1,
                minTimeVisibleMs: 200,
            }),
            m = i.useMemo(() => {
                var e;
                return void 0 === n ? "" : (0, E.yz)(A(n.colors), null != (e = n.gradient_angle) ? e : 0);
            }, [n]);
        return void 0 === n
            ? null
            : (0, r.jsxs)("div", {
                  className: T.themePreviewContainer,
                  ref: p,
                  children: [
                      (0, r.jsx)("div", {
                          className: T.colorPreview,
                          style: { background: "".concat(m) },
                      }),
                      (0, r.jsxs)("div", {
                          className: T.sharedByContainer,
                          children: [
                              (0, r.jsxs)(d.Heading, {
                                  variant: "heading-md/semibold",
                                  className: T.sharedTitle,
                                  children: [S.intl.string(I.default.KSBBpC), " ", (0, r.jsx)(l.SrA, {})],
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-secondary",
                                  className: T.sharedBy,
                                  children: N(
                                      "".concat(S.intl.format(I.default.fQPSEf, { username: "__USERNAME__" })),
                                      t.author,
                                      c.nick,
                                  ),
                              }),
                          ],
                      }),
                  ],
              });
    };
