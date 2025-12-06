n.d(t, { Z: () => u });
var i = n(54381),
    r = n(473749),
    l = n(28664),
    a = n(481060),
    o = n(239091),
    s = n(285173),
    c = n(388032),
    d = n(297132);
function u(e) {
    var t;
    let { roles: u, guildId: p } = e,
        m = null != (t = u[0]) ? t : null,
        b = u.length - 1,
        g = r.useMemo(() => new Intl.NumberFormat(c.intl.currentLocale).format(b), [b]),
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
                  null != m &&
                      (0, i.jsx)(s.Z, {
                          className: d.firstRole,
                          role: m,
                          guildId: p,
                      }),
                  b > 0 &&
                      (0, i.jsx)(a.P3F, {
                          className: d.otherRoles,
                          onClick: f,
                          children: (0, i.jsx)(l.u, {
                              text: c.intl.string(c.t.DY6n4q),
                              children: (0, i.jsxs)(a.Text, {
                                  variant: "text-xs/medium",
                                  color: "header-primary",
                                  children: ["+", g],
                              }),
                          }),
                      }),
              ],
          });
}
