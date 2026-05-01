"use strict";
n.d(t, { Q: () => u, t: () => l });
var i = n(17928),
    r = n(734057),
    s = n(71393),
    a = n(309010),
    o = n(652215);
let l = () => {
        let e = a.A.getVoiceChannelId();
        if (null == e) return !1;
        let t = r.A.getChannel(e);
        if (null == t) return !1;
        let n = s.A.getGuild(t.getGuildId());
        return null != n && n.features.has(o.GuildFeatures.HUB);
    },
    u = (e) =>
        (0, i.bG)([a.A, r.A, s.A], () => {
            let t = a.A.getVoiceChannelId();
            if (null == t) return !1;
            let n = r.A.getChannel(t);
            if (null == n) return !1;
            let i = s.A.getGuild(n.getGuildId());
            return null != i && i.id === e;
        });
