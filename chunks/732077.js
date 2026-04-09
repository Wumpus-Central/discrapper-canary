n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(47167),
    c = n(734057),
    u = n(607567),
    h = n(403362),
    A = n(108197),
    _ = n(985018),
    m = n(251843);
let p = l.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: s, withGuildIcon: p } = e,
        g = (0, d.Ay)(t),
        { density: f } = (0, o.wRf)(),
        x = (0, r.yK)([c.A], () => s.map((e) => c.A.getChannel(e)).filter(h.Vq), [s]),
        E = (0, r.bG)([u.Ay], () => {
            let e = x[x.length - 1];
            if (null == e) return 0;
            let t = u.Ay.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, i.jsx)("li", {
        className: m.kL,
        children: (0, i.jsxs)("ul", {
            role: "group",
            "aria-label": _.intl.formatToPlainString(_.t.EiyIi6, { channelName: g }),
            children: [
                (0, i.jsx)("div", {
                    className: a()(m.eh, { [m.ET]: p }),
                    style: { bottom: ("cozy" === f ? 28 : 24) + E },
                }),
                x.map((e, t) =>
                    (0, i.jsx)(
                        A.A,
                        {
                            thread: e,
                            isSelectedChannel: n?.id === e.id,
                            isSelectedVoice: l === e.id,
                            isLast: t === x.length - 1,
                            withGuildIcon: p,
                        },
                        e.id,
                    ),
                ),
            ],
        }),
    });
});
