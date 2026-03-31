n.d(t, { A: () => c });
var i = n(64700),
    l = n(311907),
    s = n(354583),
    a = n(616356),
    r = n(383501),
    o = n(977997);
function c(e) {
    let t = (0, l.bG)([r.A], () => r.A.getGuildId()),
        n = e.children.map((e) => e.id),
        c = null != t && n.includes(t),
        d = !1,
        u = !1,
        h = !1,
        A = (0, l.bG)([r.A], () => r.A.getChannelId()),
        _ = (0, s.A)()?.guild_id,
        m = null != _ && n.includes(_),
        g = (0, l.bG)([o.A], () => null != A && o.A.hasVideo(A), [A]),
        p = (0, l.bG)([a.A], () => a.A.getCurrentUserActiveStream());
    return (
        c && ((d = !g), (u = g), (h = null != p && null != p.guildId && n.includes(p.guildId))),
        i.useMemo(
            () => ({ audio: d, video: u, screenshare: h, liveStage: m, isCurrentUserConnected: c }),
            [d, u, h, m, c],
        )
    );
}
