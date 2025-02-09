n.d(t, { Z: () => u });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(239091),
    s = n(911969),
    o = n(399860),
    d = n(388032),
    c = n(887375);
function u(e) {
    let { applicationIcon: t, applicationName: u, canNavigate: m, command: h, guildId: x } = e,
        g = l.useMemo(() => {
            var e;
            return 0 !== Object.keys(null !== (e = h.permissions) && void 0 !== e ? e : {}).length;
        }, [h.permissions]),
        p = l.useCallback(() => {
            null != h &&
                m() &&
                (0, a.ZDy)(async () => {
                    let { default: e } = await n.e('78786').then(n.bind(n, 50474));
                    return (n) =>
                        (0, i.jsx)(e, {
                            applicationIcon: t,
                            applicationId: h.applicationId,
                            applicationName: u,
                            command: h,
                            guildId: x,
                            ...n
                        });
                });
        }, [t, u, m, h, x]),
        b = l.useCallback(
            (e) => {
                (0, r.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            id: h.id,
                            label: d.intl.string(d.t.oJ1Mu7)
                        });
                });
            },
            [h]
        ),
        _ = h.type === s.yU.CHAT ? a.SsZ : a.hH0,
        f = (0, o.gw)(h.type, h.displayName);
    return (0, i.jsxs)(a.P3F, {
        onClick: p,
        className: c.item,
        onContextMenu: b,
        children: [
            (0, i.jsxs)('div', {
                className: c.identifier,
                children: [
                    (0, i.jsx)(_, {
                        className: c.icon,
                        size: 'md',
                        color: 'currentColor'
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: f
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: c.statusContainer,
                children: g
                    ? (0, i.jsxs)('div', {
                          className: c.statusLine,
                          children: [
                              (0, i.jsx)(a.Text, {
                                  variant: 'text-md/normal',
                                  children: d.intl.string(d.t.jH4B9P)
                              }),
                              (0, i.jsx)(a.d3s, {
                                  size: 'sm',
                                  color: 'currentColor',
                                  className: c.statusIcon
                              })
                          ]
                      })
                    : null
            })
        ]
    });
}
