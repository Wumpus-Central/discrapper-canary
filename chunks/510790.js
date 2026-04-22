n.d(t, { f: () => N });
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n(110259),
    r = n(239947),
    o = n(403581),
    d = n(97808),
    c = n(821609),
    u = n(778712),
    m = n(534514),
    _ = n(834730),
    h = n(139286),
    p = n(520117),
    g = n(793943),
    A = n(763754),
    f = n(973654),
    x = n(954571),
    C = n(467135),
    E = n(644235),
    I = n(153469),
    v = n(652215),
    b = n(693227),
    T = n(985018),
    S = n(312633);
let y = (e) => e.map((e) => `#${e}`),
    N = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            { setAll: l } = (0, C.ko)();
        return void 0 === n
            ? null
            : (0, i.jsxs)("div", {
                  className: S.kL,
                  children: [
                      (0, i.jsx)(j, { message: t }),
                      (0, i.jsx)(c.$, {
                          text: T.intl.string(T.t.SKNnqq),
                          fullWidth: !0,
                          variant: "primary",
                          onClick: () => {
                              x.default.track(v.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                                  (0, g.nf)(g.HP.CUSTOM_THEME, { from: g.xv.SHARE_MESSAGE }),
                                  l({
                                      colors: y(n.colors),
                                      chassisMixAmount: n.base_mix,
                                      gradientAngle: n.gradient_angle,
                                  }),
                                  (0, f.GQ)((0, E.PC)(n.base_theme));
                          },
                      }),
                  ],
              });
    },
    j = (e) => {
        let t,
            n,
            c,
            { message: g } = e,
            { sharedClientTheme: f } = g,
            x = (0, A.Ay)(g),
            C = l.useMemo(
                () =>
                    (0, a.once)(() => {
                        (0, h.x)({ type: s.ImpressionTypes.VIEW, name: r.I.CUSTOM_THEME_SHARE, properties: {} });
                    }),
                [],
            ),
            E = (0, p.A)({
                onVisible: () => {
                    C();
                },
                threshold: 1,
                minTimeVisibleMs: 200,
            }),
            v = l.useMemo(() => (void 0 === f ? "" : (0, I.V9)(y(f.colors), f.gradient_angle ?? 0)), [f]);
        return void 0 === f
            ? null
            : (0, i.jsxs)("div", {
                  className: S.pS,
                  ref: E,
                  children: [
                      (0, i.jsx)("div", { className: S.sl, style: { background: `${v}` } }),
                      (0, i.jsxs)("div", {
                          className: S.Ix,
                          children: [
                              (0, i.jsxs)(m.D, {
                                  variant: "heading-md/semibold",
                                  className: S.qP,
                                  children: [T.intl.string(b.default.KSBBpC), " ", (0, i.jsx)(o.t, {})],
                              }),
                              (0, i.jsx)(_.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  className: S.Tb,
                                  children:
                                      ((t = `${T.intl.format(b.default.fQPSEf, { username: "__USERNAME__" })}`),
                                      (n = g.author),
                                      (c = x.nick),
                                      t
                                          .split(" ")
                                          .map((e, t) =>
                                              "__USERNAME__" !== e
                                                  ? (0, i.jsxs)(l.Fragment, { children: [e, " "] }, t)
                                                  : (0, i.jsxs)(
                                                        "span",
                                                        {
                                                            className: S.H,
                                                            children: [
                                                                (0, i.jsx)(d.eu, {
                                                                    "aria-label": c,
                                                                    src: n.getAvatarURL(null, 20),
                                                                    size: u._3.SIZE_20,
                                                                }),
                                                                " ",
                                                                c,
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
