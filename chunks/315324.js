n.d(t, {
    W: () => E,
    Z: () => v
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
    _ = n(938475),
    p = n(652853),
    h = n(228168),
    m = n(981631),
    g = n(249942);
let E = 3;
function v(e) {
    let { user: t, guild: n, channel: v, onAction: y, onClose: I } = e,
        { profileType: b } = (0, p.z)(),
        T = (0, r.Wu)([_.ZP], () =>
            _.ZP.getVoiceStatesForChannel(v).map((e) => {
                let { user: t } = e;
                return t;
            })
        );
    if (!(0, r.e7)([f.Z], () => f.Z.can(m.Plq.VIEW_CHANNEL, v))) return null;
    let S = (e) => {
            e.stopPropagation(), (0, d.X)(n.id), null == y || y({ action: 'OPEN_VOICE_GUILD' }), null == I || I();
        },
        A = (e) => {
            e.stopPropagation(), s.default.selectVoiceChannel(v.id), (0, c.Kh)(v.id), null == y || y({ action: 'OPEN_VOICE_CHANNEL' }), null == I || I();
        },
        N = v.isGuildStageVoice(),
        C = f.Z.can(m.Plq.CONNECT, v) ? (N ? a.ewx : a.gj8) : a.mBM,
        R = b === h.y0.FULL_SIZE,
        O = b === h.y0.PANEL,
        D = !R && !O;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: g.voiceChannelDivider }),
            (0, i.jsxs)('div', {
                className: g.voiceChannel,
                children: [
                    (0, i.jsx)(a.DY3, {
                        text: n.name,
                        'aria-label': !1,
                        children: (0, i.jsx)(u.Z, {
                            guild: n,
                            size: u.Z.Sizes.SMOL,
                            className: g.guildIcon,
                            onClick: S
                        })
                    }),
                    (0, i.jsx)(a.Fbu, {
                        size: 'xxs',
                        color: a.TVs.colors.INTERACTIVE_NORMAL
                    }),
                    (0, i.jsxs)('div', {
                        className: g.voiceChannelText,
                        children: [
                            (0, i.jsx)(C, {
                                size: 'xxs',
                                color: a.TVs.colors.INTERACTIVE_NORMAL,
                                className: g.voiceIcon
                            }),
                            (0, i.jsx)(a.P3F, {
                                onClick: A,
                                className: g.clickableText,
                                children: (0, i.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-normal',
                                    lineClamp: 1,
                                    children: (0, i.jsx)(o.Z, { children: v.name })
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(l.Z, {
                        users: T,
                        guildId: n.id,
                        channelId: v.id,
                        maxUsers: E,
                        size: a.EFr.SIZE_16,
                        onClick: (e) => {
                            e.stopPropagation(), null == y || y({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: !!D || ((e) => e === t.id),
                        overflowCountVariant: 'text-xs/normal'
                    })
                ]
            })
        ]
    });
}
