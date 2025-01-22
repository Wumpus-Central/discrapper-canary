r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(149765),
    s = r(178940),
    l = r(993365),
    u = r(481060),
    c = r(422559),
    d = r(388032),
    f = r(355662);
function p(e) {
    let { application: n, permissions: r, deniedPermissions: p, onPermissionsChange: h, guild: _ } = e,
        m = a.useMemo(() => o.U_(_.permissions), [_.permissions]);
    a.useEffect(() => {
        h(!1, o.hX(r, m));
    }, [m, h, r]);
    let g = c.VY.filter((e) => o.e$(r, e)),
        E = g
            .filter((e) => !o.e$(m, e))
            .map((e) => {
                let n = (0, c.wt)(e),
                    r = !o.e$(p, e);
                return (0, i.jsx)(
                    'li',
                    {
                        className: f.permission,
                        children: (0, i.jsx)(s.X, {
                            value: r,
                            onChange: (n, r) => h(r, e),
                            type: s.X.Types.INVERTED,
                            children: (0, i.jsx)(l.x, {
                                variant: 'text-md/normal',
                                children: n
                            })
                        })
                    },
                    String(e)
                );
            }),
        v = g
            .filter((e) => o.e$(m, e))
            .map((e) => {
                let n = (0, c.wt)(e);
                return (0, i.jsxs)(
                    'li',
                    {
                        className: f.permission,
                        children: [
                            (0, i.jsx)('div', {
                                className: f.disabledPermissionIcon,
                                children: (0, i.jsx)(u.XSmallIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: f.icon
                                })
                            }),
                            (0, i.jsx)(l.x, {
                                variant: 'text-md/normal',
                                children: n
                            })
                        ]
                    },
                    String(e)
                );
            });
    return (0, i.jsxs)('div', {
        className: f.botPermissions,
        children: [
            E.length > 0
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(l.x, {
                              variant: 'text-sm/medium',
                              color: 'header-secondary',
                              children: d.intl.format(d.t.sOaT2t, {
                                  applicationName: n.name,
                                  guildName: _.name
                              })
                          }),
                          (0, i.jsx)('ul', {
                              className: f.permissionsList,
                              children: E
                          })
                      ]
                  })
                : null,
            v.length > 0
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(l.x, {
                              variant: 'text-sm/medium',
                              color: 'header-secondary',
                              children: d.intl.format(d.t.fsOkFx, { applicationName: n.name })
                          }),
                          (0, i.jsx)('ul', {
                              className: f.permissionsList,
                              children: v
                          })
                      ]
                  })
                : null
        ]
    });
}
