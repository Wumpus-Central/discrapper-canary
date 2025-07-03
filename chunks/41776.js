(n.d(t, { Z: () => N }), n(388685));
var r,
    i = n(442837),
    a = n(570140),
    o = n(601964),
    s = n(271383),
    l = n(430824),
    c = n(594174),
    u = n(981631);
function d(e, t, n) {
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
let f = [],
    _ = {},
    p = null;
function h(e) {
    let t = new Set([...(null != e ? e : [])]);
    return [...f].reduce((e, n) => (t.has(n) ? e : m(n) || e), !1);
}
function m(e) {
    let t = f.indexOf(e);
    if (t > -1) {
        let n = [...f];
        return (n.splice(t, 1), (f = n), delete _[e], !0);
    }
    return !1;
}
function g(e) {
    return !(e === u.ME || f.includes(e)) && ((f = [...f, e]), !0);
}
function E(e, t) {
    null != t && (_[e] = t);
}
function b(e) {
    let { guildId: t, lurker: n, source: r, directoryChannelId: i, loadId: a } = e;
    if (n) {
        switch ((g(t), E(t, a), r)) {
            case u.vtS.MOBILE_GUILD_DISCOVERY:
                p = { type: u.vtS.MOBILE_GUILD_DISCOVERY };
                break;
            case u.vtS.DIRECTORY_ENTRY:
                p = {
                    type: u.vtS.DIRECTORY_ENTRY,
                    directoryChannelId: i
                };
                break;
            default:
                p = null;
        }
        return !0;
    }
    return !1;
}
function y(e) {
    let { guild: t } = e;
    return !!(null != t.joined_at && f.includes(t.id)) && (m(t.id), (p = null), !0);
}
function O(e) {
    var t;
    let { guildId: n, joinedAt: r, user: i } = e,
        a = i.id === (null == (t = c.default.getCurrentUser()) ? void 0 : t.id),
        o = null == r;
    return !!a && !o && !!f.includes(n) && (m(n), (p = null), !0);
}
function v(e) {
    let { guild: t } = e;
    return !!f.includes(t.id) && (m(t.id), (p = null), !0);
}
function I(e) {
    let { ignoredGuildIds: t } = e,
        n = h(t);
    return (n && (p = null), n);
}
function T(e) {
    let { lurkingGuildId: t, lurkingSource: n } = e;
    return (g(t), (p = n), !0);
}
function S() {
    f = l.Z.getGuildsArray()
        .filter((e) => (0, o.zN)(e))
        .map((e) => e.id);
}
class A extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, c.default);
    }
    lurkingGuildIds() {
        return f;
    }
    mostRecentLurkedGuildId() {
        return 0 === f.length ? null : f[f.length - 1];
    }
    isLurking(e) {
        let t = l.Z.getGuild(e);
        if (null == t) return !1;
        let n = s.ZP.isCurrentUserGuest(e),
            r = (0, o.zN)(t);
        return !!(!n && r);
    }
    getLurkingSource() {
        return p;
    }
    getLoadId(e) {
        return null != e ? _[e] : null;
    }
}
d(A, 'displayName', 'LurkingStore');
let N = new A(a.Z, {
    CONNECTION_OPEN: S,
    GUILD_JOIN: b,
    GUILD_STOP_LURKING: I,
    GUILD_STOP_LURKING_FAILURE: T,
    GUILD_CREATE: y,
    GUILD_DELETE: v,
    GUILD_MEMBER_ADD: O
});
