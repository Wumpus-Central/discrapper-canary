n.d(t, { A: () => p });
var i = n(478437),
    l = n(574381),
    s = n(311907),
    a = n(73153),
    r = n(142120),
    o = n(927813),
    d = n(661470);
let c = new Set(),
    u = {};
function h(e) {
    return new Date(e * o.A.Millis.SECOND).getTime();
}
function A() {
    c.clear();
}
function g(e) {
    c.delete(e.guild.id);
}
class m extends s.Ay.Store {
    initialize() {
        this.waitFor(r.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(e) {
        if (null != e && null != e.guild_id && e.type === i.r.GUILD_VOICE) return u[e.guild_id]?.[e.id];
    }
    hasRequestedStartTimes(e) {
        return c.has(e);
    }
}
let p = new m(a.h, {
    GUILD_CREATE: g,
    GUILD_DELETE: g,
    CONNECTION_RESUMED: A,
    CONNECTION_OPEN: A,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: t, id: n, voiceStartTime: i } = e,
            s = d.L.getCurrentConfig({ guildId: t, location: "VoiceChannelStartTimeStore" }).enabled;
        if (((0, l.un)() || (0, l.m0)()) && !s) return !1;
        null == u[t] && (u[t] = {}), (u[t][n] = null != i ? h(i) : void 0);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: n } = e;
        for (let { id: e, voiceStartTime: i } of ((u[t] = {}), n)) u[t][e] = null != i ? h(i) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        c.add(t), r.A.getSocket().requestChannelInfo(t, ["status", "voice_start_time"]);
    },
});
