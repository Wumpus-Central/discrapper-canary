n.d(t, { Z: () => _ });
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
    h = n(126759);
function _(e) {
    var t;
    let { message: n, compact: i, usernameHook: _, channel: b } = e,
        E = (0, a.e7)([c.Z], () => c.Z.getGuild(b.guild_id)),
        x = (0, u.ZP)(n),
        C = _(x),
        {
            avatarSrc: v,
            eventHandlers: { onMouseEnter: y, onMouseLeave: O }
        } = (0, p.m)(!0);
    return (0, r.jsx)('div', {
        onMouseEnter: y,
        onMouseLeave: O,
        children: (0, r.jsx)(m.Z, {
            className: l()(h.mainContainer, { [h.compact]: i }),
            iconNode: i ? null : (0, r.jsx)(p.S, { src: v }),
            iconContainerClassName: h.iconContainer,
            compact: i,
            children: (0, r.jsxs)('div', {
                className: l()(h.content, { [h.compact]: i }),
                children: [
                    (0, r.jsx)(d.nD, {
                        message: n,
                        messageClassname: h.spanCorrection,
                        className: l()(h.usernameContainer, h.spanCorrection, { [h.compact]: i }),
                        username: (0, r.jsxs)('div', {
                            className: h.spanCorrection,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: h.username,
                                    children: g.intl.string(g.t.hG1StL)
                                }),
                                (0, r.jsx)(s.Z, {
                                    type: f.Hb.SYSTEM_DM,
                                    className: h.systemTag
                                })
                            ]
                        }),
                        compact: i,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', {
                        className: l()(h.__invalid_messageContent, { [h.compact]: i }),
                        children: g.intl.format(g.t.W0UBIy, {
                            username: x.nick,
                            usernameHook: C,
                            guildName: null != (t = null == E ? void 0 : E.name) ? t : ''
                        })
                    })
                ]
            })
        })
    });
}
