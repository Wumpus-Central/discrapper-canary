n.d(t, { Z: () => z }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(481060),
    u = n(153867),
    d = n(230711),
    _ = n(100527),
    f = n(906732),
    p = n(550385),
    h = n(605236),
    m = n(784238),
    g = n(767714),
    E = n(612659),
    b = n(210887),
    y = n(233398),
    O = n(263198),
    v = n(866419),
    I = n(803038),
    T = n(507962),
    S = n(877865),
    A = n(536847),
    N = n(981631),
    C = n(921944),
    R = n(474936),
    P = n(671147),
    w = n(388032),
    D = n(882903);
function L(e, t, n) {
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
function x(e) {
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
                L(e, t, n[t]);
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
function k(e, t) {
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
function j(e) {
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
function U(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)(c.zxk, {
        className: D.closeButton,
        size: c.zxk.Sizes.MIN,
        look: c.zxk.Looks.BLANK,
        onClick: () => {
            null == t || t(C.L.USER_DISMISS), (0, p.Ll)();
        },
        children: (0, r.jsx)(c.Dio, {
            size: 'custom',
            height: 20,
            width: 20,
            className: D.closeIcon,
            colorClass: D.closeIconWithHover
        })
    });
}
function G() {
    return (0, r.jsxs)('div', {
        className: D.headerContainer,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/bold',
                children: w.intl.string(P.default['AsmU8/'])
            }),
            (0, r.jsx)(c.ua7, {
                text: w.intl.string(w.t['5AFxuL']),
                children: (e) =>
                    (0, r.jsx)(
                        c.SrA,
                        x(
                            {
                                size: 'custom',
                                height: 20,
                                width: 20,
                                colorClass: D.nitroIcon
                            },
                            e
                        )
                    )
            }),
            (0, r.jsx)(U, {})
        ]
    });
}
function B(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, h.wE)(l.z.CUSTOM_THEME_COACHMARK) ? (n ? (0, r.jsx)(V, { markAsDismissed: t }) : (0, r.jsx)(G, {})) : (0, r.jsx)(V, { markAsDismissed: () => (0, h.EW)(l.z.CUSTOM_THEME_COACHMARK) });
}
function V(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)('div', {
        className: D.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: D.badgeAndCloseRow,
                children: [(0, r.jsx)(c.lBU, { text: w.intl.string(w.t.oW0eUV) }), (0, r.jsx)(U, { markAsDismissed: t })]
            }),
            (0, r.jsxs)('div', {
                className: D.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-lg/extrabold',
                        children: w.intl.string(P.default['23QUzs'])
                    }),
                    (0, r.jsx)(c.Text, {
                        className: D.subtitle,
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: w.intl.string(P.default.TRCE4u)
                    })
                ]
            })
        ]
    });
}
function F(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = j(t);
    return (0, r.jsxs)('div', {
        className: o()(D.sliderContainer, D.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                children: w.intl.string(P.default.dZkwg4)
            }),
            (0, r.jsx)(
                c.iRW,
                {
                    initialValue: t,
                    defaultValue: 0,
                    minValue: 0,
                    maxValue: 360,
                    onValueChange: (e) => {
                        (0, T.fR)(), a(e), n(e);
                    },
                    onValueRender: (e) => ''.concat(Math.round(e), '\xB0'),
                    keyboardStep: 1
                },
                i
            )
        ]
    });
}
function Z(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = j(t);
    return (0, r.jsxs)('div', {
        className: D.sliderContainer,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                children: w.intl.string(P.default.xlXkaG)
            }),
            (0, r.jsx)(
                c.iRW,
                {
                    initialValue: t,
                    defaultValue: y.B,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        (0, T.z3)(), a(e), n(e);
                    },
                    keyboardStep: 1
                },
                i
            )
        ]
    });
}
function H(e) {
    let { type: t } = e,
        n = i.useCallback(() => {
            var e;
            (0, T.Om)();
            let t = (0, O.C)();
            y.I.getState().setAll({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : y.I.getState().gradientAngle,
                chassisMixAmount: t.intensity
            });
        }, []);
    return (0, r.jsx)(c.ua7, {
        text: w.intl.string(P.default.c9MBEB),
        children: (e) =>
            (0, r.jsxs)(
                c.zxk,
                k(x({}, e), {
                    className: D.surpriseMeButton,
                    innerClassName: D.surpriseMeButtonContent,
                    look: c.zxk.Looks.FILLED,
                    color: c.zxk.Colors.CUSTOM,
                    size: 'with-text' === t ? c.zxk.Sizes.MEDIUM : c.zxk.Sizes.ICON,
                    onClick: n,
                    children: [(0, r.jsx)(c.T$Z, { size: 'sm' }), 'with-text' === t && w.intl.string(P.default.c9MBEB)]
                })
            )
    });
}
function Y(e) {
    let { onApply: t, disabled: n, className: i } = e;
    return (0, r.jsx)(c.zxk, {
        className: i,
        size: c.zxk.Sizes.NONE,
        onClick: t,
        disabled: n,
        children: w.intl.string(w.t['1Qm829'])
    });
}
function W(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, E.m)(R.p9.TIER_2);
    return (
        (0, T.hf)(i, _.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsxs)('div', {
            className: D.coachmarkFooterContainer,
            children: [
                (0, r.jsx)(H, { type: 'with-text' }),
                i
                    ? (0, r.jsx)(Y, {
                          className: D.coachmarkSecondButton,
                          disabled: !n,
                          onApply: t
                      })
                    : (0, r.jsx)(m.Z, {
                          className: D.coachmarkSecondButton,
                          premiumModalAnalyticsLocation: {
                              page: N.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: N.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
                          },
                          textOptions: { subscribeText: w.intl.string(w.t.JST6jo) },
                          subscriptionTier: R.Si.TIER_2,
                          showGradient: !0,
                          color: c.Ttl.BRAND
                      })
            ]
        })
    );
}
function K(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, E.m)(R.p9.TIER_2);
    (0, T.hf)(a, _.Z.CUSTOM_THEMES_EDITOR);
    let o = () => {
        (0, T.Vb)(), (0, h.EW)(l.z.CUSTOM_THEME_COACHMARK), (null == i ? void 0 : i.from) === p.tE.SETTING ? (d.Z.open(), (0, p.Ll)()) : (null == i ? void 0 : i.from) === p.tE.CLIENT_THEMES_EDITOR ? (0, p.XO)(p.wh.CLIENT_THEMES) : (0, p.Ll)();
    };
    return (0, r.jsxs)('div', {
        className: D.footerContainer,
        children: [
            (0, r.jsx)(H, { type: 'no-text' }),
            (0, r.jsxs)('div', {
                className: D.footerRightButtons,
                children: [
                    (0, r.jsx)(c.zxk, {
                        className: D.backButton,
                        size: c.zxk.Sizes.NONE,
                        look: c.zxk.Looks.BLANK,
                        onClick: o,
                        children: w.intl.string(w.t['13/7kZ'])
                    }),
                    a
                        ? (0, r.jsx)(Y, {
                              className: D.applyButton,
                              disabled: !n,
                              onApply: t
                          })
                        : (0, r.jsx)(g.Z, {
                              className: D.subscribeButton,
                              size: c.zxk.Sizes.NONE,
                              subscriptionTier: R.Si.TIER_2,
                              showGradient: !0,
                              premiumModalAnalyticsLocation: {
                                  page: N.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                                  section: N.jXE.CUSTOM_THEMES_FOOTER
                              },
                              textOptions: { textOverride: w.intl.string(w.t.pj0XBA) }
                          })
                ]
            })
        ]
    });
}
function z(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o } = e,
        d = I.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        m = (0, v.j)(),
        { colors: g, chassisMixAmount: E, gradientAngle: O, setColors: N, setChassisMixAmount: R, setGradientAngle: P } = (0, y.I)(),
        [L, x] = i.useState(null != (t = g[0]) ? t : '#4394D4'),
        M = (0, s.e7)([b.Z], () => b.Z.theme),
        k = (0, h.wE)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: j } = (0, f.ZP)(_.Z.CUSTOM_THEMES_EDITOR),
        U = () => {
            (0, u.ZI)({
                theme: M,
                customUserThemeSettings: {
                    colors: g,
                    gradientColorStops: [],
                    gradientAngle: O,
                    baseMix: E
                }
            }),
                (0, T.u7)(g, E, O, M, j),
                null == a || a(C.L.TAKE_ACTION),
                k || (0, h.EW)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, p.Ll)();
        },
        G = () => {
            m(), (0, T.uf)();
        },
        V = g.length > 0;
    return (i.useEffect(() => m, [m]), d)
        ? (0, r.jsx)('div', {
              className: D.container,
              'data-app-right-panel': !0,
              children: (0, r.jsxs)('div', {
                  className: D.containerInner,
                  children: [
                      (0, r.jsx)(c.Ttm, {
                          children: (0, r.jsxs)('div', {
                              className: D.editorBody,
                              children: [
                                  (0, r.jsx)(B, {
                                      markAsDismissed: a,
                                      isCoachmark: o
                                  }),
                                  (0, r.jsx)(A.o, {}),
                                  (0, r.jsx)(S.U, {
                                      onChange: (e) => {
                                          x(e), 0 === g.length && N([e]);
                                      },
                                      value: L,
                                      colors: g,
                                      setColors: N
                                  }),
                                  g.length > 1 &&
                                      (0, r.jsx)(F, {
                                          gradientAngle: O,
                                          setGradientAngle: P
                                      }),
                                  (0, r.jsx)(Z, {
                                      chassisMixAmount: E,
                                      setChassisMixAmount: (e) => {
                                          R(e), 0 === g.length && N([L]);
                                      }
                                  }),
                                  (0, r.jsxs)(c.zxk, {
                                      className: D.resetButton,
                                      innerClassName: D.resetButtonContent,
                                      look: c.zxk.Looks.FILLED,
                                      color: c.zxk.Colors.CUSTOM,
                                      onClick: G,
                                      children: [(0, r.jsx)(c.Oe7, { size: 'xs' }), w.intl.string(w.t.yBZMsb)]
                                  })
                              ]
                          })
                      }),
                      o
                          ? (0, r.jsx)(W, {
                                onSaveTheme: U,
                                canApply: V
                            })
                          : (0, r.jsx)(K, {
                                onSaveTheme: U,
                                canApply: V,
                                metadata: n
                            })
                  ]
              })
          })
        : null;
}
