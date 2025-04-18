r.d(t, { Z: () => g }), r(388685);
var n = r(200651),
    a = r(192379),
    i = r(120356),
    l = r.n(i),
    s = r(793030),
    o = r(481060),
    c = r(383895),
    u = r(388032),
    d = r(206218),
    m = r(715005);
function g(e) {
    let { entries: t, viewId: r, officialGuildId: i, onClose: g } = e,
        f = t.length > 7,
        [p, O] = a.useState(!1),
        E = a.useMemo(() => t.slice(0, f && !p ? 6 : void 0), [t, f, p]);
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(s.X6, {
                className: d.sectionHeader,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: u.NW.string(u.t.ak8OHh)
            }),
            0 === t.length
                ? (0, n.jsx)(s.xv, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: m.emptyState,
                      children: u.NW.string(u.t.R5fYVF)
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)('div', {
                              className: l()(m.friends, { [m.fadedEntries]: f && !p }),
                              children: (0, n.jsx)('div', {
                                  className: d.column,
                                  children: E.map((e) =>
                                      (0, n.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: r,
                                              onClose: g,
                                              officialGuildId: i
                                          },
                                          e.id
                                      )
                                  )
                              })
                          }),
                          f &&
                              !p &&
                              (0, n.jsxs)(o.P3F, {
                                  className: m.expandEntriesButton,
                                  onClick: () => O(!0),
                                  children: [
                                      (0, n.jsx)(s.xv, {
                                          variant: 'text-xs/semibold',
                                          color: 'interactive-normal',
                                          children: u.NW.string(u.t.yohc6O)
                                      }),
                                      (0, n.jsx)(o.CJ0, { size: 'xs' })
                                  ]
                              })
                      ]
                  })
        ]
    });
}
