n.d(t, { Z: () => h }), n(388685);
var a = n(255367),
    r = n(73800),
    l = n(866442),
    i = n(442837),
    s = n(481060),
    o = n(153867),
    c = n(210887),
    d = n(233398),
    u = n(803038),
    m = n(536847),
    x = n(772017);
function h() {
    var e;
    let t = u.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        { colors: n, chassisMixAmount: h, gradientAngle: p, setColors: b, setChassisMixAmount: f, setGradientAngle: v } = (0, d.I)(),
        [g, j] = r.useState(null != (e = n[0]) ? e : '#0000FF'),
        [_] = (0, i.Wu)([c.Z], () => [c.Z.theme]);
    return t
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(s.X6q, {
                      className: x.header,
                      variant: 'heading-lg/semibold',
                      children: 'Client Theme Color Picker'
                  }),
                  (0, a.jsx)(s.X6q, {
                      className: x.subheader,
                      variant: 'heading-md/semibold',
                      children: 'Theme'
                  }),
                  (0, a.jsx)(m.o, {}),
                  (0, a.jsx)(s.X6q, {
                      className: x.subheader,
                      variant: 'heading-md/semibold',
                      children: 'Select Color'
                  }),
                  (0, a.jsx)(s.Z$W, {
                      className: x.themeColorPicker,
                      onChange: (e) => j((0, l.Rf)(e)),
                      value: g
                  }),
                  (0, a.jsx)(s.zxk, {
                      onClick: () => b([...n, g]),
                      children: 'Add'
                  }),
                  n.length > 0 &&
                      (0, a.jsxs)('div', {
                          className: x.themeControl,
                          children: [
                              (0, a.jsx)(s.X6q, {
                                  variant: 'heading-md/semibold',
                                  children: 'Colors'
                              }),
                              (0, a.jsx)('div', {
                                  className: x.colorList,
                                  children: n.map((e, t) =>
                                      (0, a.jsxs)(
                                          'div',
                                          {
                                              className: x.colorItem,
                                              children: [
                                                  (0, a.jsx)('div', {
                                                      className: x.colorPreview,
                                                      style: { backgroundColor: e }
                                                  }),
                                                  (0, a.jsx)(s.zxk, {
                                                      size: s.zxk.Sizes.ICON,
                                                      look: s.zxk.Looks.BLANK,
                                                      onClick: () => {
                                                          b(n.filter((e, n) => n !== t));
                                                      },
                                                      children: (0, a.jsx)(s.k$p, {})
                                                  })
                                              ]
                                          },
                                          t
                                      )
                                  )
                              })
                          ]
                      }),
                  (0, a.jsx)(s.X6q, {
                      className: x.subheader,
                      variant: 'heading-md/semibold',
                      children: 'Gradient Angle'
                  }),
                  (0, a.jsx)(s.iRW, {
                      className: x.slider,
                      initialValue: p,
                      defaultValue: 0,
                      minValue: 0,
                      maxValue: 360,
                      onValueChange: v,
                      onValueRender: (e) => ''.concat(Math.round(e), '\xB0'),
                      keyboardStep: 1
                  }),
                  (0, a.jsx)(s.X6q, {
                      className: x.subheader,
                      variant: 'heading-md/semibold',
                      children: 'Base Mix Amount'
                  }),
                  (0, a.jsx)(s.iRW, {
                      className: x.slider,
                      initialValue: h,
                      defaultValue: 0,
                      minValue: 0,
                      maxValue: 100,
                      onValueChange: f,
                      keyboardStep: 1
                  }),
                  (0, a.jsx)(s.zxk, {
                      className: x.saveButton,
                      onClick: () => {
                          (0, o.ZI)({
                              theme: _,
                              customUserThemeSettings: {
                                  colors: n,
                                  gradientColorStops: [],
                                  gradientAngle: p,
                                  baseMix: h
                              }
                          });
                      },
                      disabled: 0 === n.length,
                      children: 'Save Theme'
                  })
              ]
          })
        : null;
}
