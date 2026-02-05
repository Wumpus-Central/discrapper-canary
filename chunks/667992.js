n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(397927),
    d = n(442433),
    c = n(717558),
    u = n(688810),
    h = n(480890),
    A = n(267102),
    g = n(342296),
    m = n(636585),
    p = n(486020),
    _ = n(787750);
function x(e) {
    let { channel: t, speaker: s, className: m } = e,
        x = l.useRef(null),
        { newestAnalyticsLocation: f } = (0, u.Ay)(),
        E = (0, A.Us)(),
        { reducedMotion: C } = l.useContext(o.CZY),
        I = (0, c.A)({ userId: s.id }),
        S = null != s.member ? (0, p.xT)(s.member) : null,
        b = (e) => {
            (0, d.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
                        n.e("82892"),
                        n.e("84841"),
                        n.e("31885"),
                    ]).then(n.bind(n, 107632));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            user: s.user,
                            guildId: t.guild_id,
                            channel: t,
                            showMediaItems: !0,
                            showStageChannelItems: !0,
                            showChatItems: !1,
                            onInteraction: (0, h.s)("GuildChannelUserContextMenu", f),
                        });
                },
                { context: E },
            );
        };
    return (0, i.jsx)(g.A, {
        targetElementRef: x,
        user: s.user,
        guildId: t.guild_id,
        channelId: t.id,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(r.m, {
                targetElementRef: x,
                __unsupportedReactNodeAsText: s.userNick,
                position: "bottom",
                children: (0, i.jsx)(o.DUT, {
                    ...e,
                    innerRef: x,
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick(t);
                    },
                    onContextMenu: b,
                    children: (0, i.jsx)(o.euF, {
                        src: S ?? s.user.getAvatarURL(t.guild_id, 24),
                        size: o._3J.SIZE_24,
                        className: a()(_.my, m),
                        "aria-label": s.userNick,
                        isSpeaking: I && !C.enabled,
                    }),
                }),
            }),
    });
}
function f(e) {
    let { speakers: t, channel: n } = e;
    return (0, i.jsx)(m.A, {
        className: _.z,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, l) => (0, i.jsx)(x, { channel: n, speaker: e, className: t }, l),
        renderMoreUsers: (e, t, n) => (0, i.jsx)("div", { className: a()(_.$U, t), children: e }, n),
    });
}
