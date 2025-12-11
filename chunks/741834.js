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
    let { roles: u, guildId: b } = e,
        p = null != (t = u[0]) ? t : null,
        m = u.length - 1,
        f = r.useMemo(() => new Intl.NumberFormat(c.intl.currentLocale).format(m), [m]),
        g = r.useCallback(
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
                  null != p &&
                      (0, i.jsx)(s.Z, {
                          className: d.firstRole,
                          role: p,
                          guildId: b,
                      }),
                  m > 0 &&
                      (0, i.jsx)(a.P3F, {
                          className: d.otherRoles,
                          onClick: g,
                          children: (0, i.jsx)(l.u, {
                              text: c.intl.string(c.t.DY6n4q),
                              children: (0, i.jsxs)(a.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: ["+", f],
                              }),
                          }),
                      }),
              ],
          });
}
