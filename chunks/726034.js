n.d(t, { Z: () => j }), n(388685);
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
    _ = n(612659),
    p = n(210887),
    h = n(695346),
    m = n(233398),
    g = n(803038),
    E = n(877865),
    b = n(536847),
    y = n(981631),
    O = n(921944),
    v = n(474936),
    I = n(789549),
    S = n(388032),
    T = n(882903);
function A(e) {
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
function N(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)(l.zxk, {
        className: T.closeButton,
        size: l.zxk.Sizes.ICON,
        look: l.zxk.Looks.BLANK,
        onClick: () => {
            null == t || t(O.L.USER_DISMISS), (0, d.Ll)();
        },
        children: (0, r.jsx)(l.Dio, { size: 'sm' })
    });
}
function C() {
    return (0, r.jsxs)('div', {
        className: T.headerContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-md/bold',
                children: S.intl.string(I.default['AsmU8/'])
            }),
            (0, r.jsx)(l.SrA, { size: 'md' }),
            (0, r.jsx)(N, {})
        ]
    });
}
function P(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)('div', {
        className: T.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: T.badgeAndCloseRow,
                children: [(0, r.jsx)(l.lBU, { text: S.intl.string(S.t.oW0eUV) }), (0, r.jsx)(N, { markAsDismissed: t })]
            }),
            (0, r.jsxs)('div', {
                className: T.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-lg/extrabold',
                        children: S.intl.string(I.default['23QUzs'])
                    }),
                    (0, r.jsx)(l.Text, {
                        className: T.subtitle,
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: S.intl.string(I.default.TRCE4u)
                    })
                ]
            })
        ]
    });
}
function R(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = A(t);
    return (0, r.jsxs)('div', {
        className: o()(T.sliderContainer, T.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                children: S.intl.string(I.default.dZkwg4)
            }),
            (0, r.jsx)(
                l.iRW,
                {
                    className: T.slider,
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
function w(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = A(t);
    return (0, r.jsxs)('div', {
        className: T.sliderContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                children: S.intl.string(I.default.xlXkaG)
            }),
            (0, r.jsx)(
                l.iRW,
                {
                    className: T.slider,
                    initialValue: t,
                    defaultValue: m.B,
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
function D(e) {
    let { type: t } = e;
    return (0, r.jsxs)(l.zxk, {
        className: T.surpriseMeButton,
        innerClassName: T.surpriseMeButtonContent,
        look: l.zxk.Looks.FILLED,
        color: l.zxk.Colors.CUSTOM,
        size: 'with-text' === t ? l.zxk.Sizes.MEDIUM : l.zxk.Sizes.ICON,
        onClick: () => {},
        children: [(0, r.jsx)(l.T$Z, { size: 'sm' }), 'with-text' === t && S.intl.string(I.default.c9MBEB)]
    });
}
function L(e) {
    let { onApply: t, disabled: n, className: i } = e;
    return (0, r.jsx)(l.zxk, {
        className: i,
        size: l.zxk.Sizes.NONE,
        onClick: t,
        disabled: n,
        children: S.intl.string(S.t['1Qm829'])
    });
}
function x() {
    var e, t, n;
    let r = h.L1.getSetting().customUserThemeSettings;
    m.I.setState({
        colors: null != (e = null == r ? void 0 : r.colors) ? e : [],
        gradientAngle: null != (t = null == r ? void 0 : r.gradientAngle) ? t : 0,
        chassisMixAmount: null != (n = null == r ? void 0 : r.baseMix) ? n : m.B
    });
}
function k(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, _.m)(v.p9.TIER_2);
    return (0, r.jsxs)('div', {
        className: T.coachmarkFooterContainer,
        children: [
            (0, r.jsx)(D, { type: 'with-text' }),
            i
                ? (0, r.jsx)(L, {
                      className: T.coachmarkSecondButton,
                      disabled: !n,
                      onApply: t
                  })
                : (0, r.jsx)(f.Z, {
                      className: T.coachmarkSecondButton,
                      premiumModalAnalyticsLocation: { page: y.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES },
                      textOptions: { subscribeText: S.intl.string(S.t.JST6jo) },
                      subscriptionTier: v.Si.TIER_2,
                      showGradient: !0,
                      color: l.Ttl.BRAND
                  })
        ]
    });
}
function M(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e;
    return (0, r.jsxs)('div', {
        className: T.footerContainer,
        children: [
            (0, r.jsx)(D, { type: 'no-text' }),
            (0, r.jsx)(l.zxk, {
                className: T.backButton,
                size: l.zxk.Sizes.NONE,
                look: l.zxk.Looks.BLANK,
                onClick: () => {
                    (null == i ? void 0 : i.from) === d.tE.SETTING ? (u.Z.open(), (0, d.Ll)()) : (null == i ? void 0 : i.from) === d.tE.CLIENT_THEMES_EDITOR ? (0, d.XO)(d.wh.CLIENT_THEMES) : (0, d.Ll)();
                },
                children: S.intl.string(S.t['13/7kZ'])
            }),
            (0, r.jsx)(L, {
                className: T.applyButton,
                disabled: !n,
                onApply: t
            })
        ]
    });
}
function j(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o } = e,
        u = g.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        { colors: f, chassisMixAmount: _, gradientAngle: h, setColors: y, setChassisMixAmount: v, setGradientAngle: I } = (0, m.I)(),
        [A, N] = i.useState(null != (t = f[0]) ? t : '#4394D4'),
        [L] = (0, s.Wu)([p.Z], () => [p.Z.theme]),
        j = () => {
            (0, c.ZI)({
                theme: L,
                customUserThemeSettings: {
                    colors: f,
                    gradientColorStops: [],
                    gradientAngle: h,
                    baseMix: _
                }
            }),
                null == a || a(O.L.TAKE_ACTION),
                (0, d.Ll)();
        },
        U = f.length > 0;
    return (i.useEffect(() => x, []), u)
        ? (0, r.jsx)('div', {
              className: T.container,
              'data-app-right-panel': !0,
              children: (0, r.jsxs)('div', {
                  className: T.containerInner,
                  children: [
                      (0, r.jsxs)(l.Ttm, {
                          className: T.editorBody,
                          children: [
                              o ? (0, r.jsx)(P, { markAsDismissed: a }) : (0, r.jsx)(C, {}),
                              (0, r.jsx)(b.o, {}),
                              (0, r.jsx)(E.U, {
                                  onChange: (e) => {
                                      N(e), 0 === f.length && y([e]);
                                  },
                                  value: A,
                                  colors: f,
                                  setColors: y
                              }),
                              f.length > 1 &&
                                  (0, r.jsx)(R, {
                                      gradientAngle: h,
                                      setGradientAngle: I
                                  }),
                              (0, r.jsx)(w, {
                                  chassisMixAmount: _,
                                  setChassisMixAmount: (e) => {
                                      v(e), 0 === f.length && y([A]);
                                  }
                              }),
                              (0, r.jsxs)(l.zxk, {
                                  className: T.resetButton,
                                  innerClassName: T.resetButtonContent,
                                  look: l.zxk.Looks.FILLED,
                                  color: l.zxk.Colors.CUSTOM,
                                  onClick: x,
                                  children: [(0, r.jsx)(l.Oe7, { size: 'xs' }), S.intl.string(S.t.yBZMsb)]
                              }),
                              !o && (0, r.jsx)(D, { type: 'with-text' })
                          ]
                      }),
                      o
                          ? (0, r.jsx)(k, {
                                onSaveTheme: j,
                                canApply: U
                            })
                          : (0, r.jsx)(M, {
                                onSaveTheme: j,
                                canApply: U,
                                metadata: n
                            })
                  ]
              })
          })
        : null;
}
