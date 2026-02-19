"use strict";
n.d(t, { A: () => m });
var i = n(478437),
    s = n(574381),
    l = n(311907),
    r = n(73153),
    a = n(142120),
    o = n(927813),
    c = n(661470);
let d = new Set(),
    u = {};
function h(e) {
    return new Date(e * o.A.Millis.SECOND).getTime();
}
function A() {
    d.clear();
}
function p(e) {
    d.delete(e.guild.id);
}
class g extends l.Ay.Store {
    initialize() {
        this.waitFor(a.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(e) {
        if (null != e && null != e.guild_id && e.type === i.r.GUILD_VOICE) return u[e.guild_id]?.[e.id];
    }
    hasRequestedStartTimes(e) {
        return d.has(e);
    }
}
let m = new g(r.h, {
    GUILD_CREATE: p,
    GUILD_DELETE: p,
    CONNECTION_RESUMED: A,
    CONNECTION_OPEN: A,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: t, id: n, voiceStartTime: i } = e,
            l = c.L.getCurrentConfig({ guildId: t, location: "VoiceChannelStartTimeStore" }).enabled;
        if (((0, s.un)() || (0, s.m0)()) && !l) return !1;
        null == u[t] && (u[t] = {}), (u[t][n] = null != i ? h(i) : void 0);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: n } = e;
        for (let { id: e, voiceStartTime: i } of ((u[t] = {}), n)) u[t][e] = null != i ? h(i) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        d.add(t), a.A.getSocket().requestChannelInfo(t, ["status", "voice_start_time"]);
    },
});
