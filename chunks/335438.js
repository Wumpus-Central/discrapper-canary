n.d(t, { l: () => u }), n(953529);
var r = n(200651);
n(192379);
var i = n(793030),
    l = n(481060),
    s = n(578053),
    a = n(715224),
    o = n(388032),
    c = n(713811);
function u(e) {
    let { canManageGuild: t, guild: n } = e;
    return (0, r.jsxs)(l.hjN, {
        title: o.intl.string(o.t.Cv6ANz),
        children: [
            (0, r.jsx)(i.xv, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: c.description,
                children: o.intl.string(o.t.qxIcra)
            }),
            (0, r.jsx)(a.W, {
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
                            (0, r.jsx)(l.vwX, { children: o.intl.string(o.t.NASFnp) }),
                            (0, r.jsx)(i.xv, {
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                children: o.intl.string(o.t.ZhOdpa)
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: c.halfWidth,
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
