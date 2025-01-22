var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(353926),
    u = r(581883),
    c = r(430824),
    d = r(496675),
    f = r(709054),
    p = r(533244);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let _ = {},
    m = {};
function g() {
    var e;
    let n = null !== (e = u.Z.getGuildsProto()) && void 0 !== e ? e : {},
        r = c.Z.getGuilds(),
        i = f.default.keys(r);
    for (let e of ((m = {}), i))
        m[e] = {
            guildId: e,
            guildName: r[e].name,
            ...n[e]
        };
}
function E(e) {
    return null != e && Object.keys(e).length > 0
        ? {
              raidDetectedAt: e.raid_detected_at,
              dmSpamDetectedAt: e.dm_spam_detected_at,
              dmsDisabledUntil: e.dms_disabled_until,
              invitesDisabledUntil: e.invites_disabled_until
          }
        : null;
}
function v(e) {
    for (let r of ((_ = {}), e.guilds)) {
        var n;
        let e = E(null === (n = r.properties) || void 0 === n ? void 0 : n.incidents_data);
        null != e && ((0, p.i9)(e) || (0, p.ur)(e)) && (_[r.id] = e);
    }
}
function y(e) {
    var n;
    let { guild: r } = e,
        i = E(null === (n = r.properties) || void 0 === n ? void 0 : n.incidents_data);
    null != i && ((0, p.i9)(i) || (0, p.ur)(i)) && (_[r.id] = i);
}
function b(e) {
    let { guild: n } = e,
        r = E(n.incidents_data);
    null != r && ((0, p.i9)(r) || (0, p.ur)(r)) ? (_[n.id] = r) : delete _[n.id];
}
function I(e) {
    let { guild: n } = e;
    delete _[n.id];
}
function T(e) {
    _ = {};
}
class S extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, c.Z, d.Z, l.Z), this.syncWith([u.Z, c.Z, d.Z, l.Z], g);
    }
    getGuildIncident(e) {
        return _[e];
    }
    getIncidentsByGuild() {
        return _;
    }
    getGuildAlertSettings() {
        return m;
    }
}
h(S, 'displayName', 'GuildIncidentsStore'),
    (n.Z = new S(s.Z, {
        CONNECTION_OPEN: v,
        GUILD_CREATE: y,
        GUILD_UPDATE: b,
        GUILD_DELETE: I,
        LOGOUT: T
    }));
