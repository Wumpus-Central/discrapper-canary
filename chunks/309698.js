"use strict";
n.d(t, { A: () => h });
var r = n(478437),
    i = n(311907),
    s = n(73153),
    a = n(142120);
let o = new Set(),
    l = {};
function u() {
    o.clear();
}
function c(e) {
    o.delete(e.guild.id);
}
function d(e) {
    null == l[e.guildId] && (l[e.guildId] = {}), (l[e.guildId][e.id] = e.status);
}
function _(e) {
    let { guildId: t, channels: n } = e;
    for (let { id: e, status: r } of ((l[t] = {}), n)) l[t][e] = r;
}
function f(e) {
    let { guildId: t } = e;
    o.add(t);
}
class p extends i.Ay.Store {
    initialize() {
        this.waitFor(a.A);
    }
    static displayName = "ChannelStatusStore";
    getChannelStatus(e) {
        if (null != e && null != e.guild_id && e.type === r.r.GUILD_VOICE) return l[e.guild_id]?.[e.id];
    }
    hasRequestedStatuses(e) {
        return o.has(e);
    }
}
let h = new p(s.h, {
    GUILD_CREATE: c,
    GUILD_DELETE: c,
    CONNECTION_RESUMED: u,
    CONNECTION_OPEN: u,
    VOICE_CHANNEL_STATUS_UPDATE: d,
    CHANNEL_INFO: _,
    FETCH_CHANNEL_INFO: f,
});
