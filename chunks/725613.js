e.d(a, { A: () => g });
var t = e(478437),
    n = e(17928),
    s = e(73153),
    i = e(403010),
    c = e(927813);
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
        let { guildId: a, id: e, voiceStartTime: t } = l;
        (null == d[a] && (d[a] = {}), (d[a][e] = null != t ? o(t) : void 0));
    },
    CHANNEL_INFO: function (l) {
        let { guildId: a, channels: e } = l;
        for (let { id: l, voiceStartTime: t } of ((d[a] = {}), e)) d[a][l] = null != t ? o(t) : void 0;
    },
    FETCH_CHANNEL_INFO: function (l) {
        let { guildId: a } = l;
        r.add(a);
    },
});
