n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(734057),
    c = n(607567),
    u = n(403362),
    h = n(108197),
    A = n(985018),
    g = n(316945);
let m = l.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: s, withGuildIcon: m } = e,
        { density: p } = (0, o.wRf)(),
        _ = (0, r.yK)([d.A], () => s.map((e) => d.A.getChannel(e)).filter(u.Vq), [s]),
        x = (0, r.bG)([c.Ay], () => {
            let e = _[_.length - 1];
            if (null == e) return 0;
            let t = c.Ay.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, i.jsx)("li", {
        className: g.kL,
        children: (0, i.jsxs)("ul", {
            role: "group",
            "aria-label": A.intl.formatToPlainString(A.t.EiyIi6, { channelName: t.name }),
            children: [
                (0, i.jsx)("div", {
                    className: a()(g.eh, { [g.ET]: m }),
                    style: { bottom: ("cozy" === p ? 28 : 24) + x },
                }),
                _.map((e, t) =>
                    (0, i.jsx)(
                        h.A,
                        {
                            thread: e,
                            isSelectedChannel: n?.id === e.id,
                            isSelectedVoice: l === e.id,
                            isLast: t === _.length - 1,
                            withGuildIcon: m,
                        },
                        e.id,
                    ),
                ),
            ],
        }),
    });
});
