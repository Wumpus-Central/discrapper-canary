"use strict";
n.d(t, { A: () => _ });
var i = n(478437),
    r = n(17928),
    a = n(228366),
    s = n(617710);
let l = new Set(),
    o = {};
function d() {
    l.clear();
}
function c(e) {
    l.delete(e.guild.id);
}
class u extends r.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "ChannelStatusStore";
    getChannelStatus(e) {
        if (null != e && null != e.guild_id && e.type === i.r.GUILD_VOICE) return o[e.guild_id]?.[e.id];
    }
    hasRequestedStatuses(e) {
        return l.has(e);
    }
}
let _ = new u(a.h, {
    GUILD_CREATE: c,
    GUILD_DELETE: c,
    CONNECTION_RESUMED: d,
    CONNECTION_OPEN: d,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        null == o[e.guildId] && (o[e.guildId] = {}), (o[e.guildId][e.id] = e.status);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: n } = e;
        for (let { id: e, status: i } of ((o[t] = {}), n)) o[t][e] = i;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        l.add(t);
    },
});
