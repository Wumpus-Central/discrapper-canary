"use strict";
n.d(t, { A: () => f });
var l = n(478437),
    i = n(574381),
    s = n(311907),
    a = n(73153),
    r = n(142120),
    o = n(927813),
    u = n(869180);
let c = new Set(),
    d = {};
function m(e) {
    return new Date(e * o.A.Millis.SECOND).getTime();
}
function g() {
    c.clear();
}
function h(e) {
    c.delete(e.guild.id);
}
class A extends s.Ay.Store {
    initialize() {
        this.waitFor(r.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(e) {
        if (null != e && null != e.guild_id && e.type === l.r.GUILD_VOICE) return d[e.guild_id]?.[e.id];
    }
    hasRequestedStartTimes(e) {
        return c.has(e);
    }
}
let f = new A(a.h, {
    GUILD_CREATE: h,
    GUILD_DELETE: h,
    CONNECTION_RESUMED: g,
    CONNECTION_OPEN: g,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: t, id: n, voiceStartTime: l } = e,
            s = u.L.getCurrentConfig({ guildId: t, location: "VoiceChannelStartTimeStore" }).enabled;
        if (((0, i.un)() || (0, i.m0)()) && !s) return !1;
        null == d[t] && (d[t] = {}), (d[t][n] = null != l ? m(l) : void 0);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: n } = e;
        for (let { id: e, voiceStartTime: l } of ((d[t] = {}), n)) d[t][e] = null != l ? m(l) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        c.add(t);
    },
});
