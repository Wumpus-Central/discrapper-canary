n.d(t, { Z: () => v }), n(388685);
var a = n(255367),
    r = n(73800),
    l = n(866442),
    i = n(442837),
    s = n(481060),
    o = n(153867),
    c = n(210887),
    d = n(740492),
    u = n(233398),
    m = n(514361),
    x = n(803038),
    h = n(583901),
    p = n(874893),
    b = n(231338),
    f = n(772017);
function v() {
    var e;
    let t = x.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        { colors: n, chassisMixAmount: v, gradientAngle: j, setColors: g, setChassisMixAmount: _, setGradientAngle: y } = (0, u.I)(),
        [C, O] = r.useState(null != (e = n[0]) ? e : '#0000FF'),
        [N, E, S] = (0, i.Wu)([c.Z, d.ZP, m.Z], () => [c.Z.theme, null == m.Z.gradientPreset, d.ZP.useSystemTheme === p.KW.ON]);
    return t
        ? (0, a.jsxs)('div', {
              children: [
                  (0, a.jsx)(s.X6q, {
                      className: f.header,
                      variant: 'heading-lg/semibold',
                      children: 'Client Theme Color Picker'
                  }),
                  (0, a.jsx)(s.X6q, {
                      className: f.subheader,
                      variant: 'heading-md/semibold',
                      children: 'Theme'
                  }),
                  (0, a.jsxs)('div', {
                      className: f.themeSelectionContainer,
                      children: [
                          (0, a.jsx)(h.bD, {
                              theme: b.BR.LIGHT,
                              isSelected: E && !S && N === b.BR.LIGHT,
                              onSelect: () => (0, o.ZI)({ theme: b.BR.LIGHT })
                          }),
                          (0, a.jsx)(h.bD, {
                              theme: b.BR.DARK,
                              isSelected: E && !S && N === b.BR.DARK,
                              onSelect: () => (0, o.ZI)({ theme: b.BR.DARK })
                          })
                      ]
                  }),
                  (0, a.jsx)(s.X6q, {
                      className: f.subheader,
                      variant: 'heading-md/semibold',
                      children: 'Select Color'
                  }),
                  (0, a.jsx)(s.Z$W, {
                      className: f.themeColorPicker,
                      onChange: (e) => O((0, l.Rf)(e)),
                      value: C
                  }),
                  (0, a.jsx)(s.zxk, {
                      onClick: () => g([...n, C]),
                      children: 'Add'
                  }),
                  n.length > 0 &&
                      (0, a.jsxs)('div', {
                          className: f.themeControl,
                          children: [
                              (0, a.jsx)(s.X6q, {
                                  variant: 'heading-md/semibold',
                                  children: 'Colors'
                              }),
                              (0, a.jsx)('div', {
                                  className: f.colorList,
                                  children: n.map((e, t) =>
                                      (0, a.jsxs)(
                                          'div',
                                          {
                                              className: f.colorItem,
                                              children: [
                                                  (0, a.jsx)('div', {
                                                      className: f.colorPreview,
                                                      style: { backgroundColor: e }
                                                  }),
                                                  (0, a.jsx)(s.zxk, {
                                                      size: s.zxk.Sizes.ICON,
                                                      look: s.zxk.Looks.BLANK,
                                                      onClick: () => {
                                                          g(n.filter((e, n) => n !== t));
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
                      className: f.subheader,
                      variant: 'heading-md/semibold',
                      children: 'Chassis Mix Amount'
                  }),
                  (0, a.jsx)(s.iRW, {
                      className: f.slider,
                      initialValue: v,
                      defaultValue: 0,
                      minValue: 0,
                      maxValue: 100,
                      onValueChange: _
                  }),
                  (0, a.jsx)(s.X6q, {
                      className: f.subheader,
                      variant: 'heading-md/semibold',
                      children: 'Gradient Angle'
                  }),
                  (0, a.jsx)(s.iRW, {
                      className: f.slider,
                      initialValue: j,
                      defaultValue: 0,
                      minValue: 0,
                      maxValue: 360,
                      onValueChange: y,
                      onValueRender: (e) => ''.concat(e.toFixed(0), '\xB0')
                  })
              ]
          })
        : null;
}
