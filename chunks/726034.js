n.d(t, { Z: () => et }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(680018),
    u = n(146187),
    d = n(861066),
    f = n(179538),
    _ = n(755721),
    p = n(481060),
    h = n(153867),
    m = n(230711),
    g = n(493773),
    E = n(100527),
    b = n(906732),
    y = n(550385),
    O = n(266454),
    v = n(784238),
    I = n(767714),
    S = n(612659),
    T = n(781391),
    A = n(210887),
    C = n(233398),
    N = n(263198),
    R = n(866419),
    P = n(803038),
    w = n(507962),
    D = n(877865),
    x = n(536847),
    L = n(981631),
    j = n(921944),
    M = n(474936),
    k = n(119475),
    U = n(388032),
    G = n(461917);
function B(e, t, n) {
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
function Z(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
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
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function H(e) {
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
function Y(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: G.closeButton,
        children: (0, r.jsx)(u.P, {
            size: "sm",
            onClick: () => {
                null == t || t(j.L.USER_DISMISS), (0, y.Ll)();
            },
        }),
    });
}
function W() {
    return (0, r.jsxs)("div", {
        className: G.headerContainer,
        children: [
            (0, r.jsx)(p.Text, {
                variant: "text-md/bold",
                children: U.intl.string(k.default["AsmU8/"]),
            }),
            (0, r.jsx)(p.ua7, {
                text: U.intl.string(U.t["5AFxuL"]),
                children: (e) =>
                    (0, r.jsx)(
                        p.SrA,
                        Z(
                            {
                                size: "custom",
                                height: 20,
                                width: 20,
                                colorClass: G.nitroIcon,
                            },
                            e,
                        ),
                    ),
            }),
            (0, r.jsx)(Y, {}),
        ],
    });
}
function K(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, O.Nj)(l.z.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(z, { markAsDismissed: t })
            : (0, r.jsx)(W, {})
        : (0, r.jsx)(z, { markAsDismissed: () => (0, O.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function z(e) {
    let { markAsDismissed: t } = e,
        n = (0, S.m)(M.p9.TIER_2);
    return (0, r.jsxs)("div", {
        className: G.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: G.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(p.lBU, { text: U.intl.string(U.t.oW0eUV) }),
                    (0, r.jsx)(Y, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: G.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(p.X6q, {
                        variant: "heading-lg/extrabold",
                        children: U.intl.string(k.default["23QUzs"]),
                    }),
                    (0, r.jsx)(p.Text, {
                        className: G.subtitle,
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: U.intl.string(n ? k.default.TRCE4u : k.default["UV/Vtr"]),
                    }),
                ],
            }),
        ],
    });
}
function q(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = H(t);
    return (0, r.jsxs)("div", {
        className: o()(G.sliderContainer, G.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(p.Text, {
                variant: "text-sm/medium",
                children: U.intl.string(k.default.dZkwg4),
            }),
            (0, r.jsx)(
                p.iRW,
                {
                    initialValue: t,
                    defaultValue: 0,
                    minValue: 0,
                    maxValue: 360,
                    onValueChange: (e) => {
                        (0, w.fR)(), a(e), n(e);
                    },
                    onValueRender: (e) => "".concat(Math.round(e), "\xB0"),
                    keyboardStep: 1,
                },
                i,
            ),
        ],
    });
}
function X(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = H(t);
    return (0, r.jsxs)("div", {
        className: G.sliderContainer,
        children: [
            (0, r.jsx)(p.Text, {
                variant: "text-sm/medium",
                children: U.intl.string(k.default.xlXkaG),
            }),
            (0, r.jsx)(
                p.iRW,
                {
                    initialValue: t,
                    defaultValue: C.BH,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        (0, w.z3)(), a(e), n(e);
                    },
                    keyboardStep: 1,
                },
                i,
            ),
        ],
    });
}
function Q(e) {
    let { type: t } = e,
        n = i.useCallback(() => {
            var e;
            (0, w.Om)();
            let t = (0, N.C)();
            C.Ig.getState().setAll({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : C.Ig.getState().gradientAngle,
                chassisMixAmount: t.intensity,
            });
        }, []);
    return (0, r.jsx)(p.ua7, {
        text: U.intl.string(k.default.c9MBEB),
        children: (e) =>
            "with-text" === t
                ? (0, r.jsx)(
                      c.z,
                      V(Z({}, e), {
                          variant: "secondary",
                          onClick: n,
                          icon: p.T$Z,
                          text: U.intl.string(k.default.c9MBEB),
                          fullWidth: !0,
                      }),
                  )
                : (0, r.jsx)("div", {
                      className: G.surpriseMeButton,
                      children: (0, r.jsx)(
                          d.h,
                          V(Z({}, e), {
                              variant: "icon-only",
                              size: "md",
                              onClick: n,
                              icon: p.T$Z,
                              "aria-label": U.intl.string(k.default.c9MBEB),
                          }),
                      ),
                  }),
    });
}
function J(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(p.ua7, {
        text: U.intl.string(k.default.SFyHIC),
        shouldShow: n,
        children: (e) =>
            (0, r.jsx)(
                c.z,
                V(Z({}, e), {
                    variant: "primary",
                    onClick: t,
                    disabled: n,
                    text: U.intl.string(U.t["1Qm829"]),
                    fullWidth: i,
                }),
            ),
    });
}
function $(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, S.m)(M.p9.TIER_2);
    return (
        (0, w.hf)(i, E.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsxs)("div", {
            className: G.coachmarkFooterContainer,
            children: [
                (0, r.jsx)(Q, { type: "with-text" }),
                i
                    ? (0, r.jsx)(J, {
                          disabled: !n,
                          onApply: t,
                          fullWidth: !0,
                      })
                    : (0, r.jsx)(v.Z, {
                          premiumModalAnalyticsLocation: {
                              page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: L.jXE.CUSTOM_THEMES_COACHMARK_FOOTER,
                          },
                          textOptions: { subscribeText: U.intl.string(U.t.JST6jo) },
                          subscriptionTier: M.Si.TIER_2,
                          showGradient: !0,
                          color: _.Tt.BRAND,
                      }),
            ],
        })
    );
}
function ee(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, S.m)(M.p9.TIER_2);
    (0, w.hf)(a, E.Z.CUSTOM_THEMES_EDITOR);
    let o = () => {
        (0, w.Vb)(),
            (0, O.Q3)(l.z.CUSTOM_THEME_COACHMARK),
            (null == i ? void 0 : i.from) === y.tE.SETTING
                ? (m.Z.open(), (0, y.Ll)())
                : (null == i ? void 0 : i.from) === y.tE.CLIENT_THEMES_EDITOR
                  ? (0, y.XO)(y.wh.CLIENT_THEMES)
                  : (0, y.Ll)();
    };
    return (0, r.jsxs)("div", {
        className: G.footerContainer,
        children: [
            (0, r.jsx)(Q, { type: "no-text" }),
            (0, r.jsx)(f.A, {
                variant: "secondary",
                onClick: o,
                text: U.intl.string(U.t["13/7kZ"]),
            }),
            a
                ? (0, r.jsx)(J, {
                      disabled: !n,
                      onApply: t,
                  })
                : (0, r.jsx)(I.Z, {
                      className: G.subscribeButton,
                      size: _.zx.Sizes.MEDIUM,
                      subscriptionTier: M.Si.TIER_2,
                      showGradient: !0,
                      premiumModalAnalyticsLocation: {
                          page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: L.jXE.CUSTOM_THEMES_FOOTER,
                      },
                      textOptions: { textOverride: U.intl.string(U.t.pj0XBA) },
                  }),
        ],
    });
}
function et(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: u, isMobile: d } = e,
        f = P.Mc.useExperiment({ location: "ClientThemeColorPickerTools" }).enabled,
        _ = (0, R.jJ)(),
        m = i.useRef(!1),
        {
            colors: v,
            chassisMixAmount: I,
            gradientAngle: S,
            setColors: N,
            setChassisMixAmount: L,
            setGradientAngle: M,
        } = (0, C.Ig)(),
        [k, B] = i.useState(null != (t = v[0]) ? t : C.Dp),
        Z = (0, s.e7)([A.Z], () => A.Z.theme),
        F = (0, O.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: V } = (0, b.ZP)(E.Z.CUSTOM_THEMES_EDITOR),
        H = async () => {
            (m.current = !0),
                await (0, h.ZI)({
                    theme: Z,
                    customUserThemeSettings: {
                        colors: v,
                        gradientColorStops: [],
                        gradientAngle: S,
                        baseMix: I,
                    },
                }),
                (0, w.u7)(v, I, S, Z, V),
                null == a || a(j.L.TAKE_ACTION),
                F || (0, O.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, y.Ll)(),
                (0, T.UD)();
        },
        Y = () => {
            _(R._m.RESET_BUTTON), (0, w.uf)();
        },
        W = v.length > 0;
    return (i.useEffect(
        () => () => {
            m.current || _(R._m.EDITOR_CLOSE);
        },
        [_],
    ),
    (0, g.ZP)(() => {
        u || (0, R.lT)(v, k, N);
    }),
    f)
        ? (0, r.jsx)("div", {
              className: o()(G.container, { [G.mobileContainer]: d }),
              "data-app-right-panel": !d,
              children: (0, r.jsxs)("div", {
                  className: G.containerInner,
                  children: [
                      (0, r.jsx)(p.Ttm, {
                          children: (0, r.jsxs)("div", {
                              className: o()(G.editorBody, { [G.mobileEditorBody]: d }),
                              children: [
                                  (0, r.jsx)(K, {
                                      markAsDismissed: a,
                                      isCoachmark: u,
                                  }),
                                  (0, r.jsx)(x.o, {}),
                                  (0, r.jsx)(D.U, {
                                      onChange: (e) => {
                                          B(e), 0 === v.length && (0, R.lT)(v, e, N);
                                      },
                                      value: k,
                                      colors: v,
                                      setColors: N,
                                  }),
                                  v.length > 1 &&
                                      (0, r.jsx)(q, {
                                          gradientAngle: S,
                                          setGradientAngle: M,
                                      }),
                                  (0, r.jsx)(X, {
                                      chassisMixAmount: I,
                                      setChassisMixAmount: (e) => {
                                          L(e), 0 === v.length && (0, R.lT)(v, k, N);
                                      },
                                  }),
                                  (0, r.jsx)(c.z, {
                                      variant: "secondary",
                                      onClick: Y,
                                      icon: p.Oe7,
                                      text: U.intl.string(U.t.yBZMsb),
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                      }),
                      u
                          ? (0, r.jsx)($, {
                                onSaveTheme: H,
                                canApply: W,
                            })
                          : (0, r.jsx)(ee, {
                                onSaveTheme: H,
                                canApply: W,
                                metadata: n,
                            }),
                  ],
              }),
          })
        : null;
}
