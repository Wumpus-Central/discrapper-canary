"use strict";
n.d(t, { A: () => c });
var i = n(311907),
    s = n(95701),
    l = n(734057),
    r = n(71393),
    a = n(309010),
    o = n(652215);
function c(e, t) {
    return (0, i.bG)([l.A, r.A, a.A], () => {
        let n = r.A.getGuild(t);
        if (
            !(
                n?.features.has(o.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                n.features.has(o.GuildFeatures.COMMUNITY)
            ) ||
            n.features.has(o.GuildFeatures.GUILD_SERVER_GUIDE)
        )
            return !1;
        let i = l.A.getChannel(e);
        return e === a.A.getChannelId(t) && null != i && i.getGuildId() === n.id && (0, s.ke)(i.type);
    });
}
