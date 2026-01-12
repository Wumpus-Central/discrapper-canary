n.d(t, { Z: () => y }), n(388685);
var r,
    i,
    l = n(106351),
    a = n(818710),
    o = n(442837),
    s = n(570140),
    c = n(38618),
    u = n(70956),
    d = n(662237);
let p = new Set(),
    f = {};
function h(e) {
    return new Date(e * u.Z.Millis.SECOND).getTime();
}
function g() {
    p.clear();
}
function m(e) {
    p.delete(e.guild.id);
}
class b extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    getStartTime(e) {
        var t;
        if (null != e && null != e.guild_id && e.type === l.d.GUILD_VOICE)
            return null == (t = f[e.guild_id]) ? void 0 : t[e.id];
    }
    hasRequestedStartTimes(e) {
        return p.has(e);
    }
}
(i = "displayName") in b
    ? Object.defineProperty(b, i, {
          value: "VoiceChannelStartTimeStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (b[i] = "VoiceChannelStartTimeStore");
let y = new b(s.Z, {
    GUILD_CREATE: m,
    GUILD_DELETE: m,
    CONNECTION_RESUMED: g,
    CONNECTION_OPEN: g,
    VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
        let { guildId: t, id: n, voiceStartTime: r } = e,
            i = d.F.getCurrentConfig({
                guildId: t,
                location: "VoiceChannelStartTimeStore",
            }).enabled;
        if (((0, a.gn)() || (0, a.Dt)()) && !i) return !1;
        null == f[t] && (f[t] = {}), (f[t][n] = null != r ? h(r) : void 0);
    },
    CHANNEL_INFO: function (e) {
        let { guildId: t, channels: n } = e;
        for (let { id: e, voiceStartTime: r } of ((f[t] = {}), n)) f[t][e] = null != r ? h(r) : void 0;
    },
    FETCH_CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        p.add(t), c.Z.getSocket().requestChannelInfo(t, ["status", "voice_start_time"]);
    },
});
