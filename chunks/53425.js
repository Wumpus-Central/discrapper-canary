var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(540059),
    u = n(592125),
    d = n(938475),
    h = n(823379),
    p = n(734190),
    f = n(388032),
    m = n(329986);
t.Z = l.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: r, withGuildIcon: g } = e,
        { density: v } = (0, s.useThemeContext)(),
        C = (0, c.Q3)('GuildSidebarThreadList'),
        x = (0, o.Wu)([u.Z], () => r.map((e) => u.Z.getChannel(e)).filter(h.lm), [r]),
        I = (0, o.e7)([d.ZP], () => {
            let e = x[x.length - 1];
            if (null == e) return 0;
            let t = d.ZP.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, i.jsx)('li', {
        className: m.container,
        children: (0, i.jsxs)('ul', {
            role: 'group',
            'aria-label': f.intl.formatToPlainString(f.t.EiyIi4, { channelName: t.name }),
            children: [
                (0, i.jsx)('div', {
                    className: a()(m.spineBorder, { [m.spineBorderWithGuildIcon]: g }),
                    style: { bottom: (C && 'cozy' === v ? 28 : 24) + I }
                }),
                x.map((e, t) =>
                    (0, i.jsx)(
                        p.Z,
                        {
                            thread: e,
                            isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
                            isSelectedVoice: l === e.id,
                            isLast: t === x.length - 1,
                            withGuildIcon: g
                        },
                        e.id
                    )
                )
            ]
        })
    });
});
