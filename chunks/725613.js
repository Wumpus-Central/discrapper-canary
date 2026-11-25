var i = n(478437),
    r = n(855986),
    a = n(73153),
    s = n(225123),
    l = n(927813);
let o = new Set(),
    d = {};
function c(e) {
    return new Date(e * l.A.Millis.SECOND).getTime();
}
function u() {
    o.clear();
}
function _(e) {
    o.delete(e.guild.id);
}
class E extends r.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(e) {
        if (null != e && null != e.guild_id && e.type === i.r.GUILD_VOICE) return d[e.guild_id]?.[e.id];
    }
    hasRequestedStartTimes(e) {
        return o.has(e);
    }
}
let A = new E(a.h, {
    GUILD_CREATE: _,
    GUILD_DELETE: _,
    CONNECTION_RESUMED: u,
    CONNECTION_OPEN: u,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: t, id: n, voiceStartTime: i } = e;
        (null == d[t] && (d[t] = {}), (d[t][n] = null != i ? c(i) : void 0));
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: n } = e;
        for (let { id: e, voiceStartTime: i } of ((d[t] = {}), n)) d[t][e] = null != i ? c(i) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        o.add(t);
    },
});
n.d(t, {}, { A: A });
