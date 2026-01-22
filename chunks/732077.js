n.d(t, {
    A: () => b,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(734057),
    u = n(607567),
    d = n(403362),
    f = n(108197),
    p = n(985018),
    h = n(316945);
let b = l.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: b } = e,
        { density: g } = (0, o.wRf)(),
        m = (0, s.yK)([c.A], () => i.map((e) => c.A.getChannel(e)).filter(d.Vq), [i]),
        A = (0, s.bG)([u.Ay], () => {
            let e = m[m.length - 1];
            if (null == e) return 0;
            let t = u.Ay.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, r.jsx)("li", {
        className: h.kL,
        children: (0, r.jsxs)("ul", {
            role: "group",
            "aria-label": p.intl.formatToPlainString(p.t.EiyIi6, {
                channelName: t.name,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: a()(h.eh, {
                        [h.ET]: b,
                    }),
                    style: {
                        bottom: ("cozy" === g ? 28 : 24) + A,
                    },
                }),
                m.map((e, t) =>
                    (0, r.jsx)(
                        f.A,
                        {
                            thread: e,
                            isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
                            isSelectedVoice: l === e.id,
                            isLast: t === m.length - 1,
                            withGuildIcon: b,
                        },
                        e.id,
                    ),
                ),
            ],
        }),
    });
});
