n.d(t, { Z: () => $ }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(159691),
    u = n(755721),
    d = n(481060),
    f = n(153867),
    _ = n(493773),
    p = n(100527),
    h = n(906732),
    m = n(550385),
    g = n(266454),
    E = n(784238),
    b = n(767714),
    y = n(612659),
    O = n(781391),
    v = n(210887),
    I = n(313789),
    T = n(518596),
    S = n(233398),
    A = n(263198),
    C = n(866419),
    N = n(803038),
    R = n(507962),
    P = n(877865),
    w = n(536847),
    D = n(981631),
    x = n(921944),
    L = n(474936),
    j = n(119475),
    M = n(388032),
    k = n(461917);
function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e) {
    let [t, n] = i.useState(0),
        [r, a] = i.useState(!1),
        o = i.useRef(e);
    return (
        i.useEffect(() => {
            e === o.current || r || n((e) => e + 1), (o.current = e), a(!1);
        }, [e, r]),
        {
            key: t,
            handleInternalChange: i.useCallback((e) => (a(!0), e), []),
        }
    );
}
function V(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: k.closeButton,
        children: (0, r.jsx)(c.PZ7, {
            size: "sm",
            onClick: () => {
                null == t || t(x.L.USER_DISMISS), (0, m.Ll)();
            },
        }),
    });
}
function H() {
    return (0, r.jsxs)("div", {
        className: k.headerContainer,
        children: [
            (0, r.jsx)(d.Text, {
                variant: "text-md/bold",
                children: M.intl.string(j.default["AsmU8/"]),
            }),
            (0, r.jsx)(d.ua7, {
                text: M.intl.string(M.t["5AFxuL"]),
                children: (e) =>
                    (0, r.jsx)(
                        d.SrA,
                        G(
                            {
                                size: "custom",
                                height: 20,
                                width: 20,
                                colorClass: k.nitroIcon,
                            },
                            e,
                        ),
                    ),
            }),
            (0, r.jsx)(V, {}),
        ],
    });
}
function Y(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, g.Nj)(l.z.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(W, { markAsDismissed: t })
            : (0, r.jsx)(H, {})
        : (0, r.jsx)(W, { markAsDismissed: () => (0, g.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function W(e) {
    let { markAsDismissed: t } = e,
        n = (0, y.m)(L.p9.TIER_2);
    return (0, r.jsxs)("div", {
        className: k.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: k.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(d.lBU, { text: M.intl.string(M.t.oW0eUV) }),
                    (0, r.jsx)(V, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: k.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: "heading-lg/extrabold",
                        children: M.intl.string(j.default["23QUzs"]),
                    }),
                    (0, r.jsx)(d.Text, {
                        className: k.subtitle,
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: M.intl.string(n ? j.default.TRCE4u : j.default["UV/Vtr"]),
                    }),
                ],
            }),
        ],
    });
}
function K(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = F(t);
    return (0, r.jsxs)("div", {
        className: o()(k.sliderContainer, k.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: M.intl.string(j.default.dZkwg4),
            }),
            (0, r.jsx)(
                d.iRW,
                {
                    initialValue: t,
                    defaultValue: 0,
                    minValue: 0,
                    maxValue: 360,
                    onValueChange: (e) => {
                        (0, R.fR)(), a(e), n(e);
                    },
                    onValueRender: (e) => "".concat(Math.round(e), "\xB0"),
                    keyboardStep: 1,
                },
                i,
            ),
        ],
    });
}
function z(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = F(t);
    return (0, r.jsxs)("div", {
        className: k.sliderContainer,
        children: [
            (0, r.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: M.intl.string(j.default.xlXkaG),
            }),
            (0, r.jsx)(
                d.iRW,
                {
                    initialValue: t,
                    defaultValue: S.BH,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        (0, R.z3)(), a(e), n(e);
                    },
                    keyboardStep: 1,
                },
                i,
            ),
        ],
    });
}
function q(e) {
    let { type: t } = e,
        n = i.useCallback(() => {
            var e;
            (0, R.Om)();
            let t = (0, A.C)();
            S.Ig.getState().setAll({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : S.Ig.getState().gradientAngle,
                chassisMixAmount: t.intensity,
            });
        }, []);
    return (0, r.jsx)(d.ua7, {
        text: M.intl.string(j.default.c9MBEB),
        children: (e) =>
            "with-text" === t
                ? (0, r.jsx)(
                      c.zxk,
                      Z(G({}, e), {
                          variant: "secondary",
                          onClick: n,
                          icon: d.T$Z,
                          text: M.intl.string(j.default.c9MBEB),
                          fullWidth: !0,
                      }),
                  )
                : (0, r.jsx)("div", {
                      className: k.surpriseMeButton,
                      children: (0, r.jsx)(
                          c.hU,
                          Z(G({}, e), {
                              variant: "icon-only",
                              size: "md",
                              onClick: n,
                              icon: d.T$Z,
                              "aria-label": M.intl.string(j.default.c9MBEB),
                          }),
                      ),
                  }),
    });
}
function X(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(d.ua7, {
        text: M.intl.string(j.default.SFyHIC),
        shouldShow: n,
        children: (e) =>
            (0, r.jsx)(
                c.zxk,
                Z(G({}, e), {
                    variant: "primary",
                    onClick: t,
                    disabled: n,
                    text: M.intl.string(M.t["1Qm829"]),
                    fullWidth: i,
                }),
            ),
    });
}
function Q(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, y.m)(L.p9.TIER_2);
    return (
        (0, R.hf)(i, p.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsxs)("div", {
            className: k.coachmarkFooterContainer,
            children: [
                (0, r.jsx)(q, { type: "with-text" }),
                i
                    ? (0, r.jsx)(X, {
                          disabled: !n,
                          onApply: t,
                          fullWidth: !0,
                      })
                    : (0, r.jsx)(E.Z, {
                          premiumModalAnalyticsLocation: {
                              page: D.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: D.jXE.CUSTOM_THEMES_COACHMARK_FOOTER,
                          },
                          textOptions: { subscribeText: M.intl.string(M.t.JST6jo) },
                          subscriptionTier: L.Si.TIER_2,
                          showGradient: !0,
                          color: u.Tt.BRAND,
                      }),
            ],
        })
    );
}
function J(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, y.m)(L.p9.TIER_2);
    (0, R.hf)(a, p.Z.CUSTOM_THEMES_EDITOR);
    let o = () => {
        (0, R.Vb)(),
            (0, g.Q3)(l.z.CUSTOM_THEME_COACHMARK),
            (null == i ? void 0 : i.from) === m.tE.SETTING
                ? ((0, T.openUserSettings)(I.n.APPEARANCE_PANEL, { section: D.oAB.APPEARANCE }), (0, m.Ll)())
                : (null == i ? void 0 : i.from) === m.tE.CLIENT_THEMES_EDITOR
                  ? (0, m.XO)(m.wh.CLIENT_THEMES)
                  : (0, m.Ll)();
    };
    return (0, r.jsxs)("div", {
        className: k.footerContainer,
        children: [
            (0, r.jsx)(q, { type: "no-text" }),
            (0, r.jsx)(c.Avr, {
                variant: "secondary",
                onClick: o,
                text: M.intl.string(M.t["13/7kZ"]),
            }),
            a
                ? (0, r.jsx)(X, {
                      disabled: !n,
                      onApply: t,
                  })
                : (0, r.jsx)(b.Z, {
                      className: k.subscribeButton,
                      size: u.zx.Sizes.MEDIUM,
                      subscriptionTier: L.Si.TIER_2,
                      showGradient: !0,
                      premiumModalAnalyticsLocation: {
                          page: D.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: D.jXE.CUSTOM_THEMES_FOOTER,
                      },
                      textOptions: { textOverride: M.intl.string(M.t.pj0XBA) },
                  }),
        ],
    });
}
function $(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: u, isMobile: E } = e,
        b = N.Mc.useExperiment({ location: "ClientThemeColorPickerTools" }).enabled,
        y = (0, C.jJ)(),
        I = i.useRef(!1),
        {
            colors: T,
            chassisMixAmount: A,
            gradientAngle: D,
            setColors: L,
            setChassisMixAmount: j,
            setGradientAngle: U,
        } = (0, S.Ig)(),
        [G, B] = i.useState(null != (t = T[0]) ? t : S.Dp),
        Z = (0, s.e7)([v.Z], () => v.Z.theme),
        F = (0, g.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: V } = (0, h.ZP)(p.Z.CUSTOM_THEMES_EDITOR),
        H = async () => {
            (I.current = !0),
                await (0, f.ZI)({
                    theme: Z,
                    customUserThemeSettings: {
                        colors: T,
                        gradientColorStops: [],
                        gradientAngle: D,
                        baseMix: A,
                    },
                }),
                (0, R.u7)(T, A, D, Z, V),
                null == a || a(x.L.TAKE_ACTION),
                F || (0, g.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, m.Ll)(),
                (0, O.UD)();
        },
        W = () => {
            y(C._m.RESET_BUTTON), (0, R.uf)();
        },
        q = T.length > 0;
    return (i.useEffect(
        () => () => {
            I.current || y(C._m.EDITOR_CLOSE);
        },
        [y],
    ),
    (0, _.ZP)(() => {
        u || (0, C.lT)(T, G, L);
    }),
    b)
        ? (0, r.jsx)("div", {
              className: o()(k.container, { [k.mobileContainer]: E }),
              "data-app-right-panel": !E,
              children: (0, r.jsxs)("div", {
                  className: k.containerInner,
                  children: [
                      (0, r.jsx)(d.Ttm, {
                          children: (0, r.jsxs)("div", {
                              className: o()(k.editorBody, { [k.mobileEditorBody]: E }),
                              children: [
                                  (0, r.jsx)(Y, {
                                      markAsDismissed: a,
                                      isCoachmark: u,
                                  }),
                                  (0, r.jsx)(w.o, {}),
                                  (0, r.jsx)(P.U, {
                                      onChange: (e) => {
                                          B(e), 0 === T.length && (0, C.lT)(T, e, L);
                                      },
                                      value: G,
                                      colors: T,
                                      setColors: L,
                                  }),
                                  T.length > 1 &&
                                      (0, r.jsx)(K, {
                                          gradientAngle: D,
                                          setGradientAngle: U,
                                      }),
                                  (0, r.jsx)(z, {
                                      chassisMixAmount: A,
                                      setChassisMixAmount: (e) => {
                                          j(e), 0 === T.length && (0, C.lT)(T, G, L);
                                      },
                                  }),
                                  (0, r.jsx)(c.zxk, {
                                      variant: "secondary",
                                      onClick: W,
                                      icon: d.Oe7,
                                      text: M.intl.string(M.t.yBZMsb),
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                      }),
                      u
                          ? (0, r.jsx)(Q, {
                                onSaveTheme: H,
                                canApply: q,
                            })
                          : (0, r.jsx)(J, {
                                onSaveTheme: H,
                                canApply: q,
                                metadata: n,
                            }),
                  ],
              }),
          })
        : null;
}
