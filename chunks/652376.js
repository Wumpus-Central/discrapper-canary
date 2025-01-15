n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(623633),
    a = n(199902),
    o = n(19780),
    s = n(979651);
function c(e) {
    var t;
    let n = (0, l.e7)([o.Z], () => o.Z.getGuildId()),
        c = e.children.map((e) => e.id),
        u = null != n && c.includes(n),
        d = !1,
        h = !1,
        p = !1,
        m = (0, l.e7)([o.Z], () => o.Z.getChannelId()),
        f = null === (t = (0, r.Z)()) || void 0 === t ? void 0 : t.guild_id,
        g = null != f && c.includes(f),
        v = (0, l.e7)([s.Z], () => null != m && s.Z.hasVideo(m), [m]),
        C = (0, l.e7)([a.Z], () => a.Z.getCurrentUserActiveStream());
    return (
        u && ((d = !v), (h = v), (p = null != C && null != C.guildId && c.includes(C.guildId))),
        i.useMemo(
            () => ({
                audio: d,
                video: h,
                screenshare: p,
                liveStage: g,
                isCurrentUserConnected: u
            }),
            [d, h, p, g, u]
        )
    );
}
