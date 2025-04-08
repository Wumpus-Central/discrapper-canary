t.d(n, { Z: () => x });
var r = t(200651);
t(192379);
var o = t(793030),
    s = t(442837),
    i = t(481060),
    a = t(834129),
    l = t(271383),
    c = t(709054),
    u = t(884902),
    d = t(680278),
    m = t(388032),
    p = t(326319);
function x(e) {
    let { boost: n } = e,
        t = new Date(c.default.extractTimestamp(n.id)),
        {
            username: x,
            roleColor: _,
            roleColorStrings: v
        } = (0, s.cj)(
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
        g = (0, u.E)(n.guildId, v);
    return (0, r.jsx)(a.Z, {
        className: p.systemMessageContainer,
        contentClassName: p.systemMessageContent,
        iconNode: (0, r.jsx)(i.$Eu, {
            className: p.icon,
            color: 'currentColor',
            size: 'sm'
        }),
        iconContainerClassName: p.iconContainer,
        timestampClassName: p.timestamp,
        timestamp: t,
        timestampFormat: 'L',
        compact: !0,
        children: (0, r.jsxs)('span', {
            className: p.boostMessage,
            children: [
                (0, r.jsx)(i.PUh, {
                    className: p.boostMessageUser,
                    name: (0, r.jsx)(o.xv, {
                        color: 'currentColor',
                        variant: 'text-md/semibold',
                        lineClamp: 1,
                        children: x
                    }),
                    color: null != _ ? _ : void 0,
                    roleGradient: g
                }),
                (0, r.jsx)(o.xv, {
                    variant: 'text-md/medium',
                    lineClamp: 1,
                    children: m.NW.string(d.Z.plwH8f)
                })
            ]
        })
    });
}
