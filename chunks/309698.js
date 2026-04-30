"use strict";
n.d(t, { A: () => _ });
var i = n(478437),
    r = n(17928),
    s = n(228366),
    a = n(587626);
let o = new Set(),
    l = {};
function u() {
    o.clear();
}
function c(e) {
    o.delete(e.guild.id);
}
class d extends r.Ay.Store {
    initialize() {
        this.waitFor(a.A);
    }
    static displayName = "ChannelStatusStore";
    getChannelStatus(e) {
        if (null != e && null != e.guild_id && e.type === i.r.GUILD_VOICE) return l[e.guild_id]?.[e.id];
    }
    hasRequestedStatuses(e) {
        return o.has(e);
    }
}
let _ = new d(s.h, {
    GUILD_CREATE: c,
    GUILD_DELETE: c,
    CONNECTION_RESUMED: u,
    CONNECTION_OPEN: u,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        null == l[e.guildId] && (l[e.guildId] = {}), (l[e.guildId][e.id] = e.status);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: n } = e;
        for (let { id: e, status: i } of ((l[t] = {}), n)) l[t][e] = i;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        o.add(t);
    },
});
