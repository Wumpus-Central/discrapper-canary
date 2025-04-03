t.d(n, { Z: () => x });
var r = t(200651);
t(192379);
var o = t(793030),
    i = t(442837),
    s = t(481060),
    a = t(834129),
    l = t(271383),
    c = t(709586),
    d = t(709054),
    u = t(680278),
    p = t(388032),
    m = t(326319);
function x(e) {
    let { boost: n } = e,
        t = new Date(d.default.extractTimestamp(n.id)),
        { username: x, roleColor: _ } = (0, i.cj)(
            [l.ZP],
            () => {
                var e, t, r;
                return {
                    username: null != (r = l.ZP.getNick(n.guildId, n.userId)) ? r : null == (e = n.user) ? void 0 : e.username,
                    roleColor: null == (t = l.ZP.getMember(n.guildId, n.userId)) ? void 0 : t.colorString
                };
            },
            [n]
        );
    return (0, r.jsx)(a.Z, {
        className: m.systemMessageContainer,
        contentClassName: m.systemMessageContent,
        iconNode: (0, r.jsx)(c.Z, {
            className: m.icon,
            width: 16,
            height: 16
        }),
        iconContainerClassName: m.iconContainer,
        timestampClassName: m.timestamp,
        timestamp: t,
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
                    color: null != _ ? _ : void 0
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
