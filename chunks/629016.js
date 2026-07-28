"use strict";
n.d(t, { A: () => m });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(280450),
    o = n(994500),
    d = n(461213),
    c = n(652215);
let u = {},
    _ = new Map();
function E(e, t) {
    let n = (u[e] ?? {})[t];
    if (null == n) return;
    let i = u[e];
    delete i[t], r().isEmpty(i) && delete u[e];
    let a = _.get(n);
    null != a && (a.delete(e), 0 === a.size && _.delete(n));
}
function A(e, t, n, i) {
    let r = n.find((e) => null != e.party && !!e.party.id),
        a = null != r && null != r.party ? r.party.id : null,
        s = (u[t] ?? {})[e];
    if (null == a || i === c.clD.OFFLINE) return null != s && (E(t, e), !0);
    if (null != s) {
        if (s === a) return !1;
        E(t, e);
    }
    return (
        !(function (e, t, n) {
            let i = u[e];
            if ((null == i && (i = u[e] = {}), (i[t] = n), o.A.isBlocked(e) || o.A.isIgnored(e))) return;
            let r = _.get(n) ?? new Set();
            _.set(n, r), r.add(e);
        })(t, e, a),
        !0
    );
}
function h(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: i, activities: r } of t.presences) !1 !== A(t.id, e.id, r, i) && (n = !0);
    return n;
}
function I(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && A(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}
function f() {
    let e = l.default.getId(),
        t = d.A.getActivities();
    return A(c.ME, e, t);
}
function p(e) {
    let { relationship: t } = e;
    if (!o.A.isBlocked(t.id) && !o.A.isIgnored(t.id)) return !1;
    let n = u[t.id];
    if (null == n) return !1;
    for (let e of r().values(n)) {
        let n = _.get(e);
        null != n && n.delete(t.id);
    }
}
class T extends a.Ay.Store {
    static displayName = "GamePartyStore";
    initialize() {
        this.syncWith([d.A], f), this.waitFor(l.default, o.A, d.A);
    }
    getParty(e) {
        return null != e && _.has(e) ? _.get(e) : null;
    }
    getUserParties() {
        return u;
    }
    getParties() {
        return _;
    }
}
let m = new T(s.h, {
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = !1;
        for (let { user: e, status: t, activities: r } of n) null != e && !1 !== A(c.ME, e.id, r, t) && (i = !0);
        for (let e of t) !1 !== h({ guild: e }) && (i = !0);
        return i;
    },
    OVERLAY_INITIALIZE: function (e) {
        let { parties: t, userParties: n } = e;
        (_ = new Map()), (u = { ...n }), Object.keys(t).forEach((e) => _.set(e, new Set(t[e])));
    },
    GUILD_CREATE: h,
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e,
            n = !1;
        for (let { user: e, activities: i } of t) null != e && !1 !== A(c.ME, e.id, i) && (n = !0);
        return n;
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t
            .map((e) => {
                let { guildId: t, user: n, status: i, activities: r } = e;
                return A(t ?? c.ME, n.id, r, i);
            })
            .some((e) => e);
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, members: n } = e;
        return I(
            t,
            n.map((e) => e.presence),
        );
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { guildId: t, addedMembers: n } = e;
        return (
            null != n &&
            I(
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
            let n = _.get(e);
            null != n && n.add(t.id);
        }
    },
});
