n.d(t, {
    W: () => b,
    Z: () => y
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
    _ = n(323038),
    p = n(652853),
    h = n(788858),
    m = n(228168),
    g = n(981631),
    E = n(227832);
let b = 3;
function y(e) {
    let { user: t, guild: n, channel: y, onAction: v, onClose: O } = e,
        { profileType: I } = (0, p.z)(),
        S = (0, _.Z)(y);
    if (!(0, i.e7)([f.Z], () => f.Z.can(g.Plq.VIEW_CHANNEL, y))) return null;
    let T = (e) => {
            e.stopPropagation(), (0, d.X)(n.id), null == v || v({ action: 'OPEN_VOICE_GUILD' }), null == O || O();
        },
        N = (e) => {
            e.stopPropagation(), a.default.selectVoiceChannel(y.id), (0, u.Kh)(y.id), null == v || v({ action: 'OPEN_VOICE_CHANNEL' }), null == O || O();
        },
        A = I === m.y0.FULL_SIZE,
        C = I === m.y0.PANEL,
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
                                channel: y,
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
                                    children: (0, r.jsx)(s.Z, { children: y.name })
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(l.Z, {
                        users: S,
                        guildId: n.id,
                        channelId: y.id,
                        maxUsers: b,
                        size: o.EFr.SIZE_16,
                        onClick: (e) => {
                            e.stopPropagation(), null == v || v({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
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
