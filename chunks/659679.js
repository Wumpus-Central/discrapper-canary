t.d(n, { Z: () => _ });
var r = t(200651);
t(192379);
var o = t(793030),
    i = t(442837),
    s = t(481060),
    a = t(834129),
    l = t(271383),
    c = t(709586),
    d = t(709054),
    u = t(884902),
    m = t(680278),
    p = t(388032),
    x = t(326319);
function _(e) {
    let { boost: n } = e,
        t = new Date(d.default.extractTimestamp(n.id)),
        {
            username: _,
            roleColor: v,
            roleColorStrings: g
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
        f = (0, u.E)(n.guildId, g);
    return (0, r.jsx)(a.Z, {
        className: x.systemMessageContainer,
        contentClassName: x.systemMessageContent,
        iconNode: (0, r.jsx)(c.Z, {
            className: x.icon,
            width: 16,
            height: 16
        }),
        iconContainerClassName: x.iconContainer,
        timestampClassName: x.timestamp,
        timestamp: t,
        timestampFormat: 'L',
        compact: !0,
        children: (0, r.jsxs)('span', {
            className: x.boostMessage,
            children: [
                (0, r.jsx)(s.PUh, {
                    className: x.boostMessageUser,
                    name: (0, r.jsx)(o.xv, {
                        color: 'currentColor',
                        variant: 'text-md/semibold',
                        lineClamp: 1,
                        children: _
                    }),
                    color: null != v ? v : void 0,
                    roleGradient: f
                }),
                (0, r.jsx)(o.xv, {
                    variant: 'text-md/medium',
                    lineClamp: 1,
                    children: p.NW.string(m.Z.plwH8f)
                })
            ]
        })
    });
}
