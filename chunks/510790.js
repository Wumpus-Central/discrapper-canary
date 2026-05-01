n.d(t, { f: () => S });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(110259),
    r = n(239947),
    o = n(403581),
    d = n(97808),
    c = n(821609),
    u = n(778712),
    m = n(534514),
    h = n(834730),
    g = n(139286),
    A = n(520117),
    p = n(793943),
    x = n(763754),
    f = n(973654),
    C = n(954571),
    E = n(467135),
    v = n(644235),
    I = n(153469),
    _ = n(652215),
    j = n(693227),
    N = n(985018),
    T = n(312633);
let y = (e) => e.map((e) => `#${e}`),
    S = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            { setAll: l } = (0, E.ko)();
        return void 0 === n
            ? null
            : (0, i.jsxs)("div", {
                  className: T.kL,
                  children: [
                      (0, i.jsx)(b, { message: t }),
                      (0, i.jsx)(c.$, {
                          text: N.intl.string(N.t.SKNnqq),
                          fullWidth: !0,
                          variant: "primary",
                          onClick: () => {
                              C.default.track(_.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                                  (0, p.nf)(p.HP.CUSTOM_THEME, { from: p.xv.SHARE_MESSAGE }),
                                  l({
                                      colors: y(n.colors),
                                      chassisMixAmount: n.base_mix,
                                      gradientAngle: n.gradient_angle,
                                  }),
                                  (0, f.GQ)((0, v.PC)(n.base_theme));
                          },
                      }),
                  ],
              });
    },
    b = (e) => {
        let t,
            n,
            c,
            { message: p } = e,
            { sharedClientTheme: f } = p,
            C = (0, x.Ay)(p),
            E = l.useMemo(
                () =>
                    (0, s.once)(() => {
                        (0, g.x)({ type: a.ImpressionTypes.VIEW, name: r.I.CUSTOM_THEME_SHARE, properties: {} });
                    }),
                [],
            ),
            v = (0, A.A)({
                onVisible: () => {
                    E();
                },
                threshold: 1,
                minTimeVisibleMs: 200,
            }),
            _ = l.useMemo(() => (void 0 === f ? "" : (0, I.V9)(y(f.colors), f.gradient_angle ?? 0)), [f]);
        return void 0 === f
            ? null
            : (0, i.jsxs)("div", {
                  className: T.pS,
                  ref: v,
                  children: [
                      (0, i.jsx)("div", { className: T.sl, style: { background: `${_}` } }),
                      (0, i.jsxs)("div", {
                          className: T.Ix,
                          children: [
                              (0, i.jsxs)(m.D, {
                                  variant: "heading-md/semibold",
                                  className: T.qP,
                                  children: [N.intl.string(j.default.KSBBpC), " ", (0, i.jsx)(o.t, {})],
                              }),
                              (0, i.jsx)(h.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  className: T.Tb,
                                  children:
                                      ((t = `${N.intl.format(j.default.fQPSEf, { username: "__USERNAME__" })}`),
                                      (n = p.author),
                                      (c = C.nick),
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
