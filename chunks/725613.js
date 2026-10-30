a.d(e, { A: () => g });
var t = a(478437),
    n = a(17928),
    s = a(73153),
    i = a(403010),
    c = a(927813);
let r = new Set(),
    d = {};
function o(l) {
    return new Date(l * c.A.Millis.SECOND).getTime();
}
function h() {
    r.clear();
}
function u(l) {
    r.delete(l.guild.id);
}
class v extends n.Ay.Store {
    initialize() {
        this.waitFor(i.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(l) {
        if (null != l && null != l.guild_id && l.type === t.r.GUILD_VOICE) return d[l.guild_id]?.[l.id];
    }
    hasRequestedStartTimes(l) {
        return r.has(l);
    }
}
let g = new v(s.h, {
    GUILD_CREATE: u,
    GUILD_DELETE: u,
    CONNECTION_RESUMED: h,
    CONNECTION_OPEN: h,
    VOICE_CHANNEL_START_TIME_UPDATE: function (l) {
        let { guildId: e, id: a, voiceStartTime: t } = l;
        (null == d[e] && (d[e] = {}), (d[e][a] = null != t ? o(t) : void 0));
    },
    CHANNEL_INFO: function (l) {
        let { guildId: e, channels: a } = l;
        for (let { id: l, voiceStartTime: t } of ((d[e] = {}), a)) d[e][l] = null != t ? o(t) : void 0;
    },
    FETCH_CHANNEL_INFO: function (l) {
        let { guildId: e } = l;
        r.add(e);
    },
});
