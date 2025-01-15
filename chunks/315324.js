r.d(n, {
    W: function () {
        return v;
    },
    Z: function () {
        return I;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(287734),
    l = r(111028),
    u = r(318374),
    c = r(565138),
    d = r(359110),
    f = r(769654),
    _ = r(496675),
    h = r(938475),
    p = r(652853),
    m = r(228168),
    g = r(981631),
    E = r(456684);
let v = 3;
function I(e) {
    let { user: n, guild: r, channel: I, onAction: T, onClose: b } = e,
        { profileType: y } = (0, p.z)(),
        S = (0, a.Wu)([h.ZP], () =>
            h.ZP.getVoiceStatesForChannel(I).map((e) => {
                let { user: n } = e;
                return n;
            })
        );
    if (!(0, a.e7)([_.Z], () => _.Z.can(g.Plq.VIEW_CHANNEL, I))) return null;
    let A = (e) => {
            e.stopPropagation(), (0, f.X)(r.id), null == T || T({ action: 'OPEN_VOICE_GUILD' }), null == b || b();
        },
        N = (e) => {
            e.stopPropagation(), o.default.selectVoiceChannel(I.id), (0, d.Kh)(I.id), null == T || T({ action: 'OPEN_VOICE_CHANNEL' }), null == b || b();
        },
        C = I.isGuildStageVoice(),
        R = _.Z.can(g.Plq.CONNECT, I) ? (C ? s.StageIcon : s.VoiceNormalIcon) : s.LockIcon,
        O = y === m.y0.FULL_SIZE,
        D = y === m.y0.PANEL,
        L = !O && !D;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: E.voiceChannelDivider }),
            (0, i.jsxs)('div', {
                className: E.voiceChannel,
                children: [
                    (0, i.jsx)(s.TooltipContainer, {
                        text: r.name,
                        'aria-label': !1,
                        children: (0, i.jsx)(c.Z, {
                            guild: r,
                            size: c.Z.Sizes.SMOL,
                            className: E.guildIcon,
                            onClick: A
                        })
                    }),
                    (0, i.jsx)(s.ChevronSmallRightIcon, {
                        size: 'xxs',
                        color: s.tokens.colors.INTERACTIVE_NORMAL
                    }),
                    (0, i.jsxs)('div', {
                        className: E.voiceChannelText,
                        children: [
                            (0, i.jsx)(R, {
                                size: 'xxs',
                                color: s.tokens.colors.INTERACTIVE_NORMAL,
                                className: E.voiceIcon
                            }),
                            (0, i.jsx)(s.Clickable, {
                                onClick: N,
                                className: E.clickableText,
                                children: (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-normal',
                                    lineClamp: 1,
                                    children: (0, i.jsx)(l.Z, { children: I.name })
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(u.Z, {
                        users: S,
                        guildId: r.id,
                        channelId: I.id,
                        maxUsers: v,
                        size: s.AvatarSizes.SIZE_16,
                        onClick: (e) => {
                            e.stopPropagation(), null == T || T({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        disableUserPopout: !!L || ((e) => e === n.id),
                        overflowCountVariant: 'text-xs/normal'
                    })
                ]
            })
        ]
    });
}
