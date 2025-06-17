n.d(t, { Z: () => q }), n(388685);
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
    m = n(605236),
    g = n(784238),
    E = n(767714),
    b = n(612659),
    y = n(210887),
    O = n(233398),
    v = n(263198),
    I = n(866419),
    T = n(803038),
    S = n(507962),
    A = n(877865),
    N = n(536847),
    C = n(981631),
    R = n(921944),
    P = n(474936),
    w = n(671147),
    D = n(388032),
    L = n(882903);
function x(e, t, n) {
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
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e) {
    let [t, n] = i.useState(0),
        [r, a] = i.useState(!1),
        o = i.useRef(e);
    return (
        i.useEffect(() => {
            e === o.current || r || n((e) => e + 1), (o.current = e), a(!1);
        }, [e, r]),
        {
            key: t,
            handleInternalChange: i.useCallback((e) => (a(!0), e), [])
        }
    );
}
function G(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)(c.zxk, {
        className: L.closeButton,
        size: c.zxk.Sizes.MIN,
        look: c.zxk.Looks.BLANK,
        onClick: () => {
            null == t || t(R.L.USER_DISMISS), (0, h.Ll)();
        },
        children: (0, r.jsx)(c.Dio, {
            size: 'custom',
            height: 20,
            width: 20,
            className: L.closeIcon,
            colorClass: L.closeIconWithHover
        })
    });
}
function B() {
    return (0, r.jsxs)('div', {
        className: L.headerContainer,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/bold',
                children: D.intl.string(w.default['AsmU8/'])
            }),
            (0, r.jsx)(c.ua7, {
                text: D.intl.string(D.t['5AFxuL']),
                children: (e) =>
                    (0, r.jsx)(
                        c.SrA,
                        k(
                            {
                                size: 'custom',
                                height: 20,
                                width: 20,
                                colorClass: L.nitroIcon
                            },
                            e
                        )
                    )
            }),
            (0, r.jsx)(G, {})
        ]
    });
}
function V(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, m.wE)(l.z.CUSTOM_THEME_COACHMARK) ? (n ? (0, r.jsx)(F, { markAsDismissed: t }) : (0, r.jsx)(B, {})) : (0, r.jsx)(F, { markAsDismissed: () => (0, m.EW)(l.z.CUSTOM_THEME_COACHMARK) });
}
function F(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)('div', {
        className: L.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: L.badgeAndCloseRow,
                children: [(0, r.jsx)(c.lBU, { text: D.intl.string(D.t.oW0eUV) }), (0, r.jsx)(G, { markAsDismissed: t })]
            }),
            (0, r.jsxs)('div', {
                className: L.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-lg/extrabold',
                        children: D.intl.string(w.default['23QUzs'])
                    }),
                    (0, r.jsx)(c.Text, {
                        className: L.subtitle,
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: D.intl.string(w.default.TRCE4u)
                    })
                ]
            })
        ]
    });
}
function Z(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = U(t);
    return (0, r.jsxs)('div', {
        className: o()(L.sliderContainer, L.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                children: D.intl.string(w.default.dZkwg4)
            }),
            (0, r.jsx)(
                c.iRW,
                {
                    initialValue: t,
                    defaultValue: 0,
                    minValue: 0,
                    maxValue: 360,
                    onValueChange: (e) => {
                        (0, S.fR)(), a(e), n(e);
                    },
                    onValueRender: (e) => ''.concat(Math.round(e), '\xB0'),
                    keyboardStep: 1
                },
                i
            )
        ]
    });
}
function H(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = U(t);
    return (0, r.jsxs)('div', {
        className: L.sliderContainer,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                children: D.intl.string(w.default.xlXkaG)
            }),
            (0, r.jsx)(
                c.iRW,
                {
                    initialValue: t,
                    defaultValue: O.BH,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        (0, S.z3)(), a(e), n(e);
                    },
                    keyboardStep: 1
                },
                i
            )
        ]
    });
}
function Y(e) {
    let { type: t } = e,
        n = i.useCallback(() => {
            var e;
            (0, S.Om)();
            let t = (0, v.C)();
            O.Ig.getState().setAll({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : O.Ig.getState().gradientAngle,
                chassisMixAmount: t.intensity
            });
        }, []);
    return (0, r.jsx)(c.ua7, {
        text: D.intl.string(w.default.c9MBEB),
        children: (e) =>
            (0, r.jsxs)(
                c.zxk,
                j(k({}, e), {
                    className: L.surpriseMeButton,
                    innerClassName: L.surpriseMeButtonContent,
                    look: c.zxk.Looks.FILLED,
                    color: c.zxk.Colors.CUSTOM,
                    size: 'with-text' === t ? c.zxk.Sizes.MEDIUM : c.zxk.Sizes.ICON,
                    onClick: n,
                    children: [(0, r.jsx)(c.T$Z, { size: 'sm' }), 'with-text' === t && D.intl.string(w.default.c9MBEB)]
                })
            )
    });
}
function W(e) {
    let { onApply: t, disabled: n, className: i } = e;
    return (0, r.jsx)(c.zxk, {
        className: i,
        size: c.zxk.Sizes.NONE,
        onClick: t,
        disabled: n,
        children: D.intl.string(D.t['1Qm829'])
    });
}
function K(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, b.m)(P.p9.TIER_2);
    return (
        (0, S.hf)(i, _.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsxs)('div', {
            className: L.coachmarkFooterContainer,
            children: [
                (0, r.jsx)(Y, { type: 'with-text' }),
                i
                    ? (0, r.jsx)(W, {
                          className: L.coachmarkSecondButton,
                          disabled: !n,
                          onApply: t
                      })
                    : (0, r.jsx)(g.Z, {
                          className: L.coachmarkSecondButton,
                          premiumModalAnalyticsLocation: {
                              page: C.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: C.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
                          },
                          textOptions: { subscribeText: D.intl.string(D.t.JST6jo) },
                          subscriptionTier: P.Si.TIER_2,
                          showGradient: !0,
                          color: c.Ttl.BRAND
                      })
            ]
        })
    );
}
function z(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, b.m)(P.p9.TIER_2);
    (0, S.hf)(a, _.Z.CUSTOM_THEMES_EDITOR);
    let o = () => {
        (0, S.Vb)(), (0, m.EW)(l.z.CUSTOM_THEME_COACHMARK), (null == i ? void 0 : i.from) === h.tE.SETTING ? (d.Z.open(), (0, h.Ll)()) : (null == i ? void 0 : i.from) === h.tE.CLIENT_THEMES_EDITOR ? (0, h.XO)(h.wh.CLIENT_THEMES) : (0, h.Ll)();
    };
    return (0, r.jsxs)('div', {
        className: L.footerContainer,
        children: [
            (0, r.jsx)(Y, { type: 'no-text' }),
            (0, r.jsxs)('div', {
                className: L.footerRightButtons,
                children: [
                    (0, r.jsx)(c.zxk, {
                        className: L.backButton,
                        size: c.zxk.Sizes.NONE,
                        look: c.zxk.Looks.BLANK,
                        onClick: o,
                        children: D.intl.string(D.t['13/7kZ'])
                    }),
                    a
                        ? (0, r.jsx)(W, {
                              className: L.applyButton,
                              disabled: !n,
                              onApply: t
                          })
                        : (0, r.jsx)(E.Z, {
                              className: L.subscribeButton,
                              size: c.zxk.Sizes.NONE,
                              subscriptionTier: P.Si.TIER_2,
                              showGradient: !0,
                              premiumModalAnalyticsLocation: {
                                  page: C.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                                  section: C.jXE.CUSTOM_THEMES_FOOTER
                              },
                              textOptions: { textOverride: D.intl.string(D.t.pj0XBA) }
                          })
                ]
            })
        ]
    });
}
function q(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o } = e,
        d = T.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        g = (0, I.jJ)(),
        E = i.useRef(!1),
        { colors: b, chassisMixAmount: v, gradientAngle: C, setColors: P, setChassisMixAmount: w, setGradientAngle: x } = (0, O.Ig)(),
        [k, M] = i.useState(null != (t = b[0]) ? t : O.Dp),
        j = (0, s.e7)([y.Z], () => y.Z.theme),
        U = (0, m.wE)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: G } = (0, p.ZP)(_.Z.CUSTOM_THEMES_EDITOR),
        B = () => {
            (E.current = !0),
                (0, u.ZI)({
                    theme: j,
                    customUserThemeSettings: {
                        colors: b,
                        gradientColorStops: [],
                        gradientAngle: C,
                        baseMix: v
                    }
                }),
                (0, S.u7)(b, v, C, j, G),
                null == a || a(R.L.TAKE_ACTION),
                U || (0, m.EW)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, h.Ll)();
        },
        F = () => {
            g(I._m.RESET_BUTTON), (0, S.uf)();
        },
        Y = b.length > 0;
    return (i.useEffect(
        () => () => {
            E.current || g(I._m.EDITOR_CLOSE);
        },
        [g]
    ),
    (0, f.ZP)(() => {
        o || 0 !== b.length || P([k]);
    }),
    d)
        ? (0, r.jsx)('div', {
              className: L.container,
              'data-app-right-panel': !0,
              children: (0, r.jsxs)('div', {
                  className: L.containerInner,
                  children: [
                      (0, r.jsx)(c.Ttm, {
                          children: (0, r.jsxs)('div', {
                              className: L.editorBody,
                              children: [
                                  (0, r.jsx)(V, {
                                      markAsDismissed: a,
                                      isCoachmark: o
                                  }),
                                  (0, r.jsx)(N.o, {}),
                                  (0, r.jsx)(A.U, {
                                      onChange: (e) => {
                                          M(e), 0 === b.length && P([e]);
                                      },
                                      value: k,
                                      colors: b,
                                      setColors: P
                                  }),
                                  b.length > 1 &&
                                      (0, r.jsx)(Z, {
                                          gradientAngle: C,
                                          setGradientAngle: x
                                      }),
                                  (0, r.jsx)(H, {
                                      chassisMixAmount: v,
                                      setChassisMixAmount: (e) => {
                                          w(e), 0 === b.length && P([k]);
                                      }
                                  }),
                                  (0, r.jsxs)(c.zxk, {
                                      className: L.resetButton,
                                      innerClassName: L.resetButtonContent,
                                      look: c.zxk.Looks.FILLED,
                                      color: c.zxk.Colors.CUSTOM,
                                      onClick: F,
                                      children: [(0, r.jsx)(c.Oe7, { size: 'xs' }), D.intl.string(D.t.yBZMsb)]
                                  })
                              ]
                          })
                      }),
                      o
                          ? (0, r.jsx)(K, {
                                onSaveTheme: B,
                                canApply: Y
                            })
                          : (0, r.jsx)(z, {
                                onSaveTheme: B,
                                canApply: Y,
                                metadata: n
                            })
                  ]
              })
          })
        : null;
}
