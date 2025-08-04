n.d(t, {
    W: () => v,
    Z: () => I
});
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(287734),
    s = n(933557),
    l = n(111028),
    c = n(318374),
    u = n(565138),
    d = n(359110),
    f = n(769654),
    _ = n(496675),
    p = n(323038),
    h = n(483517),
    m = n(652853),
    g = n(788858),
    E = n(228168),
    b = n(981631),
    y = n(388032),
    O = n(227832);
let v = 3;
function I(e) {
    let { user: t, guild: n, channel: I, onAction: T, onClose: S } = e,
        { themeType: A } = (0, m.z)(),
        N = (0, p.Z)(I),
        C = (0, s.ZP)(I),
        { canViewChannel: R, canConnect: P } = (0, i.cj)([_.Z], () => ({
            canViewChannel: _.Z.can(b.Plq.VIEW_CHANNEL, I),
            canConnect: I.isPrivate() || _.Z.can(b.Plq.CONNECT, I)
        }));
    if (!R) return null;
    let w = () => {
            let e = (e) => {
                (e.stopPropagation(), (0, f.X)(n.id), null == T || T({ action: 'OPEN_VOICE_GUILD' }), null == S || S());
            };
            return (0, r.jsx)(a.DY3, {
                text: n.name,
                'aria-label': !1,
                children: (0, r.jsx)(u.Z, {
                    guild: n,
                    size: u.Z.Sizes.SMOL,
                    className: O.guildIcon,
                    onClick: e
                })
            });
        },
        D = () => {
            if (!P)
                return (0, r.jsx)(a.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: (0, r.jsx)(l.Z, { children: C })
                });
            let e = (e) => {
                (e.stopPropagation(), o.default.selectVoiceChannel(I.id), (0, d.Kh)(I.id), null == T || T({ action: 'OPEN_VOICE_CHANNEL' }), null == S || S());
            };
            return (0, r.jsx)(a.P3F, {
                onClick: e,
                className: O.clickableText,
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: (0, r.jsx)(l.Z, { children: C })
                })
            });
        },
        L = A !== E.lY.MODAL && A !== E.lY.MODAL_V2 && A !== E.lY.SIDEBAR;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h.Z, { className: O.voiceChannelDivider }),
            (0, r.jsxs)('div', {
                className: O.voiceChannel,
                children: [
                    w(),
                    (0, r.jsx)(a.Fbu, {
                        size: 'xxs',
                        color: a.TVs.colors.TEXT_SECONDARY
                    }),
                    (0, r.jsxs)('div', {
                        className: O.voiceChannelText,
                        children: [
                            (0, r.jsx)(g.Z, {
                                channel: I,
                                size: 'xxs',
                                color: a.TVs.colors.TEXT_SECONDARY,
                                className: O.voiceIcon
                            }),
                            D()
                        ]
                    }),
                    (0, r.jsx)(c.Z, {
                        users: N,
                        guildId: n.id,
                        channelId: I.id,
                        maxUsers: v,
                        size: a.EFr.SIZE_16,
                        overflowCountColor: 'text-secondary',
                        overflowCountClassName: O.voiceChannelOverflowCount,
                        onClickOverflow: (e) => {
                            (e.stopPropagation(), null == T || T({ action: 'PRESS_VOICE_CHANNEL_AVATARS' }));
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: !!L || ((e) => e === t.id),
                        'aria-label': y.intl.string(y.t.jNqDh4)
                    })
                ]
            })
        ]
    });
}
