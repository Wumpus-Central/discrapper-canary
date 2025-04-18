n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(932776),
    a = n(680298),
    s = n(289465),
    c = n(388032),
    d = n(298040);
function u(e) {
    let { applicationIcon: t, applicationName: n, canNavigate: u, guildId: p } = e,
        { results: m, query: b, setQuery: g, unfilteredCount: f } = (0, o.O)();
    return null != m && f > 0
        ? (0, r.jsx)(s.Z, {
              bar: (0, r.jsx)(l.E1j, {
                  query: b,
                  onChange: g,
                  onClear: () => g('')
              }),
              inModal: !1,
              title: c.NW.string(c.t['0hKkS0']),
              children: m.map((e, o) =>
                  (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, r.jsx)(a.Z, {
                                  applicationIcon: t,
                                  applicationName: n,
                                  canNavigate: u,
                                  command: e,
                                  guildId: p
                              }),
                              o < m.length - 1 ? (0, r.jsx)(l.$i$, {}) : null
                          ]
                      },
                      e.id
                  )
              )
          })
        : (0, r.jsx)(l.Zbd, {
              className: d.emptyCard,
              editable: !0,
              children: (0, r.jsx)(l.Text, {
                  color: 'text-muted',
                  variant: 'text-sm/normal',
                  children: c.NW.string(c.t['x78c+P'])
              })
          });
}
