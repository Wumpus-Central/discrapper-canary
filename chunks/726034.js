n.d(t, { Z: () => F }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(153867),
    u = n(230711),
    d = n(550385),
    f = n(784238),
    _ = n(767714),
    p = n(612659),
    h = n(210887),
    m = n(695346),
    g = n(233398),
    E = n(263198),
    b = n(803038),
    y = n(877865),
    O = n(536847),
    v = n(981631),
    I = n(921944),
    T = n(474936),
    S = n(671147),
    A = n(388032),
    N = n(882903);
function C(e, t, n) {
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
function R(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e) {
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
function w(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)(l.zxk, {
        className: N.closeButton,
        size: l.zxk.Sizes.MIN,
        look: l.zxk.Looks.BLANK,
        onClick: () => {
            null == t || t(I.L.USER_DISMISS), (0, d.Ll)();
        },
        children: (0, r.jsx)(l.Dio, {
            size: 'custom',
            height: 20,
            width: 20,
            className: N.closeIcon,
            colorClass: N.closeIconWithHover
        })
    });
}
function D() {
    return (0, r.jsxs)('div', {
        className: N.headerContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-md/bold',
                children: A.intl.string(S.default['AsmU8/'])
            }),
            (0, r.jsx)(l.ua7, {
                text: A.intl.string(A.t['5AFxuL']),
                children: (e) =>
                    (0, r.jsx)(
                        l.SrA,
                        R(
                            {
                                size: 'custom',
                                height: 20,
                                width: 20,
                                colorClass: N.nitroIcon
                            },
                            e
                        )
                    )
            }),
            (0, r.jsx)(w, {})
        ]
    });
}
function L(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)('div', {
        className: N.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: N.badgeAndCloseRow,
                children: [(0, r.jsx)(l.lBU, { text: A.intl.string(A.t.oW0eUV) }), (0, r.jsx)(w, { markAsDismissed: t })]
            }),
            (0, r.jsxs)('div', {
                className: N.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-lg/extrabold',
                        children: A.intl.string(S.default['23QUzs'])
                    }),
                    (0, r.jsx)(l.Text, {
                        className: N.subtitle,
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: A.intl.string(S.default.TRCE4u)
                    })
                ]
            })
        ]
    });
}
function x(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = P(t);
    return (0, r.jsxs)('div', {
        className: o()(N.sliderContainer, N.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                children: A.intl.string(S.default.dZkwg4)
            }),
            (0, r.jsx)(
                l.iRW,
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
function M(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = P(t);
    return (0, r.jsxs)('div', {
        className: N.sliderContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                children: A.intl.string(S.default.xlXkaG)
            }),
            (0, r.jsx)(
                l.iRW,
                {
                    initialValue: t,
                    defaultValue: g.B,
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
function k(e) {
    let { type: t } = e,
        n = i.useCallback(() => {
            var e;
            let t = (0, E.C)();
            g.I.setState({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : g.I.getState().gradientAngle,
                chassisMixAmount: t.intensity
            });
        }, []);
    return (0, r.jsxs)(l.zxk, {
        className: N.surpriseMeButton,
        innerClassName: N.surpriseMeButtonContent,
        look: l.zxk.Looks.FILLED,
        color: l.zxk.Colors.CUSTOM,
        size: 'with-text' === t ? l.zxk.Sizes.MEDIUM : l.zxk.Sizes.ICON,
        onClick: n,
        children: [(0, r.jsx)(l.T$Z, { size: 'sm' }), 'with-text' === t && A.intl.string(S.default.c9MBEB)]
    });
}
function j(e) {
    let { onApply: t, disabled: n, className: i } = e;
    return (0, r.jsx)(l.zxk, {
        className: i,
        size: l.zxk.Sizes.NONE,
        onClick: t,
        disabled: n,
        children: A.intl.string(A.t['1Qm829'])
    });
}
function U() {
    var e, t, n;
    let r = m.L1.getSetting().customUserThemeSettings;
    g.I.setState({
        colors: null != (e = null == r ? void 0 : r.colors) ? e : [],
        gradientAngle: null != (t = null == r ? void 0 : r.gradientAngle) ? t : 0,
        chassisMixAmount: null != (n = null == r ? void 0 : r.baseMix) ? n : g.B
    });
}
function G(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, p.m)(T.p9.TIER_2);
    return (0, r.jsxs)('div', {
        className: N.coachmarkFooterContainer,
        children: [
            (0, r.jsx)(k, { type: 'with-text' }),
            i
                ? (0, r.jsx)(j, {
                      className: N.coachmarkSecondButton,
                      disabled: !n,
                      onApply: t
                  })
                : (0, r.jsx)(f.Z, {
                      className: N.coachmarkSecondButton,
                      premiumModalAnalyticsLocation: { page: v.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES },
                      textOptions: { subscribeText: A.intl.string(A.t.JST6jo) },
                      subscriptionTier: T.Si.TIER_2,
                      showGradient: !0,
                      color: l.Ttl.BRAND
                  })
        ]
    });
}
function B(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, p.m)(T.p9.TIER_2);
    return (0, r.jsxs)('div', {
        className: N.footerContainer,
        children: [
            (0, r.jsx)(k, { type: 'no-text' }),
            (0, r.jsxs)('div', {
                className: N.footerRightButtons,
                children: [
                    (0, r.jsx)(l.zxk, {
                        className: N.backButton,
                        size: l.zxk.Sizes.NONE,
                        look: l.zxk.Looks.BLANK,
                        onClick: () => {
                            (null == i ? void 0 : i.from) === d.tE.SETTING ? (u.Z.open(), (0, d.Ll)()) : (null == i ? void 0 : i.from) === d.tE.CLIENT_THEMES_EDITOR ? (0, d.XO)(d.wh.CLIENT_THEMES) : (0, d.Ll)();
                        },
                        children: A.intl.string(A.t['13/7kZ'])
                    }),
                    a
                        ? (0, r.jsx)(j, {
                              className: N.applyButton,
                              disabled: !n,
                              onApply: t
                          })
                        : (0, r.jsx)(_.Z, {
                              className: N.subscribeButton,
                              size: l.zxk.Sizes.NONE,
                              subscriptionTier: T.Si.TIER_2,
                              showGradient: !0,
                              textOptions: { textOverride: A.intl.string(A.t.pj0XBA) }
                          })
                ]
            })
        ]
    });
}
function F(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o } = e,
        u = b.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        { colors: f, chassisMixAmount: _, gradientAngle: p, setColors: m, setChassisMixAmount: E, setGradientAngle: v } = (0, g.I)(),
        [T, S] = i.useState(null != (t = f[0]) ? t : '#4394D4'),
        C = (0, s.e7)([h.Z], () => h.Z.theme),
        R = () => {
            (0, c.ZI)({
                theme: C,
                customUserThemeSettings: {
                    colors: f,
                    gradientColorStops: [],
                    gradientAngle: p,
                    baseMix: _
                }
            }),
                null == a || a(I.L.TAKE_ACTION),
                (0, d.Ll)();
        },
        P = f.length > 0;
    return (i.useEffect(() => U, []), u)
        ? (0, r.jsx)('div', {
              className: N.container,
              'data-app-right-panel': !0,
              children: (0, r.jsxs)('div', {
                  className: N.containerInner,
                  children: [
                      (0, r.jsx)(l.Ttm, {
                          children: (0, r.jsxs)('div', {
                              className: N.editorBody,
                              children: [
                                  o ? (0, r.jsx)(L, { markAsDismissed: a }) : (0, r.jsx)(D, {}),
                                  (0, r.jsx)(O.o, {}),
                                  (0, r.jsx)(y.U, {
                                      onChange: (e) => {
                                          S(e), 0 === f.length && m([e]);
                                      },
                                      value: T,
                                      colors: f,
                                      setColors: m
                                  }),
                                  f.length > 1 &&
                                      (0, r.jsx)(x, {
                                          gradientAngle: p,
                                          setGradientAngle: v
                                      }),
                                  (0, r.jsx)(M, {
                                      chassisMixAmount: _,
                                      setChassisMixAmount: (e) => {
                                          E(e), 0 === f.length && m([T]);
                                      }
                                  }),
                                  (0, r.jsxs)(l.zxk, {
                                      className: N.resetButton,
                                      innerClassName: N.resetButtonContent,
                                      look: l.zxk.Looks.FILLED,
                                      color: l.zxk.Colors.CUSTOM,
                                      onClick: U,
                                      children: [(0, r.jsx)(l.Oe7, { size: 'xs' }), A.intl.string(A.t.yBZMsb)]
                                  })
                              ]
                          })
                      }),
                      o
                          ? (0, r.jsx)(G, {
                                onSaveTheme: R,
                                canApply: P
                            })
                          : (0, r.jsx)(B, {
                                onSaveTheme: R,
                                canApply: P,
                                metadata: n
                            })
                  ]
              })
          })
        : null;
}
