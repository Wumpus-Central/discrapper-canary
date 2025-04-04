n.d(t, { Z: () => S }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(353926),
    s = n(581883),
    l = n(430824),
    c = n(496675),
    u = n(709054),
    d = n(533244);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = {},
    h = {};
function m() {
    var e;
    let t = null != (e = s.Z.getGuildsProto()) ? e : {},
        n = l.Z.getGuilds(),
        r = u.default.keys(n);
    for (let e of ((h = {}), r))
        h[e] = _(
            {
                guildId: e,
                guildName: n[e].name
            },
            t[e]
        );
}
function g(e) {
    return null != e && Object.keys(e).length > 0
        ? {
              raidDetectedAt: e.raid_detected_at,
              dmSpamDetectedAt: e.dm_spam_detected_at,
              dmsDisabledUntil: e.dms_disabled_until,
              invitesDisabledUntil: e.invites_disabled_until
          }
        : null;
}
function E(e) {
    for (let n of ((p = {}), e.guilds)) {
        var t;
        let e = g(null == (t = n.properties) ? void 0 : t.incidents_data);
        null != e && ((0, d.i9)(e) || (0, d.ur)(e)) && (p[n.id] = e);
    }
}
function b(e) {
    var t;
    let { guild: n } = e,
        r = g(null == (t = n.properties) ? void 0 : t.incidents_data);
    null != r && ((0, d.i9)(r) || (0, d.ur)(r)) && (p[n.id] = r);
}
function y(e) {
    let { guild: t } = e,
        n = g(t.incidents_data);
    null != n && ((0, d.i9)(n) || (0, d.ur)(n)) ? (p[t.id] = n) : delete p[t.id];
}
function v(e) {
    let { guild: t } = e;
    delete p[t.id];
}
function O(e) {
    p = {};
}
class I extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, l.Z, c.Z, a.Z), this.syncWith([s.Z, l.Z, c.Z, a.Z], m);
    }
    getGuildIncident(e) {
        return p[e];
    }
    getIncidentsByGuild() {
        return p;
    }
    getGuildAlertSettings() {
        return h;
    }
}
f(I, 'displayName', 'GuildIncidentsStore');
let S = new I(o.Z, {
    CONNECTION_OPEN: E,
    GUILD_CREATE: b,
    GUILD_UPDATE: y,
    GUILD_DELETE: v,
    LOGOUT: O
});
