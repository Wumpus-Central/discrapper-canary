t.d(l, { A: () => A });
var a = t(478437),
    i = t(574381),
    n = t(17928),
    s = t(228366),
    o = t(587626),
    r = t(927813),
    c = t(869180);
let d = new Set(),
    u = {};
function h(e) {
    return new Date(e * r.A.Millis.SECOND).getTime();
}
function g() {
    d.clear();
}
function f(e) {
    d.delete(e.guild.id);
}
class v extends n.Ay.Store {
    initialize() {
        this.waitFor(o.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(e) {
        if (null != e && null != e.guild_id && e.type === a.r.GUILD_VOICE) return u[e.guild_id]?.[e.id];
    }
    hasRequestedStartTimes(e) {
        return d.has(e);
    }
}
let A = new v(s.h, {
    GUILD_CREATE: f,
    GUILD_DELETE: f,
    CONNECTION_RESUMED: g,
    CONNECTION_OPEN: g,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: l, id: t, voiceStartTime: a } = e,
            n = c.L.getCurrentConfig({ guildId: l, location: "VoiceChannelStartTimeStore" }).enabled;
        if (((0, i.un)() || (0, i.m0)()) && !n) return !1;
        null == u[l] && (u[l] = {}), (u[l][t] = null != a ? h(a) : void 0);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: l, channels: t } = e;
        for (let { id: e, voiceStartTime: a } of ((u[l] = {}), t)) u[l][e] = null != a ? h(a) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: l } = e;
        d.add(l);
    },
});
