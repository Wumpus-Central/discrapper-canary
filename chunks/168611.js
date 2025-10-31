n.d(t, { Z: () => b }), n(388685);
var r,
    i,
    l = n(106351),
    o = n(442837),
    a = n(570140),
    s = n(38618),
    c = n(70956),
    u = n(973285);
let d = new Set(),
    p = {};
function h(e) {
    return new Date(e * c.Z.Millis.SECOND).getTime();
}
function f() {
    d.clear();
}
function g(e) {
    d.delete(e.guild.id);
}
class m extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    getStartTime(e) {
        var t;
        if (null != e && null != e.guild_id && e.type === l.d.GUILD_VOICE)
            return null == (t = p[e.guild_id]) ? void 0 : t[e.id];
    }
    hasRequestedStartTimes(e) {
        return d.has(e);
    }
}
(i = "displayName") in m
    ? Object.defineProperty(m, i, {
          value: "VoiceChannelStartTimeStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (m[i] = "VoiceChannelStartTimeStore");
let b = new m(a.Z, {
    GUILD_CREATE: g,
    GUILD_DELETE: g,
    CONNECTION_RESUMED: f,
    CONNECTION_OPEN: f,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: t, id: n, voiceStartTime: r } = e;
        if (
            !u.W.getCurrentConfig({
                guildId: t,
                location: "VoiceChannelStartTimeStore",
            }).enabled
        )
            return !1;
        null == p[t] && (p[t] = {}), (p[t][n] = null != r ? h(r) : void 0);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: n } = e;
        for (let { id: e, voiceStartTime: r } of ((p[t] = {}), n)) p[t][e] = null != r ? h(r) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        d.add(t), s.Z.getSocket().requestChannelInfo(t, ["status", "voice_start_time"]);
    },
});
