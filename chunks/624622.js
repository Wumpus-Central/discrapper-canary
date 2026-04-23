a.d(t, { A: () => d });
var n = a(311907),
    l = a(73153),
    i = a(427157);
let s = { pools: null, users: null };
function r(e) {
    null == s.users && (s.users = new Map()), s.users.set(e.id, new i.A(e));
}
class o extends n.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
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
        return Array.from(s.users?.values() ?? []).filter((t) => s.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return s.pools?.get(e) ?? null;
    }
    getUser(e) {
        return s.users?.get(e) ?? null;
    }
    getPools() {
        return null === s.pools ? null : Array.from(s.pools.values());
    }
}
let d = new o(l.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        null == s.pools && (s.pools = new Map()), s.pools.set(t.id, t), a.forEach(r);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = s.pools?.get(t);
        if (null == a) return !1;
        a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                s.users?.delete(e);
            }),
            s.pools?.delete(t);
    },
});
