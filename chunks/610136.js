n.d(e, { A: () => E });
var i = n(17928),
    l = n(228366),
    a = n(736056),
    d = n(617617),
    r = n(71393),
    u = n(576705),
    s = n(903093);
let c = {},
    o = {};
function D() {
    let t = d.A.getGuildsProto() ?? {},
        e = r.A.getGuildsArray();
    for (let n of ((o = {}), e)) o[n.id] = { guildId: n.id, guildName: n.name, ...t[n.id] };
}
function A(t) {
    return null != t && Object.keys(t).length > 0
        ? {
              raidDetectedAt: t.raid_detected_at,
              dmSpamDetectedAt: t.dm_spam_detected_at,
              dmsDisabledUntil: t.dms_disabled_until,
              invitesDisabledUntil: t.invites_disabled_until,
          }
        : null;
}
class _ extends i.Ay.Store {
    static displayName = "GuildIncidentsStore";
    initialize() {
        this.waitFor(d.A, r.A, u.A, a.A), this.syncWith([d.A, r.A, u.A, a.A], D);
    }
    getGuildIncident(t) {
        return c[t];
    }
    getIncidentsByGuild() {
        return c;
    }
    getGuildAlertSettings() {
        return o;
    }
}
let E = new _(l.h, {
    CONNECTION_OPEN: function (t) {
        for (let e of ((c = {}), t.guilds)) {
            let t = A(e.properties?.incidents_data);
            null != t && ((0, s.k$)(t) || (0, s._J)(t)) && (c[e.id] = t);
        }
    },
    GUILD_CREATE: function (t) {
        let { guild: e } = t,
            n = A(e.properties?.incidents_data);
        null != n && ((0, s.k$)(n) || (0, s._J)(n)) && (c[e.id] = n);
    },
    GUILD_UPDATE: function (t) {
        let { guild: e } = t,
            n = A(e.incidents_data);
        null != n && ((0, s.k$)(n) || (0, s._J)(n)) ? (c[e.id] = n) : delete c[e.id];
    },
    GUILD_DELETE: function (t) {
        let { guild: e } = t;
        delete c[e.id];
    },
    LOGOUT: function (t) {
        c = {};
    },
});
