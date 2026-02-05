"use strict";
n.d(t, { A: () => p });
var r = n(478437),
    i = n(311907),
    a = n(73153),
    s = n(142120);
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
    for (let { id: t, status: n } of ((l[e.guildId] = {}), e.channels)) l[e.guildId][t] = n;
}
class f extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "ChannelStatusStore";
    getChannelStatus(e) {
        if (null != e && null != e.guild_id && e.type === r.r.GUILD_VOICE)
            return (
                o.has(e.guild_id) || (o.add(e.guild_id), s.A.getSocket().requestChannelStatuses(e.guild_id)),
                l[e.guild_id]?.[e.id]
            );
    }
}
let p = new f(a.h, {
    GUILD_CREATE: c,
    GUILD_DELETE: c,
    CONNECTION_RESUMED: u,
    CONNECTION_OPEN: u,
    VOICE_CHANNEL_STATUS_UPDATE: d,
    CHANNEL_STATUSES: _,
});
