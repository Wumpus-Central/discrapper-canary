n.d(t, {
    A: () => D,
}),
    n(896048);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(961350),
    c = n(994500),
    u = n(461213),
    d = n(652215);

function f(e, t, n) {
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

function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = {},
    h = new Map();

function m(e, t) {
    var n;
    return (null != (n = _[e]) ? n : {})[t];
}

function g(e, t) {
    let n = m(e, t);
    if (null == n) return;
    let r = _[e];
    delete r[t], a().isEmpty(r) && delete _[e];
    let i = h.get(n);
    null != i && (i.delete(e), 0 === i.size && h.delete(n));
}

function E(e, t, n) {
    var r;
    let i = _[e];
    if ((null == i && (i = _[e] = {}), (i[t] = n), c.A.isBlocked(e) || c.A.isIgnored(e))) return;
    let a = null != (r = h.get(n)) ? r : new Set();
    h.set(n, a), a.add(e);
}

function b(e, t, n, r) {
    let i = n.find((e) => null != e.party && e.party.id),
        a = null != i && null != i.party ? i.party.id : null,
        s = m(t, e);
    if (null == a || r === d.clD.OFFLINE) return null != s && void g(t, e);
    if (null != s) {
        if (s === a) return !1;
        g(t, e);
    }
    E(t, e, a);
}

function y(e) {
    let { guilds: t, presences: n } = e,
        r = !1;
    for (let { user: e, status: t, activities: i } of n) null != e && !1 !== b(d.ME, e.id, i, t) && (r = !0);
    for (let e of t)
        !1 !==
            A({
                guild: e,
            }) && (r = !0);
    return r;
}

function O(e) {
    let { parties: t, userParties: n } = e;
    (h = new Map()), (_ = p({}, n)), Object.keys(t).forEach((e) => h.set(e, new Set(t[e])));
}

function A(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: r, activities: i } of t.presences) !1 !== b(t.id, e.id, i, r) && (n = !0);
    return n;
}

function v(e) {
    let { presences: t } = e,
        n = !1;
    for (let { user: e, activities: r } of t) null != e && !1 !== b(d.ME, e.id, r) && (n = !0);
    return n;
}

function S(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let { guildId: t, user: n, status: r, activities: i } = e;
            return b(null != t ? t : d.ME, n.id, i, r);
        })
        .some((e) => e);
}

function I(e) {
    let { guildId: t, members: n } = e;
    return C(
        t,
        n.map((e) => e.presence),
    );
}

function T(e) {
    let { guildId: t, addedMembers: n } = e;
    return (
        null != n &&
        C(
            t,
            n.map((e) => e.presence),
        )
    );
}

function C(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && b(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}

function N() {
    let e = l.default.getId(),
        t = u.A.getActivities();
    return b(d.ME, e, t);
}

function R(e) {
    let { relationship: t } = e;
    if (!c.A.isBlocked(t.id) && !c.A.isIgnored(t.id)) return !1;
    let n = _[t.id];
    if (null == n) return !1;
    for (let e of a().values(n)) {
        let n = h.get(e);
        null != n && n.delete(t.id);
    }
}

function w(e) {
    let { relationship: t } = e,
        n = _[t.id];
    if (null == n) return !1;
    for (let e of a().values(n)) {
        let n = h.get(e);
        null != n && n.add(t.id);
    }
}
class P extends (r = s.Ay.Store) {
    initialize() {
        this.syncWith([u.A], N), this.waitFor(l.default, c.A, u.A);
    }
    getParty(e) {
        return null != e && h.has(e) ? h.get(e) : null;
    }
    getUserParties() {
        return _;
    }
    getParties() {
        return h;
    }
}
f(P, "displayName", "GamePartyStore");
let D = new P(o.h, {
    CONNECTION_OPEN_SUPPLEMENTAL: y,
    OVERLAY_INITIALIZE: O,
    GUILD_CREATE: A,
    PRESENCES_REPLACE: v,
    PRESENCE_UPDATES: S,
    THREAD_MEMBER_LIST_UPDATE: I,
    THREAD_MEMBERS_UPDATE: T,
    RELATIONSHIP_ADD: R,
    RELATIONSHIP_UPDATE: R,
    RELATIONSHIP_REMOVE: w,
});
