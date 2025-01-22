r.d(n, {
    W: function () {
        return v;
    },
    Z: function () {
        return y;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(287734),
    l = r(111028),
    u = r(318374),
    c = r(565138),
    d = r(359110),
    f = r(769654),
    p = r(496675),
    h = r(938475),
    _ = r(652853),
    m = r(228168),
    g = r(981631),
    E = r(249942);
let v = 3;
function y(e) {
    let { user: n, guild: r, channel: y, onAction: b, onClose: I } = e,
        { profileType: T } = (0, _.z)(),
        S = (0, a.Wu)([h.ZP], () =>
            h.ZP.getVoiceStatesForChannel(y).map((e) => {
                let { user: n } = e;
                return n;
            })
        );
    if (!(0, a.e7)([p.Z], () => p.Z.can(g.Plq.VIEW_CHANNEL, y))) return null;
    let A = (e) => {
            e.stopPropagation(), (0, f.X)(r.id), null == b || b({ action: 'OPEN_VOICE_GUILD' }), null == I || I();
        },
        C = (e) => {
            e.stopPropagation(), s.default.selectVoiceChannel(y.id), (0, d.Kh)(y.id), null == b || b({ action: 'OPEN_VOICE_CHANNEL' }), null == I || I();
        },
        N = y.isGuildStageVoice(),
        R = p.Z.can(g.Plq.CONNECT, y) ? (N ? o.StageIcon : o.VoiceNormalIcon) : o.LockIcon,
        O = T === m.y0.FULL_SIZE,
        D = T === m.y0.PANEL,
        x = !O && !D;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: E.voiceChannelDivider }),
            (0, i.jsxs)('div', {
                className: E.voiceChannel,
                children: [
                    (0, i.jsx)(o.TooltipContainer, {
                        text: r.name,
                        'aria-label': !1,
                        children: (0, i.jsx)(c.Z, {
                            guild: r,
                            size: c.Z.Sizes.SMOL,
                            className: E.guildIcon,
                            onClick: A
                        })
                    }),
                    (0, i.jsx)(o.ChevronSmallRightIcon, {
                        size: 'xxs',
                        color: o.tokens.colors.INTERACTIVE_NORMAL
                    }),
                    (0, i.jsxs)('div', {
                        className: E.voiceChannelText,
                        children: [
                            (0, i.jsx)(R, {
                                size: 'xxs',
                                color: o.tokens.colors.INTERACTIVE_NORMAL,
                                className: E.voiceIcon
                            }),
                            (0, i.jsx)(o.Clickable, {
                                onClick: C,
                                className: E.clickableText,
                                children: (0, i.jsx)(o.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-normal',
                                    lineClamp: 1,
                                    children: (0, i.jsx)(l.Z, { children: y.name })
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(u.Z, {
                        users: S,
                        guildId: r.id,
                        channelId: y.id,
                        maxUsers: v,
                        size: o.AvatarSizes.SIZE_16,
                        onClick: (e) => {
                            e.stopPropagation(), null == b || b({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        disableUserPopout: !!x || ((e) => e === n.id),
                        overflowCountVariant: 'text-xs/normal'
                    })
                ]
            })
        ]
    });
}
