n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(239091),
    c = n(586902),
    d = n(40851),
    u = n(184301),
    h = n(347475),
    p = n(237583),
    m = n(768581),
    f = n(22105);
function g(e) {
    let { channel: t, speaker: r, className: p } = e,
        g = (0, d.bp)(),
        { reducedMotion: C } = l.useContext(s.AccessibilityPreferencesContext),
        x = (0, c.Z)({ userId: r.id }),
        v = null != r.member ? (0, m.CA)(r.member) : null,
        _ = (e) => {
            (0, o.jW)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            user: r.user,
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
    return (0, i.jsx)(s.Popout, {
        preload: () =>
            (0, u.Z)(r.user, {
                guildId: t.guild_id,
                channelId: t.id
            }),
        renderPopout: (e) =>
            (0, i.jsx)(h.Z, {
                ...e,
                guildId: t.guild_id,
                channelId: t.id,
                userId: r.id
            }),
        position: 'right',
        spacing: 8,
        children: (e) =>
            (0, i.jsx)(s.Tooltip, {
                text: r.userNick,
                position: 'bottom',
                children: (n) =>
                    (0, i.jsx)(s.Clickable, {
                        ...n,
                        ...e,
                        onClick: (t) => {
                            t.stopPropagation(), e.onClick(t);
                        },
                        onContextMenu: _,
                        children: (0, i.jsx)(s.Avatar, {
                            src: null != v ? v : r.user.getAvatarURL(t.guild_id, 24),
                            size: s.AvatarSizes.SIZE_24,
                            className: a()(f.avatar, p),
                            'aria-label': r.userNick,
                            isSpeaking: x && !C.enabled
                        })
                    })
            })
    });
}
function C(e) {
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
                    className: a()(f.speakers, t),
                    children: e
                },
                n
            )
    });
}
