n.d(t, { Z: () => Y }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(481060),
    u = n(153867),
    d = n(230711),
    f = n(100527),
    _ = n(550385),
    p = n(605236),
    h = n(784238),
    m = n(767714),
    g = n(612659),
    E = n(210887),
    b = n(695346),
    y = n(233398),
    O = n(263198),
    v = n(803038),
    I = n(507962),
    T = n(877865),
    S = n(536847),
    A = n(981631),
    N = n(921944),
    C = n(474936),
    R = n(671147),
    P = n(388032),
    w = n(882903);
function D(e, t, n) {
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
function L(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e) {
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
function k(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)(c.zxk, {
        className: w.closeButton,
        size: c.zxk.Sizes.MIN,
        look: c.zxk.Looks.BLANK,
        onClick: () => {
            null == t || t(N.L.USER_DISMISS), (0, _.Ll)();
        },
        children: (0, r.jsx)(c.Dio, {
            size: 'custom',
            height: 20,
            width: 20,
            className: w.closeIcon,
            colorClass: w.closeIconWithHover
        })
    });
}
function M() {
    return (0, r.jsxs)('div', {
        className: w.headerContainer,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/bold',
                children: P.intl.string(R.default['AsmU8/'])
            }),
            (0, r.jsx)(c.ua7, {
                text: P.intl.string(P.t['5AFxuL']),
                children: (e) =>
                    (0, r.jsx)(
                        c.SrA,
                        L(
                            {
                                size: 'custom',
                                height: 20,
                                width: 20,
                                colorClass: w.nitroIcon
                            },
                            e
                        )
                    )
            }),
            (0, r.jsx)(k, {})
        ]
    });
}
function j(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)('div', {
        className: w.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: w.badgeAndCloseRow,
                children: [(0, r.jsx)(c.lBU, { text: P.intl.string(P.t.oW0eUV) }), (0, r.jsx)(k, { markAsDismissed: t })]
            }),
            (0, r.jsxs)('div', {
                className: w.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-lg/extrabold',
                        children: P.intl.string(R.default['23QUzs'])
                    }),
                    (0, r.jsx)(c.Text, {
                        className: w.subtitle,
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: P.intl.string(R.default.TRCE4u)
                    })
                ]
            })
        ]
    });
}
function U(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = x(t);
    return (0, r.jsxs)('div', {
        className: o()(w.sliderContainer, w.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                children: P.intl.string(R.default.dZkwg4)
            }),
            (0, r.jsx)(
                c.iRW,
                {
                    initialValue: t,
                    defaultValue: 0,
                    minValue: 0,
                    maxValue: 360,
                    onValueChange: (e) => {
                        a(e), n(e);
                    },
                    onValueRender: (e) => ''.concat(Math.round(e), '\xB0'),
                    keyboardStep: 1
                },
                i
            )
        ]
    });
}
function G(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = x(t);
    return (0, r.jsxs)('div', {
        className: w.sliderContainer,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                children: P.intl.string(R.default.xlXkaG)
            }),
            (0, r.jsx)(
                c.iRW,
                {
                    initialValue: t,
                    defaultValue: y.B,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        a(e), n(e);
                    },
                    keyboardStep: 1
                },
                i
            )
        ]
    });
}
function B(e) {
    let { type: t } = e,
        n = i.useCallback(() => {
            var e;
            let t = (0, O.C)();
            y.I.setState({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : y.I.getState().gradientAngle,
                chassisMixAmount: t.intensity
            });
        }, []);
    return (0, r.jsxs)(c.zxk, {
        className: w.surpriseMeButton,
        innerClassName: w.surpriseMeButtonContent,
        look: c.zxk.Looks.FILLED,
        color: c.zxk.Colors.CUSTOM,
        size: 'with-text' === t ? c.zxk.Sizes.MEDIUM : c.zxk.Sizes.ICON,
        onClick: n,
        children: [(0, r.jsx)(c.T$Z, { size: 'sm' }), 'with-text' === t && P.intl.string(R.default.c9MBEB)]
    });
}
function F(e) {
    let { onApply: t, disabled: n, className: i } = e;
    return (0, r.jsx)(c.zxk, {
        className: i,
        size: c.zxk.Sizes.NONE,
        onClick: t,
        disabled: n,
        children: P.intl.string(P.t['1Qm829'])
    });
}
function V() {
    var e, t, n;
    let r = b.L1.getSetting().customUserThemeSettings;
    y.I.setState({
        colors: null != (e = null == r ? void 0 : r.colors) ? e : [],
        gradientAngle: null != (t = null == r ? void 0 : r.gradientAngle) ? t : 0,
        chassisMixAmount: null != (n = null == r ? void 0 : r.baseMix) ? n : y.B
    });
}
function Z(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, g.m)(C.p9.TIER_2);
    return (
        (0, I.h)(i, f.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsxs)('div', {
            className: w.coachmarkFooterContainer,
            children: [
                (0, r.jsx)(B, { type: 'with-text' }),
                i
                    ? (0, r.jsx)(F, {
                          className: w.coachmarkSecondButton,
                          disabled: !n,
                          onApply: t
                      })
                    : (0, r.jsx)(h.Z, {
                          className: w.coachmarkSecondButton,
                          premiumModalAnalyticsLocation: { page: A.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES },
                          textOptions: { subscribeText: P.intl.string(P.t.JST6jo) },
                          subscriptionTier: C.Si.TIER_2,
                          showGradient: !0,
                          color: c.Ttl.BRAND
                      })
            ]
        })
    );
}
function H(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, g.m)(C.p9.TIER_2);
    return (
        (0, I.h)(a, f.Z.CUSTOM_THEMES_EDITOR),
        (0, r.jsxs)('div', {
            className: w.footerContainer,
            children: [
                (0, r.jsx)(B, { type: 'no-text' }),
                (0, r.jsxs)('div', {
                    className: w.footerRightButtons,
                    children: [
                        (0, r.jsx)(c.zxk, {
                            className: w.backButton,
                            size: c.zxk.Sizes.NONE,
                            look: c.zxk.Looks.BLANK,
                            onClick: () => {
                                (null == i ? void 0 : i.from) === _.tE.SETTING ? (d.Z.open(), (0, _.Ll)()) : (null == i ? void 0 : i.from) === _.tE.CLIENT_THEMES_EDITOR ? (0, _.XO)(_.wh.CLIENT_THEMES) : (0, _.Ll)();
                            },
                            children: P.intl.string(P.t['13/7kZ'])
                        }),
                        a
                            ? (0, r.jsx)(F, {
                                  className: w.applyButton,
                                  disabled: !n,
                                  onApply: t
                              })
                            : (0, r.jsx)(m.Z, {
                                  className: w.subscribeButton,
                                  size: c.zxk.Sizes.NONE,
                                  subscriptionTier: C.Si.TIER_2,
                                  showGradient: !0,
                                  textOptions: { textOverride: P.intl.string(P.t.pj0XBA) }
                              })
                    ]
                })
            ]
        })
    );
}
function Y(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o } = e,
        d = v.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        { colors: f, chassisMixAmount: h, gradientAngle: m, setColors: g, setChassisMixAmount: b, setGradientAngle: O } = (0, y.I)(),
        [I, A] = i.useState(null != (t = f[0]) ? t : '#4394D4'),
        C = (0, s.e7)([E.Z], () => E.Z.theme),
        R = (0, p.wE)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        D = () => {
            (0, u.ZI)({
                theme: C,
                customUserThemeSettings: {
                    colors: f,
                    gradientColorStops: [],
                    gradientAngle: m,
                    baseMix: h
                }
            }),
                null == a || a(N.L.TAKE_ACTION),
                R || (0, p.EW)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, _.Ll)();
        },
        L = f.length > 0;
    return (i.useEffect(() => V, []), d)
        ? (0, r.jsx)('div', {
              className: w.container,
              'data-app-right-panel': !0,
              children: (0, r.jsxs)('div', {
                  className: w.containerInner,
                  children: [
                      (0, r.jsx)(c.Ttm, {
                          children: (0, r.jsxs)('div', {
                              className: w.editorBody,
                              children: [
                                  o ? (0, r.jsx)(j, { markAsDismissed: a }) : (0, r.jsx)(M, {}),
                                  (0, r.jsx)(S.o, {}),
                                  (0, r.jsx)(T.U, {
                                      onChange: (e) => {
                                          A(e), 0 === f.length && g([e]);
                                      },
                                      value: I,
                                      colors: f,
                                      setColors: g
                                  }),
                                  f.length > 1 &&
                                      (0, r.jsx)(U, {
                                          gradientAngle: m,
                                          setGradientAngle: O
                                      }),
                                  (0, r.jsx)(G, {
                                      chassisMixAmount: h,
                                      setChassisMixAmount: (e) => {
                                          b(e), 0 === f.length && g([I]);
                                      }
                                  }),
                                  (0, r.jsxs)(c.zxk, {
                                      className: w.resetButton,
                                      innerClassName: w.resetButtonContent,
                                      look: c.zxk.Looks.FILLED,
                                      color: c.zxk.Colors.CUSTOM,
                                      onClick: V,
                                      children: [(0, r.jsx)(c.Oe7, { size: 'xs' }), P.intl.string(P.t.yBZMsb)]
                                  })
                              ]
                          })
                      }),
                      o
                          ? (0, r.jsx)(Z, {
                                onSaveTheme: D,
                                canApply: L
                            })
                          : (0, r.jsx)(H, {
                                onSaveTheme: D,
                                canApply: L,
                                metadata: n
                            })
                  ]
              })
          })
        : null;
}
