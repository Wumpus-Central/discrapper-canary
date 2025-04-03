r.d(t, { Z: () => f }), r(47120);
var n = r(200651),
    a = r(192379),
    o = r(120356),
    i = r.n(o),
    l = r(793030),
    s = r(481060),
    c = r(383895),
    u = r(388032),
    d = r(263930),
    p = r(949439);
function f(e) {
    let { entries: t, viewId: r, officialGuildId: o, onClose: f } = e,
        m = t.length > 7,
        [g, b] = a.useState(!1),
        _ = a.useMemo(() => t.slice(0, m && !g ? 6 : void 0), [t, m, g]);
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(l.X6, {
                className: d.sectionHeader,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: u.NW.string(u.t.ak8OHh)
            }),
            0 === t.length
                ? (0, n.jsx)(l.xv, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: p.emptyState,
                      children: u.NW.string(u.t.R5fYVF)
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)('div', {
                              className: i()(p.friends, { [p.fadedEntries]: m && !g }),
                              children: (0, n.jsx)('div', {
                                  className: d.column,
                                  children: _.map((e) =>
                                      (0, n.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: r,
                                              onClose: f,
                                              officialGuildId: o
                                          },
                                          e.id
                                      )
                                  )
                              })
                          }),
                          m &&
                              !g &&
                              (0, n.jsxs)(s.P3F, {
                                  className: p.expandEntriesButton,
                                  onClick: () => b(!0),
                                  children: [
                                      (0, n.jsx)(l.xv, {
                                          variant: 'text-xs/semibold',
                                          color: 'interactive-normal',
                                          children: u.NW.string(u.t.yohc6O)
                                      }),
                                      (0, n.jsx)(s.CJ0, { size: 'xs' })
                                  ]
                              })
                      ]
                  })
        ]
    });
}
