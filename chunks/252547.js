n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
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
        [f, h] = i.useState(!1),
        x = i.useMemo(() => t.slice(0, g && !f ? 6 : void 0), [t, g, f]);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(o.X6, {
                className: u.sectionHeader,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: d.intl.string(d.t.ak8OHh)
            }),
            0 === t.length
                ? (0, r.jsx)(o.xv, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: m.emptyState,
                      children: d.intl.string(d.t.R5fYVF)
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', {
                              className: l()(m.friends, { [m.fadedEntries]: g && !f }),
                              children: (0, r.jsx)('div', {
                                  className: u.column,
                                  children: x.map((e) =>
                                      (0, r.jsx)(
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
                              !f &&
                              (0, r.jsxs)(s.Clickable, {
                                  className: m.expandEntriesButton,
                                  onClick: () => h(!0),
                                  children: [
                                      (0, r.jsx)(o.xv, {
                                          variant: 'text-xs/semibold',
                                          color: 'interactive-normal',
                                          children: d.intl.string(d.t.yohc6O)
                                      }),
                                      (0, r.jsx)(s.ChevronSmallDownIcon, { size: 'xs' })
                                  ]
                              })
                      ]
                  })
        ]
    });
}
