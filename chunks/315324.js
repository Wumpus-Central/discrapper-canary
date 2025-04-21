n.d(t, {
    W: () => y,
    Z: () => v
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    o = n(287734),
    s = n(111028),
    l = n(318374),
    c = n(565138),
    u = n(359110),
    d = n(769654),
    f = n(496675),
    _ = n(323038),
    p = n(483517),
    h = n(652853),
    m = n(788858),
    g = n(228168),
    E = n(981631),
    b = n(227832);
let y = 3;
function v(e) {
    let { user: t, guild: n, channel: v, onAction: O, onClose: I } = e,
        { profileType: S } = (0, h.z)(),
        T = (0, _.Z)(v);
    if (!(0, i.e7)([f.Z], () => f.Z.can(E.Plq.VIEW_CHANNEL, v))) return null;
    let A = (e) => {
            e.stopPropagation(), (0, d.X)(n.id), null == O || O({ action: 'OPEN_VOICE_GUILD' }), null == I || I();
        },
        N = (e) => {
            e.stopPropagation(), o.default.selectVoiceChannel(v.id), (0, u.Kh)(v.id), null == O || O({ action: 'OPEN_VOICE_CHANNEL' }), null == I || I();
        },
        C = S === g.y0.FULL_SIZE,
        R = S === g.y0.PANEL,
        P = !C && !R;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.Z, { className: b.voiceChannelDivider }),
            (0, r.jsxs)('div', {
                className: b.voiceChannel,
                children: [
                    (0, r.jsx)(a.DY3, {
                        text: n.name,
                        'aria-label': !1,
                        children: (0, r.jsx)(c.Z, {
                            guild: n,
                            size: c.Z.Sizes.SMOL,
                            className: b.guildIcon,
                            onClick: A
                        })
                    }),
                    (0, r.jsx)(a.Fbu, {
                        size: 'xxs',
                        color: a.TVs.colors.INTERACTIVE_NORMAL
                    }),
                    (0, r.jsxs)('div', {
                        className: b.voiceChannelText,
                        children: [
                            (0, r.jsx)(m.Z, {
                                channel: v,
                                size: 'xxs',
                                color: a.TVs.colors.INTERACTIVE_NORMAL,
                                className: b.voiceIcon
                            }),
                            (0, r.jsx)(a.P3F, {
                                onClick: N,
                                className: b.clickableText,
                                children: (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-normal',
                                    lineClamp: 1,
                                    children: (0, r.jsx)(s.Z, { children: v.name })
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(l.Z, {
                        users: T,
                        guildId: n.id,
                        channelId: v.id,
                        maxUsers: y,
                        size: a.EFr.SIZE_16,
                        onClick: (e) => {
                            e.stopPropagation(), null == O || O({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: !!P || ((e) => e === t.id)
                    })
                ]
            })
        ]
    });
}
