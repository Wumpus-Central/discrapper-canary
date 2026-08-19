"use strict";
n.d(t, { A: () => h });
var i = n(136722),
    r = n(867051),
    a = n(892842),
    s = n(137903),
    l = n(260509),
    o = n(34457),
    d = n(9865),
    c = n(7864);
function u(e) {
    return (0, r.yE)(o.xh, { ...e, permissions: i.iu(e.permissions) });
}
class _ extends s.yW {
    static displayName = "GuildRoleStore";
    database = this.addKKVDatabase("guild_roles", u);
    stateWrapper() {
        return this.database;
    }
    serializeAllGuildRoles() {
        return this.database.mapPartitions(d.cH);
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
        let t = (0, l.af)(e),
            n = this.database.getRecord(e.id, t);
        if (null == n) throw Error("Guild does not have an @everyone role");
        return n;
    }
    partitionVersion(e) {
        return this.database.partitionVersion(e);
    }
}
function E(e, t, n) {
    ("update" !== t.op || 0 !== t.writes.length || 0 !== t.deletes.length) &&
        n.setPartition(e, d.j_(e, t, n.getPartition(e)));
}
function A(e, t, n) {
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
                            ? c.ly(e.id, n, e.partial_updates.roles, e.partial_updates.deleted_role_ids)
                            : d.hd(e.id, e.roles),
                    );
            }
        },
        OVERLAY_INITIALIZE: (e, t) => {
            for (let { partitionKey: n, values: i } of (t.clear(), e.serializedGuildRoles))
                t.setPartition(n, d.lj(n, i));
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
            for (let { id: e, roles: i } of n) E(e, i, t), A("connection_open", e, t);
        },
        CACHE_LOADED: (e, t) => {
            let { guilds: n } = e;
            for (let { id: e, roles: i } of (t.clear(), n)) t.setPartition(e, d.lj(e, i)), A("cache_loaded", e, t);
        },
        CACHE_LOADED_LAZY: (e, t) => {
            if (0 !== e.guilds.length)
                for (let { id: n, roles: i } of (t.clear(), e.guilds))
                    t.setPartition(n, d.lj(n, i)), A("cache_loaded_lazy", n, t);
        },
        GUILD_CREATE: (e, t) => {
            let {
                guild: { id: n, roles: i },
            } = e;
            E(n, i, t), A("guild_create", n, t);
        },
        GUILD_UPDATE: (e, t) => {
            let {
                guild: { id: n, roles: i },
            } = e;
            t.setPartition(n, d.hd(n, i));
        },
        GUILD_DELETE: (e, t) => {
            let {
                guild: { id: n, unavailable: i },
            } = e;
            i || t.removePartition(n);
        },
        GUILD_ROLE_CREATE: (e, t) => {
            t.setRecord(e.guildId, e.role.id, d.Wj(e.guildId, e.role));
        },
        GUILD_ROLE_UPDATE: (e, t) => {
            t.setRecord(e.guildId, e.role.id, d.Wj(e.guildId, e.role));
        },
        GUILD_ROLE_DELETE: (e, t) => {
            let { guildId: n, roleId: i } = e;
            t.removeRecord(n, i);
        },
    },
    a.P4.getCachedBridgedStoreMode(),
);
