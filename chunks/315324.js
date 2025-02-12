n.d(t, {
    W: () => v,
    Z: () => y
});
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(287734),
    o = n(111028),
    l = n(318374),
    u = n(565138),
    c = n(359110),
    d = n(769654),
    f = n(496675),
    _ = n(323038),
    p = n(652853),
    h = n(788858),
    m = n(228168),
    g = n(981631),
    E = n(309584);
let v = 3;
function y(e) {
    let { user: t, guild: n, channel: y, onAction: I, onClose: T } = e,
        { profileType: b } = (0, p.z)(),
        S = (0, _.Z)(y);
    if (!(0, r.e7)([f.Z], () => f.Z.can(g.Plq.VIEW_CHANNEL, y))) return null;
    let A = (e) => {
            e.stopPropagation(), (0, d.X)(n.id), null == I || I({ action: 'OPEN_VOICE_GUILD' }), null == T || T();
        },
        N = (e) => {
            e.stopPropagation(), s.default.selectVoiceChannel(y.id), (0, c.Kh)(y.id), null == I || I({ action: 'OPEN_VOICE_CHANNEL' }), null == T || T();
        },
        C = b === m.y0.FULL_SIZE,
        R = b === m.y0.PANEL,
        O = !C && !R;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: E.voiceChannelDivider }),
            (0, i.jsxs)('div', {
                className: E.voiceChannel,
                children: [
                    (0, i.jsx)(a.DY3, {
                        text: n.name,
                        'aria-label': !1,
                        children: (0, i.jsx)(u.Z, {
                            guild: n,
                            size: u.Z.Sizes.SMOL,
                            className: E.guildIcon,
                            onClick: A
                        })
                    }),
                    (0, i.jsx)(a.Fbu, {
                        size: 'xxs',
                        color: a.TVs.colors.INTERACTIVE_NORMAL
                    }),
                    (0, i.jsxs)('div', {
                        className: E.voiceChannelText,
                        children: [
                            (0, i.jsx)(h.Z, {
                                channel: y,
                                size: 'xxs',
                                color: a.TVs.colors.INTERACTIVE_NORMAL,
                                className: E.voiceIcon
                            }),
                            (0, i.jsx)(a.P3F, {
                                onClick: N,
                                className: E.clickableText,
                                children: (0, i.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-normal',
                                    lineClamp: 1,
                                    children: (0, i.jsx)(o.Z, { children: y.name })
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(l.Z, {
                        users: S,
                        guildId: n.id,
                        channelId: y.id,
                        maxUsers: v,
                        size: a.EFr.SIZE_16,
                        onClick: (e) => {
                            e.stopPropagation(), null == I || I({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: !!O || ((e) => e === t.id),
                        overflowCountVariant: 'text-xs/normal'
                    })
                ]
            })
        ]
    });
}
