n.d(t, { Z: () => T }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(153867),
    l = n(230711),
    c = n(550385),
    u = n(210887),
    d = n(695346),
    f = n(233398),
    _ = n(803038),
    p = n(877865),
    h = n(536847),
    m = n(789549),
    g = n(388032),
    E = n(882903);
function b() {
    return (0, r.jsxs)('div', {
        className: E.headerContainer,
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-md/bold',
                children: g.intl.string(m.default['AsmU8/'])
            }),
            (0, r.jsx)(o.SrA, { size: 'md' }),
            (0, r.jsx)(o.zxk, {
                className: E.closeButton,
                size: o.zxk.Sizes.ICON,
                look: o.zxk.Looks.BLANK,
                onClick: () => (0, c.Ll)(),
                children: (0, r.jsx)(o.Dio, { size: 'sm' })
            })
        ]
    });
}
function y(e) {
    let { gradientAngle: t, setGradientAngle: n } = e;
    return (0, r.jsxs)('div', {
        className: E.sliderContainer,
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/semibold',
                children: g.intl.string(m.default.dZkwg4)
            }),
            (0, r.jsx)(o.iRW, {
                className: E.slider,
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
function O(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e;
    return (0, r.jsxs)('div', {
        className: E.sliderContainer,
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/semibold',
                children: g.intl.string(m.default.xlXkaG)
            }),
            (0, r.jsx)(o.iRW, {
                className: E.slider,
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
function v(e) {
    let { type: t } = e;
    return (0, r.jsxs)(o.zxk, {
        className: E.surpriseMeButton,
        innerClassName: E.surpriseMeButtonContent,
        look: o.zxk.Looks.FILLED,
        color: o.zxk.Colors.CUSTOM,
        size: 'with-text' === t ? o.zxk.Sizes.MEDIUM : o.zxk.Sizes.ICON,
        onClick: () => {},
        children: [(0, r.jsx)(o.T$Z, { size: 'sm' }), 'with-text' === t && g.intl.string(g.t['WZ+NyM'])]
    });
}
function I() {
    var e, t, n;
    let r = d.L1.getSetting().customUserThemeSettings;
    f.I.setState({
        colors: null != (e = null == r ? void 0 : r.colors) ? e : [],
        gradientAngle: null != (t = null == r ? void 0 : r.gradientAngle) ? t : 0,
        chassisMixAmount: null != (n = null == r ? void 0 : r.baseMix) ? n : f.B
    });
}
function S(e) {
    let { handleSaveTheme: t, colors: n, metadata: i } = e;
    return (0, r.jsxs)('div', {
        className: E.footerContainer,
        children: [
            (0, r.jsx)(v, { type: 'no-text' }),
            (0, r.jsx)(o.zxk, {
                className: E.backButton,
                size: o.zxk.Sizes.NONE,
                look: o.zxk.Looks.BLANK,
                onClick: () => {
                    (null == i ? void 0 : i.from) === c.tE.SETTING ? (l.Z.open(), (0, c.Ll)()) : (null == i ? void 0 : i.from) === c.tE.CLIENT_THEMES_EDITOR ? (0, c.XO)(c.wh.CLIENT_THEMES) : (0, c.Ll)();
                },
                children: g.intl.string(g.t['13/7kZ'])
            }),
            (0, r.jsx)(o.zxk, {
                className: E.applyButton,
                size: o.zxk.Sizes.NONE,
                onClick: t,
                disabled: 0 === n.length,
                children: g.intl.string(g.t['1Qm829'])
            })
        ]
    });
}
function T(e) {
    var t;
    let { metadata: n } = e,
        l = _.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        { colors: c, chassisMixAmount: d, gradientAngle: m, setColors: T, setChassisMixAmount: A, setGradientAngle: N } = (0, f.I)(),
        [C, P] = i.useState(null != (t = c[0]) ? t : '#4394D4'),
        [R] = (0, a.Wu)([u.Z], () => [u.Z.theme]),
        w = () => {
            (0, s.ZI)({
                theme: R,
                customUserThemeSettings: {
                    colors: c,
                    gradientColorStops: [],
                    gradientAngle: m,
                    baseMix: d
                }
            });
        };
    return (i.useEffect(() => I, []), l)
        ? (0, r.jsxs)('div', {
              className: E.container,
              'data-app-right-panel': !0,
              children: [
                  (0, r.jsxs)(o.Ttm, {
                      className: E.editorBody,
                      children: [
                          (0, r.jsx)(b, {}),
                          (0, r.jsx)(h.o, {}),
                          (0, r.jsx)(p.U, {
                              onChange: (e) => {
                                  P(e), 0 === c.length && T([e]);
                              },
                              value: C,
                              colors: c,
                              setColors: T
                          }),
                          (0, r.jsx)(y, {
                              gradientAngle: m,
                              setGradientAngle: N
                          }),
                          (0, r.jsx)(O, {
                              chassisMixAmount: d,
                              setChassisMixAmount: A
                          }),
                          (0, r.jsxs)(o.zxk, {
                              className: E.resetButton,
                              innerClassName: E.resetButtonContent,
                              look: o.zxk.Looks.FILLED,
                              color: o.zxk.Colors.CUSTOM,
                              onClick: I,
                              children: [(0, r.jsx)(o.Oe7, { size: 'xs' }), g.intl.string(g.t.yBZMsb)]
                          }),
                          (0, r.jsx)(v, { type: 'with-text' })
                      ]
                  }),
                  (0, r.jsx)(S, {
                      handleSaveTheme: w,
                      colors: c,
                      metadata: n
                  })
              ]
          })
        : null;
}
