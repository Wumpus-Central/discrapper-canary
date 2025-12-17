n.d(t, { Z: () => c });
var r = n(473749),
    i = n(442837),
    l = n(623633),
    a = n(199902),
    o = n(19780),
    s = n(979651);
function c(e) {
    var t;
    let n = (0, i.e7)([o.Z], () => o.Z.getGuildId()),
        c = e.children.map((e) => e.id),
        u = null != n && c.includes(n),
        d = !1,
        f = !1,
        h = !1,
        p = (0, i.e7)([o.Z], () => o.Z.getChannelId()),
        g = null == (t = (0, l.Z)()) ? void 0 : t.guild_id,
        b = null != g && c.includes(g),
        m = (0, i.e7)([s.Z], () => null != p && s.Z.hasVideo(p), [p]),
        y = (0, i.e7)([a.Z], () => a.Z.getCurrentUserActiveStream());
    return (
        u && ((d = !m), (f = m), (h = null != y && null != y.guildId && c.includes(y.guildId))),
        r.useMemo(
            () => ({
                audio: d,
                video: f,
                screenshare: h,
                liveStage: b,
                isCurrentUserConnected: u,
            }),
            [d, f, h, b, u],
        )
    );
}
