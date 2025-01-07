n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(752877),
    s = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(540059),
    h = n(492162),
    p = n(237583),
    f = n(451478),
    m = n(934415),
    g = n(968847),
    v = n(388032),
    C = n(706091);
let x = {
    friction: 30,
    tension: 300
};
function I(e) {
    var t;
    let { guildChannels: n, jumpToVoiceChannels: r } = e,
        o = n.getCategoryFromSection(n.voiceChannelsSectionNumber),
        s = (0, h.Z)(n.id),
        d = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r();
            },
            [r]
        ),
        f = null !== (t = null == o ? void 0 : o.getChannelRecords()) && void 0 !== t ? t : [],
        g = (0, m.c4)({
            channels: f,
            selectedChannelId: null,
            selectedVoiceChannelId: null,
            voiceStates: s
        });
    return (0, i.jsxs)(u.Clickable, {
        className: a()(C.bar),
        onClick: d,
        children: [
            (0, i.jsx)(u.VoiceNormalIcon, {
                size: 'custom',
                className: C.voiceChannelsIcon,
                width: 14,
                height: 14,
                color: c.Z.unsafe_rawColors.GREEN_330.css
            }),
            (0, i.jsx)(u.Text, {
                variant: 'text-xs/semibold',
                color: 'text-positive',
                className: C.barText,
                children: v.intl.format(v.t['fDlr+P'], { count: g.length })
            }),
            (0, i.jsx)(p.Z, {
                guildId: n.id,
                className: C.voiceChannelsUsers,
                users: g.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: u.AvatarSizes.SIZE_16
            })
        ]
    });
}
function _(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: r, jumpToVoiceChannels: c, jumpToChannel: h } = e,
        p = (0, d.Q3)('UnreadBar'),
        { bottomBar: m, topBar: _ } = (0, s.cj)([g.Z], () => g.Z.getUnreadStateForGuildId(n.id)),
        Z = (0, s.e7)([f.Z], () => f.Z.isFocused()),
        { mode: b, mentionCount: S, targetChannelId: N } = 'bottom' === t ? m : _,
        E = b === g.x.HIDDEN,
        y = (0, u.useSpring)(
            {
                to: { transform: E ? ('bottom' === t ? 'translateY(180%)' : 'translateY(-180%)') : 'translateY(0%)' },
                config: x
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
        className: a()(C.container, {
            [C.top]: 'top' === t,
            [C.bottom]: 'bottom' === t
        }),
        children: (0, i.jsx)(o.animated.div, {
            className: C.containerPadding,
            style: y,
            'aria-hidden': E,
            children:
                b === g.x.HIDDEN
                    ? (0, i.jsx)('div', { className: a()(C.bar, C.emptyBar) })
                    : b === g.x.UNREAD
                      ? (0, i.jsxs)(u.Clickable, {
                            className: C.bar,
                            onClick: j,
                            children: [
                                'bottom' === t
                                    ? (0, i.jsx)(u.ChevronSmallDownIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: C.unreadIcon,
                                          height: 14,
                                          width: 14
                                      })
                                    : (0, i.jsx)(u.ChevronSmallUpIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: C.unreadIcon,
                                          height: 14,
                                          width: 14
                                      }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'interactive-normal',
                                    className: C.barText,
                                    children: v.intl.string(v.t.FCRiT0)
                                })
                            ]
                        })
                      : b === g.x.MENTIONS
                        ? (0, i.jsx)(u.Clickable, {
                              className: a()(C.bar, C.mentionsBar),
                              onClick: j,
                              children: (0, i.jsx)(u.Text, {
                                  variant: 'text-xs/semibold',
                                  color: p ? 'text-primary' : 'status-danger-text',
                                  className: C.barText,
                                  children: v.intl.format(v.t.EQcLys, { count: S })
                              })
                          })
                        : b === g.x.VOICE_CHANNELS
                          ? (0, i.jsx)(I, {
                                jumpToVoiceChannels: c,
                                guildChannels: n,
                                guildChannelsVersion: r
                            })
                          : void 0
        })
    });
}
