n.d(t, { Z: () => A }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(481060),
    s = n(153867),
    l = n(230711),
    c = n(550385),
    u = n(210887),
    d = n(695346),
    f = n(233398),
    _ = n(803038),
    p = n(877865),
    h = n(536847),
    m = n(921944),
    g = n(789549),
    E = n(388032),
    b = n(882903);
function y(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)('div', {
        className: b.headerContainer,
        children: [
            (0, r.jsx)(a.Text, {
                variant: 'text-md/bold',
                children: E.intl.string(g.default['AsmU8/'])
            }),
            (0, r.jsx)(a.SrA, { size: 'md' }),
            (0, r.jsx)(a.zxk, {
                className: b.closeButton,
                size: a.zxk.Sizes.ICON,
                look: a.zxk.Looks.BLANK,
                onClick: () => {
                    null == t || t(m.L.USER_DISMISS), (0, c.Ll)();
                },
                children: (0, r.jsx)(a.Dio, { size: 'sm' })
            })
        ]
    });
}
function O(e) {
    let { gradientAngle: t, setGradientAngle: n } = e;
    return (0, r.jsxs)('div', {
        className: b.sliderContainer,
        children: [
            (0, r.jsx)(a.Text, {
                variant: 'text-xs/semibold',
                children: E.intl.string(g.default.dZkwg4)
            }),
            (0, r.jsx)(a.iRW, {
                className: b.slider,
                initialValue: t,
                defaultValue: 0,
                minValue: 0,
                maxValue: 360,
                onValueChange: n,
                onValueRender: (e) => ''.concat(Math.round(e), '\xB0'),
                keyboardStep: 1
            })
        ]
    });
}
function v(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e;
    return (0, r.jsxs)('div', {
        className: b.sliderContainer,
        children: [
            (0, r.jsx)(a.Text, {
                variant: 'text-xs/semibold',
                children: E.intl.string(g.default.xlXkaG)
            }),
            (0, r.jsx)(a.iRW, {
                className: b.slider,
                initialValue: t,
                defaultValue: f.B,
                minValue: 0,
                maxValue: 100,
                onValueChange: n,
                keyboardStep: 1
            })
        ]
    });
}
function I(e) {
    let { type: t } = e;
    return (0, r.jsxs)(a.zxk, {
        className: b.surpriseMeButton,
        innerClassName: b.surpriseMeButtonContent,
        look: a.zxk.Looks.FILLED,
        color: a.zxk.Colors.CUSTOM,
        size: 'with-text' === t ? a.zxk.Sizes.MEDIUM : a.zxk.Sizes.ICON,
        onClick: () => {},
        children: [(0, r.jsx)(a.T$Z, { size: 'sm' }), 'with-text' === t && E.intl.string(E.t['WZ+NyM'])]
    });
}
function S() {
    var e, t, n;
    let r = d.L1.getSetting().customUserThemeSettings;
    f.I.setState({
        colors: null != (e = null == r ? void 0 : r.colors) ? e : [],
        gradientAngle: null != (t = null == r ? void 0 : r.gradientAngle) ? t : 0,
        chassisMixAmount: null != (n = null == r ? void 0 : r.baseMix) ? n : f.B
    });
}
function T(e) {
    let { handleSaveTheme: t, colors: n, metadata: i, markAsDismissed: o } = e;
    return (0, r.jsxs)('div', {
        className: b.footerContainer,
        children: [
            (0, r.jsx)(I, { type: 'no-text' }),
            (0, r.jsx)(a.zxk, {
                className: b.backButton,
                size: a.zxk.Sizes.NONE,
                look: a.zxk.Looks.BLANK,
                onClick: () => {
                    (null == i ? void 0 : i.from) === c.tE.SETTING ? (l.Z.open(), (0, c.Ll)()) : (null == i ? void 0 : i.from) === c.tE.CLIENT_THEMES_EDITOR ? (0, c.XO)(c.wh.CLIENT_THEMES) : (0, c.Ll)();
                },
                children: E.intl.string(E.t['13/7kZ'])
            }),
            (0, r.jsx)(a.zxk, {
                className: b.applyButton,
                size: a.zxk.Sizes.NONE,
                onClick: () => {
                    t(), null == o || o(m.L.TAKE_ACTION), (0, c.Ll)();
                },
                disabled: 0 === n.length,
                children: E.intl.string(E.t['1Qm829'])
            })
        ]
    });
}
function A(e) {
    var t;
    let { metadata: n, markAsDismissed: l } = e,
        c = _.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        { colors: d, chassisMixAmount: m, gradientAngle: g, setColors: A, setChassisMixAmount: N, setGradientAngle: C } = (0, f.I)(),
        [P, R] = i.useState(null != (t = d[0]) ? t : '#4394D4'),
        [w] = (0, o.Wu)([u.Z], () => [u.Z.theme]),
        D = () => {
            (0, s.ZI)({
                theme: w,
                customUserThemeSettings: {
                    colors: d,
                    gradientColorStops: [],
                    gradientAngle: g,
                    baseMix: m
                }
            });
        };
    return (i.useEffect(() => S, []), c)
        ? (0, r.jsxs)('div', {
              className: b.container,
              'data-app-right-panel': !0,
              children: [
                  (0, r.jsxs)(a.Ttm, {
                      className: b.editorBody,
                      children: [
                          (0, r.jsx)(y, { markAsDismissed: l }),
                          (0, r.jsx)(h.o, {}),
                          (0, r.jsx)(p.U, {
                              onChange: (e) => {
                                  R(e), 0 === d.length && A([e]);
                              },
                              value: P,
                              colors: d,
                              setColors: A
                          }),
                          d.length > 1 &&
                              (0, r.jsx)(O, {
                                  gradientAngle: g,
                                  setGradientAngle: C
                              }),
                          (0, r.jsx)(v, {
                              chassisMixAmount: m,
                              setChassisMixAmount: (e) => {
                                  N(e), 0 === d.length && A([P]);
                              }
                          }),
                          (0, r.jsxs)(a.zxk, {
                              className: b.resetButton,
                              innerClassName: b.resetButtonContent,
                              look: a.zxk.Looks.FILLED,
                              color: a.zxk.Colors.CUSTOM,
                              onClick: S,
                              children: [(0, r.jsx)(a.Oe7, { size: 'xs' }), E.intl.string(E.t.yBZMsb)]
                          }),
                          (0, r.jsx)(I, { type: 'with-text' })
                      ]
                  }),
                  (0, r.jsx)(T, {
                      handleSaveTheme: D,
                      colors: d,
                      metadata: n,
                      markAsDismissed: l
                  })
              ]
          })
        : null;
}
