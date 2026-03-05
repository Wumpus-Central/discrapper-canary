n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    r = n(158954),
    a = n(956793),
    s = n(265422),
    o = n(986268),
    d = n(529200),
    c = n(309010),
    u = n(967198),
    _ = n(954571),
    m = n(652215),
    h = n(985018),
    p = n(42441);
function g(e) {
    let { guild: t, channel: n, message: g } = e,
        A = u.A.getGuildId(),
        x = c.A.getChannelId(A),
        f = l.useCallback(() => {
            _.default.track(m.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: g.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: A,
                channel_id: x,
            }),
                (0, s.i)(t.id, n.id),
                a.default.selectVoiceChannel(n.id);
        }, [g, t, n, A, x]),
        C = (0, i.jsx)(d.A.Channel, { channel: n });
    return (0, i.jsx)(d.A, {
        children: (0, i.jsxs)(d.A.Body, {
            children: [
                (0, i.jsxs)("div", {
                    className: p.iH,
                    children: [
                        (0, i.jsx)(d.A.Icon, { guild: t }),
                        (0, i.jsx)(d.A.Info, {
                            title: C,
                            onClick: f,
                            children: (0, i.jsxs)("span", {
                                className: p.FA,
                                children: [
                                    h.intl.format(h.t["2wimj5"], { guildName: t.name }),
                                    (0, i.jsx)("span", {
                                        className: p.E3,
                                        children: (0, i.jsx)(o.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: p.UD,
                    children: (0, i.jsx)(r.$nd, {
                        fullWidth: !0,
                        onClick: f,
                        variant: "active",
                        text: n.isGuildStageVoice() ? h.intl.string(h.t["7vb2cc"]) : h.intl.string(h.t["96ANUN"]),
                    }),
                }),
            ],
        }),
    });
}
