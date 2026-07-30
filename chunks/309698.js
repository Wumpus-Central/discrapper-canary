l.d(e, { A: () => A });
var a = l(478437),
    C = l(17928),
    i = l(228366),
    s = l(617710);
let n = new Set(),
    u = {};
function d() {
    n.clear();
}
function c(t) {
    n.delete(t.guild.id);
}
class r extends C.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "ChannelStatusStore";
    getChannelStatus(t) {
        if (null != t && null != t.guild_id && t.type === a.r.GUILD_VOICE) return u[t.guild_id]?.[t.id];
    }
    hasRequestedStatuses(t) {
        return n.has(t);
    }
}
let A = new r(i.h, {
    GUILD_CREATE: c,
    GUILD_DELETE: c,
    CONNECTION_RESUMED: d,
    CONNECTION_OPEN: d,
    VOICE_CHANNEL_STATUS_UPDATE: function (t) {
        null == u[t.guildId] && (u[t.guildId] = {}), (u[t.guildId][t.id] = t.status);
    },
    CHANNEL_INFO: function (t) {
        let { guildId: e, channels: l } = t;
        for (let { id: t, status: a } of ((u[e] = {}), l)) u[e][t] = a;
    },
    FETCH_CHANNEL_INFO: function (t) {
        let { guildId: e } = t;
        n.add(e);
    },
});
