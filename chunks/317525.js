"use strict";
n.d(t, { A: () => f });
var r = n(136722),
    i = n(867051),
    a = n(548965),
    s = n(942269),
    o = n(260509),
    l = n(34457),
    u = n(9865),
    c = n(7864);
function d(e) {
    let t = e;
    return (0, i.yE)(l.xh, { ...t, permissions: r.iu(t.permissions) });
}
class _ extends s.yW {
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
        if (null == n) throw Error(`Guild ${e.id} does not have an @everyone role`);
        return n;
    }
    partitionVersion(e) {
        return this.database.partitionVersion(e);
    }
}
let f = new _(
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
            for (let { partitionKey: n, values: r } of (t.clear(), e.serializedGuildRoles))
                t.setPartition(n, u.lj(n, r));
        },
        CONNECTION_OPEN: (e, t) => {
            let { guilds: n } = e;
            for (let { id: e, roles: r } of (t.clear(), n)) t.setPartition(e, Array.isArray(r) ? u.hd(e, r) : r);
        },
        CACHE_LOADED: (e, t) => {
            let { guilds: n } = e;
            for (let { id: e, roles: r } of (t.clear(), n)) t.setPartition(e, u.lj(e, r));
        },
        CACHE_LOADED_LAZY: (e, t) => {
            if (0 !== e.guilds.length)
                for (let { id: n, roles: r } of (t.clear(), e.guilds)) t.setPartition(n, u.lj(n, r));
        },
        GUILD_CREATE: (e, t) => {
            let {
                guild: { id: n, roles: r },
            } = e;
            t.setPartition(n, Array.isArray(r) ? u.hd(n, r) : r);
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
    a.P4.getCachedBridgedStoreMode(),
);
