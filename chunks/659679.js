t.d(n, { Z: () => _ });
var r = t(255367);
t(73800);
var i = t(793030),
    o = t(442837),
    a = t(481060),
    s = t(834129),
    l = t(271383),
    c = t(709054),
    d = t(884902),
    u = t(93841),
    p = t(388032),
    m = t(326319);
function _(e) {
    let { boost: n } = e,
        t = new Date(c.default.extractTimestamp(n.id)),
        {
            username: _,
            roleColor: f,
            roleColorStrings: x
        } = (0, o.cj)(
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
        b = (0, d.X7)(n.guildId, n.userId, x);
    return (0, r.jsx)(s.Z, {
        className: m.systemMessageContainer,
        contentClassName: m.systemMessageContent,
        iconNode: (0, r.jsx)(a.$Eu, {
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
                (0, r.jsx)(a.PUh, {
                    className: m.boostMessageUser,
                    variant: 'text-md/semibold',
                    name: _,
                    color: null != f ? f : void 0,
                    roleColors: b
                }),
                (0, r.jsx)(i.xv, {
                    variant: 'text-md/medium',
                    lineClamp: 1,
                    children: p.intl.string(u.default.plwH8f)
                })
            ]
        })
    });
}
