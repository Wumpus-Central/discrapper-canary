n.d(t, { Z: () => u });
var i = n(54381),
    r = n(473749),
    l = n(28664),
    a = n(481060),
    o = n(239091),
    s = n(285173),
    c = n(388032),
    d = n(281773);
function u(e) {
    var t;
    let { roles: u, guildId: m } = e,
        b = null != (t = u[0]) ? t : null,
        p = u.length - 1,
        g = r.useMemo(() => new Intl.NumberFormat(c.intl.currentLocale).format(p), [p]),
        f = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, o.jW)(e, async () => {
                        let { default: e } = await n.e("98314").then(n.bind(n, 229051));
                        return () => (0, i.jsx)(e, { roles: u });
                    });
            },
            [u],
        );
    return 0 === u.length
        ? null
        : (0, i.jsxs)("div", {
              className: d.roleContainer,
              children: [
                  null != b &&
                      (0, i.jsx)(s.Z, {
                          className: d.firstRole,
                          role: b,
                          guildId: m,
                      }),
                  p > 0 &&
                      (0, i.jsx)(a.P3F, {
                          className: d.otherRoles,
                          onClick: f,
                          children: (0, i.jsx)(l.u, {
                              text: c.intl.string(c.t.DY6n4q),
                              children: (0, i.jsxs)(a.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: ["+", g],
                              }),
                          }),
                      }),
              ],
          });
}
