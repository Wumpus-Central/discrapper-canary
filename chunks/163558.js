n.d(t, { Z: () => u }), n(388685), n(467055);
var a,
    r = n(442837),
    l = n(570140),
    i = n(598077);
function o(e, t, n) {
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
let s = {
    pools: null,
    users: null,
};
function c(e) {
    null == s.users && (s.users = new Map()), s.users.set(e.id, new i.Z(e));
}
class d extends (a = r.ZP.PersistedStore) {
    initialize(e) {
        null != e &&
            (null != e.pools && (s.pools = new Map(Object.entries(e.pools))),
            null != e.users && (s.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != s.pools ? Object.fromEntries(s.pools) : null,
            users: null != s.users ? Object.fromEntries(s.users) : null,
        };
    }
    getUsersForPool(e) {
        var t, n;
        return Array.from(null != (n = null == (t = s.users) ? void 0 : t.values()) ? n : []).filter((t) => {
            var n, a;
            return null == (a = s.pools) || null == (n = a.get(e)) ? void 0 : n.userIds.includes(t.id);
        });
    }
    getPool(e) {
        var t, n;
        return null != (n = null == (t = s.pools) ? void 0 : t.get(e)) ? n : null;
    }
    getUser(e) {
        var t, n;
        return null != (n = null == (t = s.users) ? void 0 : t.get(e)) ? n : null;
    }
    getPools() {
        return null === s.pools ? null : Array.from(s.pools.values());
    }
}
o(d, "displayName", "GeneratedTestUsersStore"), o(d, "persistKey", "GeneratedTestUsersStore");
let u = new d(l.Z, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: n } = e;
        null == s.pools && (s.pools = new Map()), s.pools.set(t.id, t), n.forEach(c);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        var t, n;
        let { poolId: a } = e,
            r = null == (t = s.pools) ? void 0 : t.get(a);
        if (null == r) return !1;
        r.userIds.length > 0 &&
            r.userIds.forEach((e) => {
                var t;
                null == (t = s.users) || t.delete(e);
            }),
            null == (n = s.pools) || n.delete(a);
    },
});
