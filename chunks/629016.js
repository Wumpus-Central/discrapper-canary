"use strict";
n.d(t, { A: () => I });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(495544),
    l = n(994500),
    d = n(461213),
    _ = n(652215);
let u = {},
    c = new Map();
function E(e, t) {
    let n = (u[e] ?? {})[t];
    if (null == n) return;
    let i = u[e];
    delete i[t], r().isEmpty(i) && delete u[e];
    let s = c.get(n);
    null != s && (s.delete(e), 0 === s.size && c.delete(n));
}
function h(e, t, n, i) {
    let r = n.find((e) => null != e.party && e.party.id),
        s = null != r && null != r.party ? r.party.id : null,
        a = (u[t] ?? {})[e];
    if (null == s || i === _.clD.OFFLINE) return null != a && (E(t, e), !0);
    if (null != a) {
        if (a === s) return !1;
        E(t, e);
    }
    return (
        !(function (e, t, n) {
            let i = u[e];
            if ((null == i && (i = u[e] = {}), (i[t] = n), l.A.isBlocked(e) || l.A.isIgnored(e))) return;
            let r = c.get(n) ?? new Set();
            c.set(n, r), r.add(e);
        })(t, e, s),
        !0
    );
}
function m(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: i, activities: r } of t.presences) !1 !== h(t.id, e.id, r, i) && (n = !0);
    return n;
}
function f(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && h(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}
function g() {
    let e = o.default.getId(),
        t = d.A.getActivities();
    return h(_.ME, e, t);
}
function p(e) {
    let { relationship: t } = e;
    if (!l.A.isBlocked(t.id) && !l.A.isIgnored(t.id)) return !1;
    let n = u[t.id];
    if (null == n) return !1;
    for (let e of r().values(n)) {
        let n = c.get(e);
        null != n && n.delete(t.id);
    }
}
class A extends s.Ay.Store {
    static displayName = "GamePartyStore";
    initialize() {
        this.syncWith([d.A], g), this.waitFor(o.default, l.A, d.A);
    }
    getParty(e) {
        return null != e && c.has(e) ? c.get(e) : null;
    }
    getUserParties() {
        return u;
    }
    getParties() {
        return c;
    }
}
let I = new A(a.h, {
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = !1;
        for (let { user: e, status: t, activities: r } of n) null != e && !1 !== h(_.ME, e.id, r, t) && (i = !0);
        for (let e of t) !1 !== m({ guild: e }) && (i = !0);
        return i;
    },
    OVERLAY_INITIALIZE: function (e) {
        let { parties: t, userParties: n } = e;
        (c = new Map()), (u = { ...n }), Object.keys(t).forEach((e) => c.set(e, new Set(t[e])));
    },
    GUILD_CREATE: m,
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e,
            n = !1;
        for (let { user: e, activities: i } of t) null != e && !1 !== h(_.ME, e.id, i) && (n = !0);
        return n;
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t
            .map((e) => {
                let { guildId: t, user: n, status: i, activities: r } = e;
                return h(t ?? _.ME, n.id, r, i);
            })
            .some((e) => e);
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, members: n } = e;
        return f(
            t,
            n.map((e) => e.presence),
        );
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { guildId: t, addedMembers: n } = e;
        return (
            null != n &&
            f(
                t,
                n.map((e) => e.presence),
            )
        );
    },
    RELATIONSHIP_ADD: p,
    RELATIONSHIP_UPDATE: p,
    RELATIONSHIP_REMOVE: function (e) {
        let { relationship: t } = e,
            n = u[t.id];
        if (null == n) return !1;
        for (let e of r().values(n)) {
            let n = c.get(e);
            null != n && n.add(t.id);
        }
    },
});
