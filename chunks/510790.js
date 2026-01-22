n.d(t, {
    f: () => T,
}),
    n(747238);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(110259),
    o = n(239947),
    l = n(934551),
    c = n(97808),
    u = n(732955),
    d = n(397927),
    f = n(139286),
    p = n(520117),
    _ = n(793943),
    h = n(763754),
    m = n(973654),
    g = n(954571),
    E = n(467135),
    b = n(644235),
    y = n(153469),
    O = n(652215),
    A = n(520650),
    v = n(985018),
    S = n(294456);
let I = (e) => e.map((e) => "#".concat(e)),
    T = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            { setAll: i } = (0, E.ko)();
        return void 0 === n
            ? null
            : (0, r.jsxs)("div", {
                  className: S.kL,
                  children: [
                      (0, r.jsx)(N, {
                          message: t,
                      }),
                      (0, r.jsx)(u.$nd, {
                          text: v.intl.string(v.t.SKNnqq),
                          fullWidth: !0,
                          variant: "primary",
                          onClick: () => {
                              g.default.track(O.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                                  (0, _.nf)(_.HP.CUSTOM_THEME, {
                                      from: _.xv.SHARE_MESSAGE,
                                  }),
                                  i({
                                      colors: I(n.colors),
                                      chassisMixAmount: n.base_mix,
                                      gradientAngle: n.gradient_angle,
                                  }),
                                  (0, m.GQ)((0, b.PC)(n.base_theme));
                          },
                      }),
                  ],
              });
    },
    C = (e, t, n) =>
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
                          className: S.H,
                          children: [
                              (0, r.jsx)(c.eu, {
                                  "aria-label": n,
                                  src: t.getAvatarURL(null, 20),
                                  size: d._3J.SIZE_20,
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
            c = (0, h.Ay)(t),
            u = i.useMemo(
                () =>
                    (0, a.once)(() => {
                        (0, f.x)({
                            type: s.ImpressionTypes.VIEW,
                            name: o.I.CUSTOM_THEME_SHARE,
                            properties: {},
                        });
                    }),
                [],
            ),
            _ = (0, p.A)({
                onVisible: () => {
                    u();
                },
                threshold: 1,
                minTimeVisibleMs: 200,
            }),
            m = i.useMemo(() => {
                var e;
                return void 0 === n ? "" : (0, y.V9)(I(n.colors), null != (e = n.gradient_angle) ? e : 0);
            }, [n]);
        return void 0 === n
            ? null
            : (0, r.jsxs)("div", {
                  className: S.pS,
                  ref: _,
                  children: [
                      (0, r.jsx)("div", {
                          className: S.sl,
                          style: {
                              background: "".concat(m),
                          },
                      }),
                      (0, r.jsxs)("div", {
                          className: S.Ix,
                          children: [
                              (0, r.jsxs)(d.Heading, {
                                  variant: "heading-md/semibold",
                                  className: S.qP,
                                  children: [v.intl.string(A.default.KSBBpC), " ", (0, r.jsx)(l.NitroWheelIcon, {})],
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  className: S.Tb,
                                  children: C(
                                      "".concat(
                                          v.intl.format(A.default.fQPSEf, {
                                              username: "__USERNAME__",
                                          }),
                                      ),
                                      t.author,
                                      c.nick,
                                  ),
                              }),
                          ],
                      }),
                  ],
              });
    };
