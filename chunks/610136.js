i.d(e, { A: () => m });
var n = i(17928),
    l = i(228366),
    d = i(736056),
    a = i(617617),
    r = i(71393),
    u = i(576705),
    s = i(903093);
let D = {},
    c = {};
function o() {
    let t = a.A.getGuildsProto() ?? {},
        e = r.A.getGuildsArray();
    for (let i of ((c = {}), e)) c[i.id] = { guildId: i.id, guildName: i.name, ...t[i.id] };
}
function _(t) {
    return null != t && Object.keys(t).length > 0
        ? {
              raidDetectedAt: t.raid_detected_at,
              dmSpamDetectedAt: t.dm_spam_detected_at,
              dmsDisabledUntil: t.dms_disabled_until,
              invitesDisabledUntil: t.invites_disabled_until,
          }
        : null;
}
class A extends n.Ay.Store {
    static displayName = "GuildIncidentsStore";
    initialize() {
        this.waitFor(a.A, r.A, u.A, d.A), this.syncWith([a.A, r.A, u.A, d.A], o);
    }
    getGuildIncident(t) {
        return D[t];
    }
    getIncidentsByGuild() {
        return D;
    }
    getGuildAlertSettings() {
        return c;
    }
}
let m = new A(l.h, {
    CONNECTION_OPEN: function (t) {
        for (let e of ((D = {}), t.guilds)) {
            let t = _(e.properties?.incidents_data);
            null != t && ((0, s.k$)(t) || (0, s._J)(t)) && (D[e.id] = t);
        }
    },
    GUILD_CREATE: function (t) {
        let { guild: e } = t,
            i = _(e.properties?.incidents_data);
        null != i && ((0, s.k$)(i) || (0, s._J)(i)) && (D[e.id] = i);
    },
    GUILD_UPDATE: function (t) {
        let { guild: e } = t,
            i = _(e.incidents_data);
        null != i && ((0, s.k$)(i) || (0, s._J)(i)) ? (D[e.id] = i) : delete D[e.id];
    },
    GUILD_DELETE: function (t) {
        let { guild: e } = t;
        delete D[e.id];
    },
    LOGOUT: function (t) {
        D = {};
    },
});
