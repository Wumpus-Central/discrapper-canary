n.d(t, {
    A: () => _,
}),
    n(896048);
var r,
    i = n(311907),
    l = n(73153),
    a = n(49463),
    s = n(617617),
    o = n(71393),
    c = n(576705),
    u = n(903093);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let p = {},
    m = {};

function f() {
    var e;
    let t = null != (e = s.A.getGuildsProto()) ? e : {},
        n = o.A.getGuildsArray();
    for (let e of ((m = {}), n))
        m[e.id] = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        d(e, t, n[t]);
                    });
            }
            return e;
        })(
            {
                guildId: e.id,
                guildName: e.name,
            },
            t[e.id],
        );
}

function g(e) {
    return null != e && Object.keys(e).length > 0
        ? {
              raidDetectedAt: e.raid_detected_at,
              dmSpamDetectedAt: e.dm_spam_detected_at,
              dmsDisabledUntil: e.dms_disabled_until,
              invitesDisabledUntil: e.invites_disabled_until,
          }
        : null;
}
class h extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(s.A, o.A, c.A, a.A), this.syncWith([s.A, o.A, c.A, a.A], f);
    }
    getGuildIncident(e) {
        return p[e];
    }
    getIncidentsByGuild() {
        return p;
    }
    getGuildAlertSettings() {
        return m;
    }
}
d(h, "displayName", "GuildIncidentsStore");
let _ = new h(l.h, {
    CONNECTION_OPEN: function (e) {
        for (let n of ((p = {}), e.guilds)) {
            var t;
            let e = g(null == (t = n.properties) ? void 0 : t.incidents_data);
            null != e && ((0, u.k$)(e) || (0, u._J)(e)) && (p[n.id] = e);
        }
    },
    GUILD_CREATE: function (e) {
        var t;
        let { guild: n } = e,
            r = g(null == (t = n.properties) ? void 0 : t.incidents_data);
        null != r && ((0, u.k$)(r) || (0, u._J)(r)) && (p[n.id] = r);
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            n = g(t.incidents_data);
        null != n && ((0, u.k$)(n) || (0, u._J)(n)) ? (p[t.id] = n) : delete p[t.id];
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete p[t.id];
    },
    LOGOUT: function (e) {
        p = {};
    },
});
