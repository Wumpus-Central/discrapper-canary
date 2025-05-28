n.d(t, { Z: () => m }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(866442),
    o = n(442837),
    s = n(481060),
    l = n(153867),
    c = n(230711),
    u = n(550385),
    d = n(210887),
    f = n(233398),
    _ = n(803038),
    p = n(536847),
    h = n(772017);
function m(e) {
    var t;
    let { metadata: n } = e,
        m = _.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        { colors: g, chassisMixAmount: E, gradientAngle: b, setColors: y, setChassisMixAmount: O, setGradientAngle: v } = (0, f.I)(),
        [I, S] = i.useState(null != (t = g[0]) ? t : '#0000FF'),
        [T] = (0, o.Wu)([d.Z], () => [d.Z.theme]),
        A = () => {
            (0, l.ZI)({
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
              children: (0, r.jsxs)(s.Ttm, {
                  className: h.editorBody,
                  children: [
                      (0, r.jsx)(s.X6q, {
                          className: h.header,
                          variant: 'heading-lg/semibold',
                          children: 'Client Theme Color Picker'
                      }),
                      (0, r.jsx)(s.X6q, {
                          className: h.subheader,
                          variant: 'heading-md/semibold',
                          children: 'Theme'
                      }),
                      (0, r.jsx)(p.o, {}),
                      (0, r.jsx)(s.X6q, {
                          className: h.subheader,
                          variant: 'heading-md/semibold',
                          children: 'Select Color'
                      }),
                      (0, r.jsx)(s.Z$W, {
                          className: h.themeColorPicker,
                          onChange: (e) => S((0, a.Rf)(e)),
                          value: I
                      }),
                      (0, r.jsx)(s.zxk, {
                          onClick: () => y([...g, I]),
                          children: 'Add'
                      }),
                      g.length > 0 &&
                          (0, r.jsxs)('div', {
                              className: h.themeControl,
                              children: [
                                  (0, r.jsx)(s.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: 'Colors'
                                  }),
                                  (0, r.jsx)('div', {
                                      className: h.colorList,
                                      children: g.map((e, t) =>
                                          (0, r.jsxs)(
                                              'div',
                                              {
                                                  className: h.colorItem,
                                                  children: [
                                                      (0, r.jsx)('div', {
                                                          className: h.colorPreview,
                                                          style: { backgroundColor: e }
                                                      }),
                                                      (0, r.jsx)(s.zxk, {
                                                          size: s.zxk.Sizes.ICON,
                                                          look: s.zxk.Looks.BLANK,
                                                          onClick: () => {
                                                              y(g.filter((e, n) => n !== t));
                                                          },
                                                          children: (0, r.jsx)(s.k$p, {})
                                                      })
                                                  ]
                                              },
                                              t
                                          )
                                      )
                                  })
                              ]
                          }),
                      (0, r.jsx)(s.X6q, {
                          className: h.subheader,
                          variant: 'heading-md/semibold',
                          children: 'Gradient Angle'
                      }),
                      (0, r.jsx)(s.iRW, {
                          className: h.slider,
                          initialValue: b,
                          defaultValue: 0,
                          minValue: 0,
                          maxValue: 360,
                          onValueChange: v,
                          onValueRender: (e) => ''.concat(Math.round(e), '\xB0'),
                          keyboardStep: 1
                      }),
                      (0, r.jsx)(s.X6q, {
                          className: h.subheader,
                          variant: 'heading-md/semibold',
                          children: 'Base Mix Amount'
                      }),
                      (0, r.jsx)(s.iRW, {
                          className: h.slider,
                          initialValue: E,
                          defaultValue: 0,
                          minValue: 0,
                          maxValue: 100,
                          onValueChange: O,
                          keyboardStep: 1
                      }),
                      (0, r.jsx)(s.zxk, {
                          className: h.saveButton,
                          onClick: A,
                          disabled: 0 === g.length,
                          children: 'Save Theme'
                      }),
                      (0, r.jsx)(s.zxk, {
                          className: h.exitButton,
                          onClick: () => {
                              (null == n ? void 0 : n.from) === u.tE.SETTING ? (c.Z.open(), (0, u.Ll)()) : (null == n ? void 0 : n.from) === u.tE.CLIENT_THEMES_EDITOR ? (0, u.XO)(u.wh.CLIENT_THEMES) : (0, u.Ll)();
                          },
                          children: (null == n ? void 0 : n.from) === u.tE.CLIENT_THEMES_EDITOR ? 'Back' : 'Exit'
                      })
                  ]
              })
          })
        : null;
}
