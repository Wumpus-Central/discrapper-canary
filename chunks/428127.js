n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(642128),
    s = n(442837),
    c = n(481060),
    u = n(540059),
    d = n(492162),
    h = n(237583),
    p = n(451478),
    m = n(934415),
    f = n(968847),
    g = n(388032),
    v = n(706091);
let C = {
    friction: 30,
    tension: 300
};
function x(e) {
    var t;
    let { guildChannels: n, jumpToVoiceChannels: r } = e,
        o = n.getCategoryFromSection(n.voiceChannelsSectionNumber),
        s = (0, d.Z)(n.id),
        u = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r();
            },
            [r]
        ),
        p = null !== (t = null == o ? void 0 : o.getChannelRecords()) && void 0 !== t ? t : [],
        f = (0, m.c4)({
            channels: p,
            selectedChannelId: null,
            selectedVoiceChannelId: null,
            voiceStates: s
        });
    return (0, i.jsxs)(c.Clickable, {
        className: a()(v.bar, v.voiceBar),
        onClick: u,
        children: [
            (0, i.jsx)(c.VoiceNormalIcon, {
                size: 'custom',
                className: v.voiceChannelsIcon,
                width: 14,
                height: 14,
                color: 'currentColor'
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/semibold',
                color: 'text-positive',
                className: v.barText,
                children: g.intl.format(g.t['fDlr+P'], { count: f.length })
            }),
            (0, i.jsx)(h.Z, {
                guildId: n.id,
                className: v.voiceChannelsUsers,
                users: f.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: c.AvatarSizes.SIZE_16
            })
        ]
    });
}
function I(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: r, jumpToVoiceChannels: d, jumpToChannel: h } = e,
        m = (0, u.Q3)('UnreadBar'),
        { bottomBar: I, topBar: _ } = (0, s.cj)([f.Z], () => f.Z.getUnreadStateForGuildId(n.id)),
        Z = (0, s.e7)([p.Z], () => p.Z.isFocused()),
        { mode: b, mentionCount: S, targetChannelId: N } = 'bottom' === t ? I : _,
        E = b === f.x.HIDDEN,
        y = (0, c.useSpring)(
            {
                to: { transform: E ? ('bottom' === t ? 'translateY(180%)' : 'translateY(-180%)') : 'translateY(0%)' },
                config: C
            },
            Z ? 'respect-motion-settings' : 'animate-never'
        ),
        j = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != N && h(N);
            },
            [h, N]
        );
    return (0, i.jsx)('div', {
        className: a()(v.container, {
            [v.top]: 'top' === t,
            [v.bottom]: 'bottom' === t
        }),
        children: (0, i.jsx)(o.animated.div, {
            className: v.containerPadding,
            style: y,
            'aria-hidden': E,
            children:
                b === f.x.HIDDEN
                    ? (0, i.jsx)('div', { className: a()(v.bar, v.emptyBar) })
                    : b === f.x.UNREAD
                      ? (0, i.jsxs)(c.Clickable, {
                            className: v.bar,
                            onClick: j,
                            children: [
                                'bottom' === t
                                    ? (0, i.jsx)(c.ChevronSmallDownIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: v.unreadIcon,
                                          height: 14,
                                          width: 14
                                      })
                                    : (0, i.jsx)(c.ChevronSmallUpIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: v.unreadIcon,
                                          height: 14,
                                          width: 14
                                      }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'interactive-normal',
                                    className: v.barText,
                                    children: g.intl.string(g.t.FCRiT0)
                                })
                            ]
                        })
                      : b === f.x.MENTIONS
                        ? (0, i.jsx)(c.Clickable, {
                              className: a()(v.bar, v.mentionsBar),
                              onClick: j,
                              children: (0, i.jsx)(c.Text, {
                                  variant: 'text-xs/semibold',
                                  color: m ? 'text-primary' : 'status-danger-text',
                                  className: v.barText,
                                  children: g.intl.format(g.t.EQcLys, { count: S })
                              })
                          })
                        : b === f.x.VOICE_CHANNELS
                          ? (0, i.jsx)(x, {
                                jumpToVoiceChannels: d,
                                guildChannels: n,
                                guildChannelsVersion: r
                            })
                          : void 0
        })
    });
}
