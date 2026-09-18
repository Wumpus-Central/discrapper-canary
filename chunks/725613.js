e.d(a, { A: () => f });
var t = e(478437),
    i = e(17928),
    s = e(228366),
    n = e(597643),
    c = e(927813);
let o = new Set(),
    r = {};
function d(l) {
    return new Date(l * c.A.Millis.SECOND).getTime();
}
function h() {
    o.clear();
}
function v(l) {
    o.delete(l.guild.id);
}
class u extends i.Ay.Store {
    initialize() {
        this.waitFor(n.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(l) {
        if (null != l && null != l.guild_id && l.type === t.r.GUILD_VOICE) return r[l.guild_id]?.[l.id];
    }
    hasRequestedStartTimes(l) {
        return o.has(l);
    }
}
let f = new u(s.h, {
    GUILD_CREATE: v,
    GUILD_DELETE: v,
    CONNECTION_RESUMED: h,
    CONNECTION_OPEN: h,
    VOICE_CHANNEL_START_TIME_UPDATE: function (l) {
        let { guildId: a, id: e, voiceStartTime: t } = l;
        (null == r[a] && (r[a] = {}), (r[a][e] = null != t ? d(t) : void 0));
    },
    CHANNEL_INFO: function (l) {
        let { guildId: a, channels: e } = l;
        for (let { id: l, voiceStartTime: t } of ((r[a] = {}), e)) r[a][l] = null != t ? d(t) : void 0;
    },
    FETCH_CHANNEL_INFO: function (l) {
        let { guildId: a } = l;
        o.add(a);
    },
});
