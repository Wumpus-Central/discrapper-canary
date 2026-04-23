"use strict";
n.d(t, { A: () => A });
var l = n(478437),
    a = n(574381),
    s = n(311907),
    i = n(73153),
    r = n(142120),
    o = n(927813),
    c = n(869180);
let u = new Set(),
    d = {};
function m(e) {
    return new Date(e * o.A.Millis.SECOND).getTime();
}
function g() {
    u.clear();
}
function h(e) {
    u.delete(e.guild.id);
}
class p extends s.Ay.Store {
    initialize() {
        this.waitFor(r.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(e) {
        if (null != e && null != e.guild_id && e.type === l.r.GUILD_VOICE) return d[e.guild_id]?.[e.id];
    }
    hasRequestedStartTimes(e) {
        return u.has(e);
    }
}
let A = new p(i.h, {
    GUILD_CREATE: h,
    GUILD_DELETE: h,
    CONNECTION_RESUMED: g,
    CONNECTION_OPEN: g,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: t, id: n, voiceStartTime: l } = e,
            s = c.L.getCurrentConfig({ guildId: t, location: "VoiceChannelStartTimeStore" }).enabled;
        if (((0, a.un)() || (0, a.m0)()) && !s) return !1;
        null == d[t] && (d[t] = {}), (d[t][n] = null != l ? m(l) : void 0);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: n } = e;
        for (let { id: e, voiceStartTime: l } of ((d[t] = {}), n)) d[t][e] = null != l ? m(l) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        u.add(t);
    },
});
