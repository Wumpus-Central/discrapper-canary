i.d(t, { A: () => A });
var l = i(478437),
    n = i(311907),
    s = i(73153),
    a = i(142120);
let d = new Set(),
    r = {};
function o() {
    d.clear();
}
function c(e) {
    d.delete(e.guild.id);
}
class u extends n.Ay.Store {
    initialize() {
        this.waitFor(a.A);
    }
    static displayName = "ChannelStatusStore";
    getChannelStatus(e) {
        if (null != e && null != e.guild_id && e.type === l.r.GUILD_VOICE) return r[e.guild_id]?.[e.id];
    }
    hasRequestedStatuses(e) {
        return d.has(e);
    }
}
let A = new u(s.h, {
    GUILD_CREATE: c,
    GUILD_DELETE: c,
    CONNECTION_RESUMED: o,
    CONNECTION_OPEN: o,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        null == r[e.guildId] && (r[e.guildId] = {}), (r[e.guildId][e.id] = e.status);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: i } = e;
        for (let { id: e, status: l } of ((r[t] = {}), i)) r[t][e] = l;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        d.add(t);
    },
});
