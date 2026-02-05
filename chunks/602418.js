n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(253929),
    r = n(948040),
    o = n(636547),
    d = n(985018),
    c = n(388568);
function u(e) {
    let { applicationIcon: t, applicationName: n, canNavigate: u, guildId: m } = e,
        { results: g, query: x, setQuery: h, unfilteredCount: p } = (0, a._)();
    return null != g && p > 0
        ? (0, i.jsx)(o.A, {
              bar: (0, i.jsx)(s.IWV, { size: "sm", query: x, onChange: h, onClear: () => h("") }),
              inModal: !1,
              title: d.intl.string(d.t["0hKkS+"]),
              children: g.map((e, a) =>
                  (0, i.jsxs)(
                      l.Fragment,
                      {
                          children: [
                              (0, i.jsx)(r.A, {
                                  applicationIcon: t,
                                  applicationName: n,
                                  canNavigate: u,
                                  command: e,
                                  guildId: m,
                              }),
                              a < g.length - 1 ? (0, i.jsx)(s.cGx, {}) : null,
                          ],
                      },
                      e.id,
                  ),
              ),
          })
        : (0, i.jsx)(s.ZpM, {
              className: c.a,
              editable: !0,
              children: (0, i.jsx)(s.Text, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: d.intl.string(d.t["x78c+J"]),
              }),
          });
}
