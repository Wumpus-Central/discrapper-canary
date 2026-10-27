a.d(l, { A: () => g });
var n = a(478437),
    t = a(17928),
    i = a(73153),
    s = a(403010),
    r = a(927813);
let d = new Set(),
    c = {};
function o(e) {
    return new Date(e * r.A.Millis.SECOND).getTime();
}
function h() {
    d.clear();
}
function u(e) {
    d.delete(e.guild.id);
}
class v extends t.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(e) {
        if (null != e && null != e.guild_id && e.type === n.r.GUILD_VOICE) return c[e.guild_id]?.[e.id];
    }
    hasRequestedStartTimes(e) {
        return d.has(e);
    }
}
let g = new v(i.h, {
    GUILD_CREATE: u,
    GUILD_DELETE: u,
    CONNECTION_RESUMED: h,
    CONNECTION_OPEN: h,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: l, id: a, voiceStartTime: n } = e;
        (null == c[l] && (c[l] = {}), (c[l][a] = null != n ? o(n) : void 0));
    },
    CHANNEL_INFO: function (e) {
        let { guildId: l, channels: a } = e;
        for (let { id: e, voiceStartTime: n } of ((c[l] = {}), a)) c[l][e] = null != n ? o(n) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: l } = e;
        d.add(l);
    },
});
