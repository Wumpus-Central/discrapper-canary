n.d(t, { Z: () => c });
var r = n(192379),
    i = n(442837),
    l = n(623633),
    o = n(199902),
    s = n(19780),
    a = n(979651);
function c(e) {
    var t;
    let n = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
        c = e.children.map((e) => e.id),
        u = null != n && c.includes(n),
        d = !1,
        h = !1,
        p = !1,
        f = (0, i.e7)([s.Z], () => s.Z.getChannelId()),
        g = null == (t = (0, l.Z)()) ? void 0 : t.guild_id,
        m = null != g && c.includes(g),
        b = (0, i.e7)([a.Z], () => null != f && a.Z.hasVideo(f), [f]),
        _ = (0, i.e7)([o.Z], () => o.Z.getCurrentUserActiveStream());
    return (
        u && ((d = !b), (h = b), (p = null != _ && null != _.guildId && c.includes(_.guildId))),
        r.useMemo(
            () => ({
                audio: d,
                video: h,
                screenshare: p,
                liveStage: m,
                isCurrentUserConnected: u
            }),
            [d, h, p, m, u]
        )
    );
}
