"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    a = n(736056),
    s = n(617617),
    l = n(71393),
    o = n(576705),
    d = n(903093);
let c = {},
    u = {};
function _() {
    let e = s.A.getGuildsProto() ?? {},
        t = l.A.getGuildsArray();
    for (let n of ((u = {}), t)) u[n.id] = { guildId: n.id, guildName: n.name, ...e[n.id] };
}
function E(e) {
    let t = c[e],
        n = l.A.getGuild(e)?.incidentsData,
        i = null != n && ((0, d.k$)(n) || (0, d._J)(n)) ? n : void 0;
    return t !== i && (null == i ? delete c[e] : (c[e] = i), !0);
}
class A extends i.Ay.Store {
    static displayName = "GuildIncidentsStore";
    initialize() {
        this.waitFor(s.A, l.A, o.A, a.A), this.syncWith([s.A, l.A, o.A, a.A], _);
    }
    getGuildIncident(e) {
        return c[e];
    }
    getIncidentsByGuild() {
        return c;
    }
    getGuildAlertSettings() {
        return u;
    }
}
let h = new A(r.h, {
    CONNECTION_OPEN: function (e) {
        let { guilds: t } = e;
        for (let { id: e } of ((c = {}), t)) E(e);
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return E(t.id);
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e;
        return E(t.id);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete c[t.id];
    },
    LOGOUT: function (e) {
        c = {};
    },
});
