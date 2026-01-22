n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(136722),
    s = n(571356),
    o = n(397927),
    l = n(376092),
    c = n(985018),
    u = n(967984);
function d(e) {
    let { application: t, permissions: n, deniedPermissions: d, onPermissionsChange: f, guild: p } = e,
        _ = i.useMemo(() => a.B8(p.permissions), [p.permissions]);
    i.useEffect(() => {
        f(!1, a.pb(n, _));
    }, [_, f, n]);
    let h = l.Q.filter((e) => a.zy(n, e)),
        m = h
            .filter((e) => !a.zy(_, e))
            .map((e) => {
                let t = (0, l.hx)(e),
                    n = !a.zy(d, e);
                return (0, r.jsx)(
                    "li",
                    {
                        className: u.EK,
                        children: (0, r.jsx)(o.Checkbox, {
                            checked: n,
                            onChange: (t) => f(t, e),
                            label: t,
                        }),
                    },
                    String(e),
                );
            }),
        g = h
            .filter((e) => a.zy(_, e))
            .map((e) => {
                let t = (0, l.hx)(e);
                return (0, r.jsxs)(
                    "li",
                    {
                        className: u.EK,
                        children: [
                            (0, r.jsx)("div", {
                                className: u.nW,
                                children: (0, r.jsx)(o.PGe, {
                                    size: "md",
                                    color: "currentColor",
                                    className: u.Kk,
                                }),
                            }),
                            (0, r.jsx)(s.E, {
                                variant: "text-md/normal",
                                children: t,
                            }),
                        ],
                    },
                    String(e),
                );
            });
    return (0, r.jsxs)("div", {
        className: u.AS,
        children: [
            m.length > 0
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(s.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: c.intl.format(c.t.sOaT2j, {
                                  applicationName: t.name,
                                  guildName: p.name,
                              }),
                          }),
                          (0, r.jsx)("ul", {
                              className: u.RH,
                              children: m,
                          }),
                      ],
                  })
                : null,
            g.length > 0
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(s.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: c.intl.format(c.t.fsOkF4, { applicationName: t.name }),
                          }),
                          (0, r.jsx)("ul", {
                              className: u.RH,
                              children: g,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
