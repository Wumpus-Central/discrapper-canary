n.d(e, { A: () => E });
var i = n(17928),
    l = n(228366),
    d = n(736056),
    u = n(617617),
    r = n(71393),
    a = n(576705),
    s = n(903093);
let o = {},
    D = {};
function c() {
    let t = u.A.getGuildsProto() ?? {},
        e = r.A.getGuildsArray();
    for (let n of ((D = {}), e)) D[n.id] = { guildId: n.id, guildName: n.name, ...t[n.id] };
}
function m(t) {
    let e = o[t],
        n = r.A.getGuild(t)?.incidentsData,
        i = null != n && ((0, s.k$)(n) || (0, s._J)(n)) ? n : void 0;
    return e !== i && (null == i ? delete o[t] : (o[t] = i), !0);
}
class A extends i.Ay.Store {
    static displayName = "GuildIncidentsStore";
    initialize() {
        this.waitFor(u.A, r.A, a.A, d.A), this.syncWith([u.A, r.A, a.A, d.A], c);
    }
    getGuildIncident(t) {
        return o[t];
    }
    getIncidentsByGuild() {
        return o;
    }
    getGuildAlertSettings() {
        return D;
    }
}
let E = new A(l.h, {
    CONNECTION_OPEN: function (t) {
        let { guilds: e } = t;
        for (let { id: t } of ((o = {}), e)) m(t);
    },
    GUILD_CREATE: function (t) {
        let { guild: e } = t;
        return m(e.id);
    },
    GUILD_UPDATE: function (t) {
        let { guild: e } = t;
        return m(e.id);
    },
    GUILD_DELETE: function (t) {
        let { guild: e } = t;
        delete o[e.id];
    },
    LOGOUT: function (t) {
        o = {};
    },
});
