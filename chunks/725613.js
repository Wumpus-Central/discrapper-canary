a.d(e, { A: () => v });
var n = a(478437),
    t = a(17928),
    i = a(73153),
    s = a(849335),
    c = a(927813);
let r = new Set(),
    o = {};
function d(l) {
    return new Date(l * c.A.Millis.SECOND).getTime();
}
function u() {
    r.clear();
}
function h(l) {
    r.delete(l.guild.id);
}
class g extends t.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(l) {
        if (null != l && null != l.guild_id && l.type === n.r.GUILD_VOICE) return o[l.guild_id]?.[l.id];
    }
    hasRequestedStartTimes(l) {
        return r.has(l);
    }
}
let v = new g(i.h, {
    GUILD_CREATE: h,
    GUILD_DELETE: h,
    CONNECTION_RESUMED: u,
    CONNECTION_OPEN: u,
    VOICE_CHANNEL_START_TIME_UPDATE: function (l) {
        let { guildId: e, id: a, voiceStartTime: n } = l;
        (null == o[e] && (o[e] = {}), (o[e][a] = null != n ? d(n) : void 0));
    },
    CHANNEL_INFO: function (l) {
        let { guildId: e, channels: a } = l;
        for (let { id: l, voiceStartTime: n } of ((o[e] = {}), a)) o[e][l] = null != n ? d(n) : void 0;
    },
    FETCH_CHANNEL_INFO: function (l) {
        let { guildId: e } = l;
        r.add(e);
    },
});
