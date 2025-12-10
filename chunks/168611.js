n.d(t, { Z: () => m }), n(388685);
var r,
    i,
    l = n(106351),
    o = n(442837),
    a = n(570140),
    s = n(38618),
    c = n(70956);
let u = new Set(),
    d = {};
function f(e) {
    return new Date(e * c.Z.Millis.SECOND).getTime();
}
function h() {
    u.clear();
}
function p(e) {
    u.delete(e.guild.id);
}
class g extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    getStartTime(e) {
        var t;
        if (null != e && null != e.guild_id && e.type === l.d.GUILD_VOICE)
            return null == (t = d[e.guild_id]) ? void 0 : t[e.id];
    }
    hasRequestedStartTimes(e) {
        return u.has(e);
    }
}
(i = "displayName") in g
    ? Object.defineProperty(g, i, {
          value: "VoiceChannelStartTimeStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (g[i] = "VoiceChannelStartTimeStore");
let m = new g(a.Z, {
    GUILD_CREATE: p,
    GUILD_DELETE: p,
    CONNECTION_RESUMED: h,
    CONNECTION_OPEN: h,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: t, id: n, voiceStartTime: r } = e;
        null == d[t] && (d[t] = {}), (d[t][n] = null != r ? f(r) : void 0);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: n } = e;
        for (let { id: e, voiceStartTime: r } of ((d[t] = {}), n)) d[t][e] = null != r ? f(r) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        u.add(t), s.Z.getSocket().requestChannelInfo(t, ["status", "voice_start_time"]);
    },
});
