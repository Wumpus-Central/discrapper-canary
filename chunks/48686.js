"use strict";
n.d(t, { Q: () => u, t: () => l });
var r = n(311907),
    i = n(734057),
    s = n(71393),
    a = n(309010),
    o = n(652215);
let l = () => {
        let e = a.A.getVoiceChannelId();
        if (null == e) return !1;
        let t = i.A.getChannel(e);
        if (null == t) return !1;
        let n = s.A.getGuild(t.getGuildId());
        return null != n && n.features.has(o.GuildFeatures.HUB);
    },
    u = (e) =>
        (0, r.bG)([a.A, i.A, s.A], () => {
            let t = a.A.getVoiceChannelId();
            if (null == t) return !1;
            let n = i.A.getChannel(t);
            if (null == n) return !1;
            let r = s.A.getGuild(n.getGuildId());
            return null != r && r.id === e;
        });
