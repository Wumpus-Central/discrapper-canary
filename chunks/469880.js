n.d(t, { Z: () => u });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(932776),
    s = n(680298),
    o = n(289465),
    d = n(388032),
    c = n(53940);
function u(e) {
    let { applicationIcon: t, applicationName: n, canNavigate: u, guildId: m } = e,
        { results: h, query: x, setQuery: g, unfilteredCount: p } = (0, r.O)(),
        b = null != h && p > 0;
    return (0, i.jsx)(l.Fragment, {
        children: b
            ? (0, i.jsx)(o.Z, {
                  bar: (0, i.jsx)(a.E1j, {
                      query: x,
                      onChange: g,
                      onClear: () => g('')
                  }),
                  inModal: !1,
                  title: d.intl.string(d.t['0hKkS0']),
                  children: h.map((e, r) =>
                      (0, i.jsxs)(
                          l.Fragment,
                          {
                              children: [
                                  (0, i.jsx)(s.Z, {
                                      applicationIcon: t,
                                      applicationName: n,
                                      canNavigate: u,
                                      command: e,
                                      guildId: m
                                  }),
                                  r < h.length - 1 ? (0, i.jsx)(a.$i$, {}) : null
                              ]
                          },
                          e.id
                      )
                  )
              })
            : (0, i.jsx)(a.Zbd, {
                  className: c.emptyCard,
                  editable: !0,
                  children: (0, i.jsx)(a.Text, {
                      color: 'text-muted',
                      variant: 'text-sm/normal',
                      children: d.intl.string(d.t['x78c+P'])
                  })
              })
    });
}
