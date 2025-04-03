n.d(t, { l: () => d }), n(266796);
var r = n(200651);
n(192379);
var i = n(793030),
    s = n(481060),
    a = n(578053),
    l = n(715224),
    o = n(388032),
    c = n(713811);
function d(e) {
    let { canManageGuild: t, guild: n } = e;
    return (0, r.jsxs)(s.hjN, {
        title: o.NW.string(o.t.Cv6ANz),
        children: [
            (0, r.jsx)(i.xv, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: c.description,
                children: o.NW.string(o.t.qxIcra)
            }),
            (0, r.jsx)(l.W, {
                canManageGuild: t,
                guild: n,
                switchClassName: c.switch
            }),
            (0, r.jsxs)('div', {
                className: c.systemChannel,
                children: [
                    (0, r.jsxs)('div', {
                        className: c.halfWidth,
                        children: [
                            (0, r.jsx)(s.vwX, { children: o.NW.string(o.t.NASFnp) }),
                            (0, r.jsx)(i.xv, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: o.NW.string(o.t.ZhOdpa)
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: c.halfWidth,
                        children: (0, r.jsx)(a.u, {
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
