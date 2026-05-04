"use strict";
n.d(t, { A: () => h });
var i = n(478437),
    r = n(17928),
    s = n(228366),
    a = n(587626),
    o = n(927813);
let l = new Set(),
    u = {};
function c(e) {
    return new Date(e * o.A.Millis.SECOND).getTime();
}
function d() {
    l.clear();
}
function _(e) {
    l.delete(e.guild.id);
}
class f extends r.Ay.Store {
    initialize() {
        this.waitFor(a.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(e) {
        if (null != e && null != e.guild_id && e.type === i.r.GUILD_VOICE) return u[e.guild_id]?.[e.id];
    }
    hasRequestedStartTimes(e) {
        return l.has(e);
    }
}
let h = new f(s.h, {
    GUILD_CREATE: _,
    GUILD_DELETE: _,
    CONNECTION_RESUMED: d,
    CONNECTION_OPEN: d,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: t, id: n, voiceStartTime: i } = e;
        null == u[t] && (u[t] = {}), (u[t][n] = null != i ? c(i) : void 0);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: n } = e;
        for (let { id: e, voiceStartTime: i } of ((u[t] = {}), n)) u[t][e] = null != i ? c(i) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        l.add(t);
    },
});
