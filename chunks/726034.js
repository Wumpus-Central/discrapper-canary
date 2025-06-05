n.d(t, { Z: () => P }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(153867),
    u = n(230711),
    d = n(550385),
    f = n(210887),
    _ = n(695346),
    p = n(233398),
    h = n(803038),
    m = n(877865),
    g = n(536847),
    E = n(921944),
    b = n(789549),
    y = n(388032),
    O = n(882903);
function v(e) {
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
function I(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)('div', {
        className: O.headerContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-md/bold',
                children: y.intl.string(b.default['AsmU8/'])
            }),
            (0, r.jsx)(l.SrA, { size: 'md' }),
            (0, r.jsx)(l.zxk, {
                className: O.closeButton,
                size: l.zxk.Sizes.ICON,
                look: l.zxk.Looks.BLANK,
                onClick: () => {
                    null == t || t(E.L.USER_DISMISS), (0, d.Ll)();
                },
                children: (0, r.jsx)(l.Dio, { size: 'sm' })
            })
        ]
    });
}
function S(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = v(t);
    return (0, r.jsxs)('div', {
        className: o()(O.sliderContainer, O.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                children: y.intl.string(b.default.dZkwg4)
            }),
            (0, r.jsx)(
                l.iRW,
                {
                    className: O.slider,
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
function T(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = v(t);
    return (0, r.jsxs)('div', {
        className: O.sliderContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                children: y.intl.string(b.default.xlXkaG)
            }),
            (0, r.jsx)(
                l.iRW,
                {
                    className: O.slider,
                    initialValue: t,
                    defaultValue: p.B,
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
function A(e) {
    let { type: t } = e;
    return (0, r.jsxs)(l.zxk, {
        className: O.surpriseMeButton,
        innerClassName: O.surpriseMeButtonContent,
        look: l.zxk.Looks.FILLED,
        color: l.zxk.Colors.CUSTOM,
        size: 'with-text' === t ? l.zxk.Sizes.MEDIUM : l.zxk.Sizes.ICON,
        onClick: () => {},
        children: [(0, r.jsx)(l.T$Z, { size: 'sm' }), 'with-text' === t && y.intl.string(b.default.c9MBEB)]
    });
}
function N() {
    var e, t, n;
    let r = _.L1.getSetting().customUserThemeSettings;
    p.I.setState({
        colors: null != (e = null == r ? void 0 : r.colors) ? e : [],
        gradientAngle: null != (t = null == r ? void 0 : r.gradientAngle) ? t : 0,
        chassisMixAmount: null != (n = null == r ? void 0 : r.baseMix) ? n : p.B
    });
}
function C(e) {
    let { handleSaveTheme: t, colors: n, metadata: i, markAsDismissed: a } = e;
    return (0, r.jsxs)('div', {
        className: O.footerContainer,
        children: [
            (0, r.jsx)(A, { type: 'no-text' }),
            (0, r.jsx)(l.zxk, {
                className: O.backButton,
                size: l.zxk.Sizes.NONE,
                look: l.zxk.Looks.BLANK,
                onClick: () => {
                    (null == i ? void 0 : i.from) === d.tE.SETTING ? (u.Z.open(), (0, d.Ll)()) : (null == i ? void 0 : i.from) === d.tE.CLIENT_THEMES_EDITOR ? (0, d.XO)(d.wh.CLIENT_THEMES) : (0, d.Ll)();
                },
                children: y.intl.string(y.t['13/7kZ'])
            }),
            (0, r.jsx)(l.zxk, {
                className: O.applyButton,
                size: l.zxk.Sizes.NONE,
                onClick: () => {
                    t(), null == a || a(E.L.TAKE_ACTION), (0, d.Ll)();
                },
                disabled: 0 === n.length,
                children: y.intl.string(y.t['1Qm829'])
            })
        ]
    });
}
function P(e) {
    var t;
    let { metadata: n, markAsDismissed: a } = e,
        o = h.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        { colors: u, chassisMixAmount: d, gradientAngle: _, setColors: E, setChassisMixAmount: b, setGradientAngle: v } = (0, p.I)(),
        [P, R] = i.useState(null != (t = u[0]) ? t : '#4394D4'),
        [w] = (0, s.Wu)([f.Z], () => [f.Z.theme]),
        D = () => {
            (0, c.ZI)({
                theme: w,
                customUserThemeSettings: {
                    colors: u,
                    gradientColorStops: [],
                    gradientAngle: _,
                    baseMix: d
                }
            });
        };
    return (i.useEffect(() => N, []), o)
        ? (0, r.jsx)('div', {
              className: O.container,
              'data-app-right-panel': !0,
              children: (0, r.jsxs)('div', {
                  className: O.containerInner,
                  children: [
                      (0, r.jsxs)(l.Ttm, {
                          className: O.editorBody,
                          children: [
                              (0, r.jsx)(I, { markAsDismissed: a }),
                              (0, r.jsx)(g.o, {}),
                              (0, r.jsx)(m.U, {
                                  onChange: (e) => {
                                      R(e), 0 === u.length && E([e]);
                                  },
                                  value: P,
                                  colors: u,
                                  setColors: E
                              }),
                              u.length > 1 &&
                                  (0, r.jsx)(S, {
                                      gradientAngle: _,
                                      setGradientAngle: v
                                  }),
                              (0, r.jsx)(T, {
                                  chassisMixAmount: d,
                                  setChassisMixAmount: (e) => {
                                      b(e), 0 === u.length && E([P]);
                                  }
                              }),
                              (0, r.jsxs)(l.zxk, {
                                  className: O.resetButton,
                                  innerClassName: O.resetButtonContent,
                                  look: l.zxk.Looks.FILLED,
                                  color: l.zxk.Colors.CUSTOM,
                                  onClick: N,
                                  children: [(0, r.jsx)(l.Oe7, { size: 'xs' }), y.intl.string(y.t.yBZMsb)]
                              }),
                              (0, r.jsx)(A, { type: 'with-text' })
                          ]
                      }),
                      (0, r.jsx)(C, {
                          handleSaveTheme: D,
                          colors: u,
                          metadata: n,
                          markAsDismissed: a
                      })
                  ]
              })
          })
        : null;
}
