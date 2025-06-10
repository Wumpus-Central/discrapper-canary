n.d(t, { Z: () => G }), n(388685);
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
    S = n(474936),
    T = n(671147),
    A = n(388032),
    N = n(882903);
function C(e) {
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
function R(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)(l.zxk, {
        className: N.closeButton,
        size: l.zxk.Sizes.MIN,
        look: l.zxk.Looks.BLANK,
        onClick: () => {
            null == t || t(I.L.USER_DISMISS), (0, d.Ll)();
        },
        children: (0, r.jsx)(l.Dio, {
            size: 'xs',
            colorClass: N.closeIconWithHover
        })
    });
}
function P() {
    return (0, r.jsxs)('div', {
        className: N.headerContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-md/bold',
                children: A.intl.string(T.default['AsmU8/'])
            }),
            (0, r.jsx)('div', {
                className: N.nitroIconContainer,
                children: (0, r.jsx)(l.SrA, {
                    size: 'custom',
                    height: 20,
                    width: 20,
                    colorClass: N.nitroIconWithHover
                })
            }),
            (0, r.jsx)(R, {})
        ]
    });
}
function w(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)('div', {
        className: N.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: N.badgeAndCloseRow,
                children: [(0, r.jsx)(l.lBU, { text: A.intl.string(A.t.oW0eUV) }), (0, r.jsx)(R, { markAsDismissed: t })]
            }),
            (0, r.jsxs)('div', {
                className: N.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-lg/extrabold',
                        children: A.intl.string(T.default['23QUzs'])
                    }),
                    (0, r.jsx)(l.Text, {
                        className: N.subtitle,
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: A.intl.string(T.default.TRCE4u)
                    })
                ]
            })
        ]
    });
}
function D(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = C(t);
    return (0, r.jsxs)('div', {
        className: o()(N.sliderContainer, N.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                children: A.intl.string(T.default.dZkwg4)
            }),
            (0, r.jsx)(
                l.iRW,
                {
                    className: N.slider,
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
function L(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = C(t);
    return (0, r.jsxs)('div', {
        className: N.sliderContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                children: A.intl.string(T.default.xlXkaG)
            }),
            (0, r.jsx)(
                l.iRW,
                {
                    className: N.slider,
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
function x(e) {
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
        children: [(0, r.jsx)(l.T$Z, { size: 'sm' }), 'with-text' === t && A.intl.string(T.default.c9MBEB)]
    });
}
function k(e) {
    let { onApply: t, disabled: n, className: i } = e;
    return (0, r.jsx)(l.zxk, {
        className: i,
        size: l.zxk.Sizes.NONE,
        onClick: t,
        disabled: n,
        children: A.intl.string(A.t['1Qm829'])
    });
}
function M() {
    var e, t, n;
    let r = m.L1.getSetting().customUserThemeSettings;
    g.I.setState({
        colors: null != (e = null == r ? void 0 : r.colors) ? e : [],
        gradientAngle: null != (t = null == r ? void 0 : r.gradientAngle) ? t : 0,
        chassisMixAmount: null != (n = null == r ? void 0 : r.baseMix) ? n : g.B
    });
}
function j(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, p.m)(S.p9.TIER_2);
    return (0, r.jsxs)('div', {
        className: N.coachmarkFooterContainer,
        children: [
            (0, r.jsx)(x, { type: 'with-text' }),
            i
                ? (0, r.jsx)(k, {
                      className: N.coachmarkSecondButton,
                      disabled: !n,
                      onApply: t
                  })
                : (0, r.jsx)(f.Z, {
                      className: N.coachmarkSecondButton,
                      premiumModalAnalyticsLocation: { page: v.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES },
                      textOptions: { subscribeText: A.intl.string(A.t.JST6jo) },
                      subscriptionTier: S.Si.TIER_2,
                      showGradient: !0,
                      color: l.Ttl.BRAND
                  })
        ]
    });
}
function U(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, p.m)(S.p9.TIER_2);
    return (0, r.jsxs)('div', {
        className: N.footerContainer,
        children: [
            (0, r.jsx)(x, { type: 'no-text' }),
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
                        ? (0, r.jsx)(k, {
                              className: N.applyButton,
                              disabled: !n,
                              onApply: t
                          })
                        : (0, r.jsx)(_.Z, {
                              className: N.subscribeButton,
                              size: l.zxk.Sizes.NONE,
                              subscriptionTier: S.Si.TIER_2,
                              showGradient: !0,
                              textOptions: { textOverride: A.intl.string(A.t.pj0XBA) }
                          })
                ]
            })
        ]
    });
}
function G(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o } = e,
        u = b.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        { colors: f, chassisMixAmount: _, gradientAngle: p, setColors: m, setChassisMixAmount: E, setGradientAngle: v } = (0, g.I)(),
        [S, T] = i.useState(null != (t = f[0]) ? t : '#4394D4'),
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
        x = f.length > 0;
    return (i.useEffect(() => M, []), u)
        ? (0, r.jsx)('div', {
              className: N.container,
              'data-app-right-panel': !0,
              children: (0, r.jsxs)('div', {
                  className: N.containerInner,
                  children: [
                      (0, r.jsxs)(l.Ttm, {
                          className: N.editorBody,
                          children: [
                              o ? (0, r.jsx)(w, { markAsDismissed: a }) : (0, r.jsx)(P, {}),
                              (0, r.jsx)(O.o, {}),
                              (0, r.jsx)(y.U, {
                                  onChange: (e) => {
                                      T(e), 0 === f.length && m([e]);
                                  },
                                  value: S,
                                  colors: f,
                                  setColors: m
                              }),
                              f.length > 1 &&
                                  (0, r.jsx)(D, {
                                      gradientAngle: p,
                                      setGradientAngle: v
                                  }),
                              (0, r.jsx)(L, {
                                  chassisMixAmount: _,
                                  setChassisMixAmount: (e) => {
                                      E(e), 0 === f.length && m([S]);
                                  }
                              }),
                              (0, r.jsxs)(l.zxk, {
                                  className: N.resetButton,
                                  innerClassName: N.resetButtonContent,
                                  look: l.zxk.Looks.FILLED,
                                  color: l.zxk.Colors.CUSTOM,
                                  onClick: M,
                                  children: [(0, r.jsx)(l.Oe7, { size: 'xs' }), A.intl.string(A.t.yBZMsb)]
                              })
                          ]
                      }),
                      o
                          ? (0, r.jsx)(j, {
                                onSaveTheme: R,
                                canApply: x
                            })
                          : (0, r.jsx)(U, {
                                onSaveTheme: R,
                                canApply: x,
                                metadata: n
                            })
                  ]
              })
          })
        : null;
}
