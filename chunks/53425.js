n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(592125),
    u = n(938475),
    d = n(823379),
    f = n(734190),
    h = n(388032),
    p = n(50798);
let g = i.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: i, sortedThreadIds: l, withGuildIcon: g } = e,
        { density: b } = (0, s.TCT)(),
        m = (0, o.Wu)([c.Z], () => l.map((e) => c.Z.getChannel(e)).filter(d.lm), [l]),
        y = (0, o.e7)([u.ZP], () => {
            let e = m[m.length - 1];
            if (null == e) return 0;
            let t = u.ZP.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, r.jsx)("li", {
        className: p.container,
        children: (0, r.jsxs)("ul", {
            role: "group",
            "aria-label": h.intl.formatToPlainString(h.t.EiyIi6, { channelName: t.name }),
            children: [
                (0, r.jsx)("div", {
                    className: a()(p.spineBorder, { [p.spineBorderWithGuildIcon]: g }),
                    style: { bottom: ("cozy" === b ? 28 : 24) + y },
                }),
                m.map((e, t) =>
                    (0, r.jsx)(
                        f.Z,
                        {
                            thread: e,
                            isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
                            isSelectedVoice: i === e.id,
                            isLast: t === m.length - 1,
                            withGuildIcon: g,
                        },
                        e.id,
                    ),
                ),
            ],
        }),
    });
});
