n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(81239),
    s = n(442837),
    c = n(481060),
    u = n(492162),
    d = n(237583),
    p = n(451478),
    f = n(934415),
    h = n(414641),
    g = n(388032),
    m = n(305458);
let b = {
    friction: 30,
    tension: 300,
};
function y(e) {
    var t;
    let { guildChannels: n, jumpToVoiceChannels: l } = e,
        o = n.getCategoryFromSection(n.voiceChannelsSectionNumber),
        s = (0, u.Z)(n.id),
        p = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), l();
            },
            [l],
        ),
        h = null != (t = null == o ? void 0 : o.getChannelRecords()) ? t : [],
        b = (0, f.c4)({
            channels: h,
            selectedChannelId: null,
            selectedVoiceChannelId: null,
            voiceStates: s,
        });
    return (0, r.jsxs)(c.P3F, {
        className: a()(m.bar, m.voiceBar),
        onClick: p,
        children: [
            (0, r.jsx)(c.gj8, {
                size: "custom",
                className: m.voiceChannelsIcon,
                width: 14,
                height: 14,
                color: "currentColor",
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-xs/semibold",
                className: m.barText,
                children: g.intl.format(g.t["fDlr+F"], { count: b.length }),
            }),
            (0, r.jsx)(d.Z, {
                guildId: n.id,
                className: m.voiceChannelsUsers,
                users: b.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: c.EFr.SIZE_16,
            }),
        ],
    });
}
function v(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: u, jumpToChannel: d } = e,
        { bottomBar: f, topBar: v } = (0, s.cj)([h.Z], () => h.Z.getUnreadStateForGuildId(n.id)),
        O = (0, s.e7)([p.Z], () => p.Z.isFocused()),
        { mode: j, mentionCount: x, targetChannelId: C } = "bottom" === t ? f : v,
        E = j === h.x.HIDDEN,
        S = (0, c.q_F)(
            {
                to: { transform: E ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: b,
            },
            O ? "respect-motion-settings" : "animate-never",
        ),
        _ = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != C && d(C);
            },
            [d, C],
        );
    return (0, r.jsx)("div", {
        className: a()(m.container, {
            [m.top]: "top" === t,
            [m.bottom]: "bottom" === t,
        }),
        children: (0, r.jsx)(o.animated.div, {
            className: m.containerPadding,
            style: S,
            "aria-hidden": E,
            children:
                j === h.x.HIDDEN
                    ? (0, r.jsx)("div", { className: a()(m.bar, m.emptyBar) })
                    : j === h.x.UNREAD
                      ? (0, r.jsxs)(c.P3F, {
                            className: m.bar,
                            onClick: _,
                            children: [
                                "bottom" === t
                                    ? (0, r.jsx)(c.CJ0, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: m.unreadIcon,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, r.jsx)(c.u04, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: m.unreadIcon,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: m.barText,
                                    children: g.intl.string(g.t.FCRiT3),
                                }),
                            ],
                        })
                      : j === h.x.MENTIONS
                        ? (0, r.jsx)(c.P3F, {
                              className: a()(m.bar, m.mentionsBar),
                              onClick: _,
                              children: (0, r.jsx)(c.Text, {
                                  variant: "text-xs/semibold",
                                  color: "badge-text-brand",
                                  className: m.barText,
                                  children: g.intl.format(g.t.EQcLyp, { count: x }),
                              }),
                          })
                        : j === h.x.VOICE_CHANNELS
                          ? (0, r.jsx)(y, {
                                jumpToVoiceChannels: u,
                                guildChannels: n,
                                guildChannelsVersion: l,
                            })
                          : void 0,
        }),
    });
}
