n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    a = n(149765),
    o = n(993365),
    s = n(481060),
    l = n(422559),
    c = n(388032),
    u = n(463442);
function d(e) {
    let { application: t, permissions: n, deniedPermissions: d, onPermissionsChange: f, guild: p } = e,
        _ = i.useMemo(() => a.U_(p.permissions), [p.permissions]);
    i.useEffect(() => {
        f(!1, a.hX(n, _));
    }, [_, f, n]);
    let m = l.VY.filter((e) => a.e$(n, e)),
        h = m
            .filter((e) => !a.e$(_, e))
            .map((e) => {
                let t = (0, l.wt)(e),
                    n = !a.e$(d, e);
                return (0, r.jsx)(
                    "li",
                    {
                        className: u.permission,
                        children: (0, r.jsx)(s.Checkbox, {
                            checked: n,
                            onChange: (t) => f(t, e),
                            label: t,
                        }),
                    },
                    String(e),
                );
            }),
        g = m
            .filter((e) => a.e$(_, e))
            .map((e) => {
                let t = (0, l.wt)(e);
                return (0, r.jsxs)(
                    "li",
                    {
                        className: u.permission,
                        children: [
                            (0, r.jsx)("div", {
                                className: u.disabledPermissionIcon,
                                children: (0, r.jsx)(s.Dio, {
                                    size: "md",
                                    color: "currentColor",
                                    className: u.icon,
                                }),
                            }),
                            (0, r.jsx)(o.x, {
                                variant: "text-md/normal",
                                children: t,
                            }),
                        ],
                    },
                    String(e),
                );
            });
    return (0, r.jsxs)("div", {
        className: u.botPermissions,
        children: [
            h.length > 0
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(o.x, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: c.intl.format(c.t.sOaT2j, {
                                  applicationName: t.name,
                                  guildName: p.name,
                              }),
                          }),
                          (0, r.jsx)("ul", {
                              className: u.permissionsList,
                              children: h,
                          }),
                      ],
                  })
                : null,
            g.length > 0
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(o.x, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: c.intl.format(c.t.fsOkF4, { applicationName: t.name }),
                          }),
                          (0, r.jsx)("ul", {
                              className: u.permissionsList,
                              children: g,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
