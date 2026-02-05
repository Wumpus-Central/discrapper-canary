n.d(t, { A: () => d });
var a = n(311907),
    s = n(73153),
    i = n(427157);
let l = { pools: null, users: null };
function r(e) {
    null == l.users && (l.users = new Map()), l.users.set(e.id, new i.A(e));
}
class o extends a.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (l.pools = new Map(Object.entries(e.pools))),
            null != e.users && (l.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != l.pools ? Object.fromEntries(l.pools) : null,
            users: null != l.users ? Object.fromEntries(l.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(l.users?.values() ?? []).filter((t) => l.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return l.pools?.get(e) ?? null;
    }
    getUser(e) {
        return l.users?.get(e) ?? null;
    }
    getPools() {
        return null === l.pools ? null : Array.from(l.pools.values());
    }
}
let d = new o(s.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: n } = e;
        null == l.pools && (l.pools = new Map()), l.pools.set(t.id, t), n.forEach(r);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            n = l.pools?.get(t);
        if (null == n) return !1;
        n.userIds.length > 0 &&
            n.userIds.forEach((e) => {
                l.users?.delete(e);
            }),
            l.pools?.delete(t);
    },
});
