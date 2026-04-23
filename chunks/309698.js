"use strict";
n.d(t, { A: () => _ });
var a = n(478437),
    i = n(311907),
    r = n(73153),
    s = n(142120);
let l = new Set(),
    o = {};
function c() {
    l.clear();
}
function d(e) {
    l.delete(e.guild.id);
}
class u extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "ChannelStatusStore";
    getChannelStatus(e) {
        if (null != e && null != e.guild_id && e.type === a.r.GUILD_VOICE) return o[e.guild_id]?.[e.id];
    }
    hasRequestedStatuses(e) {
        return l.has(e);
    }
}
let _ = new u(r.h, {
    GUILD_CREATE: d,
    GUILD_DELETE: d,
    CONNECTION_RESUMED: c,
    CONNECTION_OPEN: c,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        null == o[e.guildId] && (o[e.guildId] = {}), (o[e.guildId][e.id] = e.status);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: n } = e;
        for (let { id: e, status: a } of ((o[t] = {}), n)) o[t][e] = a;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        l.add(t);
    },
});
