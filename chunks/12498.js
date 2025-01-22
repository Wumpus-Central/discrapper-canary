n(47120);
var i,
    r,
    l,
    o,
    s = n(106351),
    a = n(442837),
    u = n(570140),
    d = n(38618);
let c = new Set(),
    h = {};
function f() {
    c.clear();
}
function g(e) {
    c.delete(e.guild.id);
}
class C extends (i = a.ZP.Store) {
    getChannelStatus(e) {
        var t;
        if (null != e && null != e.guild_id) {
            if (e.type === s.d.GUILD_VOICE) return !c.has(e.guild_id) && (c.add(e.guild_id), d.Z.getSocket().requestChannelStatuses(e.guild_id)), null === (t = h[e.guild_id]) || void 0 === t ? void 0 : t[e.id];
        }
    }
}
(o = 'ChannelStatusStore'),
    (l = 'displayName') in (r = C)
        ? Object.defineProperty(r, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = o),
    (t.Z = new C(u.Z, {
        GUILD_CREATE: g,
        GUILD_DELETE: g,
        CONNECTION_RESUMED: f,
        CONNECTION_OPEN: f,
        VOICE_CHANNEL_STATUS_UPDATE: function (e) {
            null == h[e.guildId] && (h[e.guildId] = {}), (h[e.guildId][e.id] = e.status);
        },
        CHANNEL_STATUSES: function (e) {
            for (let { id: t, status: n } of ((h[e.guildId] = {}), e.channels)) h[e.guildId][t] = n;
        }
    }));
