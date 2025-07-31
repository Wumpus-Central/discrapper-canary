n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(855659),
    s = n(442837),
    c = n(481060),
    u = n(492162),
    d = n(237583),
    h = n(451478),
    p = n(934415),
    f = n(968847),
    g = n(388032),
    m = n(762039);
let b = {
    friction: 30,
    tension: 300
};
function _(e) {
    var t;
    let { guildChannels: n, jumpToVoiceChannels: l } = e,
        a = n.getCategoryFromSection(n.voiceChannelsSectionNumber),
        s = (0, u.Z)(n.id),
        h = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), l());
            },
            [l]
        ),
        f = null != (t = null == a ? void 0 : a.getChannelRecords()) ? t : [],
        b = (0, p.c4)({
            channels: f,
            selectedChannelId: null,
            selectedVoiceChannelId: null,
            voiceStates: s
        });
    return (0, r.jsxs)(c.P3F, {
        className: o()(m.bar, m.voiceBar),
        onClick: h,
        children: [
            (0, r.jsx)(c.gj8, {
                size: 'custom',
                className: m.voiceChannelsIcon,
                width: 14,
                height: 14,
                color: 'currentColor'
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-xs/semibold',
                className: m.barText,
                children: g.intl.format(g.t['fDlr+P'], { count: b.length })
            }),
            (0, r.jsx)(d.Z, {
                guildId: n.id,
                className: m.voiceChannelsUsers,
                users: b.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: c.EFr.SIZE_16
            })
        ]
    });
}
function O(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: u, jumpToChannel: d } = e,
        { bottomBar: p, topBar: O } = (0, s.cj)([f.Z], () => f.Z.getUnreadStateForGuildId(n.id)),
        y = (0, s.e7)([h.Z], () => h.Z.isFocused()),
        { mode: C, mentionCount: v, targetChannelId: j } = 'bottom' === t ? p : O,
        E = C === f.x.HIDDEN,
        S = (0, c.q_F)(
            {
                to: { transform: E ? ('bottom' === t ? 'translateY(180%)' : 'translateY(-180%)') : 'translateY(0%)' },
                config: b
            },
            y ? 'respect-motion-settings' : 'animate-never'
        ),
        x = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), null != j && d(j));
            },
            [d, j]
        );
    return (0, r.jsx)('div', {
        className: o()(m.container, {
            [m.top]: 'top' === t,
            [m.bottom]: 'bottom' === t
        }),
        children: (0, r.jsx)(a.animated.div, {
            className: m.containerPadding,
            style: S,
            'aria-hidden': E,
            children:
                C === f.x.HIDDEN
                    ? (0, r.jsx)('div', { className: o()(m.bar, m.emptyBar) })
                    : C === f.x.UNREAD
                      ? (0, r.jsxs)(c.P3F, {
                            className: m.bar,
                            onClick: x,
                            children: [
                                'bottom' === t
                                    ? (0, r.jsx)(c.CJ0, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: m.unreadIcon,
                                          height: 14,
                                          width: 14
                                      })
                                    : (0, r.jsx)(c.u04, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: m.unreadIcon,
                                          height: 14,
                                          width: 14
                                      }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'interactive-normal',
                                    className: m.barText,
                                    children: g.intl.string(g.t.FCRiT0)
                                })
                            ]
                        })
                      : C === f.x.MENTIONS
                        ? (0, r.jsx)(c.P3F, {
                              className: o()(m.bar, m.mentionsBar),
                              onClick: x,
                              children: (0, r.jsx)(c.Text, {
                                  variant: 'text-xs/semibold',
                                  color: 'status-danger-text',
                                  className: m.barText,
                                  children: g.intl.format(g.t.EQcLys, { count: v })
                              })
                          })
                        : C === f.x.VOICE_CHANNELS
                          ? (0, r.jsx)(_, {
                                jumpToVoiceChannels: u,
                                guildChannels: n,
                                guildChannelsVersion: l
                            })
                          : void 0
        })
    });
}
