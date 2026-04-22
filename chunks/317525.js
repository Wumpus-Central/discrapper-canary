"use strict";
n.d(t, { A: () => h });
var r = n(136722),
    i = n(867051),
    s = n(548965),
    a = n(942269),
    o = n(260509),
    l = n(34457),
    u = n(9865),
    d = n(7864);
function c(e) {
    return (0, i.yE)(l.xh, { ...e, permissions: r.iu(e.permissions) });
}
class _ extends a.yW {
    static displayName = "GuildRoleStore";
    database = this.addKKVDatabase("guild_roles", c);
    stateWrapper() {
        return this.database;
    }
    serializeAllGuildRoles() {
        return this.database.mapPartitions(u.cH);
    }
    getSortedRoles = this.database.memoizedPartition((e, t) => d.gE(Object.values(t)));
    getRolesSnapshot = this.database.memoizedPartition((e, t) => ({ ...t }));
    getUnsafeMutableRoles(e) {
        return this.database.getPartition(e);
    }
    getManyRoles(e, t) {
        return this.database.getManyRecords(e, t);
    }
    getRole(e, t) {
        return this.database.getRecord(e, t);
    }
    getNumRoles(e) {
        return this.database.partitionLength(e);
    }
    getEveryoneRole(e) {
        let t = (0, o.af)(e),
            n = this.database.getRecord(e.id, t);
        if (null == n) throw Error("Guild does not have an @everyone role");
        return n;
    }
    partitionVersion(e) {
        return this.database.partitionVersion(e);
    }
}
function f(e, t, n) {
    ("update" !== t.op || 0 !== t.writes.length || 0 !== t.deletes.length) &&
        n.setPartition(e, u.j_(e, t, n.getPartition(e)));
}
function E(e, t, n) {
    if (0 === n.partitionLength(t))
        throw Error(`Guild data was missing from store for guild ${t}: missing roles. (phase: ${e})`);
}
let h = new _(
    {
        BACKGROUND_SYNC: (e, t) => {
            let { guilds: n } = e;
            for (let e of n) {
                let n = t.getNullablePartition(e.id);
                null != n &&
                    "unavailable" !== e.data_mode &&
                    t.setPartition(
                        e.id,
                        "partial" === e.data_mode
                            ? d.ly(e.id, n, e.partial_updates.roles, e.partial_updates.deleted_role_ids)
                            : u.hd(e.id, e.roles),
                    );
            }
        },
        OVERLAY_INITIALIZE: (e, t) => {
            for (let { partitionKey: n, values: r } of (t.clear(), e.serializedGuildRoles))
                t.setPartition(n, u.lj(n, r));
        },
        LOGOUT: (e, t) => {
            t.clear();
        },
        RESET_SOCKET: (e, t) => {
            t.clear();
        },
        CONNECTION_OPEN: (e, t) => {
            let { guilds: n, unavailableGuilds: r } = e,
                i = new Set(n.map((e) => e.id));
            for (let e of r) i.add(e);
            for (let e of t.getPartitionKeys()) i.has(e) || t.removePartition(e);
            for (let { id: e, roles: r } of n) f(e, r, t), E("connection_open", e, t);
        },
        CACHE_LOADED: (e, t) => {
            let { guilds: n } = e;
            for (let { id: e, roles: r } of (t.clear(), n)) t.setPartition(e, u.lj(e, r)), E("cache_loaded", e, t);
        },
        CACHE_LOADED_LAZY: (e, t) => {
            if (0 !== e.guilds.length)
                for (let { id: n, roles: r } of (t.clear(), e.guilds))
                    t.setPartition(n, u.lj(n, r)), E("cache_loaded_lazy", n, t);
        },
        GUILD_CREATE: (e, t) => {
            let {
                guild: { id: n, roles: r },
            } = e;
            f(n, r, t), E("guild_create", n, t);
        },
        GUILD_UPDATE: (e, t) => {
            let {
                guild: { id: n, roles: r },
            } = e;
            t.setPartition(n, u.hd(n, r));
        },
        GUILD_DELETE: (e, t) => {
            let {
                guild: { id: n, unavailable: r },
            } = e;
            r || t.removePartition(n);
        },
        GUILD_ROLE_CREATE: (e, t) => {
            t.setRecord(e.guildId, e.role.id, u.Wj(e.guildId, e.role));
        },
        GUILD_ROLE_UPDATE: (e, t) => {
            t.setRecord(e.guildId, e.role.id, u.Wj(e.guildId, e.role));
        },
        GUILD_ROLE_DELETE: (e, t) => {
            let { guildId: n, roleId: r } = e;
            t.removeRecord(n, r);
        },
    },
    s.P4.getCachedBridgedStoreMode(),
);
