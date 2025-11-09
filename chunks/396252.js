n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(385499),
    c = n(430824),
    u = n(739566),
    d = n(464891),
    f = n(83561),
    _ = n(834129),
    p = n(674563),
    h = n(388032),
    m = n(78642);
function g(e) {
    var t;
    let { message: n, compact: i, usernameHook: g, channel: E } = e,
        b = (0, o.e7)([c.Z], () => c.Z.getGuild(E.guild_id)),
        y = (0, u.ZP)(n),
        O = g(y),
        {
            avatarSrc: v,
            eventHandlers: { onMouseEnter: I, onMouseLeave: S },
        } = (0, f.m)(!0);
    return (0, r.jsx)("div", {
        onMouseEnter: I,
        onMouseLeave: S,
        children: (0, r.jsx)(_.Z, {
            className: a()(m.mainContainer, { [m.compact]: i }),
            iconNode: i ? null : (0, r.jsx)(f.S, { src: v }),
            iconContainerClassName: m.iconContainer,
            compact: i,
            children: (0, r.jsxs)("div", {
                className: a()(m.content, { [m.compact]: i }),
                children: [
                    (0, r.jsx)(d.nD, {
                        message: n,
                        messageClassname: m.spanCorrection,
                        className: a()(m.usernameContainer, m.spanCorrection, { [m.compact]: i }),
                        username: (0, r.jsxs)("div", {
                            className: m.spanCorrection,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: m.username,
                                    children: h.intl.string(h.t.hG1StD),
                                }),
                                (0, r.jsx)(l.Z, {
                                    type: p.Hb.SYSTEM_DM,
                                    className: m.systemTag,
                                }),
                            ],
                        }),
                        compact: i,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: a()(m.__invalid_messageContent, { [m.compact]: i }),
                        children: h.intl.format(h.t.W0UBI3, {
                            username: y.nick,
                            usernameHook: O,
                            guildName: null != (t = null == b ? void 0 : b.name) ? t : "",
                        }),
                    }),
                ],
            }),
        }),
    });
}
