n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(442837),
    o = n(481060),
    s = n(385499),
    c = n(430824),
    u = n(739566),
    d = n(464891),
    p = n(83561),
    m = n(834129),
    f = n(674563),
    h = n(388032),
    g = n(126759);
function _(e) {
    var t;
    let { message: n, compact: i, usernameHook: _, channel: b } = e,
        x = (0, l.e7)([c.Z], () => c.Z.getGuild(b.guild_id)),
        y = (0, u.ZP)(n),
        E = _(y),
        {
            avatarSrc: v,
            eventHandlers: { onMouseEnter: O, onMouseLeave: N }
        } = (0, p.m)(!0);
    return (0, r.jsx)('div', {
        onMouseEnter: O,
        onMouseLeave: N,
        children: (0, r.jsx)(m.Z, {
            className: a()(g.mainContainer, { [g.compact]: i }),
            iconNode: i ? null : (0, r.jsx)(p.S, { src: v }),
            iconContainerClassName: g.iconContainer,
            compact: i,
            children: (0, r.jsxs)('div', {
                className: a()(g.content, { [g.compact]: i }),
                children: [
                    (0, r.jsx)(d.nD, {
                        message: n,
                        messageClassname: g.spanCorrection,
                        className: a()(g.usernameContainer, g.spanCorrection, { [g.compact]: i }),
                        username: (0, r.jsxs)('div', {
                            className: g.spanCorrection,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: g.username,
                                    children: h.NW.string(h.t.hG1StL)
                                }),
                                (0, r.jsx)(s.Z, {
                                    type: f.Hb.SYSTEM_DM,
                                    className: g.systemTag
                                })
                            ]
                        }),
                        compact: i,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', {
                        className: a()(g.__invalid_messageContent, { [g.compact]: i }),
                        children: h.NW.format(h.t.W0UBIy, {
                            username: y.nick,
                            usernameHook: E,
                            guildName: null != (t = null == x ? void 0 : x.name) ? t : ''
                        })
                    })
                ]
            })
        })
    });
}
