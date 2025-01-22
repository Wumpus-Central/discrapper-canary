n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(239091),
    o = n(911969),
    s = n(399860),
    d = n(388032),
    c = n(19751);
function u(e) {
    let { applicationIcon: t, applicationName: u, canNavigate: m, command: h, guildId: p } = e,
        g = l.useMemo(() => {
            var e;
            return 0 !== Object.keys(null !== (e = h.permissions) && void 0 !== e ? e : {}).length;
        }, [h.permissions]),
        x = l.useCallback(() => {
            null != h &&
                m() &&
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e('78786').then(n.bind(n, 50474));
                    return (n) =>
                        (0, i.jsx)(e, {
                            applicationIcon: t,
                            applicationId: h.applicationId,
                            applicationName: u,
                            command: h,
                            guildId: p,
                            ...n
                        });
                });
        }, [t, u, m, h, p]),
        f = l.useCallback(
            (e) => {
                (0, a.jW)(e, async () => {
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
        v = h.type === o.yU.CHAT ? r.SlashBoxIcon : r.PaperIcon,
        b = (0, s.gw)(h.type, h.displayName);
    return (0, i.jsxs)(r.Clickable, {
        onClick: x,
        className: c.item,
        onContextMenu: f,
        children: [
            (0, i.jsxs)('div', {
                className: c.identifier,
                children: [
                    (0, i.jsx)(v, {
                        className: c.icon,
                        size: 'md',
                        color: 'currentColor'
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: b
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: c.statusContainer,
                children: g
                    ? (0, i.jsxs)('div', {
                          className: c.statusLine,
                          children: [
                              (0, i.jsx)(r.Text, {
                                  variant: 'text-md/normal',
                                  children: d.intl.string(d.t.jH4B9P)
                              }),
                              (0, i.jsx)(r.CircleInformationIcon, {
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
