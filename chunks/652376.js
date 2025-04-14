n.d(t, { Z: () => c });
var r = n(192379),
    i = n(442837),
    l = n(623633),
    o = n(199902),
    a = n(19780),
    s = n(979651);
function c(e) {
    var t;
    let n = (0, i.e7)([a.Z], () => a.Z.getGuildId()),
        c = e.children.map((e) => e.id),
        u = null != n && c.includes(n),
        d = !1,
        p = !1,
        h = !1,
        f = (0, i.e7)([a.Z], () => a.Z.getChannelId()),
        g = null == (t = (0, l.Z)()) ? void 0 : t.guild_id,
        m = null != g && c.includes(g),
        b = (0, i.e7)([s.Z], () => null != f && s.Z.hasVideo(f), [f]),
        _ = (0, i.e7)([o.Z], () => o.Z.getCurrentUserActiveStream());
    return (
        u && ((d = !b), (p = b), (h = null != _ && null != _.guildId && c.includes(_.guildId))),
        r.useMemo(
            () => ({
                audio: d,
                video: p,
                screenshare: h,
                liveStage: m,
                isCurrentUserConnected: u
            }),
            [d, p, h, m, u]
        )
    );
}
