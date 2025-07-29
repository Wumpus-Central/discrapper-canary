n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    s = n(385499),
    c = n(430824),
    u = n(739566),
    d = n(464891),
    p = n(605568),
    m = n(834129),
    f = n(674563),
    g = n(388032),
    _ = n(126759);
function h(e) {
    var t;
    let { message: n, compact: i, usernameHook: h, channel: b } = e,
        E = (0, a.e7)([c.Z], () => c.Z.getGuild(b.guild_id)),
        C = (0, u.ZP)(n),
        x = h(C),
        {
            avatarSrc: v,
            eventHandlers: { onMouseEnter: O, onMouseLeave: y }
        } = (0, p.m)(!0);
    return (0, r.jsx)('div', {
        onMouseEnter: O,
        onMouseLeave: y,
        children: (0, r.jsx)(m.Z, {
            className: l()(_.mainContainer, { [_.compact]: i }),
            iconNode: i ? null : (0, r.jsx)(p.S, { src: v }),
            iconContainerClassName: _.iconContainer,
            compact: i,
            children: (0, r.jsxs)('div', {
                className: l()(_.content, { [_.compact]: i }),
                children: [
                    (0, r.jsx)(d.nD, {
                        message: n,
                        messageClassname: _.spanCorrection,
                        className: l()(_.usernameContainer, _.spanCorrection, { [_.compact]: i }),
                        username: (0, r.jsxs)('div', {
                            className: _.spanCorrection,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: _.username,
                                    children: g.intl.string(g.t.hG1StL)
                                }),
                                (0, r.jsx)(s.Z, {
                                    type: f.Hb.SYSTEM_DM,
                                    className: _.systemTag
                                })
                            ]
                        }),
                        compact: i,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', {
                        className: l()(_.__invalid_messageContent, { [_.compact]: i }),
                        children: g.intl.format(g.t.W0UBIy, {
                            username: C.nick,
                            usernameHook: x,
                            guildName: null != (t = null == E ? void 0 : E.name) ? t : ''
                        })
                    })
                ]
            })
        })
    });
}
