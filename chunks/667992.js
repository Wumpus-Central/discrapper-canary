n.d(t, { A: () => x });
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
    m = n(342296),
    p = n(636585),
    g = n(486020),
    _ = n(787750);
function f(e) {
    let { channel: t, speaker: s, className: p } = e,
        f = l.useRef(null),
        { newestAnalyticsLocation: x } = (0, u.Ay)(),
        C = (0, A.Us)(),
        { reducedMotion: E } = l.useContext(o.CZY),
        I = (0, c.A)({ userId: s.id }),
        N = null != s.member ? (0, g.xT)(s.member) : null,
        b = (e) => {
            (0, d.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
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
                            onInteraction: (0, h.s)("GuildChannelUserContextMenu", x),
                        });
                },
                { context: C },
            );
        };
    return (0, i.jsx)(m.A, {
        targetElementRef: f,
        user: s.user,
        guildId: t.guild_id,
        channelId: t.id,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(r.m, {
                targetElementRef: f,
                __unsupportedReactNodeAsText: s.userNick,
                position: "bottom",
                children: (0, i.jsx)(o.DUT, {
                    ...e,
                    innerRef: f,
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick(t);
                    },
                    onContextMenu: b,
                    children: (0, i.jsx)(o.euF, {
                        src: N ?? s.user.getAvatarURL(t.guild_id, 24),
                        size: o._3J.SIZE_24,
                        className: a()(_.my, p),
                        "aria-label": s.userNick,
                        isSpeaking: I && !E.enabled,
                    }),
                }),
            }),
    });
}
function x(e) {
    let { speakers: t, channel: n } = e;
    return (0, i.jsx)(p.A, {
        className: _.z,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, l) => (0, i.jsx)(f, { channel: n, speaker: e, className: t }, l),
        renderMoreUsers: (e, t, n) => (0, i.jsx)("div", { className: a()(_.$U, t), children: e }, n),
    });
}
