n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var o = n(793030),
    i = n(442837),
    s = n(481060),
    a = n(834129),
    l = n(271383),
    c = n(709054),
    u = n(884902),
    d = n(93841),
    p = n(388032),
    m = n(326319);
function _(e) {
    let { boost: t } = e,
        n = new Date(c.default.extractTimestamp(t.id)),
        {
            username: _,
            roleColor: f,
            roleColorStrings: x
        } = (0, i.cj)(
            [l.ZP],
            () => {
                var e, n;
                let r = l.ZP.getMember(t.guildId, t.userId);
                return {
                    username: null != (n = l.ZP.getNick(t.guildId, t.userId)) ? n : null == (e = t.user) ? void 0 : e.username,
                    roleColor: null == r ? void 0 : r.colorString,
                    roleColorStrings: null == r ? void 0 : r.colorStrings
                };
            },
            [t]
        ),
        v = (0, u.X7)(t.guildId, t.userId, x);
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
        timestamp: n,
        timestampFormat: 'L',
        compact: !0,
        children: (0, r.jsxs)('span', {
            className: m.boostMessage,
            children: [
                (0, r.jsx)(s.PUh, {
                    className: m.boostMessageUser,
                    variant: 'text-md/semibold',
                    name: _,
                    color: null != f ? f : void 0,
                    roleColors: v
                }),
                (0, r.jsx)(o.xv, {
                    variant: 'text-md/medium',
                    lineClamp: 1,
                    children: p.intl.string(d.default.plwH8f)
                })
            ]
        })
    });
}
