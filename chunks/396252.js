n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    s = n(385499),
    c = n(430824),
    d = n(739566),
    u = n(464891),
    m = n(83561),
    h = n(834129),
    f = n(674563),
    p = n(388032),
    _ = n(403498);
function g(e) {
    var t;
    let { message: n, compact: r, usernameHook: g, channel: E } = e,
        C = (0, a.e7)([c.Z], () => c.Z.getGuild(E.guild_id)),
        I = (0, d.ZP)(n),
        x = g(I),
        {
            avatarSrc: N,
            eventHandlers: { onMouseEnter: v, onMouseLeave: T }
        } = (0, m.m)(!0);
    return (0, i.jsx)('div', {
        onMouseEnter: v,
        onMouseLeave: T,
        children: (0, i.jsx)(h.Z, {
            className: l()(_.mainContainer, { [_.compact]: r }),
            iconNode: r ? null : (0, i.jsx)(m.S, { src: N }),
            iconContainerClassName: _.iconContainer,
            compact: r,
            children: (0, i.jsxs)('div', {
                className: l()(_.content, { [_.compact]: r }),
                children: [
                    (0, i.jsx)(u.nD, {
                        message: n,
                        messageClassname: _.spanCorrection,
                        className: l()(_.usernameContainer, _.spanCorrection, { [_.compact]: r }),
                        username: (0, i.jsxs)('div', {
                            className: _.spanCorrection,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: _.username,
                                    children: p.intl.string(p.t.hG1StL)
                                }),
                                (0, i.jsx)(s.Z, {
                                    type: f.Hb.SYSTEM_DM,
                                    className: _.systemTag
                                })
                            ]
                        }),
                        compact: r,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: l()(_.__invalid_messageContent, { [_.compact]: r }),
                        children: p.intl.format(p.t.W0UBIy, {
                            username: I.nick,
                            usernameHook: x,
                            guildName: null !== (t = null == C ? void 0 : C.name) && void 0 !== t ? t : ''
                        })
                    })
                ]
            })
        })
    });
}
