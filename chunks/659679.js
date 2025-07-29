n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var o = n(793030),
    i = n(442837),
    l = n(481060),
    s = n(111028),
    a = n(834129),
    c = n(271383),
    u = n(709054),
    d = n(884902),
    p = n(93841),
    m = n(388032),
    f = n(326319);
function _(e) {
    let { boost: t } = e,
        n = new Date(u.default.extractTimestamp(t.id)),
        {
            username: _,
            roleColor: x,
            roleColorStrings: g
        } = (0, i.cj)(
            [c.ZP],
            () => {
                var e, n, r, o;
                let i = c.ZP.getMember(t.guildId, t.userId);
                return {
                    username: null != (n = c.ZP.getNick(t.guildId, t.userId)) ? n : null == (e = t.user) ? void 0 : e.username,
                    roleColor: null != (r = null == i ? void 0 : i.colorString) ? r : null,
                    roleColorStrings: null != (o = null == i ? void 0 : i.colorStrings) ? o : null
                };
            },
            [t]
        ),
        v = (0, d.X7)(t.guildId, t.userId, null != g ? g : null);
    return (0, r.jsx)(a.Z, {
        className: f.systemMessageContainer,
        contentClassName: f.systemMessageContent,
        iconNode: (0, r.jsx)(l.$Eu, {
            className: f.icon,
            color: 'currentColor',
            size: 'sm'
        }),
        iconContainerClassName: f.iconContainer,
        timestampClassName: f.timestamp,
        timestamp: n,
        timestampFormat: 'L',
        compact: !0,
        children: (0, r.jsxs)('span', {
            className: f.boostMessage,
            children: [
                (0, r.jsx)(l.PUh, {
                    className: f.boostMessageUser,
                    variant: 'text-md/semibold',
                    name: _,
                    colorString: null != x ? x : null,
                    colorStrings: v
                }),
                (0, r.jsx)(o.xv, {
                    variant: 'text-md/medium',
                    lineClamp: 1,
                    children: (0, r.jsx)(s.Z, { children: m.intl.string(p.default.plwH8f) })
                })
            ]
        })
    });
}
