"use strict";
n.d(t, { Q: () => u, t: () => l });
var r = n(311907),
    i = n(734057),
    a = n(71393),
    s = n(309010),
    o = n(652215);
let l = () => {
        let e = s.A.getVoiceChannelId();
        if (null == e) return !1;
        let t = i.A.getChannel(e);
        if (null == t) return !1;
        let n = a.A.getGuild(t.getGuildId());
        return null != n && n.features.has(o.GuildFeatures.HUB);
    },
    u = (e) =>
        (0, r.bG)([s.A, i.A, a.A], () => {
            let t = s.A.getVoiceChannelId();
            if (null == t) return !1;
            let n = i.A.getChannel(t);
            if (null == n) return !1;
            let r = a.A.getGuild(n.getGuildId());
            return null != r && r.id === e;
        });
