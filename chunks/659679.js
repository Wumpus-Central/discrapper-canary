n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var o = n(793030),
    i = n(442837),
    l = n(481060),
    s = n(834129),
    a = n(271383),
    c = n(709054),
    u = n(884902),
    d = n(93841),
    m = n(388032),
    p = n(326319);
function f(e) {
    let { boost: t } = e,
        n = new Date(c.default.extractTimestamp(t.id)),
        {
            username: f,
            roleColor: _,
            roleColorStrings: x
        } = (0, i.cj)(
            [a.ZP],
            () => {
                var e, n;
                let r = a.ZP.getMember(t.guildId, t.userId);
                return {
                    username: null != (n = a.ZP.getNick(t.guildId, t.userId)) ? n : null == (e = t.user) ? void 0 : e.username,
                    roleColor: null == r ? void 0 : r.colorString,
                    roleColorStrings: null == r ? void 0 : r.colorStrings
                };
            },
            [t]
        ),
        v = (0, u.X7)(t.guildId, t.userId, x);
    return (0, r.jsx)(s.Z, {
        className: p.systemMessageContainer,
        contentClassName: p.systemMessageContent,
        iconNode: (0, r.jsx)(l.$Eu, {
            className: p.icon,
            color: 'currentColor',
            size: 'sm'
        }),
        iconContainerClassName: p.iconContainer,
        timestampClassName: p.timestamp,
        timestamp: n,
        timestampFormat: 'L',
        compact: !0,
        children: (0, r.jsxs)('span', {
            className: p.boostMessage,
            children: [
                (0, r.jsx)(l.PUh, {
                    className: p.boostMessageUser,
                    variant: 'text-md/semibold',
                    name: f,
                    color: null != _ ? _ : void 0,
                    roleColors: v
                }),
                (0, r.jsx)(o.xv, {
                    variant: 'text-md/medium',
                    lineClamp: 1,
                    children: m.intl.string(d.default.plwH8f)
                })
            ]
        })
    });
}
