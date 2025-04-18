t.d(n, { Z: () => x });
var r = t(200651);
t(192379);
var o = t(793030),
    i = t(442837),
    s = t(481060),
    a = t(834129),
    l = t(271383),
    c = t(709054),
    d = t(884902),
    u = t(696672),
    p = t(388032),
    m = t(506546);
function x(e) {
    let { boost: n } = e,
        t = new Date(c.default.extractTimestamp(n.id)),
        {
            username: x,
            roleColor: _,
            roleColorStrings: v
        } = (0, i.cj)(
            [l.ZP],
            () => {
                var e, t;
                let r = l.ZP.getMember(n.guildId, n.userId);
                return {
                    username: null != (t = l.ZP.getNick(n.guildId, n.userId)) ? t : null == (e = n.user) ? void 0 : e.username,
                    roleColor: null == r ? void 0 : r.colorString,
                    roleColorStrings: null == r ? void 0 : r.colorStrings
                };
            },
            [n]
        ),
        f = (0, d.X)(n.guildId, v);
    return (0, r.jsx)(a.Z, {
        className: m.systemMessageContainer,
        contentClassName: m.systemMessageContent,
        iconNode: (0, r.jsx)(s.$Eu, {
            className: m.icon,
            color: 'currentColor',
            size: 'sm'
        }),
        iconContainerClassName: m.iconContainer,
        timestampClassName: m.timestamp,
        timestamp: t,
        timestampFormat: 'L',
        compact: !0,
        children: (0, r.jsxs)('span', {
            className: m.boostMessage,
            children: [
                (0, r.jsx)(s.PUh, {
                    className: m.boostMessageUser,
                    name: (0, r.jsx)(o.xv, {
                        color: 'currentColor',
                        variant: 'text-md/semibold',
                        lineClamp: 1,
                        children: x
                    }),
                    color: null != _ ? _ : void 0,
                    roleColors: f
                }),
                (0, r.jsx)(o.xv, {
                    variant: 'text-md/medium',
                    lineClamp: 1,
                    children: p.NW.string(u.Z.plwH8f)
                })
            ]
        })
    });
}
