n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(793030),
    s = n(481060),
    c = n(383895),
    d = n(388032),
    u = n(959559),
    m = n(761088);
function _(e) {
    let { entries: t, viewId: n, officialGuildId: i, onClose: _ } = e,
        g = t.length > 7,
        [p, f] = a.useState(!1),
        h = a.useMemo(() => t.slice(0, g && !p ? 6 : void 0), [t, g, p]);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(l.X6, {
                className: u.sectionHeader,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: d.intl.string(d.t.ak8OHh)
            }),
            0 === t.length
                ? (0, r.jsx)(l.xv, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: m.emptyState,
                      children: d.intl.string(d.t.R5fYVF)
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', {
                              className: o()(m.friends, { [m.fadedEntries]: g && !p }),
                              children: (0, r.jsx)('div', {
                                  className: u.column,
                                  children: h.map((e) =>
                                      (0, r.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: n,
                                              onClose: _,
                                              officialGuildId: i
                                          },
                                          e.id
                                      )
                                  )
                              })
                          }),
                          g &&
                              !p &&
                              (0, r.jsxs)(s.P3F, {
                                  className: m.expandEntriesButton,
                                  onClick: () => f(!0),
                                  children: [
                                      (0, r.jsx)(l.xv, {
                                          variant: 'text-xs/semibold',
                                          color: 'interactive-normal',
                                          children: d.intl.string(d.t.yohc6O)
                                      }),
                                      (0, r.jsx)(s.CJ0, { size: 'xs' })
                                  ]
                              })
                      ]
                  })
        ]
    });
}
