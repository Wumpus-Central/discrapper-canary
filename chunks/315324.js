n.d(t, {
    W: () => v,
    Z: () => b
});
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(287734),
    s = n(111028),
    l = n(318374),
    c = n(565138),
    u = n(359110),
    d = n(769654),
    f = n(496675),
    p = n(323038),
    _ = n(652853),
    h = n(788858),
    m = n(228168),
    g = n(981631),
    E = n(481736);
let v = 3;
function b(e) {
    let { user: t, guild: n, channel: b, onAction: y, onClose: O } = e,
        { profileType: S } = (0, _.z)(),
        I = (0, p.Z)(b);
    if (!(0, i.e7)([f.Z], () => f.Z.can(g.Plq.VIEW_CHANNEL, b))) return null;
    let T = (e) => {
            e.stopPropagation(), (0, d.X)(n.id), null == y || y({ action: 'OPEN_VOICE_GUILD' }), null == O || O();
        },
        N = (e) => {
            e.stopPropagation(), a.default.selectVoiceChannel(b.id), (0, u.Kh)(b.id), null == y || y({ action: 'OPEN_VOICE_CHANNEL' }), null == O || O();
        },
        A = S === m.y0.FULL_SIZE,
        C = S === m.y0.PANEL,
        R = !A && !C;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', { className: E.voiceChannelDivider }),
            (0, r.jsxs)('div', {
                className: E.voiceChannel,
                children: [
                    (0, r.jsx)(o.DY3, {
                        text: n.name,
                        'aria-label': !1,
                        children: (0, r.jsx)(c.Z, {
                            guild: n,
                            size: c.Z.Sizes.SMOL,
                            className: E.guildIcon,
                            onClick: T
                        })
                    }),
                    (0, r.jsx)(o.Fbu, {
                        size: 'xxs',
                        color: o.TVs.colors.INTERACTIVE_NORMAL
                    }),
                    (0, r.jsxs)('div', {
                        className: E.voiceChannelText,
                        children: [
                            (0, r.jsx)(h.Z, {
                                channel: b,
                                size: 'xxs',
                                color: o.TVs.colors.INTERACTIVE_NORMAL,
                                className: E.voiceIcon
                            }),
                            (0, r.jsx)(o.P3F, {
                                onClick: N,
                                className: E.clickableText,
                                children: (0, r.jsx)(o.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-normal',
                                    lineClamp: 1,
                                    children: (0, r.jsx)(s.Z, { children: b.name })
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(l.Z, {
                        users: I,
                        guildId: n.id,
                        channelId: b.id,
                        maxUsers: v,
                        size: o.EFr.SIZE_16,
                        onClick: (e) => {
                            e.stopPropagation(), null == y || y({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: !!R || ((e) => e === t.id),
                        overflowCountVariant: 'text-xs/normal'
                    })
                ]
            })
        ]
    });
}
