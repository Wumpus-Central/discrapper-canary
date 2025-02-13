n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    a = n(149765),
    s = n(178940),
    o = n(993365),
    l = n(481060),
    u = n(422559),
    c = n(388032),
    d = n(845896);
function f(e) {
    let { application: t, permissions: n, deniedPermissions: f, onPermissionsChange: _, guild: p } = e,
        h = r.useMemo(() => a.U_(p.permissions), [p.permissions]);
    r.useEffect(() => {
        _(!1, a.hX(n, h));
    }, [h, _, n]);
    let m = u.VY.filter((e) => a.e$(n, e)),
        g = m
            .filter((e) => !a.e$(h, e))
            .map((e) => {
                let t = (0, u.wt)(e),
                    n = !a.e$(f, e);
                return (0, i.jsx)(
                    'li',
                    {
                        className: d.permission,
                        children: (0, i.jsx)(s.X, {
                            value: n,
                            onChange: (t, n) => _(n, e),
                            type: s.X.Types.INVERTED,
                            children: (0, i.jsx)(o.x, {
                                variant: 'text-md/normal',
                                children: t
                            })
                        })
                    },
                    String(e)
                );
            }),
        E = m
            .filter((e) => a.e$(h, e))
            .map((e) => {
                let t = (0, u.wt)(e);
                return (0, i.jsxs)(
                    'li',
                    {
                        className: d.permission,
                        children: [
                            (0, i.jsx)('div', {
                                className: d.disabledPermissionIcon,
                                children: (0, i.jsx)(l.Dio, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: d.icon
                                })
                            }),
                            (0, i.jsx)(o.x, {
                                variant: 'text-md/normal',
                                children: t
                            })
                        ]
                    },
                    String(e)
                );
            });
    return (0, i.jsxs)('div', {
        className: d.botPermissions,
        children: [
            g.length > 0
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(o.x, {
                              variant: 'text-sm/medium',
                              color: 'header-secondary',
                              children: c.intl.format(c.t.sOaT2t, {
                                  applicationName: t.name,
                                  guildName: p.name
                              })
                          }),
                          (0, i.jsx)('ul', {
                              className: d.permissionsList,
                              children: g
                          })
                      ]
                  })
                : null,
            E.length > 0
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(o.x, {
                              variant: 'text-sm/medium',
                              color: 'header-secondary',
                              children: c.intl.format(c.t.fsOkFx, { applicationName: t.name })
                          }),
                          (0, i.jsx)('ul', {
                              className: d.permissionsList,
                              children: E
                          })
                      ]
                  })
                : null
        ]
    });
}
