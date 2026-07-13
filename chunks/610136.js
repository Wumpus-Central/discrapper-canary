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
    return null != e && Object.keys(e).length > 0
        ? {
              raidDetectedAt: e.raid_detected_at,
              dmSpamDetectedAt: e.dm_spam_detected_at,
              dmsDisabledUntil: e.dms_disabled_until,
              invitesDisabledUntil: e.invites_disabled_until,
              lockdownDurationHours: e.lockdown_duration_hours,
          }
        : null;
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
        for (let t of ((c = {}), e.guilds)) {
            let e = E(t.properties?.incidents_data);
            null != e && ((0, d.k$)(e) || (0, d._J)(e)) && (c[t.id] = e);
        }
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e,
            n = E(t.properties?.incidents_data);
        null != n && ((0, d.k$)(n) || (0, d._J)(n)) && (c[t.id] = n);
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            n = E(t.incidents_data);
        null != n && ((0, d.k$)(n) || (0, d._J)(n)) ? (c[t.id] = n) : delete c[t.id];
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete c[t.id];
    },
    LOGOUT: function (e) {
        c = {};
    },
});
