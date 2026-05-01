n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(734057),
    a = n(71393),
    r = n(576705),
    o = n(821609),
    d = n(956793),
    c = n(265422),
    u = n(986268),
    m = n(529200),
    h = n(309010),
    g = n(967198),
    A = n(954571),
    p = n(652215),
    x = n(985018),
    f = n(344900);
function C(e) {
    let { guild: t, channel: n, message: s } = e,
        a = g.A.getGuildId(),
        r = h.A.getChannelId(a),
        C = l.useCallback(() => {
            A.default.track(p.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: s.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: a,
                channel_id: r,
            }),
                (0, c.i)(t.id, n.id),
                d.default.selectVoiceChannel(n.id);
        }, [s, t, n, a, r]),
        E = (0, i.jsx)(m.A.Channel, { channel: n });
    return (0, i.jsx)(m.A, {
        children: (0, i.jsxs)(m.A.Body, {
            children: [
                (0, i.jsxs)("div", {
                    className: f.iH,
                    children: [
                        (0, i.jsx)(m.A.Icon, { guild: t }),
                        (0, i.jsx)(m.A.Info, {
                            title: E,
                            onClick: C,
                            children: (0, i.jsxs)("span", {
                                className: f.FA,
                                children: [
                                    x.intl.format(x.t["2wimj5"], { guildName: t.name }),
                                    (0, i.jsx)("span", {
                                        className: f.E3,
                                        children: (0, i.jsx)(u.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: f.UD,
                    children: (0, i.jsx)(o.$, {
                        fullWidth: !0,
                        onClick: C,
                        variant: "active",
                        text: n.isGuildStageVoice() ? x.intl.string(x.t["7vb2cc"]) : x.intl.string(x.t["96ANUN"]),
                    }),
                }),
            ],
        }),
    });
}
function E(e) {
    let { code: t, message: n } = e,
        [l, o] = t.split("/"),
        d = s.A.getChannel(o),
        c = a.A.getGuild(l);
    return null != d && d.isGuildVocal() && null != c && r.A.can(p.xBc.VIEW_CHANNEL, d) && r.A.can(p.xBc.CONNECT, d)
        ? (0, i.jsx)(C, { guild: c, channel: d, message: n })
        : null;
}
