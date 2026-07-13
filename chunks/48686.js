n.d(t, { Q: () => c, t: () => o });
var i = n(17928),
    r = n(734057),
    l = n(71393),
    s = n(309010),
    a = n(652215);
function o() {
    let e = s.A.getVoiceChannelId();
    if (null == e) return !1;
    let t = r.A.getChannel(e);
    if (null == t) return !1;
    let n = l.A.getGuild(t.getGuildId());
    return null != n && n.features.has(a.GuildFeatures.HUB);
}
function c(e) {
    return (0, i.bG)([s.A, r.A, l.A], () => {
        let t = s.A.getVoiceChannelId();
        if (null == t) return !1;
        let n = r.A.getChannel(t);
        if (null == n) return !1;
        let i = l.A.getGuild(n.getGuildId());
        return null != i && i.id === e;
    });
}
