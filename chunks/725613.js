"use strict";
n.d(t, { A: () => E });
var i = n(478437),
    r = n(574381),
    s = n(17928),
    a = n(228366),
    o = n(587626),
    l = n(927813),
    u = n(869180);
let c = new Set(),
    d = {};
function _(e) {
    return new Date(e * l.A.Millis.SECOND).getTime();
}
function f() {
    c.clear();
}
function h(e) {
    c.delete(e.guild.id);
}
class p extends s.Ay.Store {
    initialize() {
        this.waitFor(o.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(e) {
        if (null != e && null != e.guild_id && e.type === i.r.GUILD_VOICE) return d[e.guild_id]?.[e.id];
    }
    hasRequestedStartTimes(e) {
        return c.has(e);
    }
}
let E = new p(a.h, {
    GUILD_CREATE: h,
    GUILD_DELETE: h,
    CONNECTION_RESUMED: f,
    CONNECTION_OPEN: f,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: t, id: n, voiceStartTime: i } = e,
            s = u.L.getCurrentConfig({ guildId: t, location: "VoiceChannelStartTimeStore" }).enabled;
        if (((0, r.un)() || (0, r.m0)()) && !s) return !1;
        null == d[t] && (d[t] = {}), (d[t][n] = null != i ? _(i) : void 0);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: n } = e;
        for (let { id: e, voiceStartTime: i } of ((d[t] = {}), n)) d[t][e] = null != i ? _(i) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        c.add(t);
    },
});
