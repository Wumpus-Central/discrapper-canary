n.d(t, { q: () => A }), n(35282);
var r = n(54381),
    i = n(473749),
    o = n(392711),
    a = n(990547),
    s = n(525769),
    l = n(657707),
    c = n(974674),
    u = n(159691),
    d = n(481060),
    f = n(213609),
    p = n(312871),
    _ = n(550385),
    m = n(739566),
    h = n(781391),
    g = n(626135),
    E = n(233398),
    b = n(47760),
    y = n(629452),
    O = n(639745),
    v = n(981631),
    S = n(5570),
    I = n(388032),
    T = n(306518);
let C = (e) => e.map((e) => "#".concat(e)),
    A = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            { setAll: i } = (0, E.Ig)();
        return (0, y.b)("Share Client Theme Widget") && void 0 !== n
            ? (0, r.jsxs)("div", {
                  className: T.container,
                  children: [
                      (0, r.jsx)(P, { message: t }),
                      (0, r.jsx)(u.zxk, {
                          text: I.intl.string(I.t.SKNnqq),
                          fullWidth: !0,
                          variant: "primary",
                          onClick: () => {
                              g.default.track(v.rMx.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                                  (0, _.XO)(_.wh.CUSTOM_THEME, { from: _.tE.SHARE_MESSAGE }),
                                  i({
                                      colors: C(n.colors),
                                      chassisMixAmount: n.base_mix,
                                      gradientAngle: n.gradient_angle,
                                  }),
                                  (0, h.y)((0, b.e)(n.base_theme));
                          },
                      }),
                  ],
              })
            : null;
    },
    N = (e, t, n) =>
        e.split(" ").map((e, o) =>
            "__USERNAME__" !== e
                ? (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [e, " "],
                      },
                      o,
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
                      o,
                  ),
        ),
    P = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            c = (0, m.ZP)(t),
            u = i.useMemo(
                () =>
                    (0, o.once)(() => {
                        (0, f.h)({
                            type: a.ImpressionTypes.VIEW,
                            name: s.z.CUSTOM_THEME_SHARE,
                            properties: {},
                        });
                    }),
                [],
            ),
            _ = (0, p.Z)({
                onVisible: () => {
                    u();
                },
                threshold: 1,
                minTimeVisibleMs: 200,
            }),
            h = i.useMemo(() => {
                var e;
                return void 0 === n ? "" : (0, O.yz)(C(n.colors), null != (e = n.gradient_angle) ? e : 0);
            }, [n]);
        return void 0 === n
            ? null
            : (0, r.jsxs)("div", {
                  className: T.themePreviewContainer,
                  ref: _,
                  children: [
                      (0, r.jsx)("div", {
                          className: T.colorPreview,
                          style: { background: "".concat(h) },
                      }),
                      (0, r.jsxs)("div", {
                          className: T.sharedByContainer,
                          children: [
                              (0, r.jsxs)(d.Heading, {
                                  variant: "heading-md/semibold",
                                  className: T.sharedTitle,
                                  children: [I.intl.string(S.default.KSBBpC), " ", (0, r.jsx)(l.SrA, {})],
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  className: T.sharedBy,
                                  children: N(
                                      "".concat(I.intl.format(S.default.fQPSEf, { username: "__USERNAME__" })),
                                      t.author,
                                      c.nick,
                                  ),
                              }),
                          ],
                      }),
                  ],
              });
    };
