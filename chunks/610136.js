"use strict";
n.d(t, { A: () => p });
var i = n(17928),
    r = n(228366),
    s = n(736056),
    a = n(617617),
    o = n(71393),
    l = n(576705),
    u = n(903093);
let c = {},
    d = {};
function _() {
    let e = a.A.getGuildsProto() ?? {},
        t = o.A.getGuildsArray();
    for (let n of ((d = {}), t)) d[n.id] = { guildId: n.id, guildName: n.name, ...e[n.id] };
}
function f(e) {
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
class h extends i.Ay.Store {
    static displayName = "GuildIncidentsStore";
    initialize() {
        this.waitFor(a.A, o.A, l.A, s.A), this.syncWith([a.A, o.A, l.A, s.A], _);
    }
    getGuildIncident(e) {
        return c[e];
    }
    getIncidentsByGuild() {
        return c;
    }
    getGuildAlertSettings() {
        return d;
    }
}
let p = new h(r.h, {
    CONNECTION_OPEN: function (e) {
        for (let t of ((c = {}), e.guilds)) {
            let e = f(t.properties?.incidents_data);
            null != e && ((0, u.k$)(e) || (0, u._J)(e)) && (c[t.id] = e);
        }
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e,
            n = f(t.properties?.incidents_data);
        null != n && ((0, u.k$)(n) || (0, u._J)(n)) && (c[t.id] = n);
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            n = f(t.incidents_data);
        null != n && ((0, u.k$)(n) || (0, u._J)(n)) ? (c[t.id] = n) : delete c[t.id];
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete c[t.id];
    },
    LOGOUT: function (e) {
        c = {};
    },
});
