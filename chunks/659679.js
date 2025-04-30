t.d(n, { Z: () => x });
var r = t(200651);
t(192379);
var i = t(793030),
    o = t(442837),
    s = t(481060),
    a = t(834129),
    l = t(271383),
    c = t(709054),
    u = t(884902),
    d = t(680278),
    p = t(388032),
    m = t(326319);
function x(e) {
    let { boost: n } = e,
        t = new Date(c.default.extractTimestamp(n.id)),
        {
            username: x,
            roleColor: _,
            roleColorStrings: f
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
        v = (0, u.X)(n.guildId, f);
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
                    name: (0, r.jsx)(i.xv, {
                        color: 'currentColor',
                        variant: 'text-md/semibold',
                        lineClamp: 1,
                        children: x
                    }),
                    color: null != _ ? _ : void 0,
                    roleColors: v
                }),
                (0, r.jsx)(i.xv, {
                    variant: 'text-md/medium',
                    lineClamp: 1,
                    children: p.intl.string(d.default.plwH8f)
                })
            ]
        })
    });
}
