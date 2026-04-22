n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(990078),
    o = n(844222),
    c = n(939249),
    d = n(97808),
    u = n(778712),
    _ = n(442433),
    A = n(717558),
    p = n(688810),
    h = n(480890),
    g = n(267102),
    m = n(342296),
    x = n(636585),
    f = n(486020),
    C = n(711865);
function E(e) {
    let { channel: t, speaker: a, className: x } = e,
        E = l.useRef(null),
        { newestAnalyticsLocation: j } = (0, p.Ay)(),
        b = (0, g.Us)(),
        { reducedMotion: N } = l.useContext(o.C),
        T = (0, A.A)({ userId: a.id }),
        I = null != a.member ? (0, f.xT)(a.member) : null,
        v = (e) => {
            (0, _.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
                        n.e("84841"),
                        n.e("79842"),
                    ]).then(n.bind(n, 107632));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            user: a.user,
                            guildId: t.guild_id,
                            channel: t,
                            showMediaItems: !0,
                            showStageChannelItems: !0,
                            showChatItems: !1,
                            onInteraction: (0, h.s)("GuildChannelUserContextMenu", j),
                        });
                },
                { context: b },
            );
        };
    return (0, i.jsx)(m.A, {
        targetElementRef: E,
        user: a.user,
        guildId: t.guild_id,
        channelId: t.id,
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(r.m, {
                targetElementRef: E,
                __unsupportedReactNodeAsText: a.userNick,
                position: "bottom",
                children: (0, i.jsx)(c.D, {
                    ...e,
                    innerRef: E,
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick(t);
                    },
                    onContextMenu: v,
                    children: (0, i.jsx)(d.eu, {
                        src: I ?? a.user.getAvatarURL(t.guild_id, 24),
                        size: u._3.SIZE_24,
                        className: s()(C.my, x),
                        "aria-label": a.userNick,
                        isSpeaking: T && !N.enabled,
                    }),
                }),
            }),
    });
}
function j(e) {
    let { speakers: t, channel: n } = e;
    return (0, i.jsx)(x.A, {
        className: C.z,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, l) => (0, i.jsx)(E, { channel: n, speaker: e, className: t }, l),
        renderMoreUsers: (e, t, n) => (0, i.jsx)("div", { className: s()(C.$U, t), children: e }, n),
    });
}
