n.d(t, { A: () => c });
var r = n(64700),
    l = n(311907),
    i = n(354583),
    a = n(616356),
    s = n(383501),
    o = n(977997);
function c(e) {
    var t;
    let n = (0, l.bG)([s.A], () => s.A.getGuildId()),
        c = e.children.map((e) => e.id),
        u = null != n && c.includes(n),
        d = !1,
        f = !1,
        p = !1,
        h = (0, l.bG)([s.A], () => s.A.getChannelId()),
        b = null == (t = (0, i.A)()) ? void 0 : t.guild_id,
        g = null != b && c.includes(b),
        m = (0, l.bG)([o.A], () => null != h && o.A.hasVideo(h), [h]),
        A = (0, l.bG)([a.A], () => a.A.getCurrentUserActiveStream());
    return (
        u && ((d = !m), (f = m), (p = null != A && null != A.guildId && c.includes(A.guildId))),
        r.useMemo(
            () => ({
                audio: d,
                video: f,
                screenshare: p,
                liveStage: g,
                isCurrentUserConnected: u,
            }),
            [d, f, p, g, u],
        )
    );
}
