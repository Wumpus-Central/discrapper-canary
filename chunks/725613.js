a.d(e, { A: () => g });
var t = a(478437),
    n = a(17928),
    i = a(73153),
    s = a(595528),
    c = a(927813);
let r = new Set(),
    o = {};
function d(l) {
    return new Date(l * c.A.Millis.SECOND).getTime();
}
function h() {
    r.clear();
}
function v(l) {
    r.delete(l.guild.id);
}
class u extends n.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(l) {
        if (null != l && null != l.guild_id && l.type === t.r.GUILD_VOICE) return o[l.guild_id]?.[l.id];
    }
    hasRequestedStartTimes(l) {
        return r.has(l);
    }
}
let g = new u(i.h, {
    GUILD_CREATE: v,
    GUILD_DELETE: v,
    CONNECTION_RESUMED: h,
    CONNECTION_OPEN: h,
    VOICE_CHANNEL_START_TIME_UPDATE: function (l) {
        let { guildId: e, id: a, voiceStartTime: t } = l;
        (null == o[e] && (o[e] = {}), (o[e][a] = null != t ? d(t) : void 0));
    },
    CHANNEL_INFO: function (l) {
        let { guildId: e, channels: a } = l;
        for (let { id: l, voiceStartTime: t } of ((o[e] = {}), a)) o[e][l] = null != t ? d(t) : void 0;
    },
    FETCH_CHANNEL_INFO: function (l) {
        let { guildId: e } = l;
        r.add(e);
    },
});
