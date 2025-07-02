(n.d(t, { Z: () => X }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(481060),
    u = n(153867),
    d = n(230711),
    f = n(493773),
    _ = n(100527),
    p = n(906732),
    h = n(550385),
    m = n(266454),
    g = n(784238),
    E = n(767714),
    b = n(612659),
    y = n(781391),
    O = n(210887),
    v = n(233398),
    I = n(263198),
    T = n(866419),
    S = n(803038),
    A = n(507962),
    N = n(877865),
    C = n(536847),
    R = n(981631),
    P = n(921944),
    w = n(474936),
    D = n(671147),
    L = n(388032),
    x = n(882903);
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
function M(e) {
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
function j(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e) {
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
function B(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)(c.zxk, {
        className: x.closeButton,
        size: c.zxk.Sizes.MIN,
        look: c.zxk.Looks.BLANK,
        onClick: () => {
            (null == t || t(P.L.USER_DISMISS), (0, h.Ll)());
        },
        children: (0, r.jsx)(c.Dio, {
            size: 'custom',
            height: 20,
            width: 20,
            className: x.closeIcon,
            colorClass: x.closeIconWithHover
        })
    });
}
function V() {
    return (0, r.jsxs)('div', {
        className: x.headerContainer,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/bold',
                children: L.intl.string(D.default['AsmU8/'])
            }),
            (0, r.jsx)(c.ua7, {
                text: L.intl.string(L.t['5AFxuL']),
                children: (e) =>
                    (0, r.jsx)(
                        c.SrA,
                        M(
                            {
                                size: 'custom',
                                height: 20,
                                width: 20,
                                colorClass: x.nitroIcon
                            },
                            e
                        )
                    )
            }),
            (0, r.jsx)(B, {})
        ]
    });
}
function F(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, m.Nj)(l.z.CUSTOM_THEME_COACHMARK) ? (n ? (0, r.jsx)(Z, { markAsDismissed: t }) : (0, r.jsx)(V, {})) : (0, r.jsx)(Z, { markAsDismissed: () => (0, m.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function Z(e) {
    let { markAsDismissed: t } = e,
        n = (0, b.m)(w.p9.TIER_2);
    return (0, r.jsxs)('div', {
        className: x.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: x.badgeAndCloseRow,
                children: [(0, r.jsx)(c.lBU, { text: L.intl.string(L.t.oW0eUV) }), (0, r.jsx)(B, { markAsDismissed: t })]
            }),
            (0, r.jsxs)('div', {
                className: x.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-lg/extrabold',
                        children: L.intl.string(D.default['23QUzs'])
                    }),
                    (0, r.jsx)(c.Text, {
                        className: x.subtitle,
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: L.intl.string(n ? D.default.TRCE4u : D.default['UV/Vtr'])
                    })
                ]
            })
        ]
    });
}
function H(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = G(t);
    return (0, r.jsxs)('div', {
        className: o()(x.sliderContainer, x.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                children: L.intl.string(D.default.dZkwg4)
            }),
            (0, r.jsx)(
                c.iRW,
                {
                    initialValue: t,
                    defaultValue: 0,
                    minValue: 0,
                    maxValue: 360,
                    onValueChange: (e) => {
                        ((0, A.fR)(), a(e), n(e));
                    },
                    onValueRender: (e) => ''.concat(Math.round(e), '\xB0'),
                    keyboardStep: 1
                },
                i
            )
        ]
    });
}
function Y(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = G(t);
    return (0, r.jsxs)('div', {
        className: x.sliderContainer,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                children: L.intl.string(D.default.xlXkaG)
            }),
            (0, r.jsx)(
                c.iRW,
                {
                    initialValue: t,
                    defaultValue: v.BH,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        ((0, A.z3)(), a(e), n(e));
                    },
                    keyboardStep: 1
                },
                i
            )
        ]
    });
}
function W(e) {
    let { type: t } = e,
        n = i.useCallback(() => {
            var e;
            (0, A.Om)();
            let t = (0, I.C)();
            v.Ig.getState().setAll({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : v.Ig.getState().gradientAngle,
                chassisMixAmount: t.intensity
            });
        }, []);
    return (0, r.jsx)(c.ua7, {
        text: L.intl.string(D.default.c9MBEB),
        children: (e) =>
            (0, r.jsxs)(
                c.zxk,
                U(M({}, e), {
                    className: x.surpriseMeButton,
                    innerClassName: x.surpriseMeButtonContent,
                    look: c.zxk.Looks.FILLED,
                    color: c.zxk.Colors.CUSTOM,
                    size: 'with-text' === t ? c.zxk.Sizes.MEDIUM : c.zxk.Sizes.ICON,
                    onClick: n,
                    children: [(0, r.jsx)(c.T$Z, { size: 'sm' }), 'with-text' === t && L.intl.string(D.default.c9MBEB)]
                })
            )
    });
}
function K(e) {
    let { onApply: t, disabled: n, className: i } = e;
    return (0, r.jsx)(c.ua7, {
        text: L.intl.string(D.default.SFyHIC),
        shouldShow: n,
        children: (e) =>
            (0, r.jsx)(
                c.zxk,
                U(M({}, e), {
                    className: i,
                    size: c.zxk.Sizes.NONE,
                    onClick: t,
                    disabled: n,
                    children: L.intl.string(L.t['1Qm829'])
                })
            )
    });
}
function z(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, b.m)(w.p9.TIER_2);
    return (
        (0, A.hf)(i, _.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsxs)('div', {
            className: x.coachmarkFooterContainer,
            children: [
                (0, r.jsx)(W, { type: 'with-text' }),
                i
                    ? (0, r.jsx)(K, {
                          className: x.coachmarkSecondButton,
                          disabled: !n,
                          onApply: t
                      })
                    : (0, r.jsx)(g.Z, {
                          className: x.coachmarkSecondButton,
                          premiumModalAnalyticsLocation: {
                              page: R.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: R.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
                          },
                          textOptions: { subscribeText: L.intl.string(L.t.JST6jo) },
                          subscriptionTier: w.Si.TIER_2,
                          showGradient: !0,
                          color: c.Ttl.BRAND
                      })
            ]
        })
    );
}
function q(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, b.m)(w.p9.TIER_2);
    (0, A.hf)(a, _.Z.CUSTOM_THEMES_EDITOR);
    let o = () => {
        ((0, A.Vb)(), (0, m.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == i ? void 0 : i.from) === h.tE.SETTING ? (d.Z.open(), (0, h.Ll)()) : (null == i ? void 0 : i.from) === h.tE.CLIENT_THEMES_EDITOR ? (0, h.XO)(h.wh.CLIENT_THEMES) : (0, h.Ll)());
    };
    return (0, r.jsxs)('div', {
        className: x.footerContainer,
        children: [
            (0, r.jsx)(W, { type: 'no-text' }),
            (0, r.jsxs)('div', {
                className: x.footerRightButtons,
                children: [
                    (0, r.jsx)(c.zxk, {
                        className: x.backButton,
                        size: c.zxk.Sizes.NONE,
                        look: c.zxk.Looks.BLANK,
                        onClick: o,
                        children: L.intl.string(L.t['13/7kZ'])
                    }),
                    a
                        ? (0, r.jsx)(K, {
                              className: x.applyButton,
                              disabled: !n,
                              onApply: t
                          })
                        : (0, r.jsx)(E.Z, {
                              className: x.subscribeButton,
                              size: c.zxk.Sizes.NONE,
                              subscriptionTier: w.Si.TIER_2,
                              showGradient: !0,
                              premiumModalAnalyticsLocation: {
                                  page: R.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                                  section: R.jXE.CUSTOM_THEMES_FOOTER
                              },
                              textOptions: { textOverride: L.intl.string(L.t.pj0XBA) }
                          })
                ]
            })
        ]
    });
}
function X(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o } = e,
        d = S.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        g = (0, T.jJ)(),
        E = i.useRef(!1),
        { colors: b, chassisMixAmount: I, gradientAngle: R, setColors: w, setChassisMixAmount: D, setGradientAngle: k } = (0, v.Ig)(),
        [M, j] = i.useState(null != (t = b[0]) ? t : v.Dp),
        U = (0, s.e7)([O.Z], () => O.Z.theme),
        G = (0, m.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: B } = (0, p.ZP)(_.Z.CUSTOM_THEMES_EDITOR),
        V = async () => {
            ((E.current = !0),
                await (0, u.ZI)({
                    theme: U,
                    customUserThemeSettings: {
                        colors: b,
                        gradientColorStops: [],
                        gradientAngle: R,
                        baseMix: I
                    }
                }),
                (0, A.u7)(b, I, R, U, B),
                null == a || a(P.L.TAKE_ACTION),
                G || (0, m.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, h.Ll)(),
                (0, y.UD)());
        },
        Z = () => {
            (g(T._m.RESET_BUTTON), (0, A.uf)());
        },
        W = b.length > 0;
    return (i.useEffect(
        () => () => {
            E.current || g(T._m.EDITOR_CLOSE);
        },
        [g]
    ),
    (0, f.ZP)(() => {
        o || (0, T.lT)(b, M, w);
    }),
    d)
        ? (0, r.jsx)('div', {
              className: x.container,
              'data-app-right-panel': !0,
              children: (0, r.jsxs)('div', {
                  className: x.containerInner,
                  children: [
                      (0, r.jsx)(c.Ttm, {
                          children: (0, r.jsxs)('div', {
                              className: x.editorBody,
                              children: [
                                  (0, r.jsx)(F, {
                                      markAsDismissed: a,
                                      isCoachmark: o
                                  }),
                                  (0, r.jsx)(C.o, {}),
                                  (0, r.jsx)(N.U, {
                                      onChange: (e) => {
                                          (j(e), 0 === b.length && (0, T.lT)(b, e, w));
                                      },
                                      value: M,
                                      colors: b,
                                      setColors: w
                                  }),
                                  b.length > 1 &&
                                      (0, r.jsx)(H, {
                                          gradientAngle: R,
                                          setGradientAngle: k
                                      }),
                                  (0, r.jsx)(Y, {
                                      chassisMixAmount: I,
                                      setChassisMixAmount: (e) => {
                                          (D(e), 0 === b.length && (0, T.lT)(b, M, w));
                                      }
                                  }),
                                  (0, r.jsxs)(c.zxk, {
                                      className: x.resetButton,
                                      innerClassName: x.resetButtonContent,
                                      look: c.zxk.Looks.FILLED,
                                      color: c.zxk.Colors.CUSTOM,
                                      onClick: Z,
                                      children: [(0, r.jsx)(c.Oe7, { size: 'xs' }), L.intl.string(L.t.yBZMsb)]
                                  })
                              ]
                          })
                      }),
                      o
                          ? (0, r.jsx)(z, {
                                onSaveTheme: V,
                                canApply: W
                            })
                          : (0, r.jsx)(q, {
                                onSaveTheme: V,
                                canApply: W,
                                metadata: n
                            })
                  ]
              })
          })
        : null;
}
