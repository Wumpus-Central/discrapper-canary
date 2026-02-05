"use strict";
n.d(t, { A: () => O });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(961350),
    l = n(994500),
    u = n(461213),
    c = n(652215);
let d = {},
    _ = new Map();
function f(e, t) {
    return (d[e] ?? {})[t];
}
function p(e, t) {
    let n = f(e, t);
    if (null == n) return;
    let r = d[e];
    delete r[t], i().isEmpty(r) && delete d[e];
    let a = _.get(n);
    null != a && (a.delete(e), 0 === a.size && _.delete(n));
}
function h(e, t, n) {
    let r = d[e];
    if ((null == r && (r = d[e] = {}), (r[t] = n), l.A.isBlocked(e) || l.A.isIgnored(e))) return;
    let i = _.get(n) ?? new Set();
    _.set(n, i), i.add(e);
}
function m(e, t, n, r) {
    let i = n.find((e) => null != e.party && e.party.id),
        a = null != i && null != i.party ? i.party.id : null,
        s = f(t, e);
    if (null == a || r === c.clD.OFFLINE) return null != s && void p(t, e);
    if (null != s) {
        if (s === a) return !1;
        p(t, e);
    }
    h(t, e, a);
}
function g(e) {
    let { guilds: t, presences: n } = e,
        r = !1;
    for (let { user: e, status: t, activities: i } of n) null != e && !1 !== m(c.ME, e.id, i, t) && (r = !0);
    for (let e of t) !1 !== A({ guild: e }) && (r = !0);
    return r;
}
function E(e) {
    let { parties: t, userParties: n } = e;
    (_ = new Map()), (d = { ...n }), Object.keys(t).forEach((e) => _.set(e, new Set(t[e])));
}
function A(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: r, activities: i } of t.presences) !1 !== m(t.id, e.id, i, r) && (n = !0);
    return n;
}
function I(e) {
    let { presences: t } = e,
        n = !1;
    for (let { user: e, activities: r } of t) null != e && !1 !== m(c.ME, e.id, r) && (n = !0);
    return n;
}
function T(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let { guildId: t, user: n, status: r, activities: i } = e;
            return m(t ?? c.ME, n.id, i, r);
        })
        .some((e) => e);
}
function y(e) {
    let { guildId: t, members: n } = e;
    return v(
        t,
        n.map((e) => e.presence),
    );
}
function S(e) {
    let { guildId: t, addedMembers: n } = e;
    return (
        null != n &&
        v(
            t,
            n.map((e) => e.presence),
        )
    );
}
function v(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && m(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}
function C() {
    let e = o.default.getId(),
        t = u.A.getActivities();
    return m(c.ME, e, t);
}
function b(e) {
    let { relationship: t } = e;
    if (!l.A.isBlocked(t.id) && !l.A.isIgnored(t.id)) return !1;
    let n = d[t.id];
    if (null == n) return !1;
    for (let e of i().values(n)) {
        let n = _.get(e);
        null != n && n.delete(t.id);
    }
}
function N(e) {
    let { relationship: t } = e,
        n = d[t.id];
    if (null == n) return !1;
    for (let e of i().values(n)) {
        let n = _.get(e);
        null != n && n.add(t.id);
    }
}
class R extends a.Ay.Store {
    static displayName = "GamePartyStore";
    initialize() {
        this.syncWith([u.A], C), this.waitFor(o.default, l.A, u.A);
    }
    getParty(e) {
        return null != e && _.has(e) ? _.get(e) : null;
    }
    getUserParties() {
        return d;
    }
    getParties() {
        return _;
    }
}
let O = new R(s.h, {
    CONNECTION_OPEN_SUPPLEMENTAL: g,
    OVERLAY_INITIALIZE: E,
    GUILD_CREATE: A,
    PRESENCES_REPLACE: I,
    PRESENCE_UPDATES: T,
    THREAD_MEMBER_LIST_UPDATE: y,
    THREAD_MEMBERS_UPDATE: S,
    RELATIONSHIP_ADD: b,
    RELATIONSHIP_UPDATE: b,
    RELATIONSHIP_REMOVE: N,
});
