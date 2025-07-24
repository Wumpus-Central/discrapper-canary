n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(592125),
    u = n(938475),
    d = n(823379),
    h = n(734190),
    p = n(388032),
    f = n(995453);
let g = i.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: i, sortedThreadIds: l, withGuildIcon: g } = e,
        { density: m } = (0, s.TCT)(),
        b = (0, a.Wu)([c.Z], () => l.map((e) => c.Z.getChannel(e)).filter(d.lm), [l]),
        _ = (0, a.e7)([u.ZP], () => {
            let e = b[b.length - 1];
            if (null == e) return 0;
            let t = u.ZP.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, r.jsx)('li', {
        className: f.container,
        children: (0, r.jsxs)('ul', {
            role: 'group',
            'aria-label': p.intl.formatToPlainString(p.t.EiyIi4, { channelName: t.name }),
            children: [
                (0, r.jsx)('div', {
                    className: o()(f.spineBorder, { [f.spineBorderWithGuildIcon]: g }),
                    style: { bottom: ('cozy' === m ? 28 : 24) + _ }
                }),
                b.map((e, t) =>
                    (0, r.jsx)(
                        h.Z,
                        {
                            thread: e,
                            isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
                            isSelectedVoice: i === e.id,
                            isLast: t === b.length - 1,
                            withGuildIcon: g
                        },
                        e.id
                    )
                )
            ]
        })
    });
});
