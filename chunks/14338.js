n.d(t, { Z: () => _ });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(239091),
    c = n(586902),
    d = n(40851),
    u = n(184301),
    h = n(347475),
    p = n(237583),
    m = n(768581),
    f = n(448971);
function g(e) {
    let { channel: t, speaker: a, className: p } = e,
        g = (0, d.bp)(),
        { reducedMotion: _ } = l.useContext(s.Sfi),
        C = (0, c.Z)({ userId: a.id }),
        x = null != a.member ? (0, m.CA)(a.member) : null,
        v = (e) => {
            (0, o.jW)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('7717'), n.e('44475')]).then(n.bind(n, 757387));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            user: a.user,
                            guildId: t.guild_id,
                            channel: t,
                            showMediaItems: !0,
                            showStageChannelItems: !0,
                            showChatItems: !1
                        });
                },
                { context: g }
            );
        };
    return (0, i.jsx)(s.yRy, {
        preload: () =>
            (0, u.Z)(a.user, {
                guildId: t.guild_id,
                channelId: t.id
            }),
        renderPopout: (e) =>
            (0, i.jsx)(h.Z, {
                ...e,
                guildId: t.guild_id,
                channelId: t.id,
                userId: a.id
            }),
        position: 'right',
        spacing: 8,
        children: (e) =>
            (0, i.jsx)(s.ua7, {
                text: a.userNick,
                position: 'bottom',
                children: (n) =>
                    (0, i.jsx)(s.P3F, {
                        ...n,
                        ...e,
                        onClick: (t) => {
                            t.stopPropagation(), e.onClick(t);
                        },
                        onContextMenu: v,
                        children: (0, i.jsx)(s.qEK, {
                            src: null != x ? x : a.user.getAvatarURL(t.guild_id, 24),
                            size: s.EFr.SIZE_24,
                            className: r()(f.avatar, p),
                            'aria-label': a.userNick,
                            isSpeaking: C && !_.enabled
                        })
                    })
            })
    });
}
function _(e) {
    let { speakers: t, channel: n } = e;
    return (0, i.jsx)(p.Z, {
        className: f.summary,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, l) =>
            (0, i.jsx)(
                g,
                {
                    channel: n,
                    speaker: e,
                    className: t
                },
                l
            ),
        renderMoreUsers: (e, t, n) =>
            (0, i.jsx)(
                'div',
                {
                    className: r()(f.speakers, t),
                    children: e
                },
                n
            )
    });
}
