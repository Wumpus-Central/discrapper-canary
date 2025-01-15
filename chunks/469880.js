n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(932776),
    o = n(680298),
    s = n(289465),
    d = n(388032),
    c = n(183043);
function u(e) {
    let { applicationIcon: t, applicationName: n, canNavigate: u, guildId: m } = e,
        { results: h, query: p, setQuery: g, unfilteredCount: x } = (0, a.O)(),
        f = null != h && x > 0;
    return (0, i.jsx)(l.Fragment, {
        children: f
            ? (0, i.jsx)(s.Z, {
                  bar: (0, i.jsx)(r.SearchBar, {
                      query: p,
                      onChange: g,
                      onClear: () => g('')
                  }),
                  inModal: !1,
                  title: d.intl.string(d.t['0hKkS0']),
                  children: h.map((e, a) =>
                      (0, i.jsxs)(
                          l.Fragment,
                          {
                              children: [
                                  (0, i.jsx)(o.Z, {
                                      applicationIcon: t,
                                      applicationName: n,
                                      canNavigate: u,
                                      command: e,
                                      guildId: m
                                  }),
                                  a < h.length - 1 ? (0, i.jsx)(r.FormDivider, {}) : null
                              ]
                          },
                          e.id
                      )
                  )
              })
            : (0, i.jsx)(r.Card, {
                  className: c.emptyCard,
                  editable: !0,
                  children: (0, i.jsx)(r.Text, {
                      color: 'text-muted',
                      variant: 'text-sm/normal',
                      children: d.intl.string(d.t['x78c+P'])
                  })
              })
    });
}
