n.d(t, { Z: () => b }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(353926),
    o = n(581883),
    l = n(430824),
    u = n(496675),
    c = n(709054),
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
let _ = {},
    p = {};
function h() {
    var e;
    let t = null !== (e = o.Z.getGuildsProto()) && void 0 !== e ? e : {},
        n = l.Z.getGuilds(),
        i = c.default.keys(n);
    for (let e of ((p = {}), i))
        p[e] = {
            guildId: e,
            guildName: n[e].name,
            ...t[e]
        };
}
function m(e) {
    return null != e && Object.keys(e).length > 0
        ? {
              raidDetectedAt: e.raid_detected_at,
              dmSpamDetectedAt: e.dm_spam_detected_at,
              dmsDisabledUntil: e.dms_disabled_until,
              invitesDisabledUntil: e.invites_disabled_until
          }
        : null;
}
function g(e) {
    for (let n of ((_ = {}), e.guilds)) {
        var t;
        let e = m(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
        null != e && ((0, d.i9)(e) || (0, d.ur)(e)) && (_[n.id] = e);
    }
}
function E(e) {
    var t;
    let { guild: n } = e,
        i = m(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
    null != i && ((0, d.i9)(i) || (0, d.ur)(i)) && (_[n.id] = i);
}
function v(e) {
    let { guild: t } = e,
        n = m(t.incidents_data);
    null != n && ((0, d.i9)(n) || (0, d.ur)(n)) ? (_[t.id] = n) : delete _[t.id];
}
function y(e) {
    let { guild: t } = e;
    delete _[t.id];
}
function I(e) {
    _ = {};
}
class T extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, l.Z, u.Z, s.Z), this.syncWith([o.Z, l.Z, u.Z, s.Z], h);
    }
    getGuildIncident(e) {
        return _[e];
    }
    getIncidentsByGuild() {
        return _;
    }
    getGuildAlertSettings() {
        return p;
    }
}
f(T, 'displayName', 'GuildIncidentsStore');
let b = new T(a.Z, {
    CONNECTION_OPEN: g,
    GUILD_CREATE: E,
    GUILD_UPDATE: v,
    GUILD_DELETE: y,
    LOGOUT: I
});
