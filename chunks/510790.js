n.d(t, { f: () => N });
var i = n(627968),
    l = n(64700),
    a = n(735438),
    r = n(110259),
    s = n(239947),
    o = n(403581),
    c = n(97808),
    d = n(821609),
    u = n(778712),
    _ = n(534514),
    m = n(834730),
    h = n(139286),
    p = n(520117),
    g = n(793943),
    f = n(763754),
    x = n(973654),
    A = n(954571),
    C = n(467135),
    v = n(644235),
    I = n(153469),
    E = n(652215),
    b = n(693227),
    y = n(985018),
    T = n(312633);
let j = (e) => e.map((e) => `#${e}`),
    N = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            { setAll: l } = (0, C.ko)();
        return void 0 === n
            ? null
            : (0, i.jsxs)("div", {
                  className: T.kL,
                  children: [
                      (0, i.jsx)(S, { message: t }),
                      (0, i.jsx)(d.$, {
                          text: y.intl.string(y.t.SKNnqq),
                          fullWidth: !0,
                          variant: "primary",
                          onClick: () => {
                              A.default.track(E.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                                  (0, g.nf)(g.HP.CUSTOM_THEME, { from: g.xv.SHARE_MESSAGE }),
                                  l({
                                      colors: j(n.colors),
                                      chassisMixAmount: n.base_mix,
                                      gradientAngle: n.gradient_angle,
                                  }),
                                  (0, x.GQ)((0, v.PC)(n.base_theme));
                          },
                      }),
                  ],
              });
    },
    S = (e) => {
        let t,
            n,
            d,
            { message: g } = e,
            { sharedClientTheme: x } = g,
            A = (0, f.Ay)(g),
            C = l.useMemo(
                () =>
                    (0, a.once)(() => {
                        (0, h.x)({ type: r.ImpressionTypes.VIEW, name: s.I.CUSTOM_THEME_SHARE, properties: {} });
                    }),
                [],
            ),
            v = (0, p.A)({
                onVisible: () => {
                    C();
                },
                threshold: 1,
                minTimeVisibleMs: 200,
            }),
            E = l.useMemo(() => (void 0 === x ? "" : (0, I.V9)(j(x.colors), x.gradient_angle ?? 0)), [x]);
        return void 0 === x
            ? null
            : (0, i.jsxs)("div", {
                  className: T.pS,
                  ref: v,
                  children: [
                      (0, i.jsx)("div", { className: T.sl, style: { background: `${E}` } }),
                      (0, i.jsxs)("div", {
                          className: T.Ix,
                          children: [
                              (0, i.jsxs)(_.D, {
                                  variant: "heading-md/semibold",
                                  className: T.qP,
                                  children: [y.intl.string(b.default.KSBBpC), " ", (0, i.jsx)(o.t, {})],
                              }),
                              (0, i.jsx)(m.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  className: T.Tb,
                                  children:
                                      ((t = `${y.intl.format(b.default.fQPSEf, { username: "__USERNAME__" })}`),
                                      (n = g.author),
                                      (d = A.nick),
                                      t
                                          .split(" ")
                                          .map((e, t) =>
                                              "__USERNAME__" !== e
                                                  ? (0, i.jsxs)(l.Fragment, { children: [e, " "] }, t)
                                                  : (0, i.jsxs)(
                                                        "span",
                                                        {
                                                            className: T.H,
                                                            children: [
                                                                (0, i.jsx)(c.eu, {
                                                                    "aria-label": d,
                                                                    src: n.getAvatarURL(null, 20),
                                                                    size: u._3.SIZE_20,
                                                                }),
                                                                " ",
                                                                d,
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
