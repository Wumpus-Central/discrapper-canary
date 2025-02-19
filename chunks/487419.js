n.d(t, { Z: () => I }), n(47120);
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
function p(e) {
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
let _ = {},
    h = {};
function m() {
    var e;
    let t = null !== (e = s.Z.getGuildsProto()) && void 0 !== e ? e : {},
        n = l.Z.getGuilds(),
        r = u.default.keys(n);
    for (let e of ((h = {}), r))
        h[e] = p(
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
    for (let n of ((_ = {}), e.guilds)) {
        var t;
        let e = g(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
        null != e && ((0, d.i9)(e) || (0, d.ur)(e)) && (_[n.id] = e);
    }
}
function v(e) {
    var t;
    let { guild: n } = e,
        r = g(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
    null != r && ((0, d.i9)(r) || (0, d.ur)(r)) && (_[n.id] = r);
}
function b(e) {
    let { guild: t } = e,
        n = g(t.incidents_data);
    null != n && ((0, d.i9)(n) || (0, d.ur)(n)) ? (_[t.id] = n) : delete _[t.id];
}
function y(e) {
    let { guild: t } = e;
    delete _[t.id];
}
function O(e) {
    _ = {};
}
class S extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, l.Z, c.Z, a.Z), this.syncWith([s.Z, l.Z, c.Z, a.Z], m);
    }
    getGuildIncident(e) {
        return _[e];
    }
    getIncidentsByGuild() {
        return _;
    }
    getGuildAlertSettings() {
        return h;
    }
}
f(S, 'displayName', 'GuildIncidentsStore');
let I = new S(o.Z, {
    CONNECTION_OPEN: E,
    GUILD_CREATE: v,
    GUILD_UPDATE: b,
    GUILD_DELETE: y,
    LOGOUT: O
});
