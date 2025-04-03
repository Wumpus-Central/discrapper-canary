n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(540059),
    u = n(592125),
    d = n(938475),
    p = n(823379),
    h = n(734190),
    f = n(388032),
    g = n(995453);
let m = i.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: i, sortedThreadIds: l, withGuildIcon: m } = e,
        { density: b } = (0, s.TCT)(),
        y = (0, c.Q3)('GuildSidebarThreadList'),
        _ = (0, a.Wu)([u.Z], () => l.map((e) => u.Z.getChannel(e)).filter(p.lm), [l]),
        v = (0, a.e7)([d.ZP], () => {
            let e = _[_.length - 1];
            if (null == e) return 0;
            let t = d.ZP.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, r.jsx)('li', {
        className: g.container,
        children: (0, r.jsxs)('ul', {
            role: 'group',
            'aria-label': f.NW.formatToPlainString(f.t.EiyIi4, { channelName: t.name }),
            children: [
                (0, r.jsx)('div', {
                    className: o()(g.spineBorder, { [g.spineBorderWithGuildIcon]: m }),
                    style: { bottom: (y && 'cozy' === b ? 28 : 24) + v }
                }),
                _.map((e, t) =>
                    (0, r.jsx)(
                        h.Z,
                        {
                            thread: e,
                            isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
                            isSelectedVoice: i === e.id,
                            isLast: t === _.length - 1,
                            withGuildIcon: m
                        },
                        e.id
                    )
                )
            ]
        })
    });
});
