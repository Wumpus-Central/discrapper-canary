n.d(t, { Z: () => C });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(642128),
    s = n(442837),
    c = n(481060),
    d = n(492162),
    u = n(237583),
    h = n(451478),
    p = n(934415),
    m = n(968847),
    g = n(388032),
    f = n(849998);
let _ = {
    friction: 30,
    tension: 300
};
function v(e) {
    var t;
    let { guildChannels: n, jumpToVoiceChannels: r } = e,
        o = n.getCategoryFromSection(n.voiceChannelsSectionNumber),
        s = (0, d.Z)(n.id),
        h = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r();
            },
            [r]
        ),
        m = null !== (t = null == o ? void 0 : o.getChannelRecords()) && void 0 !== t ? t : [],
        _ = (0, p.c4)({
            channels: m,
            selectedChannelId: null,
            selectedVoiceChannelId: null,
            voiceStates: s
        });
    return (0, i.jsxs)(c.P3F, {
        className: a()(f.bar, f.voiceBar),
        onClick: h,
        children: [
            (0, i.jsx)(c.gj8, {
                size: 'custom',
                className: f.voiceChannelsIcon,
                width: 14,
                height: 14,
                color: 'currentColor'
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/semibold',
                color: 'text-positive',
                className: f.barText,
                children: g.intl.format(g.t['fDlr+P'], { count: _.length })
            }),
            (0, i.jsx)(u.Z, {
                guildId: n.id,
                className: f.voiceChannelsUsers,
                users: _.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: c.EFr.SIZE_16
            })
        ]
    });
}
function C(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: r, jumpToVoiceChannels: d, jumpToChannel: u } = e,
        { bottomBar: p, topBar: C } = (0, s.cj)([m.Z], () => m.Z.getUnreadStateForGuildId(n.id)),
        x = (0, s.e7)([h.Z], () => h.Z.isFocused()),
        { mode: Z, mentionCount: I, targetChannelId: b } = 'bottom' === t ? p : C,
        S = Z === m.x.HIDDEN,
        N = (0, c.q_F)(
            {
                to: { transform: S ? ('bottom' === t ? 'translateY(180%)' : 'translateY(-180%)') : 'translateY(0%)' },
                config: _
            },
            x ? 'respect-motion-settings' : 'animate-never'
        ),
        E = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != b && u(b);
            },
            [u, b]
        );
    return (0, i.jsx)('div', {
        className: a()(f.container, {
            [f.top]: 'top' === t,
            [f.bottom]: 'bottom' === t
        }),
        children: (0, i.jsx)(o.animated.div, {
            className: f.containerPadding,
            style: N,
            'aria-hidden': S,
            children:
                Z === m.x.HIDDEN
                    ? (0, i.jsx)('div', { className: a()(f.bar, f.emptyBar) })
                    : Z === m.x.UNREAD
                      ? (0, i.jsxs)(c.P3F, {
                            className: f.bar,
                            onClick: E,
                            children: [
                                'bottom' === t
                                    ? (0, i.jsx)(c.CJ0, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: f.unreadIcon,
                                          height: 14,
                                          width: 14
                                      })
                                    : (0, i.jsx)(c.u04, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: f.unreadIcon,
                                          height: 14,
                                          width: 14
                                      }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'interactive-normal',
                                    className: f.barText,
                                    children: g.intl.string(g.t.FCRiT0)
                                })
                            ]
                        })
                      : Z === m.x.MENTIONS
                        ? (0, i.jsx)(c.P3F, {
                              className: a()(f.bar, f.mentionsBar),
                              onClick: E,
                              children: (0, i.jsx)(c.Text, {
                                  variant: 'text-xs/semibold',
                                  color: 'status-danger-text',
                                  className: f.barText,
                                  children: g.intl.format(g.t.EQcLys, { count: I })
                              })
                          })
                        : Z === m.x.VOICE_CHANNELS
                          ? (0, i.jsx)(v, {
                                jumpToVoiceChannels: d,
                                guildChannels: n,
                                guildChannelsVersion: r
                            })
                          : void 0
        })
    });
}
