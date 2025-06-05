n.d(t, { Z: () => U }), n(388685);
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
    E = n(803038),
    b = n(877865),
    y = n(536847),
    O = n(981631),
    v = n(921944),
    I = n(474936),
    S = n(789549),
    T = n(388032),
    A = n(882903);
function N(e) {
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
function C(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)(l.zxk, {
        className: A.closeButton,
        size: l.zxk.Sizes.ICON,
        look: l.zxk.Looks.BLANK,
        onClick: () => {
            null == t || t(v.L.USER_DISMISS), (0, d.Ll)();
        },
        children: (0, r.jsx)(l.Dio, { size: 'sm' })
    });
}
function P() {
    return (0, r.jsxs)('div', {
        className: A.headerContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-md/bold',
                children: T.intl.string(S.default['AsmU8/'])
            }),
            (0, r.jsx)(l.SrA, { size: 'md' }),
            (0, r.jsx)(C, {})
        ]
    });
}
function R(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)('div', {
        className: A.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: A.badgeAndCloseRow,
                children: [(0, r.jsx)(l.lBU, { text: T.intl.string(T.t.oW0eUV) }), (0, r.jsx)(C, { markAsDismissed: t })]
            }),
            (0, r.jsxs)('div', {
                className: A.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-lg/extrabold',
                        children: T.intl.string(S.default['23QUzs'])
                    }),
                    (0, r.jsx)(l.Text, {
                        className: A.subtitle,
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: T.intl.string(S.default.TRCE4u)
                    })
                ]
            })
        ]
    });
}
function w(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = N(t);
    return (0, r.jsxs)('div', {
        className: o()(A.sliderContainer, A.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                children: T.intl.string(S.default.dZkwg4)
            }),
            (0, r.jsx)(
                l.iRW,
                {
                    className: A.slider,
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
function D(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = N(t);
    return (0, r.jsxs)('div', {
        className: A.sliderContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                children: T.intl.string(S.default.xlXkaG)
            }),
            (0, r.jsx)(
                l.iRW,
                {
                    className: A.slider,
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
function L(e) {
    let { type: t } = e;
    return (0, r.jsxs)(l.zxk, {
        className: A.surpriseMeButton,
        innerClassName: A.surpriseMeButtonContent,
        look: l.zxk.Looks.FILLED,
        color: l.zxk.Colors.CUSTOM,
        size: 'with-text' === t ? l.zxk.Sizes.MEDIUM : l.zxk.Sizes.ICON,
        onClick: () => {},
        children: [(0, r.jsx)(l.T$Z, { size: 'sm' }), 'with-text' === t && T.intl.string(S.default.c9MBEB)]
    });
}
function x(e) {
    let { onApply: t, disabled: n, className: i } = e;
    return (0, r.jsx)(l.zxk, {
        className: i,
        size: l.zxk.Sizes.NONE,
        onClick: t,
        disabled: n,
        children: T.intl.string(T.t['1Qm829'])
    });
}
function k() {
    var e, t, n;
    let r = m.L1.getSetting().customUserThemeSettings;
    g.I.setState({
        colors: null != (e = null == r ? void 0 : r.colors) ? e : [],
        gradientAngle: null != (t = null == r ? void 0 : r.gradientAngle) ? t : 0,
        chassisMixAmount: null != (n = null == r ? void 0 : r.baseMix) ? n : g.B
    });
}
function M(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, p.m)(I.p9.TIER_2);
    return (0, r.jsxs)('div', {
        className: A.coachmarkFooterContainer,
        children: [
            (0, r.jsx)(L, { type: 'with-text' }),
            i
                ? (0, r.jsx)(x, {
                      className: A.coachmarkSecondButton,
                      disabled: !n,
                      onApply: t
                  })
                : (0, r.jsx)(f.Z, {
                      className: A.coachmarkSecondButton,
                      premiumModalAnalyticsLocation: { page: O.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES },
                      textOptions: { subscribeText: T.intl.string(T.t.JST6jo) },
                      subscriptionTier: I.Si.TIER_2,
                      showGradient: !0,
                      color: l.Ttl.BRAND
                  })
        ]
    });
}
function j(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, p.m)(I.p9.TIER_2);
    return (0, r.jsxs)('div', {
        className: A.footerContainer,
        children: [
            (0, r.jsx)(L, { type: 'no-text' }),
            (0, r.jsxs)('div', {
                className: A.footerRightButtons,
                children: [
                    (0, r.jsx)(l.zxk, {
                        className: A.backButton,
                        size: l.zxk.Sizes.NONE,
                        look: l.zxk.Looks.BLANK,
                        onClick: () => {
                            (null == i ? void 0 : i.from) === d.tE.SETTING ? (u.Z.open(), (0, d.Ll)()) : (null == i ? void 0 : i.from) === d.tE.CLIENT_THEMES_EDITOR ? (0, d.XO)(d.wh.CLIENT_THEMES) : (0, d.Ll)();
                        },
                        children: T.intl.string(T.t['13/7kZ'])
                    }),
                    a
                        ? (0, r.jsx)(x, {
                              className: A.applyButton,
                              disabled: !n,
                              onApply: t
                          })
                        : (0, r.jsx)(_.Z, {
                              className: A.subscribeButton,
                              size: l.zxk.Sizes.NONE,
                              subscriptionTier: I.Si.TIER_2,
                              showGradient: !0,
                              textOptions: { textOverride: T.intl.string(T.t.pj0XBA) }
                          })
                ]
            })
        ]
    });
}
function U(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o } = e,
        u = E.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        { colors: f, chassisMixAmount: _, gradientAngle: p, setColors: m, setChassisMixAmount: O, setGradientAngle: I } = (0, g.I)(),
        [S, N] = i.useState(null != (t = f[0]) ? t : '#4394D4'),
        C = (0, s.e7)([h.Z], () => h.Z.theme),
        x = () => {
            (0, c.ZI)({
                theme: C,
                customUserThemeSettings: {
                    colors: f,
                    gradientColorStops: [],
                    gradientAngle: p,
                    baseMix: _
                }
            }),
                null == a || a(v.L.TAKE_ACTION),
                (0, d.Ll)();
        },
        U = f.length > 0;
    return (i.useEffect(() => k, []), u)
        ? (0, r.jsx)('div', {
              className: A.container,
              'data-app-right-panel': !0,
              children: (0, r.jsxs)('div', {
                  className: A.containerInner,
                  children: [
                      (0, r.jsxs)(l.Ttm, {
                          className: A.editorBody,
                          children: [
                              o ? (0, r.jsx)(R, { markAsDismissed: a }) : (0, r.jsx)(P, {}),
                              (0, r.jsx)(y.o, {}),
                              (0, r.jsx)(b.U, {
                                  onChange: (e) => {
                                      N(e), 0 === f.length && m([e]);
                                  },
                                  value: S,
                                  colors: f,
                                  setColors: m
                              }),
                              f.length > 1 &&
                                  (0, r.jsx)(w, {
                                      gradientAngle: p,
                                      setGradientAngle: I
                                  }),
                              (0, r.jsx)(D, {
                                  chassisMixAmount: _,
                                  setChassisMixAmount: (e) => {
                                      O(e), 0 === f.length && m([S]);
                                  }
                              }),
                              (0, r.jsxs)(l.zxk, {
                                  className: A.resetButton,
                                  innerClassName: A.resetButtonContent,
                                  look: l.zxk.Looks.FILLED,
                                  color: l.zxk.Colors.CUSTOM,
                                  onClick: k,
                                  children: [(0, r.jsx)(l.Oe7, { size: 'xs' }), T.intl.string(T.t.yBZMsb)]
                              }),
                              !o && (0, r.jsx)(L, { type: 'with-text' })
                          ]
                      }),
                      o
                          ? (0, r.jsx)(M, {
                                onSaveTheme: x,
                                canApply: U
                            })
                          : (0, r.jsx)(j, {
                                onSaveTheme: x,
                                canApply: U,
                                metadata: n
                            })
                  ]
              })
          })
        : null;
}
