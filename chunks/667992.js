"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(990078),
    o = n(397927),
    c = n(442433),
    d = n(717558),
    u = n(688810),
    h = n(480890),
    A = n(267102),
    p = n(342296),
    g = n(636585),
    m = n(486020),
    _ = n(787750);
function f(e) {
    let { channel: t, speaker: l, className: g } = e,
        f = s.useRef(null),
        { newestAnalyticsLocation: x } = (0, u.Ay)(),
        C = (0, A.Us)(),
        { reducedMotion: E } = s.useContext(o.CZY),
        I = (0, d.A)({ userId: l.id }),
        b = null != l.member ? (0, m.xT)(l.member) : null,
        N = (e) => {
            (0, c.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
                        n.e("84841"),
                        n.e("54266"),
                    ]).then(n.bind(n, 107632));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            user: l.user,
                            guildId: t.guild_id,
                            channel: t,
                            showMediaItems: !0,
                            showStageChannelItems: !0,
                            showChatItems: !1,
                            onInteraction: (0, h.s)("GuildChannelUserContextMenu", x),
                        });
                },
                { context: C },
            );
        };
    return (0, i.jsx)(p.A, {
        targetElementRef: f,
        user: l.user,
        guildId: t.guild_id,
        channelId: t.id,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(a.m, {
                targetElementRef: f,
                __unsupportedReactNodeAsText: l.userNick,
                position: "bottom",
                children: (0, i.jsx)(o.DUT, {
                    ...e,
                    innerRef: f,
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick(t);
                    },
                    onContextMenu: N,
                    children: (0, i.jsx)(o.euF, {
                        src: b ?? l.user.getAvatarURL(t.guild_id, 24),
                        size: o._3J.SIZE_24,
                        className: r()(_.my, g),
                        "aria-label": l.userNick,
                        isSpeaking: I && !E.enabled,
                    }),
                }),
            }),
    });
}
function x(e) {
    let { speakers: t, channel: n } = e;
    return (0, i.jsx)(g.A, {
        className: _.z,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, s) => (0, i.jsx)(f, { channel: n, speaker: e, className: t }, s),
        renderMoreUsers: (e, t, n) => (0, i.jsx)("div", { className: r()(_.$U, t), children: e }, n),
    });
}
