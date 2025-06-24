n.d(t, { Z: () => b }), n(388685);
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(209739),
    o = n.n(s),
    a = n(793030),
    c = n(481060),
    d = n(579806),
    u = n(358085),
    f = n(960861),
    m = n(39540),
    h = n(152165),
    p = n(615161),
    x = n(70722),
    g = n(231338),
    _ = n(388032),
    v = n(148055);
function j(e) {
    let { id: t, text: n, icon: i, selected: s, onClick: o } = e;
    return (0, r.jsx)(c.P3F, {
        role: 'radio',
        'aria-checked': s,
        onClick: () => o(t),
        tabIndex: 0,
        className: l()(v.nativeSourceTypeButton, v.nativePickerRadioItem, { [v.selected]: s }),
        children: (0, r.jsxs)('div', {
            className: v.nativeSourceTypeButtonInner,
            children: [
                (0, r.jsx)(i, { size: 'lg' }),
                (0, r.jsx)(a.xv, {
                    variant: 'text-sm/medium',
                    color: 'none',
                    children: n
                })
            ]
        })
    });
}
function b(e) {
    let { onSourceSelect: t } = e;
    (0, f.UB)(), (0, m.Z)(t, g.Vq);
    let [{ nativeSourceType: n }, i] = (0, p.E_)(),
        l = (0, u.isMac)() && o().satisfies(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release, x.jR);
    return (0, r.jsxs)('div', {
        className: v.root,
        children: [
            (0, r.jsx)(a.X6, {
                className: v.header,
                variant: 'heading-lg/semibold',
                color: 'text-normal',
                children: _.intl.string(_.t.XyYoFR)
            }),
            l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.xv, {
                              className: v.body,
                              variant: 'text-sm/medium',
                              color: 'text-secondary',
                              children: _.intl.format(_.t.sbbPhY, { buttonName: _.intl.string(_.t.FiBjwc) })
                          }),
                          (0, r.jsx)(h.Z, {})
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: v.sourceTypeButtons,
                      children: [
                          (0, r.jsx)(j, {
                              selected: 'screen' === n,
                              onClick: () => {
                                  i({
                                      type: 'set_native_source_type',
                                      sourceType: 'screen'
                                  });
                              },
                              id: 'screen',
                              text: _.intl.string(_.t.cVUFXV),
                              icon: c.pzj
                          }),
                          (0, r.jsx)(j, {
                              selected: 'window' === n,
                              onClick: () => {
                                  i({
                                      type: 'set_native_source_type',
                                      sourceType: 'window'
                                  });
                              },
                              id: 'window',
                              text: _.intl.string(_.t.dG2A1N),
                              icon: c.GON
                          })
                      ]
                  })
        ]
    });
}
