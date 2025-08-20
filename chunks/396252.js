n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    a = n(481060),
    s = n(385499),
    c = n(430824),
    u = n(739566),
    d = n(464891),
    p = n(83561),
    m = n(834129),
    f = n(674563),
    g = n(388032),
    _ = n(682392);
function h(e) {
    var t;
    let { message: n, compact: i, usernameHook: h, channel: b } = e,
        E = (0, o.e7)([c.Z], () => c.Z.getGuild(b.guild_id)),
        C = (0, u.ZP)(n),
        v = h(C),
        {
            avatarSrc: O,
            eventHandlers: { onMouseEnter: y, onMouseLeave: x },
        } = (0, p.m)(!0);
    return (0, r.jsx)("div", {
        onMouseEnter: y,
        onMouseLeave: x,
        children: (0, r.jsx)(m.Z, {
            className: l()(_.mainContainer, { [_.compact]: i }),
            iconNode: i ? null : (0, r.jsx)(p.S, { src: O }),
            iconContainerClassName: _.iconContainer,
            compact: i,
            children: (0, r.jsxs)("div", {
                className: l()(_.content, { [_.compact]: i }),
                children: [
                    (0, r.jsx)(d.nD, {
                        message: n,
                        messageClassname: _.spanCorrection,
                        className: l()(_.usernameContainer, _.spanCorrection, { [_.compact]: i }),
                        username: (0, r.jsxs)("div", {
                            className: _.spanCorrection,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: _.username,
                                    children: g.intl.string(g.t.hG1StL),
                                }),
                                (0, r.jsx)(s.Z, {
                                    type: f.Hb.SYSTEM_DM,
                                    className: _.systemTag,
                                }),
                            ],
                        }),
                        compact: i,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: l()(_.__invalid_messageContent, { [_.compact]: i }),
                        children: g.intl.format(g.t.W0UBIy, {
                            username: C.nick,
                            usernameHook: v,
                            guildName: null != (t = null == E ? void 0 : E.name) ? t : "",
                        }),
                    }),
                ],
            }),
        }),
    });
}
