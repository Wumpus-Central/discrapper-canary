"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    s = n(410212),
    a = n(532555);
let o = {},
    l = { catalog: {}, hasFetchedCatalog: !1, catalogLastFetchedAt: void 0 };
function _(e) {
    return null == o[e] && (o[e] = { catalog: {}, instances: {}, instructions: {}, entitlements: {} }), o[e];
}
function d(e, t) {
    return Object.values(t).reduce((e, t) => e + ((0, s.A)(t) ?? 0), 0);
}
function u(e) {
    let { guildId: t, gameServer: n } = e,
        i = _(t);
    o = { ...o, [t]: { ...i, instances: { ...i.instances, [n.id]: (0, a.A)(n) } } };
}
function c(e, t) {
    let n = d(e, t.entitlements);
    o = { ...o, [e]: { ...t, appliedBoosts: n } };
}
class E extends i.Ay.PersistedStore {
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
let h = new E(r.h, {
    LOGOUT: function () {
        (o = {}), (l = { catalog: {}, hasFetchedCatalog: !1, catalogLastFetchedAt: void 0 });
    },
    GAME_SERVER_FETCH_CATALOG_SUCCESS: function (e) {
        let { guildId: t, catalog: n } = e;
        o = { ...o, [t]: { ..._(t), catalog: n, hasFetchedCatalog: !0, catalogLastFetchedAt: Date.now() } };
    },
    GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS: function (e) {
        let { catalog: t } = e;
        l = { catalog: t, hasFetchedCatalog: !0, catalogLastFetchedAt: Date.now() };
    },
    GAME_SERVER_FETCH_INSTANCES_SUCCESS: function (e) {
        let { guildId: t, instances: n } = e;
        o = { ...o, [t]: { ..._(t), instances: n, hasFetchedInstances: !0, instancesLastFetchedAt: Date.now() } };
    },
    GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS: function (e) {
        let { guildId: t, skuId: n, instructions: i } = e;
        o = { ...o, [t]: { ..._(t), instructions: { ..._(t).instructions, [n]: i } } };
    },
    GAME_SERVER_UPDATE_INSTANCE_SUCCESS: function (e) {
        let { guildId: t, instance: n } = e,
            i = _(t);
        o = { ...o, [t]: { ...i, instances: { ...i.instances, [n.id]: n } } };
    },
    GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, unlockedGameServers: n } = e,
            i = d(t, n);
        o = { ...o, [t]: { ..._(t), entitlements: n, appliedBoosts: i } };
    },
    GAME_SERVER_CREATE: u,
    GAME_SERVER_UPDATE: u,
    GAME_SERVER_DELETE: function (e) {
        let { guildId: t, gameServerId: n } = e,
            i = _(t);
        delete i.instances[n], (o = { ...o, [t]: { ...i } });
    },
    GUILD_POWERUP_ENTITLEMENTS_CREATE: function (e) {
        let { guildId: t, entitlements: n } = e,
            i = _(t);
        n
            .filter((e) => e.sku?.tenant_metadata?.guild_monetization?.game_server != null)
            .forEach((e) => {
                i.entitlements[e.id] = e;
            }),
            c(t, i);
    },
    GUILD_POWERUP_ENTITLEMENTS_DELETE: function (e) {
        let { guildId: t, entitlements: n } = e,
            i = _(t);
        n.forEach((e) => {
            delete i.entitlements[e.id];
        }),
            c(t, i);
    },
});
