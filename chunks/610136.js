n.d(t, { A: () => p });
var i = n(311907),
    l = n(73153),
    a = n(49463),
    r = n(617617),
    s = n(71393),
    o = n(576705),
    d = n(903093);
let c = {},
    u = {};
function m() {
    let e = r.A.getGuildsProto() ?? {},
        t = s.A.getGuildsArray();
    for (let n of ((u = {}), t)) u[n.id] = { guildId: n.id, guildName: n.name, ...e[n.id] };
}
function _(e) {
    return null != e && Object.keys(e).length > 0
        ? {
              raidDetectedAt: e.raid_detected_at,
              dmSpamDetectedAt: e.dm_spam_detected_at,
              dmsDisabledUntil: e.dms_disabled_until,
              invitesDisabledUntil: e.invites_disabled_until,
          }
        : null;
}
class h extends i.Ay.Store {
    static displayName = "GuildIncidentsStore";
    initialize() {
        this.waitFor(r.A, s.A, o.A, a.A), this.syncWith([r.A, s.A, o.A, a.A], m);
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
let p = new h(l.h, {
    CONNECTION_OPEN: function (e) {
        for (let t of ((c = {}), e.guilds)) {
            let e = _(t.properties?.incidents_data);
            null != e && ((0, d.k$)(e) || (0, d._J)(e)) && (c[t.id] = e);
        }
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e,
            n = _(t.properties?.incidents_data);
        null != n && ((0, d.k$)(n) || (0, d._J)(n)) && (c[t.id] = n);
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            n = _(t.incidents_data);
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
