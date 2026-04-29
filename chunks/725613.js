t.d(l, { A: () => f });
var a = t(478437),
    i = t(574381),
    n = t(17928),
    s = t(228366),
    r = t(446458),
    o = t(927813),
    d = t(869180);
let c = new Set(),
    h = {};
function u(e) {
    return new Date(e * o.A.Millis.SECOND).getTime();
}
function C() {
    c.clear();
}
function E(e) {
    c.delete(e.guild.id);
}
class N extends n.Ay.Store {
    initialize() {
        this.waitFor(r.A);
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(e) {
        if (null != e && null != e.guild_id && e.type === a.r.GUILD_VOICE) return h[e.guild_id]?.[e.id];
    }
    hasRequestedStartTimes(e) {
        return c.has(e);
    }
}
let f = new N(s.h, {
    GUILD_CREATE: E,
    GUILD_DELETE: E,
    CONNECTION_RESUMED: C,
    CONNECTION_OPEN: C,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: l, id: t, voiceStartTime: a } = e,
            n = d.L.getCurrentConfig({ guildId: l, location: "VoiceChannelStartTimeStore" }).enabled;
        if (((0, i.un)() || (0, i.m0)()) && !n) return !1;
        null == h[l] && (h[l] = {}), (h[l][t] = null != a ? u(a) : void 0);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: l, channels: t } = e;
        for (let { id: e, voiceStartTime: a } of ((h[l] = {}), t)) h[l][e] = null != a ? u(a) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: l } = e;
        c.add(l);
    },
});
