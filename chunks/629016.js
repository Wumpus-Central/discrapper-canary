"use strict";
n.d(t, { A: () => I });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(961350),
    l = n(994500),
    u = n(461213),
    c = n(652215);
let d = {},
    _ = new Map();
function f(e, t) {
    let n = (d[e] ?? {})[t];
    if (null == n) return;
    let r = d[e];
    delete r[t], i().isEmpty(r) && delete d[e];
    let s = _.get(n);
    null != s && (s.delete(e), 0 === s.size && _.delete(n));
}
function p(e, t, n, r) {
    let i = n.find((e) => null != e.party && e.party.id),
        s = null != i && null != i.party ? i.party.id : null,
        a = (d[t] ?? {})[e];
    if (null == s || r === c.clD.OFFLINE) return null != a && (f(t, e), !0);
    if (null != a) {
        if (a === s) return !1;
        f(t, e);
    }
    return (
        !(function (e, t, n) {
            let r = d[e];
            if ((null == r && (r = d[e] = {}), (r[t] = n), l.A.isBlocked(e) || l.A.isIgnored(e))) return;
            let i = _.get(n) ?? new Set();
            _.set(n, i), i.add(e);
        })(t, e, s),
        !0
    );
}
function h(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: r, activities: i } of t.presences) !1 !== p(t.id, e.id, i, r) && (n = !0);
    return n;
}
function E(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && p(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}
function m() {
    let e = o.default.getId(),
        t = u.A.getActivities();
    return p(c.ME, e, t);
}
function g(e) {
    let { relationship: t } = e;
    if (!l.A.isBlocked(t.id) && !l.A.isIgnored(t.id)) return !1;
    let n = d[t.id];
    if (null == n) return !1;
    for (let e of i().values(n)) {
        let n = _.get(e);
        null != n && n.delete(t.id);
    }
}
class A extends s.Ay.Store {
    static displayName = "GamePartyStore";
    initialize() {
        this.syncWith([u.A], m), this.waitFor(o.default, l.A, u.A);
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
let I = new A(a.h, {
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            r = !1;
        for (let { user: e, status: t, activities: i } of n) null != e && !1 !== p(c.ME, e.id, i, t) && (r = !0);
        for (let e of t) !1 !== h({ guild: e }) && (r = !0);
        return r;
    },
    OVERLAY_INITIALIZE: function (e) {
        let { parties: t, userParties: n } = e;
        (_ = new Map()), (d = { ...n }), Object.keys(t).forEach((e) => _.set(e, new Set(t[e])));
    },
    GUILD_CREATE: h,
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e,
            n = !1;
        for (let { user: e, activities: r } of t) null != e && !1 !== p(c.ME, e.id, r) && (n = !0);
        return n;
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t
            .map((e) => {
                let { guildId: t, user: n, status: r, activities: i } = e;
                return p(t ?? c.ME, n.id, i, r);
            })
            .some((e) => e);
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, members: n } = e;
        return E(
            t,
            n.map((e) => e.presence),
        );
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { guildId: t, addedMembers: n } = e;
        return (
            null != n &&
            E(
                t,
                n.map((e) => e.presence),
            )
        );
    },
    RELATIONSHIP_ADD: g,
    RELATIONSHIP_UPDATE: g,
    RELATIONSHIP_REMOVE: function (e) {
        let { relationship: t } = e,
            n = d[t.id];
        if (null == n) return !1;
        for (let e of i().values(n)) {
            let n = _.get(e);
            null != n && n.add(t.id);
        }
    },
});
