n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(253929),
    s = n(948040),
    o = n(636547),
    c = n(985018),
    d = n(388568);
function u(e) {
    let { applicationIcon: t, applicationName: n, canNavigate: u, guildId: b } = e,
        { results: f, query: p, setQuery: m, unfilteredCount: g } = (0, a._)();
    return null != f && g > 0
        ? (0, i.jsx)(o.A, {
              bar: (0, i.jsx)(l.IWV, {
                  size: "sm",
                  query: p,
                  onChange: m,
                  onClear: () => m(""),
              }),
              inModal: !1,
              title: c.intl.string(c.t["0hKkS+"]),
              children: f.map((e, a) =>
                  (0, i.jsxs)(
                      r.Fragment,
                      {
                          children: [
                              (0, i.jsx)(s.A, {
                                  applicationIcon: t,
                                  applicationName: n,
                                  canNavigate: u,
                                  command: e,
                                  guildId: b,
                              }),
                              a < f.length - 1 ? (0, i.jsx)(l.cGx, {}) : null,
                          ],
                      },
                      e.id,
                  ),
              ),
          })
        : (0, i.jsx)(l.ZpM, {
              className: d.a,
              editable: !0,
              children: (0, i.jsx)(l.Text, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: c.intl.string(c.t["x78c+J"]),
              }),
          });
}
