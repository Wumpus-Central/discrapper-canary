"use strict";
n.d(t, { A: () => m });
var i = n(311907),
    r = n(73153),
    l = n(49463),
    s = n(617617),
    a = n(71393),
    o = n(576705),
    c = n(903093);
let u = {},
    d = {};
function _() {
    let e = s.A.getGuildsProto() ?? {},
        t = a.A.getGuildsArray();
    for (let n of ((d = {}), t)) d[n.id] = { guildId: n.id, guildName: n.name, ...e[n.id] };
}
function E(e) {
    return null != e && Object.keys(e).length > 0
        ? {
              raidDetectedAt: e.raid_detected_at,
              dmSpamDetectedAt: e.dm_spam_detected_at,
              dmsDisabledUntil: e.dms_disabled_until,
              invitesDisabledUntil: e.invites_disabled_until,
          }
        : null;
}
class A extends i.Ay.Store {
    static displayName = "GuildIncidentsStore";
    initialize() {
        this.waitFor(s.A, a.A, o.A, l.A), this.syncWith([s.A, a.A, o.A, l.A], _);
    }
    getGuildIncident(e) {
        return u[e];
    }
    getIncidentsByGuild() {
        return u;
    }
    getGuildAlertSettings() {
        return d;
    }
}
let m = new A(r.h, {
    CONNECTION_OPEN: function (e) {
        for (let t of ((u = {}), e.guilds)) {
            let e = E(t.properties?.incidents_data);
            null != e && ((0, c.k$)(e) || (0, c._J)(e)) && (u[t.id] = e);
        }
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e,
            n = E(t.properties?.incidents_data);
        null != n && ((0, c.k$)(n) || (0, c._J)(n)) && (u[t.id] = n);
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            n = E(t.incidents_data);
        null != n && ((0, c.k$)(n) || (0, c._J)(n)) ? (u[t.id] = n) : delete u[t.id];
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete u[t.id];
    },
    LOGOUT: function (e) {
        u = {};
    },
});
