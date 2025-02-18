n.d(t, { l: () => c });
var i = n(200651);
n(192379);
var r = n(793030),
    l = n(578053),
    s = n(715224),
    a = n(388032),
    o = n(25136);
function c(e) {
    let { canManageGuild: t, guild: n } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(r.X6, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: o.subtitle,
                children: a.intl.string(a.t.Cv6ANz)
            }),
            (0, i.jsx)(s.W, {
                canManageGuild: t,
                guild: n,
                switchClassName: o.switch
            }),
            (0, i.jsxs)('div', {
                className: o.systemChannel,
                children: [
                    (0, i.jsxs)('div', {
                        className: o.halfWidth,
                        children: [
                            (0, i.jsx)(r.X6, {
                                variant: 'text-xs/bold',
                                color: 'text-muted',
                                className: o.subtitle,
                                children: a.intl.string(a.t.NASFnp)
                            }),
                            (0, i.jsx)(r.xv, {
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: a.intl.string(a.t.BT9zR0)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: o.halfWidth,
                        children: (0, i.jsx)(l.u, {
                            canManageGuild: t,
                            guildId: n.id,
                            systemChannelId: n.systemChannelId
                        })
                    })
                ]
            })
        ]
    });
}
