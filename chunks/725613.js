e.d(t, { A: () => A });
var a = e(478437),
    i = e(17928),
    n = e(228366),
    s = e(587626),
    o = e(927813);
let c = new Set(),
    r = {};
function d(l) {
    return new Date(l * o.A.Millis.SECOND).getTime();
}
function h() {
    c.clear();
}
function u(l) {
    c.delete(l.guild.id);
}
class v extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(l) {
        if (null != l && null != l.guild_id && l.type === a.r.GUILD_VOICE) return r[l.guild_id]?.[l.id];
    }
    hasRequestedStartTimes(l) {
        return c.has(l);
    }
}
let A = new v(n.h, {
    GUILD_CREATE: u,
    GUILD_DELETE: u,
    CONNECTION_RESUMED: h,
    CONNECTION_OPEN: h,
    VOICE_CHANNEL_START_TIME_UPDATE: function (l) {
        let { guildId: t, id: e, voiceStartTime: a } = l;
        null == r[t] && (r[t] = {}), (r[t][e] = null != a ? d(a) : void 0);
    },
    CHANNEL_INFO: function (l) {
        let { guildId: t, channels: e } = l;
        for (let { id: l, voiceStartTime: a } of ((r[t] = {}), e)) r[t][l] = null != a ? d(a) : void 0;
    },
    FETCH_CHANNEL_INFO: function (l) {
        let { guildId: t } = l;
        c.add(t);
    },
});
