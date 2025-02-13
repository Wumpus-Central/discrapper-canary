n.d(t, { Z: () => c });
var i = n(192379),
    l = n(442837),
    r = n(623633),
    o = n(199902),
    a = n(19780),
    s = n(979651);
function c(e) {
    var t;
    let n = (0, l.e7)([a.Z], () => a.Z.getGuildId()),
        c = e.children.map((e) => e.id),
        d = null != n && c.includes(n),
        u = !1,
        h = !1,
        p = !1,
        m = (0, l.e7)([a.Z], () => a.Z.getChannelId()),
        g = null === (t = (0, r.Z)()) || void 0 === t ? void 0 : t.guild_id,
        f = null != g && c.includes(g),
        _ = (0, l.e7)([s.Z], () => null != m && s.Z.hasVideo(m), [m]),
        v = (0, l.e7)([o.Z], () => o.Z.getCurrentUserActiveStream());
    return (
        d && ((u = !_), (h = _), (p = null != v && null != v.guildId && c.includes(v.guildId))),
        i.useMemo(
            () => ({
                audio: u,
                video: h,
                screenshare: p,
                liveStage: f,
                isCurrentUserConnected: d
            }),
            [u, h, p, f, d]
        )
    );
}
