n.d(t, { Z: () => Z }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(153867),
    u = n(230711),
    d = n(100527),
    f = n(550385),
    _ = n(784238),
    p = n(767714),
    h = n(612659),
    m = n(210887),
    g = n(695346),
    E = n(233398),
    b = n(263198),
    y = n(803038),
    O = n(507962),
    v = n(877865),
    I = n(536847),
    T = n(981631),
    S = n(921944),
    A = n(474936),
    N = n(671147),
    C = n(388032),
    R = n(882903);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e) {
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
function L(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)(l.zxk, {
        className: R.closeButton,
        size: l.zxk.Sizes.MIN,
        look: l.zxk.Looks.BLANK,
        onClick: () => {
            null == t || t(S.L.USER_DISMISS), (0, f.Ll)();
        },
        children: (0, r.jsx)(l.Dio, {
            size: 'custom',
            height: 20,
            width: 20,
            className: R.closeIcon,
            colorClass: R.closeIconWithHover
        })
    });
}
function x() {
    return (0, r.jsxs)('div', {
        className: R.headerContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-md/bold',
                children: C.intl.string(N.default['AsmU8/'])
            }),
            (0, r.jsx)(l.ua7, {
                text: C.intl.string(C.t['5AFxuL']),
                children: (e) =>
                    (0, r.jsx)(
                        l.SrA,
                        w(
                            {
                                size: 'custom',
                                height: 20,
                                width: 20,
                                colorClass: R.nitroIcon
                            },
                            e
                        )
                    )
            }),
            (0, r.jsx)(L, {})
        ]
    });
}
function M(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)('div', {
        className: R.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: R.badgeAndCloseRow,
                children: [(0, r.jsx)(l.lBU, { text: C.intl.string(C.t.oW0eUV) }), (0, r.jsx)(L, { markAsDismissed: t })]
            }),
            (0, r.jsxs)('div', {
                className: R.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-lg/extrabold',
                        children: C.intl.string(N.default['23QUzs'])
                    }),
                    (0, r.jsx)(l.Text, {
                        className: R.subtitle,
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: C.intl.string(N.default.TRCE4u)
                    })
                ]
            })
        ]
    });
}
function k(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = D(t);
    return (0, r.jsxs)('div', {
        className: o()(R.sliderContainer, R.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                children: C.intl.string(N.default.dZkwg4)
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
function j(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = D(t);
    return (0, r.jsxs)('div', {
        className: R.sliderContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                children: C.intl.string(N.default.xlXkaG)
            }),
            (0, r.jsx)(
                l.iRW,
                {
                    initialValue: t,
                    defaultValue: E.B,
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
function U(e) {
    let { type: t } = e,
        n = i.useCallback(() => {
            var e;
            let t = (0, b.C)();
            E.I.setState({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : E.I.getState().gradientAngle,
                chassisMixAmount: t.intensity
            });
        }, []);
    return (0, r.jsxs)(l.zxk, {
        className: R.surpriseMeButton,
        innerClassName: R.surpriseMeButtonContent,
        look: l.zxk.Looks.FILLED,
        color: l.zxk.Colors.CUSTOM,
        size: 'with-text' === t ? l.zxk.Sizes.MEDIUM : l.zxk.Sizes.ICON,
        onClick: n,
        children: [(0, r.jsx)(l.T$Z, { size: 'sm' }), 'with-text' === t && C.intl.string(N.default.c9MBEB)]
    });
}
function G(e) {
    let { onApply: t, disabled: n, className: i } = e;
    return (0, r.jsx)(l.zxk, {
        className: i,
        size: l.zxk.Sizes.NONE,
        onClick: t,
        disabled: n,
        children: C.intl.string(C.t['1Qm829'])
    });
}
function B() {
    var e, t, n;
    let r = g.L1.getSetting().customUserThemeSettings;
    E.I.setState({
        colors: null != (e = null == r ? void 0 : r.colors) ? e : [],
        gradientAngle: null != (t = null == r ? void 0 : r.gradientAngle) ? t : 0,
        chassisMixAmount: null != (n = null == r ? void 0 : r.baseMix) ? n : E.B
    });
}
function F(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, h.m)(A.p9.TIER_2);
    return (
        (0, O.h)(i, d.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsxs)('div', {
            className: R.coachmarkFooterContainer,
            children: [
                (0, r.jsx)(U, { type: 'with-text' }),
                i
                    ? (0, r.jsx)(G, {
                          className: R.coachmarkSecondButton,
                          disabled: !n,
                          onApply: t
                      })
                    : (0, r.jsx)(_.Z, {
                          className: R.coachmarkSecondButton,
                          premiumModalAnalyticsLocation: { page: T.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES },
                          textOptions: { subscribeText: C.intl.string(C.t.JST6jo) },
                          subscriptionTier: A.Si.TIER_2,
                          showGradient: !0,
                          color: l.Ttl.BRAND
                      })
            ]
        })
    );
}
function V(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, h.m)(A.p9.TIER_2);
    return (
        (0, O.h)(a, d.Z.CUSTOM_THEMES_EDITOR),
        (0, r.jsxs)('div', {
            className: R.footerContainer,
            children: [
                (0, r.jsx)(U, { type: 'no-text' }),
                (0, r.jsxs)('div', {
                    className: R.footerRightButtons,
                    children: [
                        (0, r.jsx)(l.zxk, {
                            className: R.backButton,
                            size: l.zxk.Sizes.NONE,
                            look: l.zxk.Looks.BLANK,
                            onClick: () => {
                                (null == i ? void 0 : i.from) === f.tE.SETTING ? (u.Z.open(), (0, f.Ll)()) : (null == i ? void 0 : i.from) === f.tE.CLIENT_THEMES_EDITOR ? (0, f.XO)(f.wh.CLIENT_THEMES) : (0, f.Ll)();
                            },
                            children: C.intl.string(C.t['13/7kZ'])
                        }),
                        a
                            ? (0, r.jsx)(G, {
                                  className: R.applyButton,
                                  disabled: !n,
                                  onApply: t
                              })
                            : (0, r.jsx)(p.Z, {
                                  className: R.subscribeButton,
                                  size: l.zxk.Sizes.NONE,
                                  subscriptionTier: A.Si.TIER_2,
                                  showGradient: !0,
                                  textOptions: { textOverride: C.intl.string(C.t.pj0XBA) }
                              })
                    ]
                })
            ]
        })
    );
}
function Z(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o } = e,
        u = y.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        { colors: d, chassisMixAmount: _, gradientAngle: p, setColors: h, setChassisMixAmount: g, setGradientAngle: b } = (0, E.I)(),
        [O, T] = i.useState(null != (t = d[0]) ? t : '#4394D4'),
        A = (0, s.e7)([m.Z], () => m.Z.theme),
        N = () => {
            (0, c.ZI)({
                theme: A,
                customUserThemeSettings: {
                    colors: d,
                    gradientColorStops: [],
                    gradientAngle: p,
                    baseMix: _
                }
            }),
                null == a || a(S.L.TAKE_ACTION),
                (0, f.Ll)();
        },
        P = d.length > 0;
    return (i.useEffect(() => B, []), u)
        ? (0, r.jsx)('div', {
              className: R.container,
              'data-app-right-panel': !0,
              children: (0, r.jsxs)('div', {
                  className: R.containerInner,
                  children: [
                      (0, r.jsx)(l.Ttm, {
                          children: (0, r.jsxs)('div', {
                              className: R.editorBody,
                              children: [
                                  o ? (0, r.jsx)(M, { markAsDismissed: a }) : (0, r.jsx)(x, {}),
                                  (0, r.jsx)(I.o, {}),
                                  (0, r.jsx)(v.U, {
                                      onChange: (e) => {
                                          T(e), 0 === d.length && h([e]);
                                      },
                                      value: O,
                                      colors: d,
                                      setColors: h
                                  }),
                                  d.length > 1 &&
                                      (0, r.jsx)(k, {
                                          gradientAngle: p,
                                          setGradientAngle: b
                                      }),
                                  (0, r.jsx)(j, {
                                      chassisMixAmount: _,
                                      setChassisMixAmount: (e) => {
                                          g(e), 0 === d.length && h([O]);
                                      }
                                  }),
                                  (0, r.jsxs)(l.zxk, {
                                      className: R.resetButton,
                                      innerClassName: R.resetButtonContent,
                                      look: l.zxk.Looks.FILLED,
                                      color: l.zxk.Colors.CUSTOM,
                                      onClick: B,
                                      children: [(0, r.jsx)(l.Oe7, { size: 'xs' }), C.intl.string(C.t.yBZMsb)]
                                  })
                              ]
                          })
                      }),
                      o
                          ? (0, r.jsx)(F, {
                                onSaveTheme: N,
                                canApply: P
                            })
                          : (0, r.jsx)(V, {
                                onSaveTheme: N,
                                canApply: P,
                                metadata: n
                            })
                  ]
              })
          })
        : null;
}
