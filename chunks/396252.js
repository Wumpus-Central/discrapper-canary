n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(385499),
    c = n(430824),
    u = n(739566),
    d = n(464891),
    f = n(83561),
    p = n(834129),
    _ = n(674563),
    m = n(388032),
    h = n(682392);
function g(e) {
    var t;
    let { message: n, compact: i, usernameHook: g, channel: E } = e,
        b = (0, o.e7)([c.Z], () => c.Z.getGuild(E.guild_id)),
        y = (0, u.ZP)(n),
        O = g(y),
        {
            avatarSrc: v,
            eventHandlers: { onMouseEnter: S, onMouseLeave: I },
        } = (0, f.m)(!0);
    return (0, r.jsx)("div", {
        onMouseEnter: S,
        onMouseLeave: I,
        children: (0, r.jsx)(p.Z, {
            className: a()(h.mainContainer, { [h.compact]: i }),
            iconNode: i ? null : (0, r.jsx)(f.S, { src: v }),
            iconContainerClassName: h.iconContainer,
            compact: i,
            children: (0, r.jsxs)("div", {
                className: a()(h.content, { [h.compact]: i }),
                children: [
                    (0, r.jsx)(d.nD, {
                        message: n,
                        messageClassname: h.spanCorrection,
                        className: a()(h.usernameContainer, h.spanCorrection, { [h.compact]: i }),
                        username: (0, r.jsxs)("div", {
                            className: h.spanCorrection,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: h.username,
                                    children: m.intl.string(m.t.hG1StD),
                                }),
                                (0, r.jsx)(l.Z, {
                                    type: _.Hb.SYSTEM_DM,
                                    className: h.systemTag,
                                }),
                            ],
                        }),
                        compact: i,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: a()(h.__invalid_messageContent, { [h.compact]: i }),
                        children: m.intl.format(m.t.W0UBI3, {
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
