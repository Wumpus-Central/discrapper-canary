n.d(t, { Z: () => f });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(540059),
    d = n(592125),
    u = n(938475),
    h = n(823379),
    p = n(734190),
    m = n(388032),
    g = n(329986);
let f = l.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: r, withGuildIcon: f } = e,
        { density: _ } = (0, s.TCT)(),
        v = (0, c.Q3)('GuildSidebarThreadList'),
        x = (0, o.Wu)([d.Z], () => r.map((e) => d.Z.getChannel(e)).filter(h.lm), [r]),
        C = (0, o.e7)([u.ZP], () => {
            let e = x[x.length - 1];
            if (null == e) return 0;
            let t = u.ZP.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, i.jsx)('li', {
        className: g.container,
        children: (0, i.jsxs)('ul', {
            role: 'group',
            'aria-label': m.intl.formatToPlainString(m.t.EiyIi4, { channelName: t.name }),
            children: [
                (0, i.jsx)('div', {
                    className: a()(g.spineBorder, { [g.spineBorderWithGuildIcon]: f }),
                    style: { bottom: (v && 'cozy' === _ ? 28 : 24) + C }
                }),
                x.map((e, t) =>
                    (0, i.jsx)(
                        p.Z,
                        {
                            thread: e,
                            isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
                            isSelectedVoice: l === e.id,
                            isLast: t === x.length - 1,
                            withGuildIcon: f
                        },
                        e.id
                    )
                )
            ]
        })
    });
});
