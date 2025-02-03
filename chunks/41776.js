n.d(t, { Z: () => C }), n(47120), n(724458);
var i,
    r = n(442837),
    a = n(570140),
    s = n(271383),
    o = n(430824),
    l = n(594174),
    u = n(981631);
function c(e, t, n) {
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
let d = [],
    f = {},
    _ = null,
    p = null;
function h(e) {
    let t = new Set([...(null != e ? e : [])]);
    return [...d].reduce((e, n) => (t.has(n) ? e : m(n) || e), !1);
}
function m(e) {
    let t = d.indexOf(e);
    if (t > -1) {
        let n = [...d];
        return n.splice(t, 1), (d = n), delete f[e], !0;
    }
    return !1;
}
function g(e) {
    return !(e === u.ME || d.includes(e)) && ((d = [...d, e]), !0);
}
function E(e, t) {
    null != t && (f[e] = t);
}
function v(e) {
    let { guildId: t, lurker: n, source: i, directoryChannelId: r, loadId: a } = e;
    if (n) {
        switch ((g(t), E(t, a), i)) {
            case u.vtS.MOBILE_GUILD_DISCOVERY:
                p = { type: u.vtS.MOBILE_GUILD_DISCOVERY };
                break;
            case u.vtS.DIRECTORY_ENTRY:
                p = {
                    type: u.vtS.DIRECTORY_ENTRY,
                    directoryChannelId: r
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
    return !!(null != t.joined_at && d.includes(t.id)) && (m(t.id), (_ = null), (p = null), !0);
}
function I(e) {
    var t;
    let { guildId: n, joinedAt: i, user: r } = e,
        a = r.id === (null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
        s = null == i;
    return !!(a && !s && d.includes(n)) && (m(n), (_ = null), (p = null), !0);
}
function b(e) {
    let { guild: t } = e;
    return !!d.includes(t.id) && (m(t.id), (_ = null), (p = null), !0);
}
function T(e) {
    let { ignoredGuildIds: t } = e,
        n = h(t);
    return n && ((_ = null), (p = null)), n;
}
function S(e) {
    let { lurkingGuildId: t, lurkingSource: n } = e;
    return g(t), (p = n), !0;
}
function A() {
    d = Object.values(o.Z.getGuilds()).reduce((e, t) => (t.isLurker() ? [...e, t.id] : e), []);
}
class N extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, l.default);
    }
    setHistorySnapshot(e) {
        _ = e;
    }
    getHistorySnapshot() {
        return _;
    }
    lurkingGuildIds() {
        return d;
    }
    mostRecentLurkedGuildId() {
        return 0 === d.length ? null : d[d.length - 1];
    }
    isLurking(e) {
        var t;
        let n = s.ZP.isCurrentUserGuest(e),
            i = null === (t = o.Z.getGuild(e)) || void 0 === t ? void 0 : t.isLurker();
        return !!(!n && i);
    }
    getLurkingSource() {
        return p;
    }
    getLoadId(e) {
        return null != e ? f[e] : null;
    }
}
c(N, 'displayName', 'LurkingStore');
let C = new N(a.Z, {
    CONNECTION_OPEN: A,
    GUILD_JOIN: v,
    GUILD_STOP_LURKING: T,
    GUILD_STOP_LURKING_FAILURE: S,
    GUILD_CREATE: y,
    GUILD_DELETE: b,
    GUILD_MEMBER_ADD: I
});
