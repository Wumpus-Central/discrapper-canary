n.d(t, { Z: () => u });
var i = n(54381),
    r = n(473749),
    l = n(481060),
    a = n(932776),
    o = n(680298),
    s = n(289465),
    c = n(388032),
    d = n(680597);
function u(e) {
    let { applicationIcon: t, applicationName: n, canNavigate: u, guildId: m } = e,
        { results: b, query: p, setQuery: g, unfilteredCount: f } = (0, a.O)();
    return null != b && f > 0
        ? (0, i.jsx)(s.Z, {
              bar: (0, i.jsx)(l.E1j, {
                  size: "sm",
                  query: p,
                  onChange: g,
                  onClear: () => g(""),
              }),
              inModal: !1,
              title: c.intl.string(c.t["0hKkS+"]),
              children: b.map((e, a) =>
                  (0, i.jsxs)(
                      r.Fragment,
                      {
                          children: [
                              (0, i.jsx)(o.Z, {
                                  applicationIcon: t,
                                  applicationName: n,
                                  canNavigate: u,
                                  command: e,
                                  guildId: m,
                              }),
                              a < b.length - 1 ? (0, i.jsx)(l.izJ, {}) : null,
                          ],
                      },
                      e.id,
                  ),
              ),
          })
        : (0, i.jsx)(l.Zbd, {
              className: d.emptyCard,
              editable: !0,
              children: (0, i.jsx)(l.Text, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: c.intl.string(c.t["x78c+J"]),
              }),
          });
}
