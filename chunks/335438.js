n.d(t, { l: () => c });
var r = n(200651);
n(192379);
var i = n(793030),
    s = n(578053),
    a = n(715224),
    l = n(388032),
    o = n(962428);
function c(e) {
    let { canManageGuild: t, guild: n } = e;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(i.X6, {
                variant: 'text-xs/bold',
                color: 'interactive-normal',
                className: o.subtitle,
                children: l.NW.string(l.t.Cv6ANz)
            }),
            (0, r.jsx)(a.W, {
                canManageGuild: t,
                guild: n,
                switchClassName: o.switch
            }),
            (0, r.jsxs)('div', {
                className: o.systemChannel,
                children: [
                    (0, r.jsxs)('div', {
                        className: o.halfWidth,
                        children: [
                            (0, r.jsx)(i.X6, {
                                variant: 'text-xs/bold',
                                color: 'interactive-normal',
                                className: o.subtitle,
                                children: l.NW.string(l.t.NASFnp)
                            }),
                            (0, r.jsx)(i.xv, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: l.NW.string(l.t.BT9zR0)
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: o.halfWidth,
                        children: (0, r.jsx)(s.u, {
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
