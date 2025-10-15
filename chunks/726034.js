n.d(t, { Z: () => X }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(28664),
    u = n(159691),
    d = n(755721),
    f = n(481060),
    _ = n(153867),
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
    T = n(313789),
    S = n(518596),
    A = n(233398),
    C = n(263198),
    N = n(866419),
    R = n(803038),
    P = n(771934),
    w = n(877865),
    D = n(536847),
    L = n(981631),
    x = n(921944),
    M = n(474936),
    j = n(687101),
    k = n(388032),
    U = n(461917);
function G(e) {
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
function B(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: U.closeButton,
        children: (0, r.jsx)(u.PZ7, {
            size: "sm",
            onClick: () => {
                null == t || t(x.L.USER_DISMISS), (0, g.Ll)();
            },
        }),
    });
}
function Z() {
    return (0, r.jsxs)("div", {
        className: U.headerContainer,
        children: [
            (0, r.jsx)(f.Text, {
                variant: "text-md/bold",
                children: k.intl.string(j.default.AsmU85),
            }),
            (0, r.jsx)(c.u, {
                text: k.intl.string(k.t["5AFxuK"]),
                children: (0, r.jsx)(f.SrA, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    colorClass: U.nitroIcon,
                }),
            }),
            (0, r.jsx)(B, {}),
        ],
    });
}
function F(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, E.Nj)(l.z.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(V, { markAsDismissed: t })
            : (0, r.jsx)(Z, {})
        : (0, r.jsx)(V, { markAsDismissed: () => (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function V(e) {
    let { markAsDismissed: t } = e,
        n = (0, O.m)(M.PremiumTypes.TIER_2);
    return (0, r.jsxs)("div", {
        className: U.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)("div", {
                className: U.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(f.lBU, { text: k.intl.string(k.t.oW0eUd) }),
                    (0, r.jsx)(B, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: U.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(f.Heading, {
                        variant: "heading-lg/extrabold",
                        children: k.intl.string(j.default["23QUzv"]),
                    }),
                    (0, r.jsx)(f.Text, {
                        className: U.subtitle,
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: k.intl.string(n ? j.default.TRCE4g : j.default["UV/Vtv"]),
                    }),
                ],
            }),
        ],
    });
}
function H(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = G(t);
    return (0, r.jsxs)("div", {
        className: o()(U.sliderContainer, U.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(f.Text, {
                variant: "text-sm/medium",
                children: k.intl.string(j.default.dZkwgx),
            }),
            (0, r.jsx)(
                f.iRW,
                {
                    initialValue: t,
                    defaultValue: 0,
                    minValue: 0,
                    maxValue: 360,
                    onValueChange: (e) => {
                        (0, P.fR)(), a(e), n(e);
                    },
                    onValueRender: (e) => "".concat(Math.round(e), "\xB0"),
                    keyboardStep: 1,
                },
                i,
            ),
        ],
    });
}
function Y(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = G(t);
    return (0, r.jsxs)("div", {
        className: U.sliderContainer,
        children: [
            (0, r.jsx)(f.Text, {
                variant: "text-sm/medium",
                children: k.intl.string(j.default.xlXkaL),
            }),
            (0, r.jsx)(
                f.iRW,
                {
                    initialValue: t,
                    defaultValue: A.BH,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        (0, P.z3)(), a(e), n(e);
                    },
                    keyboardStep: 1,
                },
                i,
            ),
        ],
    });
}
function W(e) {
    let { type: t } = e,
        n = i.useCallback(() => {
            var e;
            (0, P.Om)();
            let t = (0, C.C)();
            A.Ig.getState().setAll({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : A.Ig.getState().gradientAngle,
                chassisMixAmount: t.intensity,
            });
        }, []);
    return (0, r.jsx)(c.u, {
        text: k.intl.string(j.default.c9MBEH),
        children:
            "with-text" === t
                ? (0, r.jsx)(u.zxk, {
                      variant: "secondary",
                      onClick: n,
                      icon: f.T$Z,
                      text: k.intl.string(j.default.c9MBEH),
                      fullWidth: !0,
                  })
                : (0, r.jsx)("div", {
                      className: U.surpriseMeButton,
                      children: (0, r.jsx)(u.hU, {
                          variant: "icon-only",
                          size: "md",
                          onClick: n,
                          icon: f.T$Z,
                          "aria-label": k.intl.string(j.default.c9MBEH),
                      }),
                  }),
    });
}
function K(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(c.u, {
        text: k.intl.string(j.default.SFyHIP),
        shouldShow: n,
        children: (0, r.jsx)(u.zxk, {
            variant: "primary",
            onClick: t,
            disabled: n,
            text: k.intl.string(k.t["1Qm822"]),
            fullWidth: i,
        }),
    });
}
function z(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, O.m)(M.PremiumTypes.TIER_2);
    return (
        (0, P.hf)(i, h.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsxs)("div", {
            className: U.coachmarkFooterContainer,
            children: [
                (0, r.jsx)(W, { type: "with-text" }),
                i
                    ? (0, r.jsx)(K, {
                          disabled: !n,
                          onApply: t,
                          fullWidth: !0,
                      })
                    : (0, r.jsx)(b.Z, {
                          premiumModalAnalyticsLocation: {
                              page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: L.jXE.CUSTOM_THEMES_COACHMARK_FOOTER,
                          },
                          textOptions: { subscribeText: k.intl.string(k.t.JST6jl) },
                          subscriptionTier: M.Si.TIER_2,
                          showGradient: !0,
                          color: d.Tt.BRAND,
                      }),
            ],
        })
    );
}
function q(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, O.m)(M.PremiumTypes.TIER_2);
    (0, P.hf)(a, h.Z.CUSTOM_THEMES_EDITOR);
    let o = () => {
        (0, P.Vb)(),
            (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK),
            (null == i ? void 0 : i.from) === g.tE.SETTING
                ? ((0, S.openUserSettings)(T.n.APPEARANCE_PANEL, { section: L.oAB.APPEARANCE }), (0, g.Ll)())
                : (null == i ? void 0 : i.from) === g.tE.CLIENT_THEMES_EDITOR
                  ? (0, g.XO)(g.wh.CLIENT_THEMES)
                  : (0, g.Ll)();
    };
    return (0, r.jsxs)("div", {
        className: U.footerContainer,
        children: [
            (0, r.jsx)(W, { type: "no-text" }),
            (0, r.jsx)(u.Avr, {
                variant: "secondary",
                onClick: o,
                text: k.intl.string(k.t["13/7kX"]),
            }),
            a
                ? (0, r.jsx)(K, {
                      disabled: !n,
                      onApply: t,
                  })
                : (0, r.jsx)(y.Z, {
                      className: U.subscribeButton,
                      size: d.zx.Sizes.MEDIUM,
                      subscriptionTier: M.Si.TIER_2,
                      showGradient: !0,
                      premiumModalAnalyticsLocation: {
                          page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: L.jXE.CUSTOM_THEMES_FOOTER,
                      },
                      textOptions: { textOverride: k.intl.string(k.t.pj0XBN) },
                  }),
        ],
    });
}
function X(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: c, isMobile: d } = e,
        b = R.Mc.useExperiment({ location: "ClientThemeColorPickerTools" }).enabled,
        y = (0, N.jJ)(),
        O = i.useRef(!1),
        {
            colors: T,
            chassisMixAmount: S,
            gradientAngle: C,
            setColors: L,
            setChassisMixAmount: M,
            setGradientAngle: j,
        } = (0, A.Ig)(),
        [G, B] = i.useState(null != (t = T[0]) ? t : A.Dp),
        Z = (0, s.e7)([I.Z], () => I.Z.theme),
        V = (0, E.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: W } = (0, m.ZP)(h.Z.CUSTOM_THEMES_EDITOR),
        K = async () => {
            (O.current = !0),
                await (0, _.ZI)({
                    theme: Z,
                    customUserThemeSettings: {
                        colors: T,
                        gradientColorStops: [],
                        gradientAngle: C,
                        baseMix: S,
                    },
                }),
                (0, P.u7)(T, S, C, Z, W),
                null == a || a(x.L.TAKE_ACTION),
                V || (0, E.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, g.Ll)(),
                (0, v.UD)();
        },
        X = () => {
            y(N._m.RESET_BUTTON), (0, P.uf)();
        },
        Q = T.length > 0;
    return (i.useEffect(
        () => () => {
            O.current || y(N._m.EDITOR_CLOSE);
        },
        [y],
    ),
    (0, p.ZP)(() => {
        c || (0, N.lT)(T, G, L);
    }),
    b)
        ? (0, r.jsx)("div", {
              className: o()(U.container, { [U.mobileContainer]: d }),
              "data-app-right-panel": !d,
              children: (0, r.jsxs)("div", {
                  className: U.containerInner,
                  children: [
                      (0, r.jsx)(f.Ttm, {
                          children: (0, r.jsxs)("div", {
                              className: o()(U.editorBody, { [U.mobileEditorBody]: d }),
                              children: [
                                  (0, r.jsx)(F, {
                                      markAsDismissed: a,
                                      isCoachmark: c,
                                  }),
                                  (0, r.jsx)(D.o, {}),
                                  (0, r.jsx)(w.U, {
                                      onChange: (e) => {
                                          B(e), 0 === T.length && (0, N.lT)(T, e, L);
                                      },
                                      value: G,
                                      colors: T,
                                      setColors: L,
                                  }),
                                  T.length > 1 &&
                                      (0, r.jsx)(H, {
                                          gradientAngle: C,
                                          setGradientAngle: j,
                                      }),
                                  (0, r.jsx)(Y, {
                                      chassisMixAmount: S,
                                      setChassisMixAmount: (e) => {
                                          M(e), 0 === T.length && (0, N.lT)(T, G, L);
                                      },
                                  }),
                                  (0, r.jsx)(u.zxk, {
                                      variant: "secondary",
                                      onClick: X,
                                      icon: f.Oe7,
                                      text: k.intl.string(k.t.yBZMsQ),
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                      }),
                      c
                          ? (0, r.jsx)(z, {
                                onSaveTheme: K,
                                canApply: Q,
                            })
                          : (0, r.jsx)(q, {
                                onSaveTheme: K,
                                canApply: Q,
                                metadata: n,
                            }),
                  ],
              }),
          })
        : null;
}
