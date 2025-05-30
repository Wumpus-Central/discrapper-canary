n.d(t, { Z: () => m }), n(388685);
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
    h = n(882903);
function m(e) {
    var t;
    let { metadata: n } = e,
        m = f.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        { colors: g, chassisMixAmount: E, gradientAngle: b, setColors: y, setChassisMixAmount: O, setGradientAngle: v } = (0, d.I)(),
        [I, S] = i.useState(null != (t = g[0]) ? t : '#4394D4'),
        [T] = (0, a.Wu)([u.Z], () => [u.Z.theme]),
        A = () => {
            (0, s.ZI)({
                theme: T,
                customUserThemeSettings: {
                    colors: g,
                    gradientColorStops: [],
                    gradientAngle: b,
                    baseMix: E
                }
            });
        };
    return m
        ? (0, r.jsx)('div', {
              className: h.container,
              'data-app-right-panel': !0,
              children: (0, r.jsxs)(o.Ttm, {
                  className: h.editorBody,
                  children: [
                      (0, r.jsx)(o.X6q, {
                          className: h.header,
                          variant: 'heading-lg/semibold',
                          children: 'Client Theme Color Picker'
                      }),
                      (0, r.jsx)(p.o, {}),
                      (0, r.jsx)(_.U, {
                          className: h.themeColorPicker,
                          onChange: (e) => {
                              S(e), 0 === g.length && y([e]);
                          },
                          value: I,
                          colors: g,
                          setColors: y
                      }),
                      (0, r.jsx)(o.X6q, {
                          className: h.subheader,
                          variant: 'heading-md/semibold',
                          children: 'Gradient Angle'
                      }),
                      (0, r.jsx)(o.iRW, {
                          className: h.slider,
                          initialValue: b,
                          defaultValue: 0,
                          minValue: 0,
                          maxValue: 360,
                          onValueChange: v,
                          onValueRender: (e) => ''.concat(Math.round(e), '\xB0'),
                          keyboardStep: 1
                      }),
                      (0, r.jsx)(o.X6q, {
                          className: h.subheader,
                          variant: 'heading-md/semibold',
                          children: 'Base Mix Amount'
                      }),
                      (0, r.jsx)(o.iRW, {
                          className: h.slider,
                          initialValue: E,
                          defaultValue: 80,
                          minValue: 0,
                          maxValue: 100,
                          onValueChange: O,
                          keyboardStep: 1
                      }),
                      (0, r.jsx)(o.zxk, {
                          className: h.saveButton,
                          onClick: A,
                          disabled: 0 === g.length,
                          children: 'Save Theme'
                      }),
                      (0, r.jsx)(o.zxk, {
                          className: h.exitButton,
                          onClick: () => {
                              (null == n ? void 0 : n.from) === c.tE.SETTING ? (l.Z.open(), (0, c.Ll)()) : (null == n ? void 0 : n.from) === c.tE.CLIENT_THEMES_EDITOR ? (0, c.XO)(c.wh.CLIENT_THEMES) : (0, c.Ll)();
                          },
                          children: (null == n ? void 0 : n.from) === c.tE.CLIENT_THEMES_EDITOR ? 'Back' : 'Exit'
                      })
                  ]
              })
          })
        : null;
}
