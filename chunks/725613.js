t.d(e, { A: () => A });
var a = t(478437),
    i = t(17928),
    n = t(228366),
    s = t(617710),
    o = t(927813);
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
        let { guildId: e, id: t, voiceStartTime: a } = l;
        null == r[e] && (r[e] = {}), (r[e][t] = null != a ? d(a) : void 0);
    },
    CHANNEL_INFO: function (l) {
        let { guildId: e, channels: t } = l;
        for (let { id: l, voiceStartTime: a } of ((r[e] = {}), t)) r[e][l] = null != a ? d(a) : void 0;
    },
    FETCH_CHANNEL_INFO: function (l) {
        let { guildId: e } = l;
        c.add(e);
    },
});
