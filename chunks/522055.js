"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(73153),
    s = n(410212),
    a = n(532555);
let o = {},
    l = { catalog: {}, hasFetchedCatalog: !1, catalogLastFetchedAt: void 0 };
function u(e) {
    return null == o[e] && (o[e] = { catalog: {}, instances: {}, instructions: {}, entitlements: {} }), o[e];
}
function d(e, t) {
    return Object.values(t).reduce((e, t) => e + ((0, s.A)(t) ?? 0), 0);
}
function c(e) {
    let { guildId: t, gameServer: n } = e,
        r = u(t);
    o = { ...o, [t]: { ...r, instances: { ...r.instances, [n.id]: (0, a.A)(n) } } };
}
function _(e, t) {
    let n = d(e, t.entitlements);
    o = { ...o, [e]: { ...t, appliedBoosts: n } };
}
class f extends r.Ay.PersistedStore {
    static displayName = "GameServerStore";
    static persistKey = "GameServerStore";
    initialize(e) {
        null != e && (o = e);
    }
    getState() {
        return o;
    }
    getStateForGuild(e) {
        return null != e ? o[e] : void 0;
    }
    getGlobalCatalogState() {
        return l;
    }
    getGlobalCatalogGame(e) {
        return Object.values(l.catalog).find((t) => t.gameId === e);
    }
    getLowestGameCostForGuild(e) {
        if (null == e) return null;
        let t = o[e],
            n = Object.values(t?.catalog ?? {});
        return 0 === n.length ? null : Math.min(...n.map((e) => e.baseCost));
    }
    hasFetchedCatalog(e) {
        return null != e && o[e]?.hasFetchedCatalog === !0;
    }
    hasFetchedInstances(e) {
        return null != e && o[e]?.hasFetchedInstances === !0;
    }
    shouldFetchCatalogForGuild(e) {
        let t = o[e]?.catalogLastFetchedAt;
        return null == t || t + 864e5 < Date.now();
    }
    shouldFetchInstancesForGuild(e) {
        let t = o[e]?.instancesLastFetchedAt;
        return null == t || t + 3e5 < Date.now();
    }
    shouldFetchGlobalCatalog() {
        let e = l.catalogLastFetchedAt;
        return null == e || e + 864e5 < Date.now();
    }
}
let E = new f(i.h, {
    LOGOUT: function () {
        (o = {}), (l = { catalog: {}, hasFetchedCatalog: !1, catalogLastFetchedAt: void 0 });
    },
    GAME_SERVER_FETCH_CATALOG_SUCCESS: function (e) {
        let { guildId: t, catalog: n } = e;
        o = { ...o, [t]: { ...u(t), catalog: n, hasFetchedCatalog: !0, catalogLastFetchedAt: Date.now() } };
    },
    GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS: function (e) {
        let { catalog: t } = e;
        l = { catalog: t, hasFetchedCatalog: !0, catalogLastFetchedAt: Date.now() };
    },
    GAME_SERVER_FETCH_INSTANCES_SUCCESS: function (e) {
        let { guildId: t, instances: n } = e;
        o = { ...o, [t]: { ...u(t), instances: n, hasFetchedInstances: !0, instancesLastFetchedAt: Date.now() } };
    },
    GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS: function (e) {
        let { guildId: t, skuId: n, instructions: r } = e;
        o = { ...o, [t]: { ...u(t), instructions: { ...u(t).instructions, [n]: r } } };
    },
    GAME_SERVER_UPDATE_INSTANCE_SUCCESS: function (e) {
        let { guildId: t, instance: n } = e,
            r = u(t);
        o = { ...o, [t]: { ...r, instances: { ...r.instances, [n.id]: n } } };
    },
    GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, unlockedGameServers: n } = e,
            r = d(t, n);
        o = { ...o, [t]: { ...u(t), entitlements: n, appliedBoosts: r } };
    },
    GAME_SERVER_CREATE: c,
    GAME_SERVER_UPDATE: c,
    GAME_SERVER_DELETE: function (e) {
        let { guildId: t, gameServerId: n } = e,
            r = u(t);
        delete r.instances[n], (o = { ...o, [t]: { ...r } });
    },
    GUILD_POWERUP_ENTITLEMENTS_CREATE: function (e) {
        let { guildId: t, entitlements: n } = e,
            r = u(t);
        n
            .filter((e) => e.sku?.tenant_metadata?.guild_monetization?.game_server != null)
            .forEach((e) => {
                r.entitlements[e.id] = e;
            }),
            _(t, r);
    },
    GUILD_POWERUP_ENTITLEMENTS_DELETE: function (e) {
        let { guildId: t, entitlements: n } = e,
            r = u(t);
        n.forEach((e) => {
            delete r.entitlements[e.id];
        }),
            _(t, r);
    },
});
