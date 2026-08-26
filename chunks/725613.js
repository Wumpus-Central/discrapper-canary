e.d(l, { A: () => f });
var t = e(478437),
    i = e(17928),
    s = e(228366),
    n = e(597643),
    c = e(927813);
let o = new Set(),
    r = {};
function d(a) {
    return new Date(a * c.A.Millis.SECOND).getTime();
}
function h() {
    o.clear();
}
function v(a) {
    o.delete(a.guild.id);
}
class u extends i.Ay.Store {
    initialize() {
        this.waitFor(n.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(a) {
        if (null != a && null != a.guild_id && a.type === t.r.GUILD_VOICE) return r[a.guild_id]?.[a.id];
    }
    hasRequestedStartTimes(a) {
        return o.has(a);
    }
}
let f = new u(s.h, {
    GUILD_CREATE: v,
    GUILD_DELETE: v,
    CONNECTION_RESUMED: h,
    CONNECTION_OPEN: h,
    VOICE_CHANNEL_START_TIME_UPDATE: function (a) {
        let { guildId: l, id: e, voiceStartTime: t } = a;
        null == r[l] && (r[l] = {}), (r[l][e] = null != t ? d(t) : void 0);
    },
    CHANNEL_INFO: function (a) {
        let { guildId: l, channels: e } = a;
        for (let { id: a, voiceStartTime: t } of ((r[l] = {}), e)) r[l][a] = null != t ? d(t) : void 0;
    },
    FETCH_CHANNEL_INFO: function (a) {
        let { guildId: l } = a;
        o.add(l);
    },
});
