n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    o = n(149765),
    a = n(178940),
    s = n(993365),
    l = n(481060),
    c = n(422559),
    u = n(388032),
    d = n(527134);
function f(e) {
    let { application: t, permissions: n, deniedPermissions: f, onPermissionsChange: _, guild: p } = e,
        h = i.useMemo(() => o.U_(p.permissions), [p.permissions]);
    i.useEffect(() => {
        _(!1, o.hX(n, h));
    }, [h, _, n]);
    let m = c.VY.filter((e) => o.e$(n, e)),
        g = m
            .filter((e) => !o.e$(h, e))
            .map((e) => {
                let t = (0, c.wt)(e),
                    n = !o.e$(f, e);
                return (0, r.jsx)(
                    'li',
                    {
                        className: d.permission,
                        children: (0, r.jsx)(a.X, {
                            value: n,
                            onChange: (t, n) => _(n, e),
                            type: a.X.Types.INVERTED,
                            children: (0, r.jsx)(s.x, {
                                variant: 'text-md/normal',
                                children: t
                            })
                        })
                    },
                    String(e)
                );
            }),
        E = m
            .filter((e) => o.e$(h, e))
            .map((e) => {
                let t = (0, c.wt)(e);
                return (0, r.jsxs)(
                    'li',
                    {
                        className: d.permission,
                        children: [
                            (0, r.jsx)('div', {
                                className: d.disabledPermissionIcon,
                                children: (0, r.jsx)(l.Dio, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: d.icon
                                })
                            }),
                            (0, r.jsx)(s.x, {
                                variant: 'text-md/normal',
                                children: t
                            })
                        ]
                    },
                    String(e)
                );
            });
    return (0, r.jsxs)('div', {
        className: d.botPermissions,
        children: [
            g.length > 0
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(s.x, {
                              variant: 'text-sm/medium',
                              color: 'header-secondary',
                              children: u.NW.format(u.t.sOaT2t, {
                                  applicationName: t.name,
                                  guildName: p.name
                              })
                          }),
                          (0, r.jsx)('ul', {
                              className: d.permissionsList,
                              children: g
                          })
                      ]
                  })
                : null,
            E.length > 0
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(s.x, {
                              variant: 'text-sm/medium',
                              color: 'header-secondary',
                              children: u.NW.format(u.t.fsOkFx, { applicationName: t.name })
                          }),
                          (0, r.jsx)('ul', {
                              className: d.permissionsList,
                              children: E
                          })
                      ]
                  })
                : null
        ]
    });
}
