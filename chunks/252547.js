n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(793030),
    s = n(481060),
    c = n(383895),
    d = n(388032),
    u = n(561526),
    m = n(375605);
function p(e) {
    let { entries: t, viewId: n, officialGuildId: a, onClose: p } = e,
        g = t.length > 7,
        [_, h] = r.useState(!1),
        f = r.useMemo(() => t.slice(0, g && !_ ? 6 : void 0), [t, g, _]);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(o.X6, {
                className: u.sectionHeader,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: d.intl.string(d.t.ak8OHh)
            }),
            0 === t.length
                ? (0, i.jsx)(o.xv, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: m.emptyState,
                      children: d.intl.string(d.t.R5fYVF)
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)('div', {
                              className: l()(m.friends, { [m.fadedEntries]: g && !_ }),
                              children: (0, i.jsx)('div', {
                                  className: u.column,
                                  children: f.map((e) =>
                                      (0, i.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: n,
                                              onClose: p,
                                              officialGuildId: a
                                          },
                                          e.id
                                      )
                                  )
                              })
                          }),
                          g &&
                              !_ &&
                              (0, i.jsxs)(s.P3F, {
                                  className: m.expandEntriesButton,
                                  onClick: () => h(!0),
                                  children: [
                                      (0, i.jsx)(o.xv, {
                                          variant: 'text-xs/semibold',
                                          color: 'interactive-normal',
                                          children: d.intl.string(d.t.yohc6O)
                                      }),
                                      (0, i.jsx)(s.CJ0, { size: 'xs' })
                                  ]
                              })
                      ]
                  })
        ]
    });
}
