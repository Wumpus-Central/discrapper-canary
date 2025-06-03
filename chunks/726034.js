n.d(t, { Z: () => I }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(153867),
    l = n(230711),
    c = n(550385),
    u = n(210887),
    d = n(233398),
    f = n(803038),
    _ = n(877865),
    p = n(536847),
    h = n(789549),
    m = n(388032),
    g = n(882903);
function E() {
    return (0, r.jsxs)('div', {
        className: g.headerContainer,
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-md/bold',
                children: m.intl.string(h.default['AsmU8/'])
            }),
            (0, r.jsx)(o.SrA, { size: 'md' }),
            (0, r.jsx)(o.zxk, {
                className: g.closeButton,
                size: o.zxk.Sizes.ICON,
                look: o.zxk.Looks.BLANK,
                onClick: () => (0, c.Ll)(),
                children: (0, r.jsx)(o.Dio, { size: 'sm' })
            })
        ]
    });
}
function b(e) {
    let { gradientAngle: t, setGradientAngle: n } = e;
    return (0, r.jsxs)('div', {
        className: g.sliderContainer,
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/semibold',
                children: m.intl.string(h.default.dZkwg4)
            }),
            (0, r.jsx)(o.iRW, {
                className: g.slider,
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
function y(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e;
    return (0, r.jsxs)('div', {
        className: g.sliderContainer,
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/semibold',
                children: m.intl.string(h.default.xlXkaG)
            }),
            (0, r.jsx)(o.iRW, {
                className: g.slider,
                initialValue: t,
                defaultValue: d.B,
                minValue: 0,
                maxValue: 100,
                onValueChange: n,
                keyboardStep: 1
            })
        ]
    });
}
function O(e) {
    let { type: t } = e;
    return (0, r.jsxs)(o.zxk, {
        className: g.surpriseMeButton,
        innerClassName: g.surpriseMeButtonContent,
        look: o.zxk.Looks.FILLED,
        color: o.zxk.Colors.CUSTOM,
        size: 'with-text' === t ? o.zxk.Sizes.MEDIUM : o.zxk.Sizes.ICON,
        onClick: () => {},
        children: [(0, r.jsx)(o.T$Z, { size: 'sm' }), 'with-text' === t && m.intl.string(m.t['WZ+NyM'])]
    });
}
function v(e) {
    let { handleSaveTheme: t, colors: n, metadata: i } = e;
    return (0, r.jsxs)('div', {
        className: g.footerContainer,
        children: [
            (0, r.jsx)(O, { type: 'no-text' }),
            (0, r.jsx)(o.zxk, {
                className: g.backButton,
                size: o.zxk.Sizes.NONE,
                look: o.zxk.Looks.BLANK,
                onClick: () => {
                    (null == i ? void 0 : i.from) === c.tE.SETTING ? (l.Z.open(), (0, c.Ll)()) : (null == i ? void 0 : i.from) === c.tE.CLIENT_THEMES_EDITOR ? (0, c.XO)(c.wh.CLIENT_THEMES) : (0, c.Ll)();
                },
                children: m.intl.string(m.t['13/7kZ'])
            }),
            (0, r.jsx)(o.zxk, {
                className: g.applyButton,
                size: o.zxk.Sizes.NONE,
                onClick: t,
                disabled: 0 === n.length,
                children: m.intl.string(m.t['1Qm829'])
            })
        ]
    });
}
function I(e) {
    var t;
    let { metadata: n } = e,
        l = f.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        { colors: c, chassisMixAmount: h, gradientAngle: I, setColors: S, setChassisMixAmount: T, setGradientAngle: A } = (0, d.I)(),
        [N, C] = i.useState(null != (t = c[0]) ? t : '#4394D4'),
        [P] = (0, a.Wu)([u.Z], () => [u.Z.theme]),
        R = () => {
            (0, s.ZI)({
                theme: P,
                customUserThemeSettings: {
                    colors: c,
                    gradientColorStops: [],
                    gradientAngle: I,
                    baseMix: h
                }
            });
        };
    return l
        ? (0, r.jsxs)('div', {
              className: g.container,
              'data-app-right-panel': !0,
              children: [
                  (0, r.jsxs)(o.Ttm, {
                      className: g.editorBody,
                      children: [
                          (0, r.jsx)(E, {}),
                          (0, r.jsx)(p.o, {}),
                          (0, r.jsx)(_.U, {
                              onChange: (e) => {
                                  C(e), 0 === c.length && S([e]);
                              },
                              value: N,
                              colors: c,
                              setColors: S
                          }),
                          (0, r.jsx)(b, {
                              gradientAngle: I,
                              setGradientAngle: A
                          }),
                          (0, r.jsx)(y, {
                              chassisMixAmount: h,
                              setChassisMixAmount: T
                          }),
                          (0, r.jsxs)(o.zxk, {
                              className: g.resetButton,
                              innerClassName: g.resetButtonContent,
                              look: o.zxk.Looks.FILLED,
                              color: o.zxk.Colors.CUSTOM,
                              onClick: () => {},
                              children: [(0, r.jsx)(o.Oe7, { size: 'xs' }), m.intl.string(m.t.yBZMsb)]
                          }),
                          (0, r.jsx)(O, { type: 'with-text' })
                      ]
                  }),
                  (0, r.jsx)(v, {
                      handleSaveTheme: R,
                      colors: c,
                      metadata: n
                  })
              ]
          })
        : null;
}
