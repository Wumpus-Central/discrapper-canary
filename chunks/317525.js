"use strict";
n.d(t, { A: () => p });
var i = n(136722),
    r = n(867051),
    s = n(892842),
    a = n(137903),
    o = n(260509),
    l = n(34457),
    u = n(9865),
    c = n(7864);
function d(e) {
    return (0, r.yE)(l.xh, { ...e, permissions: i.iu(e.permissions) });
}
class _ extends a.yW {
    static displayName = "GuildRoleStore";
    database = this.addKKVDatabase("guild_roles", d);
    stateWrapper() {
        return this.database;
    }
    serializeAllGuildRoles() {
        return this.database.mapPartitions(u.cH);
    }
    getSortedRoles = this.database.memoizedPartition((e, t) => c.gE(Object.values(t)));
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
function h(e, t, n) {
    ("update" !== t.op || 0 !== t.writes.length || 0 !== t.deletes.length) &&
        n.setPartition(e, u.j_(e, t, n.getPartition(e)));
}
function f(e, t, n) {
    if (0 === n.partitionLength(t))
        throw Error(`Guild data was missing from store for guild ${t}: missing roles. (phase: ${e})`);
}
let p = new _(
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
                            ? c.ly(e.id, n, e.partial_updates.roles, e.partial_updates.deleted_role_ids)
                            : u.hd(e.id, e.roles),
                    );
            }
        },
        OVERLAY_INITIALIZE: (e, t) => {
            for (let { partitionKey: n, values: i } of (t.clear(), e.serializedGuildRoles))
                t.setPartition(n, u.lj(n, i));
        },
        LOGOUT: (e, t) => {
            t.clear();
        },
        RESET_SOCKET: (e, t) => {
            t.clear();
        },
        CONNECTION_OPEN: (e, t) => {
            let { guilds: n, unavailableGuilds: i } = e,
                r = new Set(n.map((e) => e.id));
            for (let e of i) r.add(e);
            for (let e of t.getPartitionKeys()) r.has(e) || t.removePartition(e);
            for (let { id: e, roles: i } of n) h(e, i, t), f("connection_open", e, t);
        },
        CACHE_LOADED: (e, t) => {
            let { guilds: n } = e;
            for (let { id: e, roles: i } of (t.clear(), n)) t.setPartition(e, u.lj(e, i)), f("cache_loaded", e, t);
        },
        CACHE_LOADED_LAZY: (e, t) => {
            if (0 !== e.guilds.length)
                for (let { id: n, roles: i } of (t.clear(), e.guilds))
                    t.setPartition(n, u.lj(n, i)), f("cache_loaded_lazy", n, t);
        },
        GUILD_CREATE: (e, t) => {
            let {
                guild: { id: n, roles: i },
            } = e;
            h(n, i, t), f("guild_create", n, t);
        },
        GUILD_UPDATE: (e, t) => {
            let {
                guild: { id: n, roles: i },
            } = e;
            t.setPartition(n, u.hd(n, i));
        },
        GUILD_DELETE: (e, t) => {
            let {
                guild: { id: n, unavailable: i },
            } = e;
            i || t.removePartition(n);
        },
        GUILD_ROLE_CREATE: (e, t) => {
            t.setRecord(e.guildId, e.role.id, u.Wj(e.guildId, e.role));
        },
        GUILD_ROLE_UPDATE: (e, t) => {
            t.setRecord(e.guildId, e.role.id, u.Wj(e.guildId, e.role));
        },
        GUILD_ROLE_DELETE: (e, t) => {
            let { guildId: n, roleId: i } = e;
            t.removeRecord(n, i);
        },
    },
    s.P4.getCachedBridgedStoreMode(),
);
