n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(734057),
    r = n(71393),
    s = n(576705),
    o = n(821609),
    c = n(956793),
    d = n(265422),
    u = n(537547),
    _ = n(529200),
    m = n(309010),
    h = n(967198),
    p = n(954571),
    g = n(652215),
    f = n(985018),
    x = n(344900);
function A(e) {
    let { guild: t, channel: n, message: a } = e,
        r = h.A.getGuildId(),
        s = m.A.getChannelId(r),
        A = l.useCallback(() => {
            p.default.track(g.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: a.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: r,
                channel_id: s,
            }),
                (0, d.i)(t.id, n.id),
                c.default.selectVoiceChannel(n.id);
        }, [a, t, n, r, s]),
        C = (0, i.jsx)(_.A.Channel, { channel: n });
    return (0, i.jsx)(_.A, {
        children: (0, i.jsxs)(_.A.Body, {
            children: [
                (0, i.jsxs)("div", {
                    className: x.iH,
                    children: [
                        (0, i.jsx)(_.A.Icon, { guild: t }),
                        (0, i.jsx)(_.A.Info, {
                            title: C,
                            onClick: A,
                            children: (0, i.jsxs)("span", {
                                className: x.FA,
                                children: [
                                    f.intl.format(f.t["2wimj5"], { guildName: t.name }),
                                    (0, i.jsx)("span", {
                                        className: x.E3,
                                        children: (0, i.jsx)(u.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: x.UD,
                    children: (0, i.jsx)(o.$, {
                        fullWidth: !0,
                        onClick: A,
                        variant: "active",
                        text: n.isGuildStageVoice() ? f.intl.string(f.t["7vb2cc"]) : f.intl.string(f.t["96ANUN"]),
                    }),
                }),
            ],
        }),
    });
}
function C(e) {
    let { code: t, message: n } = e,
        [l, o] = t.split("/"),
        c = a.A.getChannel(o),
        d = r.A.getGuild(l);
    return null != c && c.isGuildVocal() && null != d && s.A.can(g.xBc.VIEW_CHANNEL, c) && s.A.can(g.xBc.CONNECT, c)
        ? (0, i.jsx)(A, { guild: d, channel: c, message: n })
        : null;
}
