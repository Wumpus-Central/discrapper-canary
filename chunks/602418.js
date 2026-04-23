n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(892547),
    a = n(404778),
    r = n(359778),
    o = n(834730),
    d = n(253929),
    c = n(948040),
    u = n(636547),
    m = n(985018),
    g = n(746523);
function h(e) {
    let { applicationIcon: t, applicationName: n, canNavigate: h, guildId: x } = e,
        { results: p, query: A, setQuery: b, unfilteredCount: f } = (0, d._)();
    return null != p && f > 0
        ? (0, i.jsx)(u.A, {
              bar: (0, i.jsx)(s.I, { size: "sm", query: A, onChange: b, onClear: () => b("") }),
              inModal: !1,
              title: m.intl.string(m.t["0hKkS+"]),
              children: p.map((e, s) =>
                  (0, i.jsxs)(
                      l.Fragment,
                      {
                          children: [
                              (0, i.jsx)(c.A, {
                                  applicationIcon: t,
                                  applicationName: n,
                                  canNavigate: h,
                                  command: e,
                                  guildId: x,
                              }),
                              s < p.length - 1 ? (0, i.jsx)(a.c, {}) : null,
                          ],
                      },
                      e.id,
                  ),
              ),
          })
        : (0, i.jsx)(r.Z, {
              className: g.a,
              editable: !0,
              children: (0, i.jsx)(o.E, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: m.intl.string(m.t["x78c+J"]),
              }),
          });
}
