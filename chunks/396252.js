n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    l = n(481060),
    s = n(385499),
    c = n(430824),
    d = n(739566),
    u = n(464891),
    p = n(83561),
    m = n(834129),
    f = n(674563),
    h = n(388032),
    g = n(39684);
function _(e) {
    var t;
    let { message: n, compact: i, usernameHook: _, channel: b } = e,
        v = (0, o.e7)([c.Z], () => c.Z.getGuild(b.guild_id)),
        y = (0, d.ZP)(n),
        x = _(y),
        {
            avatarSrc: O,
            eventHandlers: { onMouseEnter: E, onMouseLeave: j }
        } = (0, p.m)(!0);
    return (0, r.jsx)('div', {
        onMouseEnter: E,
        onMouseLeave: j,
        children: (0, r.jsx)(m.Z, {
            className: a()(g.mainContainer, { [g.compact]: i }),
            iconNode: i ? null : (0, r.jsx)(p.S, { src: O }),
            iconContainerClassName: g.iconContainer,
            compact: i,
            children: (0, r.jsxs)('div', {
                className: a()(g.content, { [g.compact]: i }),
                children: [
                    (0, r.jsx)(u.nD, {
                        message: n,
                        messageClassname: g.spanCorrection,
                        className: a()(g.usernameContainer, g.spanCorrection, { [g.compact]: i }),
                        username: (0, r.jsxs)('div', {
                            className: g.spanCorrection,
                            children: [
                                (0, r.jsx)(l.Text, {
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
                            usernameHook: x,
                            guildName: null !== (t = null == v ? void 0 : v.name) && void 0 !== t ? t : ''
                        })
                    })
                ]
            })
        })
    });
}
