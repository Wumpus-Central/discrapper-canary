"use strict";
a.d(t, { A: () => u });
var n = a(478437),
    r = a(311907),
    i = a(73153),
    s = a(142120);
let l = new Set(),
    o = {};
function d() {
    l.clear();
}
function c(e) {
    l.delete(e.guild.id);
}
class _ extends r.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "ChannelStatusStore";
    getChannelStatus(e) {
        if (null != e && null != e.guild_id && e.type === n.r.GUILD_VOICE) return o[e.guild_id]?.[e.id];
    }
    hasRequestedStatuses(e) {
        return l.has(e);
    }
}
let u = new _(i.h, {
    GUILD_CREATE: c,
    GUILD_DELETE: c,
    CONNECTION_RESUMED: d,
    CONNECTION_OPEN: d,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        null == o[e.guildId] && (o[e.guildId] = {}), (o[e.guildId][e.id] = e.status);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: a } = e;
        for (let { id: e, status: n } of ((o[t] = {}), a)) o[t][e] = n;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        l.add(t);
    },
});
