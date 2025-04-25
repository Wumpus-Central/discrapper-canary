n.d(t, {
    W: () => v,
    Z: () => O
});
var r = n(200651);
n(192379);
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
    y = n(227832);
let v = 3;
function O(e) {
    let { user: t, guild: n, channel: O, onAction: I, onClose: S } = e,
        { themeType: T } = (0, m.z)(),
        A = (0, p.Z)(O),
        N = (0, s.ZP)(O),
        { canViewChannel: C, canConnect: R } = (0, i.cj)([_.Z], () => ({
            canViewChannel: _.Z.can(b.Plq.VIEW_CHANNEL, O),
            canConnect: O.isPrivate() || _.Z.can(b.Plq.CONNECT, O)
        }));
    if (!C) return null;
    let P = () => {
            let e = (e) => {
                e.stopPropagation(), (0, f.X)(n.id), null == I || I({ action: 'OPEN_VOICE_GUILD' }), null == S || S();
            };
            return (0, r.jsx)(a.DY3, {
                text: n.name,
                'aria-label': !1,
                children: (0, r.jsx)(u.Z, {
                    guild: n,
                    size: u.Z.Sizes.SMOL,
                    className: y.guildIcon,
                    onClick: e
                })
            });
        },
        w = () => {
            if (!R)
                return (0, r.jsx)(a.Text, {
                    variant: 'text-xs/normal',
                    color: 'interactive-normal',
                    lineClamp: 1,
                    children: (0, r.jsx)(l.Z, { children: N })
                });
            let e = (e) => {
                e.stopPropagation(), o.default.selectVoiceChannel(O.id), (0, d.Kh)(O.id), null == I || I({ action: 'OPEN_VOICE_CHANNEL' }), null == S || S();
            };
            return (0, r.jsx)(a.P3F, {
                onClick: e,
                className: y.clickableText,
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-xs/normal',
                    color: 'interactive-normal',
                    lineClamp: 1,
                    children: (0, r.jsx)(l.Z, { children: N })
                })
            });
        },
        D = T !== E.lY.MODAL && T !== E.lY.MODAL_V2 && T !== E.lY.SIDEBAR;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h.Z, { className: y.voiceChannelDivider }),
            (0, r.jsxs)('div', {
                className: y.voiceChannel,
                children: [
                    P(),
                    (0, r.jsx)(a.Fbu, {
                        size: 'xxs',
                        color: a.TVs.colors.INTERACTIVE_NORMAL
                    }),
                    (0, r.jsxs)('div', {
                        className: y.voiceChannelText,
                        children: [
                            (0, r.jsx)(g.Z, {
                                channel: O,
                                size: 'xxs',
                                color: a.TVs.colors.INTERACTIVE_NORMAL,
                                className: y.voiceIcon
                            }),
                            w()
                        ]
                    }),
                    (0, r.jsx)(c.Z, {
                        users: A,
                        guildId: n.id,
                        channelId: O.id,
                        maxUsers: v,
                        size: a.EFr.SIZE_16,
                        onClick: (e) => {
                            e.stopPropagation(), null == I || I({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: !!D || ((e) => e === t.id)
                    })
                ]
            })
        ]
    });
}
