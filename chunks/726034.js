(n.d(t, { Z: () => Q }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(755721),
    u = n(481060),
    d = n(153867),
    f = n(230711),
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
    I = n(233398),
    T = n(263198),
    S = n(866419),
    A = n(803038),
    N = n(507962),
    C = n(877865),
    R = n(536847),
    P = n(981631),
    w = n(921944),
    D = n(474936),
    L = n(671147),
    x = n(388032),
    M = n(882903);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            }));
    }
    return e;
}
function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e) {
    let [t, n] = i.useState(0),
        [r, a] = i.useState(!1),
        o = i.useRef(e);
    return (
        i.useEffect(() => {
            (e === o.current || r || n((e) => e + 1), (o.current = e), a(!1));
        }, [e, r]),
        {
            key: t,
            handleInternalChange: i.useCallback((e) => (a(!0), e), [])
        }
    );
}
function V(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)(c.zx, {
        className: M.closeButton,
        size: c.zx.Sizes.MIN,
        look: c.zx.Looks.BLANK,
        onClick: () => {
            (null == t || t(w.L.USER_DISMISS), (0, m.Ll)());
        },
        children: (0, r.jsx)(u.Dio, {
            size: 'custom',
            height: 20,
            width: 20,
            className: M.closeIcon,
            colorClass: M.closeIconWithHover
        })
    });
}
function F() {
    return (0, r.jsxs)('div', {
        className: M.headerContainer,
        children: [
            (0, r.jsx)(u.Text, {
                variant: 'text-md/bold',
                children: x.intl.string(L.default['AsmU8/'])
            }),
            (0, r.jsx)(u.ua7, {
                text: x.intl.string(x.t['5AFxuL']),
                children: (e) =>
                    (0, r.jsx)(
                        u.SrA,
                        j(
                            {
                                size: 'custom',
                                height: 20,
                                width: 20,
                                colorClass: M.nitroIcon
                            },
                            e
                        )
                    )
            }),
            (0, r.jsx)(V, {})
        ]
    });
}
function Z(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, g.Nj)(l.z.CUSTOM_THEME_COACHMARK) ? (n ? (0, r.jsx)(H, { markAsDismissed: t }) : (0, r.jsx)(F, {})) : (0, r.jsx)(H, { markAsDismissed: () => (0, g.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function H(e) {
    let { markAsDismissed: t } = e,
        n = (0, y.m)(D.p9.TIER_2);
    return (0, r.jsxs)('div', {
        className: M.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: M.badgeAndCloseRow,
                children: [(0, r.jsx)(u.lBU, { text: x.intl.string(x.t.oW0eUV) }), (0, r.jsx)(V, { markAsDismissed: t })]
            }),
            (0, r.jsxs)('div', {
                className: M.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(u.X6q, {
                        variant: 'heading-lg/extrabold',
                        children: x.intl.string(L.default['23QUzs'])
                    }),
                    (0, r.jsx)(u.Text, {
                        className: M.subtitle,
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: x.intl.string(n ? L.default.TRCE4u : L.default['UV/Vtr'])
                    })
                ]
            })
        ]
    });
}
function Y(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = B(t);
    return (0, r.jsxs)('div', {
        className: o()(M.sliderContainer, M.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/medium',
                children: x.intl.string(L.default.dZkwg4)
            }),
            (0, r.jsx)(
                u.iRW,
                {
                    initialValue: t,
                    defaultValue: 0,
                    minValue: 0,
                    maxValue: 360,
                    onValueChange: (e) => {
                        ((0, N.fR)(), a(e), n(e));
                    },
                    onValueRender: (e) => ''.concat(Math.round(e), '\xB0'),
                    keyboardStep: 1
                },
                i
            )
        ]
    });
}
function W(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = B(t);
    return (0, r.jsxs)('div', {
        className: M.sliderContainer,
        children: [
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/medium',
                children: x.intl.string(L.default.xlXkaG)
            }),
            (0, r.jsx)(
                u.iRW,
                {
                    initialValue: t,
                    defaultValue: I.BH,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        ((0, N.z3)(), a(e), n(e));
                    },
                    keyboardStep: 1
                },
                i
            )
        ]
    });
}
function K(e) {
    let { type: t } = e,
        n = i.useCallback(() => {
            var e;
            (0, N.Om)();
            let t = (0, T.C)();
            I.Ig.getState().setAll({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : I.Ig.getState().gradientAngle,
                chassisMixAmount: t.intensity
            });
        }, []);
    return (0, r.jsx)(u.ua7, {
        text: x.intl.string(L.default.c9MBEB),
        children: (e) =>
            (0, r.jsxs)(
                c.zx,
                G(j({}, e), {
                    className: M.surpriseMeButton,
                    innerClassName: M.surpriseMeButtonContent,
                    look: c.zx.Looks.FILLED,
                    color: c.zx.Colors.CUSTOM,
                    size: 'with-text' === t ? c.zx.Sizes.MEDIUM : c.zx.Sizes.ICON,
                    onClick: n,
                    children: [(0, r.jsx)(u.T$Z, { size: 'sm' }), 'with-text' === t && x.intl.string(L.default.c9MBEB)]
                })
            )
    });
}
function z(e) {
    let { onApply: t, disabled: n, className: i } = e;
    return (0, r.jsx)(u.ua7, {
        text: x.intl.string(L.default.SFyHIC),
        shouldShow: n,
        children: (e) =>
            (0, r.jsx)(
                c.zx,
                G(j({}, e), {
                    className: i,
                    size: c.zx.Sizes.NONE,
                    onClick: t,
                    disabled: n,
                    children: x.intl.string(x.t['1Qm829'])
                })
            )
    });
}
function q(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, y.m)(D.p9.TIER_2);
    return (
        (0, N.hf)(i, p.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsxs)('div', {
            className: M.coachmarkFooterContainer,
            children: [
                (0, r.jsx)(K, { type: 'with-text' }),
                i
                    ? (0, r.jsx)(z, {
                          className: M.coachmarkSecondButton,
                          disabled: !n,
                          onApply: t
                      })
                    : (0, r.jsx)(E.Z, {
                          className: M.coachmarkSecondButton,
                          premiumModalAnalyticsLocation: {
                              page: P.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: P.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
                          },
                          textOptions: { subscribeText: x.intl.string(x.t.JST6jo) },
                          subscriptionTier: D.Si.TIER_2,
                          showGradient: !0,
                          color: c.Tt.BRAND
                      })
            ]
        })
    );
}
function X(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, y.m)(D.p9.TIER_2);
    (0, N.hf)(a, p.Z.CUSTOM_THEMES_EDITOR);
    let o = () => {
        ((0, N.Vb)(), (0, g.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == i ? void 0 : i.from) === m.tE.SETTING ? (f.Z.open(), (0, m.Ll)()) : (null == i ? void 0 : i.from) === m.tE.CLIENT_THEMES_EDITOR ? (0, m.XO)(m.wh.CLIENT_THEMES) : (0, m.Ll)());
    };
    return (0, r.jsxs)('div', {
        className: M.footerContainer,
        children: [
            (0, r.jsx)(K, { type: 'no-text' }),
            (0, r.jsxs)('div', {
                className: M.footerRightButtons,
                children: [
                    (0, r.jsx)(c.zx, {
                        className: M.backButton,
                        size: c.zx.Sizes.NONE,
                        look: c.zx.Looks.BLANK,
                        onClick: o,
                        children: x.intl.string(x.t['13/7kZ'])
                    }),
                    a
                        ? (0, r.jsx)(z, {
                              className: M.applyButton,
                              disabled: !n,
                              onApply: t
                          })
                        : (0, r.jsx)(b.Z, {
                              className: M.subscribeButton,
                              size: c.zx.Sizes.NONE,
                              subscriptionTier: D.Si.TIER_2,
                              showGradient: !0,
                              premiumModalAnalyticsLocation: {
                                  page: P.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                                  section: P.jXE.CUSTOM_THEMES_FOOTER
                              },
                              textOptions: { textOverride: x.intl.string(x.t.pj0XBA) }
                          })
                ]
            })
        ]
    });
}
function Q(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o } = e,
        f = A.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        E = (0, S.jJ)(),
        b = i.useRef(!1),
        { colors: y, chassisMixAmount: T, gradientAngle: P, setColors: D, setChassisMixAmount: L, setGradientAngle: k } = (0, I.Ig)(),
        [j, U] = i.useState(null != (t = y[0]) ? t : I.Dp),
        G = (0, s.e7)([v.Z], () => v.Z.theme),
        B = (0, g.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: V } = (0, h.ZP)(p.Z.CUSTOM_THEMES_EDITOR),
        F = async () => {
            ((b.current = !0),
                await (0, d.ZI)({
                    theme: G,
                    customUserThemeSettings: {
                        colors: y,
                        gradientColorStops: [],
                        gradientAngle: P,
                        baseMix: T
                    }
                }),
                (0, N.u7)(y, T, P, G, V),
                null == a || a(w.L.TAKE_ACTION),
                B || (0, g.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, m.Ll)(),
                (0, O.UD)());
        },
        H = () => {
            (E(S._m.RESET_BUTTON), (0, N.uf)());
        },
        K = y.length > 0;
    return (i.useEffect(
        () => () => {
            b.current || E(S._m.EDITOR_CLOSE);
        },
        [E]
    ),
    (0, _.ZP)(() => {
        o || (0, S.lT)(y, j, D);
    }),
    f)
        ? (0, r.jsx)('div', {
              className: M.container,
              'data-app-right-panel': !0,
              children: (0, r.jsxs)('div', {
                  className: M.containerInner,
                  children: [
                      (0, r.jsx)(u.Ttm, {
                          children: (0, r.jsxs)('div', {
                              className: M.editorBody,
                              children: [
                                  (0, r.jsx)(Z, {
                                      markAsDismissed: a,
                                      isCoachmark: o
                                  }),
                                  (0, r.jsx)(R.o, {}),
                                  (0, r.jsx)(C.U, {
                                      onChange: (e) => {
                                          (U(e), 0 === y.length && (0, S.lT)(y, e, D));
                                      },
                                      value: j,
                                      colors: y,
                                      setColors: D
                                  }),
                                  y.length > 1 &&
                                      (0, r.jsx)(Y, {
                                          gradientAngle: P,
                                          setGradientAngle: k
                                      }),
                                  (0, r.jsx)(W, {
                                      chassisMixAmount: T,
                                      setChassisMixAmount: (e) => {
                                          (L(e), 0 === y.length && (0, S.lT)(y, j, D));
                                      }
                                  }),
                                  (0, r.jsxs)(c.zx, {
                                      className: M.resetButton,
                                      innerClassName: M.resetButtonContent,
                                      look: c.zx.Looks.FILLED,
                                      color: c.zx.Colors.CUSTOM,
                                      onClick: H,
                                      children: [(0, r.jsx)(u.Oe7, { size: 'xs' }), x.intl.string(x.t.yBZMsb)]
                                  })
                              ]
                          })
                      }),
                      o
                          ? (0, r.jsx)(q, {
                                onSaveTheme: F,
                                canApply: K
                            })
                          : (0, r.jsx)(X, {
                                onSaveTheme: F,
                                canApply: K,
                                metadata: n
                            })
                  ]
              })
          })
        : null;
}
