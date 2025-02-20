r.d(t, { Z: () => m }), r(47120);
var n = r(200651),
    a = r(192379),
    o = r(120356),
    i = r.n(o),
    s = r(793030),
    l = r(481060),
    c = r(383895),
    u = r(388032),
    d = r(384370),
    p = r(32559);
function m(e) {
    let { entries: t, viewId: r, officialGuildId: o, onClose: m } = e,
        f = t.length > 7,
        [g, b] = a.useState(!1),
        _ = a.useMemo(() => t.slice(0, f && !g ? 6 : void 0), [t, f, g]);
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
                      className: p.emptyState,
                      children: u.NW.string(u.t.R5fYVF)
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)('div', {
                              className: i()(p.friends, { [p.fadedEntries]: f && !g }),
                              children: (0, n.jsx)('div', {
                                  className: d.column,
                                  children: _.map((e) =>
                                      (0, n.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: r,
                                              onClose: m,
                                              officialGuildId: o
                                          },
                                          e.id
                                      )
                                  )
                              })
                          }),
                          f &&
                              !g &&
                              (0, n.jsxs)(l.P3F, {
                                  className: p.expandEntriesButton,
                                  onClick: () => b(!0),
                                  children: [
                                      (0, n.jsx)(s.xv, {
                                          variant: 'text-xs/semibold',
                                          color: 'interactive-normal',
                                          children: u.NW.string(u.t.yohc6O)
                                      }),
                                      (0, n.jsx)(l.CJ0, { size: 'xs' })
                                  ]
                              })
                      ]
                  })
        ]
    });
}
