n.d(t, {
    A: () => m,
});
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(956793),
    o = n(265422),
    l = n(986268),
    c = n(529200),
    u = n(309010),
    d = n(967198),
    f = n(954571),
    p = n(652215),
    _ = n(985018),
    h = n(563111);

function m(e) {
    let { guild: t, channel: n, message: m } = e,
        g = d.A.getGuildId(),
        E = u.A.getChannelId(g),
        b = i.useCallback(() => {
            var e;
            f.default.track(p.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: null == (e = m.author) ? void 0 : e.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: g,
                channel_id: E,
            }),
                (0, o.i)(t.id, n.id),
                s.default.selectVoiceChannel(n.id);
        }, [m, t, n, g, E]),
        y = (0, r.jsx)(c.A.Channel, {
            channel: n,
        });
    return (0, r.jsx)(c.A, {
        children: (0, r.jsxs)(c.A.Body, {
            children: [
                (0, r.jsxs)("div", {
                    className: h.iH,
                    children: [
                        (0, r.jsx)(c.A.Icon, {
                            guild: t,
                        }),
                        (0, r.jsx)(c.A.Info, {
                            title: y,
                            onClick: b,
                            children: (0, r.jsxs)("span", {
                                className: h.FA,
                                children: [
                                    _.intl.format(_.t["2wimj5"], {
                                        guildName: t.name,
                                    }),
                                    (0, r.jsx)("span", {
                                        className: h.E3,
                                        children: (0, r.jsx)(l.A, {
                                            guild: t,
                                            isBannerVisible: !1,
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: h.UD,
                    children: (0, r.jsx)(a.$nd, {
                        fullWidth: !0,
                        onClick: b,
                        variant: "active",
                        text: n.isGuildStageVoice() ? _.intl.string(_.t["7vb2cc"]) : _.intl.string(_.t["96ANUN"]),
                    }),
                }),
            ],
        }),
    });
}
