n.d(t, { Z: () => C }), n(47120);
var i,
    l,
    r,
    s = n(106351),
    a = n(442837),
    o = n(570140),
    d = n(38618);
let u = new Set(),
    c = {};
function h() {
    u.clear();
}
function g(e) {
    u.delete(e.guild.id);
}
class f extends (i = a.ZP.Store) {
    getChannelStatus(e) {
        var t;
        if (null != e && null != e.guild_id && e.type === s.d.GUILD_VOICE) return u.has(e.guild_id) || (u.add(e.guild_id), d.Z.getSocket().requestChannelStatuses(e.guild_id)), null === (t = c[e.guild_id]) || void 0 === t ? void 0 : t[e.id];
    }
}
(r = 'ChannelStatusStore'),
    (l = 'displayName') in f
        ? Object.defineProperty(f, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[l] = r);
let C = new f(o.Z, {
    GUILD_CREATE: g,
    GUILD_DELETE: g,
    CONNECTION_RESUMED: h,
    CONNECTION_OPEN: h,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        null == c[e.guildId] && (c[e.guildId] = {}), (c[e.guildId][e.id] = e.status);
    },
    CHANNEL_STATUSES: function (e) {
        for (let { id: t, status: n } of ((c[e.guildId] = {}), e.channels)) c[e.guildId][t] = n;
    }
});
