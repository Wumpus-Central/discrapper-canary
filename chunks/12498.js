n.d(t, { Z: () => m }), n(47120);
var r,
    i = n(106351),
    o = n(442837),
    a = n(570140),
    s = n(38618);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = new Set(),
    u = {};
function d() {
    c.clear();
}
function f(e) {
    c.delete(e.guild.id);
}
function _(e) {
    null == u[e.guildId] && (u[e.guildId] = {}), (u[e.guildId][e.id] = e.status);
}
function p(e) {
    for (let { id: t, status: n } of ((u[e.guildId] = {}), e.channels)) u[e.guildId][t] = n;
}
class h extends (r = o.ZP.Store) {
    getChannelStatus(e) {
        var t;
        if (null != e && null != e.guild_id && e.type === i.d.GUILD_VOICE) return c.has(e.guild_id) || (c.add(e.guild_id), s.Z.getSocket().requestChannelStatuses(e.guild_id)), null == (t = u[e.guild_id]) ? void 0 : t[e.id];
    }
}
l(h, 'displayName', 'ChannelStatusStore');
let m = new h(a.Z, {
    GUILD_CREATE: f,
    GUILD_DELETE: f,
    CONNECTION_RESUMED: d,
    CONNECTION_OPEN: d,
    VOICE_CHANNEL_STATUS_UPDATE: _,
    CHANNEL_STATUSES: p
});
