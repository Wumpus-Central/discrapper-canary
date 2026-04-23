n.d(t, { A: () => d });
var i = n(64700),
    l = n(311907),
    s = n(354583),
    a = n(616356),
    r = n(383501),
    o = n(977997);
function d(e) {
    let t = (0, l.bG)([r.A], () => r.A.getGuildId()),
        n = e.children.map((e) => e.id),
        d = null != t && n.includes(t),
        c = !1,
        u = !1,
        h = !1,
        A = (0, l.bG)([r.A], () => r.A.getChannelId()),
        _ = (0, s.A)()?.guild_id,
        m = null != _ && n.includes(_),
        g = (0, l.bG)([o.A], () => null != A && o.A.hasVideo(A), [A]),
        p = (0, l.bG)([a.A], () => a.A.getCurrentUserActiveStream());
    return (
        d && ((c = !g), (u = g), (h = null != p && null != p.guildId && n.includes(p.guildId))),
        i.useMemo(
            () => ({ audio: c, video: u, screenshare: h, liveStage: m, isCurrentUserConnected: d }),
            [c, u, h, m, d],
        )
    );
}
