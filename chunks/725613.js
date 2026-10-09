a.d(l, { A: () => f });
var t = a(478437),
    n = a(17928),
    i = a(73153),
    s = a(595528),
    r = a(927813);
let c = new Set(),
    d = {};
function o(e) {
    return new Date(e * r.A.Millis.SECOND).getTime();
}
function h() {
    c.clear();
}
function u(e) {
    c.delete(e.guild.id);
}
class v extends n.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(e) {
        if (null != e && null != e.guild_id && e.type === t.r.GUILD_VOICE) return d[e.guild_id]?.[e.id];
    }
    hasRequestedStartTimes(e) {
        return c.has(e);
    }
}
let f = new v(i.h, {
    GUILD_CREATE: u,
    GUILD_DELETE: u,
    CONNECTION_RESUMED: h,
    CONNECTION_OPEN: h,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: l, id: a, voiceStartTime: t } = e;
        (null == d[l] && (d[l] = {}), (d[l][a] = null != t ? o(t) : void 0));
    },
    CHANNEL_INFO: function (e) {
        let { guildId: l, channels: a } = e;
        for (let { id: e, voiceStartTime: t } of ((d[l] = {}), a)) d[l][e] = null != t ? o(t) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: l } = e;
        c.add(l);
    },
});
