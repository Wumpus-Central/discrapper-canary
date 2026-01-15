n.d(t, { q: () => C }), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(990547),
    s = n(525769),
    l = n(657707),
    c = n(974674),
    u = n(159691),
    d = n(481060),
    f = n(213609),
    p = n(312871),
    _ = n(550385),
    h = n(739566),
    m = n(781391),
    g = n(626135),
    E = n(233398),
    b = n(47760),
    y = n(639745),
    O = n(981631),
    v = n(831989),
    S = n(388032),
    I = n(608430);
let T = (e) => e.map((e) => "#".concat(e)),
    C = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            { setAll: i } = (0, E.Ig)();
        return void 0 === n
            ? null
            : (0, r.jsxs)("div", {
                  className: I.container,
                  children: [
                      (0, r.jsx)(N, { message: t }),
                      (0, r.jsx)(u.zxk, {
                          text: S.intl.string(S.t.SKNnqq),
                          fullWidth: !0,
                          variant: "primary",
                          onClick: () => {
                              g.default.track(O.rMx.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                                  (0, _.XO)(_.wh.CUSTOM_THEME, { from: _.tE.SHARE_MESSAGE }),
                                  i({
                                      colors: T(n.colors),
                                      chassisMixAmount: n.base_mix,
                                      gradientAngle: n.gradient_angle,
                                  }),
                                  (0, m.y)((0, b.e)(n.base_theme));
                          },
                      }),
                  ],
              });
    },
    A = (e, t, n) =>
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
                          className: I.avatarContainer,
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
    N = (e) => {
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
            _ = (0, p.Z)({
                onVisible: () => {
                    u();
                },
                threshold: 1,
                minTimeVisibleMs: 200,
            }),
            m = i.useMemo(() => {
                var e;
                return void 0 === n ? "" : (0, y.yz)(T(n.colors), null != (e = n.gradient_angle) ? e : 0);
            }, [n]);
        return void 0 === n
            ? null
            : (0, r.jsxs)("div", {
                  className: I.themePreviewContainer,
                  ref: _,
                  children: [
                      (0, r.jsx)("div", {
                          className: I.colorPreview,
                          style: { background: "".concat(m) },
                      }),
                      (0, r.jsxs)("div", {
                          className: I.sharedByContainer,
                          children: [
                              (0, r.jsxs)(d.Heading, {
                                  variant: "heading-md/semibold",
                                  className: I.sharedTitle,
                                  children: [S.intl.string(v.default.KSBBpC), " ", (0, r.jsx)(l.NitroWheelIcon, {})],
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  className: I.sharedBy,
                                  children: A(
                                      "".concat(S.intl.format(v.default.fQPSEf, { username: "__USERNAME__" })),
                                      t.author,
                                      c.nick,
                                  ),
                              }),
                          ],
                      }),
                  ],
              });
    };
