n.d(t, {
    A: () => m,
}),
    n(65821),
    n(896048);
var r = n(136722),
    i = n(867051),
    a = n(942269),
    o = n(260509),
    s = n(34457),
    l = n(9865),
    c = n(7864);

function u(e, t, n) {
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

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function _(e) {
    let t = e;
    return (0, i.yE)(
        s.xh,
        p(d({}, t), {
            permissions: r.iu(t.permissions),
        }),
    );
}
class h extends a.yW {
    stateWrapper() {
        return this.database;
    }
    serializeAllGuildRoles() {
        return this.database.mapPartitions(l.cH);
    }
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
        if (null == n) throw Error("Guild ".concat(e.id, " does not have an @everyone role"));
        return n;
    }
    partitionVersion(e) {
        return this.database.partitionVersion(e);
    }
    constructor(...e) {
        super(...e),
            u(this, "database", this.addKKVDatabase("guild_roles", _)),
            u(
                this,
                "getSortedRoles",
                this.database.memoizedPartition((e, t) => c.gE(Object.values(t))),
            ),
            u(
                this,
                "getRolesSnapshot",
                this.database.memoizedPartition((e, t) => d({}, t)),
            );
    }
}
u(h, "displayName", "GuildRoleStore");
let m = new h({
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
                        : l.hd(e.id, e.roles),
                );
        }
    },
    OVERLAY_INITIALIZE: (e, t) => {
        for (let { partitionKey: n, values: r } of (t.clear(), e.serializedGuildRoles)) t.setPartition(n, l.lj(n, r));
    },
    CONNECTION_OPEN: (e, t) => {
        let { guilds: n } = e;
        for (let { id: e, roles: r } of (t.clear(), n)) t.setPartition(e, Array.isArray(r) ? l.hd(e, r) : r);
    },
    CACHE_LOADED: (e, t) => {
        let { guilds: n } = e;
        for (let { id: e, roles: r } of (t.clear(), n)) t.setPartition(e, l.lj(e, r));
    },
    CACHE_LOADED_LAZY: (e, t) => {
        if (0 !== e.guilds.length) for (let { id: n, roles: r } of (t.clear(), e.guilds)) t.setPartition(n, l.lj(n, r));
    },
    GUILD_CREATE: (e, t) => {
        let {
            guild: { id: n, roles: r },
        } = e;
        t.setPartition(n, Array.isArray(r) ? l.hd(n, r) : r);
    },
    GUILD_UPDATE: (e, t) => {
        let {
            guild: { id: n, roles: r },
        } = e;
        t.setPartition(n, l.hd(n, r));
    },
    GUILD_DELETE: (e, t) => {
        let {
            guild: { id: n, unavailable: r },
        } = e;
        r || t.removePartition(n);
    },
    GUILD_ROLE_CREATE: (e, t) => {
        t.setRecord(e.guildId, e.role.id, l.Wj(e.guildId, e.role));
    },
    GUILD_ROLE_UPDATE: (e, t) => {
        t.setRecord(e.guildId, e.role.id, l.Wj(e.guildId, e.role));
    },
    GUILD_ROLE_DELETE: (e, t) => {
        let { guildId: n, roleId: r } = e;
        t.removeRecord(n, r);
    },
});
