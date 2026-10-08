a.d(l, { A: () => g });
var n = a(478437),
    t = a(17928),
    i = a(73153),
    s = a(595528),
    r = a(927813);
let c = new Set(),
    o = {};
function d(e) {
    return new Date(e * r.A.Millis.SECOND).getTime();
}
function h() {
    c.clear();
}
function u(e) {
    c.delete(e.guild.id);
}
class v extends t.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(e) {
        if (null != e && null != e.guild_id && e.type === n.r.GUILD_VOICE) return o[e.guild_id]?.[e.id];
    }
    hasRequestedStartTimes(e) {
        return c.has(e);
    }
}
let g = new v(i.h, {
    GUILD_CREATE: u,
    GUILD_DELETE: u,
    CONNECTION_RESUMED: h,
    CONNECTION_OPEN: h,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: l, id: a, voiceStartTime: n } = e;
        (null == o[l] && (o[l] = {}), (o[l][a] = null != n ? d(n) : void 0));
    },
    CHANNEL_INFO: function (e) {
        let { guildId: l, channels: a } = e;
        for (let { id: e, voiceStartTime: n } of ((o[l] = {}), a)) o[l][e] = null != n ? d(n) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: l } = e;
        c.add(l);
    },
});
