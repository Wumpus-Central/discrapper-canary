var a = t(478437),
    n = t(855986),
    i = t(73153),
    s = t(225123),
    c = t(927813);
let r = new Set(),
    d = {};
function o(l) {
    return new Date(l * c.A.Millis.SECOND).getTime();
}
function u() {
    r.clear();
}
function h(l) {
    r.delete(l.guild.id);
}
class g extends n.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(l) {
        if (null != l && null != l.guild_id && l.type === a.r.GUILD_VOICE) return d[l.guild_id]?.[l.id];
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
        let { guildId: e, id: t, voiceStartTime: a } = l;
        (null == d[e] && (d[e] = {}), (d[e][t] = null != a ? o(a) : void 0));
    },
    CHANNEL_INFO: function (l) {
        let { guildId: e, channels: t } = l;
        for (let { id: l, voiceStartTime: a } of ((d[e] = {}), t)) d[e][l] = null != a ? o(a) : void 0;
    },
    FETCH_CHANNEL_INFO: function (l) {
        let { guildId: e } = l;
        r.add(e);
    },
});
t.d(e, {}, { A: v });
