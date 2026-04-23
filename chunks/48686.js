n.d(t, { Q: () => o, t: () => l });
var i = n(17928),
    r = n(734057),
    a = n(71393),
    s = n(309010),
    _ = n(652215);
let l = () => {
        let e = s.A.getVoiceChannelId();
        if (null == e) return !1;
        let t = r.A.getChannel(e);
        if (null == t) return !1;
        let n = a.A.getGuild(t.getGuildId());
        return null != n && n.features.has(_.GuildFeatures.HUB);
    },
    o = (e) =>
        (0, i.bG)([s.A, r.A, a.A], () => {
            let t = s.A.getVoiceChannelId();
            if (null == t) return !1;
            let n = r.A.getChannel(t);
            if (null == n) return !1;
            let i = a.A.getGuild(n.getGuildId());
            return null != i && i.id === e;
        });
