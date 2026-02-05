n.d(t, { f: () => S });
var i = n(627968),
    l = n(64700),
    a = n(735438),
    r = n(110259),
    s = n(239947),
    o = n(934551),
    d = n(97808),
    c = n(732955),
    u = n(397927),
    m = n(139286),
    _ = n(520117),
    h = n(793943),
    p = n(763754),
    g = n(973654),
    A = n(954571),
    f = n(467135),
    x = n(644235),
    E = n(153469),
    C = n(652215),
    I = n(520650),
    T = n(985018),
    v = n(294456);
let N = (e) => e.map((e) => `#${e}`),
    S = (e) => {
        let { message: t } = e,
            { sharedClientTheme: n } = t,
            { setAll: l } = (0, f.ko)();
        return void 0 === n
            ? null
            : (0, i.jsxs)("div", {
                  className: v.kL,
                  children: [
                      (0, i.jsx)(b, { message: t }),
                      (0, i.jsx)(c.$nd, {
                          text: T.intl.string(T.t.SKNnqq),
                          fullWidth: !0,
                          variant: "primary",
                          onClick: () => {
                              A.default.track(C.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                                  (0, h.nf)(h.HP.CUSTOM_THEME, { from: h.xv.SHARE_MESSAGE }),
                                  l({
                                      colors: N(n.colors),
                                      chassisMixAmount: n.base_mix,
                                      gradientAngle: n.gradient_angle,
                                  }),
                                  (0, g.GQ)((0, x.PC)(n.base_theme));
                          },
                      }),
                  ],
              });
    },
    b = (e) => {
        let t,
            n,
            c,
            { message: h } = e,
            { sharedClientTheme: g } = h,
            A = (0, p.Ay)(h),
            f = l.useMemo(
                () =>
                    (0, a.once)(() => {
                        (0, m.x)({ type: r.ImpressionTypes.VIEW, name: s.I.CUSTOM_THEME_SHARE, properties: {} });
                    }),
                [],
            ),
            x = (0, _.A)({
                onVisible: () => {
                    f();
                },
                threshold: 1,
                minTimeVisibleMs: 200,
            }),
            C = l.useMemo(() => (void 0 === g ? "" : (0, E.V9)(N(g.colors), g.gradient_angle ?? 0)), [g]);
        return void 0 === g
            ? null
            : (0, i.jsxs)("div", {
                  className: v.pS,
                  ref: x,
                  children: [
                      (0, i.jsx)("div", { className: v.sl, style: { background: `${C}` } }),
                      (0, i.jsxs)("div", {
                          className: v.Ix,
                          children: [
                              (0, i.jsxs)(u.Heading, {
                                  variant: "heading-md/semibold",
                                  className: v.qP,
                                  children: [T.intl.string(I.default.KSBBpC), " ", (0, i.jsx)(o.NitroWheelIcon, {})],
                              }),
                              (0, i.jsx)(u.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  className: v.Tb,
                                  children:
                                      ((t = `${T.intl.format(I.default.fQPSEf, { username: "__USERNAME__" })}`),
                                      (n = h.author),
                                      (c = A.nick),
                                      t
                                          .split(" ")
                                          .map((e, t) =>
                                              "__USERNAME__" !== e
                                                  ? (0, i.jsxs)(l.Fragment, { children: [e, " "] }, t)
                                                  : (0, i.jsxs)(
                                                        "span",
                                                        {
                                                            className: v.H,
                                                            children: [
                                                                (0, i.jsx)(d.eu, {
                                                                    "aria-label": c,
                                                                    src: n.getAvatarURL(null, 20),
                                                                    size: u._3J.SIZE_20,
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
