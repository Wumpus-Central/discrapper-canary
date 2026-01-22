n.d(t, {
    A: () => u,
}),
    n(65821),
    n(896048);
var r = n(952526),
    i = n(260509),
    a = n(9865),
    s = n(7864);

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

function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
class c extends r.U {
    serializeAllGuildRoles() {
        return this.mapPartitions(a.cH);
    }
    getUnsafeMutableRoles(e) {
        return this.getPartition(e);
    }
    getManyRoles(e, t) {
        return this.getManyRecords(e, t);
    }
    getRole(e, t) {
        return this.getRecord(e, t);
    }
    getNumRoles(e) {
        return this.partitionLength(e);
    }
    getEveryoneRole(e) {
        let t = (0, i.af)(e),
            n = this.getRecord(e.id, t);
        if (null == n) throw Error("Guild ".concat(e.id, " does not have an @everyone role"));
        return n;
    }
    constructor(...e) {
        super(...e),
            o(
                this,
                "getSortedRoles",
                this.memoizedPartition((e, t) => s.gE(Object.values(t))),
            ),
            o(
                this,
                "getRolesSnapshot",
                this.memoizedPartition((e, t) => l({}, t)),
            );
    }
}
o(c, "displayName", "GuildRoleStore");
let u = new c(
    {
        BACKGROUND_SYNC: (e, t) => {
            let { guilds: n } = e;
            for (let e of n) {
                let n = t.getPartition(e.id);
                null != n &&
                    "unavailable" !== e.data_mode &&
                    t.setPartition(
                        e.id,
                        "partial" === e.data_mode
                            ? s.ly(e.id, n, e.partial_updates.roles, e.partial_updates.deleted_role_ids)
                            : a.hd(e.id, e.roles),
                    );
            }
        },
        OVERLAY_INITIALIZE: (e, t) => {
            t.reset((t) => {
                for (let { partitionKey: n, values: r } of e.serializedGuildRoles) t[n] = a.lj(n, r);
            });
        },
        CONNECTION_OPEN: (e, t) => {
            let { guilds: n } = e;
            return t.reset((e) => {
                for (let { id: t, roles: r } of n) e[t] = Array.isArray(r) ? a.hd(t, r) : r;
            });
        },
        CACHE_LOADED: (e, t) => {
            let { guilds: n } = e;
            t.reset((e) => {
                for (let { id: t, roles: r } of n) e[t] = a.lj(t, r);
            });
        },
        CACHE_LOADED_LAZY: (e, t) => {
            0 !== e.guilds.length &&
                t.reset((t) => {
                    for (let { id: n, roles: r } of e.guilds) t[n] = a.lj(n, r);
                });
        },
        GUILD_CREATE: (e, t) => {
            let {
                guild: { id: n, roles: r },
            } = e;
            t.setPartition(n, Array.isArray(r) ? a.hd(n, r) : r);
        },
        GUILD_UPDATE: (e, t) => {
            let {
                guild: { id: n, roles: r },
            } = e;
            t.setPartition(n, a.hd(n, r));
        },
        GUILD_DELETE: (e, t) => {
            let {
                guild: { id: n, unavailable: r },
            } = e;
            r || t.removePartition(n);
        },
        GUILD_ROLE_CREATE: (e, t) => {
            t.set(e.guildId, e.role.id, a.Wj(e.guildId, e.role));
        },
        GUILD_ROLE_UPDATE: (e, t) => {
            t.set(e.guildId, e.role.id, a.Wj(e.guildId, e.role));
        },
        GUILD_ROLE_DELETE: (e, t) => {
            let { guildId: n, roleId: r } = e;
            t.remove(n, r);
        },
    },
    "libdiscore",
);
