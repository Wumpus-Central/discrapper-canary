"use strict";
n.d(t, { A: () => f });
var a = n(478437),
    r = n(574381),
    i = n(17928),
    l = n(228366),
    s = n(366853),
    o = n(927813),
    c = n(869180);
let d = new Set(),
    u = {};
function _(e) {
    return new Date(e * o.A.Millis.SECOND).getTime();
}
function p() {
    d.clear();
}
function m(e) {
    d.delete(e.guild.id);
}
class h extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(e) {
        if (null != e && null != e.guild_id && e.type === a.r.GUILD_VOICE) return u[e.guild_id]?.[e.id];
    }
    hasRequestedStartTimes(e) {
        return d.has(e);
    }
}
let f = new h(l.h, {
    GUILD_CREATE: m,
    GUILD_DELETE: m,
    CONNECTION_RESUMED: p,
    CONNECTION_OPEN: p,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: t, id: n, voiceStartTime: a } = e,
            i = c.L.getCurrentConfig({ guildId: t, location: "VoiceChannelStartTimeStore" }).enabled;
        if (((0, r.un)() || (0, r.m0)()) && !i) return !1;
        null == u[t] && (u[t] = {}), (u[t][n] = null != a ? _(a) : void 0);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: n } = e;
        for (let { id: e, voiceStartTime: a } of ((u[t] = {}), n)) u[t][e] = null != a ? _(a) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        d.add(t);
    },
});
