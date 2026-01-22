n.d(t, { A: () => A }), n(896048);
var r,
    l,
    i = n(478437),
    a = n(574381),
    s = n(311907),
    o = n(73153),
    c = n(142120),
    u = n(927813),
    d = n(661470);
let f = new Set(),
    p = {};
function h(e) {
    return new Date(e * u.A.Millis.SECOND).getTime();
}
function b() {
    f.clear();
}
function g(e) {
    f.delete(e.guild.id);
}
class m extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(c.A);
    }
    getStartTime(e) {
        var t;
        if (null != e && null != e.guild_id && e.type === i.r.GUILD_VOICE)
            return null == (t = p[e.guild_id]) ? void 0 : t[e.id];
    }
    hasRequestedStartTimes(e) {
        return f.has(e);
    }
}
(l = "displayName") in m
    ? Object.defineProperty(m, l, {
          value: "VoiceChannelStartTimeStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (m[l] = "VoiceChannelStartTimeStore");
let A = new m(o.h, {
    GUILD_CREATE: g,
    GUILD_DELETE: g,
    CONNECTION_RESUMED: b,
    CONNECTION_OPEN: b,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: t, id: n, voiceStartTime: r } = e,
            l = d.L.getCurrentConfig({
                guildId: t,
                location: "VoiceChannelStartTimeStore",
            }).enabled;
        if (((0, a.un)() || (0, a.m0)()) && !l) return !1;
        null == p[t] && (p[t] = {}), (p[t][n] = null != r ? h(r) : void 0);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: n } = e;
        for (let { id: e, voiceStartTime: r } of ((p[t] = {}), n)) p[t][e] = null != r ? h(r) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        f.add(t), c.A.getSocket().requestChannelInfo(t, ["status", "voice_start_time"]);
    },
});
