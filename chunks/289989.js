n.d(t, { Z: () => j }), n(388685);
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
    f = n(39540),
    m = n(152165),
    h = n(615161),
    p = n(70722),
    x = n(231338),
    g = n(388032),
    _ = n(148055);
function v(e) {
    let { id: t, text: n, icon: i, selected: s, onClick: o } = e;
    return (0, r.jsx)(c.P3F, {
        role: 'radio',
        'aria-checked': s,
        onClick: () => o(t),
        tabIndex: 0,
        className: l()(_.nativeSourceTypeButton, _.nativePickerRadioItem, { [_.selected]: s }),
        children: (0, r.jsxs)('div', {
            className: _.nativeSourceTypeButtonInner,
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
function j(e) {
    let { onSourceSelect: t } = e;
    (0, f.Z)(t, x.Vq);
    let [{ nativeSourceType: n }, i] = (0, h.E_)(),
        l = (0, u.isMac)() && o().satisfies(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release, p.jR);
    return (0, r.jsxs)('div', {
        className: _.root,
        children: [
            (0, r.jsx)(a.X6, {
                className: _.header,
                variant: 'heading-lg/semibold',
                color: 'text-normal',
                children: g.intl.string(g.t.XyYoFR)
            }),
            l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.xv, {
                              className: _.body,
                              variant: 'text-sm/medium',
                              color: 'text-secondary',
                              children: g.intl.format(g.t.sbbPhY, { buttonName: g.intl.string(g.t.FiBjwc) })
                          }),
                          (0, r.jsx)(m.Z, {})
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: _.sourceTypeButtons,
                      children: [
                          (0, r.jsx)(v, {
                              selected: 'screen' === n,
                              onClick: () => {
                                  i({
                                      type: 'set_native_source_type',
                                      sourceType: 'screen'
                                  });
                              },
                              id: 'screen',
                              text: g.intl.string(g.t.cVUFXV),
                              icon: c.pzj
                          }),
                          (0, r.jsx)(v, {
                              selected: 'window' === n,
                              onClick: () => {
                                  i({
                                      type: 'set_native_source_type',
                                      sourceType: 'window'
                                  });
                              },
                              id: 'window',
                              text: g.intl.string(g.t.dG2A1N),
                              icon: c.GON
                          })
                      ]
                  })
        ]
    });
}
