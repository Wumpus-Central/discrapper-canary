n.d(t, { Z: () => u }), n(388685), n(467055);
var a,
    l = n(442837),
    i = n(570140),
    r = n(598077);
function s(e, t, n) {
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
let o = {
    pools: null,
    users: null,
};
function c(e) {
    null == o.users && (o.users = new Map()), o.users.set(e.id, new r.Z(e));
}
class d extends (a = l.ZP.PersistedStore) {
    initialize(e) {
        null != e &&
            (null != e.pools && (o.pools = new Map(Object.entries(e.pools))),
            null != e.users && (o.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != o.pools ? Object.fromEntries(o.pools) : null,
            users: null != o.users ? Object.fromEntries(o.users) : null,
        };
    }
    getUsersForPool(e) {
        var t, n;
        return Array.from(null != (n = null == (t = o.users) ? void 0 : t.values()) ? n : []).filter((t) => {
            var n, a;
            return null == (a = o.pools) || null == (n = a.get(e)) ? void 0 : n.userIds.includes(t.id);
        });
    }
    getPool(e) {
        var t, n;
        return null != (n = null == (t = o.pools) ? void 0 : t.get(e)) ? n : null;
    }
    getUser(e) {
        var t, n;
        return null != (n = null == (t = o.users) ? void 0 : t.get(e)) ? n : null;
    }
    getPools() {
        return null === o.pools ? null : Array.from(o.pools.values());
    }
}
s(d, "displayName", "GeneratedTestUsersStore"), s(d, "persistKey", "GeneratedTestUsersStore");
let u = new d(i.Z, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: n } = e;
        null == o.pools && (o.pools = new Map()), o.pools.set(t.id, t), n.forEach(c);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        var t, n;
        let { poolId: a } = e,
            l = null == (t = o.pools) ? void 0 : t.get(a);
        if (null == l) return !1;
        l.userIds.length > 0 &&
            l.userIds.forEach((e) => {
                var t;
                null == (t = o.users) || t.delete(e);
            }),
            null == (n = o.pools) || n.delete(a);
    },
});
