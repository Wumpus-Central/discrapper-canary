n.d(t, { Z: () => J }), n(388685);
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
    _ = n(230711),
    p = n(493773),
    h = n(100527),
    m = n(906732),
    g = n(550385),
    E = n(266454),
    b = n(784238),
    y = n(767714),
    O = n(612659),
    v = n(781391),
    I = n(210887),
    T = n(233398),
    S = n(263198),
    A = n(866419),
    C = n(803038),
    N = n(507962),
    R = n(877865),
    P = n(536847),
    w = n(981631),
    D = n(921944),
    x = n(474936),
    L = n(119475),
    j = n(388032),
    k = n(461917);
function M(e, t, n) {
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
function U(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e) {
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
function F(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: k.closeButton,
        children: (0, r.jsx)(c.PZ7, {
            size: "sm",
            onClick: () => {
                null == t || t(D.L.USER_DISMISS), (0, g.Ll)();
            },
        }),
    });
}
function V() {
    return (0, r.jsxs)("div", {
        className: k.headerContainer,
        children: [
            (0, r.jsx)(d.Text, {
                variant: "text-md/bold",
                children: j.intl.string(L.default["AsmU8/"]),
            }),
            (0, r.jsx)(d.ua7, {
                text: j.intl.string(j.t["5AFxuL"]),
                children: (e) =>
                    (0, r.jsx)(
                        d.SrA,
                        U(
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
            (0, r.jsx)(F, {}),
        ],
    });
}
function H(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, E.Nj)(l.z.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(Y, { markAsDismissed: t })
            : (0, r.jsx)(V, {})
        : (0, r.jsx)(Y, { markAsDismissed: () => (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function Y(e) {
    let { markAsDismissed: t } = e,
        n = (0, O.m)(x.p9.TIER_2);
    return (0, r.jsxs)("div", {
        className: k.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: k.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(d.lBU, { text: j.intl.string(j.t.oW0eUV) }),
                    (0, r.jsx)(F, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: k.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(L.default["23QUzs"]),
                    }),
                    (0, r.jsx)(d.Text, {
                        className: k.subtitle,
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: j.intl.string(n ? L.default.TRCE4u : L.default["UV/Vtr"]),
                    }),
                ],
            }),
        ],
    });
}
function W(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = Z(t);
    return (0, r.jsxs)("div", {
        className: o()(k.sliderContainer, k.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: j.intl.string(L.default.dZkwg4),
            }),
            (0, r.jsx)(
                d.iRW,
                {
                    initialValue: t,
                    defaultValue: 0,
                    minValue: 0,
                    maxValue: 360,
                    onValueChange: (e) => {
                        (0, N.fR)(), a(e), n(e);
                    },
                    onValueRender: (e) => "".concat(Math.round(e), "\xB0"),
                    keyboardStep: 1,
                },
                i,
            ),
        ],
    });
}
function K(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = Z(t);
    return (0, r.jsxs)("div", {
        className: k.sliderContainer,
        children: [
            (0, r.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: j.intl.string(L.default.xlXkaG),
            }),
            (0, r.jsx)(
                d.iRW,
                {
                    initialValue: t,
                    defaultValue: T.BH,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        (0, N.z3)(), a(e), n(e);
                    },
                    keyboardStep: 1,
                },
                i,
            ),
        ],
    });
}
function z(e) {
    let { type: t } = e,
        n = i.useCallback(() => {
            var e;
            (0, N.Om)();
            let t = (0, S.C)();
            T.Ig.getState().setAll({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : T.Ig.getState().gradientAngle,
                chassisMixAmount: t.intensity,
            });
        }, []);
    return (0, r.jsx)(d.ua7, {
        text: j.intl.string(L.default.c9MBEB),
        children: (e) =>
            "with-text" === t
                ? (0, r.jsx)(
                      c.zxk,
                      B(U({}, e), {
                          variant: "secondary",
                          onClick: n,
                          icon: d.T$Z,
                          text: j.intl.string(L.default.c9MBEB),
                          fullWidth: !0,
                      }),
                  )
                : (0, r.jsx)("div", {
                      className: k.surpriseMeButton,
                      children: (0, r.jsx)(
                          c.hU,
                          B(U({}, e), {
                              variant: "icon-only",
                              size: "md",
                              onClick: n,
                              icon: d.T$Z,
                              "aria-label": j.intl.string(L.default.c9MBEB),
                          }),
                      ),
                  }),
    });
}
function q(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(d.ua7, {
        text: j.intl.string(L.default.SFyHIC),
        shouldShow: n,
        children: (e) =>
            (0, r.jsx)(
                c.zxk,
                B(U({}, e), {
                    variant: "primary",
                    onClick: t,
                    disabled: n,
                    text: j.intl.string(j.t["1Qm829"]),
                    fullWidth: i,
                }),
            ),
    });
}
function X(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, O.m)(x.p9.TIER_2);
    return (
        (0, N.hf)(i, h.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsxs)("div", {
            className: k.coachmarkFooterContainer,
            children: [
                (0, r.jsx)(z, { type: "with-text" }),
                i
                    ? (0, r.jsx)(q, {
                          disabled: !n,
                          onApply: t,
                          fullWidth: !0,
                      })
                    : (0, r.jsx)(b.Z, {
                          premiumModalAnalyticsLocation: {
                              page: w.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: w.jXE.CUSTOM_THEMES_COACHMARK_FOOTER,
                          },
                          textOptions: { subscribeText: j.intl.string(j.t.JST6jo) },
                          subscriptionTier: x.Si.TIER_2,
                          showGradient: !0,
                          color: u.Tt.BRAND,
                      }),
            ],
        })
    );
}
function Q(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, O.m)(x.p9.TIER_2);
    (0, N.hf)(a, h.Z.CUSTOM_THEMES_EDITOR);
    let o = () => {
        (0, N.Vb)(),
            (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK),
            (null == i ? void 0 : i.from) === g.tE.SETTING
                ? (_.Z.open(), (0, g.Ll)())
                : (null == i ? void 0 : i.from) === g.tE.CLIENT_THEMES_EDITOR
                  ? (0, g.XO)(g.wh.CLIENT_THEMES)
                  : (0, g.Ll)();
    };
    return (0, r.jsxs)("div", {
        className: k.footerContainer,
        children: [
            (0, r.jsx)(z, { type: "no-text" }),
            (0, r.jsx)(c.Avr, {
                variant: "secondary",
                onClick: o,
                text: j.intl.string(j.t["13/7kZ"]),
            }),
            a
                ? (0, r.jsx)(q, {
                      disabled: !n,
                      onApply: t,
                  })
                : (0, r.jsx)(y.Z, {
                      className: k.subscribeButton,
                      size: u.zx.Sizes.MEDIUM,
                      subscriptionTier: x.Si.TIER_2,
                      showGradient: !0,
                      premiumModalAnalyticsLocation: {
                          page: w.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: w.jXE.CUSTOM_THEMES_FOOTER,
                      },
                      textOptions: { textOverride: j.intl.string(j.t.pj0XBA) },
                  }),
        ],
    });
}
function J(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: u, isMobile: _ } = e,
        b = C.Mc.useExperiment({ location: "ClientThemeColorPickerTools" }).enabled,
        y = (0, A.jJ)(),
        O = i.useRef(!1),
        {
            colors: S,
            chassisMixAmount: w,
            gradientAngle: x,
            setColors: L,
            setChassisMixAmount: M,
            setGradientAngle: U,
        } = (0, T.Ig)(),
        [G, B] = i.useState(null != (t = S[0]) ? t : T.Dp),
        Z = (0, s.e7)([I.Z], () => I.Z.theme),
        F = (0, E.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: V } = (0, m.ZP)(h.Z.CUSTOM_THEMES_EDITOR),
        Y = async () => {
            (O.current = !0),
                await (0, f.ZI)({
                    theme: Z,
                    customUserThemeSettings: {
                        colors: S,
                        gradientColorStops: [],
                        gradientAngle: x,
                        baseMix: w,
                    },
                }),
                (0, N.u7)(S, w, x, Z, V),
                null == a || a(D.L.TAKE_ACTION),
                F || (0, E.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, g.Ll)(),
                (0, v.UD)();
        },
        z = () => {
            y(A._m.RESET_BUTTON), (0, N.uf)();
        },
        q = S.length > 0;
    return (i.useEffect(
        () => () => {
            O.current || y(A._m.EDITOR_CLOSE);
        },
        [y],
    ),
    (0, p.ZP)(() => {
        u || (0, A.lT)(S, G, L);
    }),
    b)
        ? (0, r.jsx)("div", {
              className: o()(k.container, { [k.mobileContainer]: _ }),
              "data-app-right-panel": !_,
              children: (0, r.jsxs)("div", {
                  className: k.containerInner,
                  children: [
                      (0, r.jsx)(d.Ttm, {
                          children: (0, r.jsxs)("div", {
                              className: o()(k.editorBody, { [k.mobileEditorBody]: _ }),
                              children: [
                                  (0, r.jsx)(H, {
                                      markAsDismissed: a,
                                      isCoachmark: u,
                                  }),
                                  (0, r.jsx)(P.o, {}),
                                  (0, r.jsx)(R.U, {
                                      onChange: (e) => {
                                          B(e), 0 === S.length && (0, A.lT)(S, e, L);
                                      },
                                      value: G,
                                      colors: S,
                                      setColors: L,
                                  }),
                                  S.length > 1 &&
                                      (0, r.jsx)(W, {
                                          gradientAngle: x,
                                          setGradientAngle: U,
                                      }),
                                  (0, r.jsx)(K, {
                                      chassisMixAmount: w,
                                      setChassisMixAmount: (e) => {
                                          M(e), 0 === S.length && (0, A.lT)(S, G, L);
                                      },
                                  }),
                                  (0, r.jsx)(c.zxk, {
                                      variant: "secondary",
                                      onClick: z,
                                      icon: d.Oe7,
                                      text: j.intl.string(j.t.yBZMsb),
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                      }),
                      u
                          ? (0, r.jsx)(X, {
                                onSaveTheme: Y,
                                canApply: q,
                            })
                          : (0, r.jsx)(Q, {
                                onSaveTheme: Y,
                                canApply: q,
                                metadata: n,
                            }),
                  ],
              }),
          })
        : null;
}
