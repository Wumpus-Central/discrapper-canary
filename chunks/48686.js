n.d(t, { Q: () => d, t: () => o });
var i = n(17928),
    a = n(734057),
    r = n(71393),
    s = n(309010),
    l = n(652215);
let o = () => {
        let e = s.A.getVoiceChannelId();
        if (null == e) return !1;
        let t = a.A.getChannel(e);
        if (null == t) return !1;
        let n = r.A.getGuild(t.getGuildId());
        return null != n && n.features.has(l.GuildFeatures.HUB);
    },
    d = (e) =>
        (0, i.bG)([s.A, a.A, r.A], () => {
            let t = s.A.getVoiceChannelId();
            if (null == t) return !1;
            let n = a.A.getChannel(t);
            if (null == n) return !1;
            let i = r.A.getGuild(n.getGuildId());
            return null != i && i.id === e;
        });
