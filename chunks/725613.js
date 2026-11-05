var l = t(478437),
    i = t(855986),
    a = t(73153),
    s = t(225123),
    r = t(927813);
let c = new Set(),
    d = {};
function o(e) {
    return new Date(e * r.A.Millis.SECOND).getTime();
}
function u() {
    c.clear();
}
function N(e) {
    c.delete(e.guild.id);
}
class g extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(e) {
        if (null != e && null != e.guild_id && e.type === l.r.GUILD_VOICE) return d[e.guild_id]?.[e.id];
    }
    hasRequestedStartTimes(e) {
        return c.has(e);
    }
}
let C = new g(a.h, {
    GUILD_CREATE: N,
    GUILD_DELETE: N,
    CONNECTION_RESUMED: u,
    CONNECTION_OPEN: u,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: n, id: t, voiceStartTime: l } = e;
        (null == d[n] && (d[n] = {}), (d[n][t] = null != l ? o(l) : void 0));
    },
    CHANNEL_INFO: function (e) {
        let { guildId: n, channels: t } = e;
        for (let { id: e, voiceStartTime: l } of ((d[n] = {}), t)) d[n][e] = null != l ? o(l) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: n } = e;
        c.add(n);
    },
});
t.d(n, {}, { A: C });
