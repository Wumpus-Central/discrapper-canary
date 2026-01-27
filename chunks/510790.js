n.d(t, {
    f: () => C,
}),
    n(747238);
var r = n(627968),
    i = n(64700),
    l = n(735438),
    a = n(110259),
    s = n(239947),
    o = n(934551),
    c = n(97808),
    u = n(732955),
    d = n(397927),
    p = n(139286),
    m = n(520117),
    f = n(793943),
    g = n(763754),
    h = n(973654),
    _ = n(954571),
    b = n(467135),
    A = n(644235),
    y = n(153469),
    v = n(652215),
    x = n(520650),
    O = n(985018),
    E = n(294456);
let j = (e) => e.map((e) => "#".concat(e)),
    C = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            { setAll: i } = (0, b.ko)();
        return void 0 === n
            ? null
            : (0, r.jsxs)("div", {
                  className: E.kL,
                  children: [
                      (0, r.jsx)(I, {
                          message: t,
                      }),
                      (0, r.jsx)(u.$nd, {
                          text: O.intl.string(O.t.SKNnqq),
                          fullWidth: !0,
                          variant: "primary",
                          onClick: () => {
                              _.default.track(v.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                                  (0, f.nf)(f.HP.CUSTOM_THEME, {
                                      from: f.xv.SHARE_MESSAGE,
                                  }),
                                  i({
                                      colors: j(n.colors),
                                      chassisMixAmount: n.base_mix,
                                      gradientAngle: n.gradient_angle,
                                  }),
                                  (0, h.GQ)((0, A.PC)(n.base_theme));
                          },
                      }),
                  ],
              });
    },
    I = (e) => {
        let t,
            n,
            u,
            { message: f } = e,
            { sharedClientTheme: h } = f,
            _ = (0, g.Ay)(f),
            b = i.useMemo(
                () =>
                    (0, l.once)(() => {
                        (0, p.x)({
                            type: a.ImpressionTypes.VIEW,
                            name: s.I.CUSTOM_THEME_SHARE,
                            properties: {},
                        });
                    }),
                [],
            ),
            A = (0, m.A)({
                onVisible: () => {
                    b();
                },
                threshold: 1,
                minTimeVisibleMs: 200,
            }),
            v = i.useMemo(() => {
                var e;
                return void 0 === h ? "" : (0, y.V9)(j(h.colors), null != (e = h.gradient_angle) ? e : 0);
            }, [h]);
        return void 0 === h
            ? null
            : (0, r.jsxs)("div", {
                  className: E.pS,
                  ref: A,
                  children: [
                      (0, r.jsx)("div", {
                          className: E.sl,
                          style: {
                              background: "".concat(v),
                          },
                      }),
                      (0, r.jsxs)("div", {
                          className: E.Ix,
                          children: [
                              (0, r.jsxs)(d.Heading, {
                                  variant: "heading-md/semibold",
                                  className: E.qP,
                                  children: [O.intl.string(x.default.KSBBpC), " ", (0, r.jsx)(o.NitroWheelIcon, {})],
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  className: E.Tb,
                                  children:
                                      ((t = "".concat(
                                          O.intl.format(x.default.fQPSEf, {
                                              username: "__USERNAME__",
                                          }),
                                      )),
                                      (n = f.author),
                                      (u = _.nick),
                                      t.split(" ").map((e, t) =>
                                          "__USERNAME__" !== e
                                              ? (0, r.jsxs)(
                                                    i.Fragment,
                                                    {
                                                        children: [e, " "],
                                                    },
                                                    t,
                                                )
                                              : (0, r.jsxs)(
                                                    "span",
                                                    {
                                                        className: E.H,
                                                        children: [
                                                            (0, r.jsx)(c.eu, {
                                                                "aria-label": u,
                                                                src: n.getAvatarURL(null, 20),
                                                                size: d._3J.SIZE_20,
                                                            }),
                                                            " ",
                                                            u,
                                                            " ",
                                                        ],
                                                    },
                                                    t,
                                                ),
                                      )),
                              }),
                          ],
                      }),
                  ],
              });
    };
