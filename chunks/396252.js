n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(385499),
    c = n(430824),
    d = n(739566),
    u = n(464891),
    m = n(83561),
    _ = n(834129),
    h = n(674563),
    p = n(388032),
    g = n(783711);
function f(e) {
    var t;
    let { message: n, compact: l, usernameHook: f, channel: x } = e,
        C = (0, r.e7)([c.Z], () => c.Z.getGuild(x.guild_id)),
        E = (0, d.ZP)(n),
        v = f(E),
        {
            avatarSrc: I,
            eventHandlers: { onMouseEnter: N, onMouseLeave: S }
        } = (0, m.m)(!0);
    return (0, i.jsx)('div', {
        onMouseEnter: N,
        onMouseLeave: S,
        children: (0, i.jsx)(_.Z, {
            className: a()(g.mainContainer, { [g.compact]: l }),
            iconNode: l ? null : (0, i.jsx)(m.S, { src: I }),
            iconContainerClassName: g.iconContainer,
            compact: l,
            children: (0, i.jsxs)('div', {
                className: a()(g.content, { [g.compact]: l }),
                children: [
                    (0, i.jsx)(u.nD, {
                        message: n,
                        messageClassname: g.spanCorrection,
                        className: a()(g.usernameContainer, g.spanCorrection, { [g.compact]: l }),
                        username: (0, i.jsxs)('div', {
                            className: g.spanCorrection,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: g.username,
                                    children: p.intl.string(p.t.hG1StL)
                                }),
                                (0, i.jsx)(o.Z, {
                                    type: h.Hb.SYSTEM_DM,
                                    className: g.systemTag
                                })
                            ]
                        }),
                        compact: l,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: a()(g.__invalid_messageContent, { [g.compact]: l }),
                        children: p.intl.format(p.t.W0UBIy, {
                            username: E.nick,
                            usernameHook: v,
                            guildName: null !== (t = null == C ? void 0 : C.name) && void 0 !== t ? t : ''
                        })
                    })
                ]
            })
        })
    });
}
