"use strict";
n.d(t, { A: () => A });
var i = n(17928),
    r = n(228366),
    a = n(410212),
    s = n(532555);
let l = {},
    o = { catalog: {}, hasFetchedCatalog: !1, catalogLastFetchedAt: void 0 };
function d(e) {
    return null == l[e] && (l[e] = { catalog: {}, instances: {}, instructions: {}, entitlements: {} }), l[e];
}
function c(e, t) {
    return Object.values(t).reduce((e, t) => e + ((0, a.A)(t) ?? 0), 0);
}
function u(e) {
    let { guildId: t, gameServer: n } = e;
    if (null == t) return;
    let i = d(t);
    l = { ...l, [t]: { ...i, instances: { ...i.instances, [n.id]: (0, s.A)(n) } } };
}
function _(e, t) {
    let n = c(e, t.entitlements);
    l = { ...l, [e]: { ...t, appliedBoosts: n } };
}
class E extends i.Ay.PersistedStore {
    static displayName = "GameServerStore";
    static persistKey = "GameServerStore";
    initialize(e) {
        null != e && (l = e);
    }
    getState() {
        return l;
    }
    getStateForGuild(e) {
        return null != e ? l[e] : void 0;
    }
    getGlobalCatalogState() {
        return o;
    }
    getGlobalCatalogGame(e) {
        return Object.values(o.catalog).find((t) => t.gameId === e);
    }
    getLowestGameCostForGuild(e) {
        if (null == e) return null;
        let t = l[e],
            n = Object.values(t?.catalog ?? {});
        return 0 === n.length ? null : Math.min(...n.map((e) => e.baseCost));
    }
    hasFetchedCatalog(e) {
        return null != e && l[e]?.hasFetchedCatalog === !0;
    }
    hasFetchedInstances(e) {
        return null != e && l[e]?.hasFetchedInstances === !0;
    }
    shouldFetchCatalogForGuild(e) {
        let t = l[e]?.catalogLastFetchedAt;
        return null == t || t + 864e5 < Date.now();
    }
    shouldFetchInstancesForGuild(e) {
        let t = l[e]?.instancesLastFetchedAt;
        return null == t || t + 3e5 < Date.now();
    }
    shouldFetchGlobalCatalog() {
        let e = o.catalogLastFetchedAt;
        return null == e || e + 864e5 < Date.now();
    }
}
let A = new E(r.h, {
    LOGOUT: function () {
        (l = {}), (o = { catalog: {}, hasFetchedCatalog: !1, catalogLastFetchedAt: void 0 });
    },
    GAME_SERVER_FETCH_CATALOG_SUCCESS: function (e) {
        let { guildId: t, catalog: n } = e;
        l = { ...l, [t]: { ...d(t), catalog: n, hasFetchedCatalog: !0, catalogLastFetchedAt: Date.now() } };
    },
    GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS: function (e) {
        let { catalog: t } = e;
        o = { catalog: t, hasFetchedCatalog: !0, catalogLastFetchedAt: Date.now() };
    },
    GAME_SERVER_FETCH_INSTANCES_SUCCESS: function (e) {
        let { guildId: t, instances: n } = e;
        l = { ...l, [t]: { ...d(t), instances: n, hasFetchedInstances: !0, instancesLastFetchedAt: Date.now() } };
    },
    GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS: function (e) {
        let { guildId: t, skuId: n, instructions: i } = e;
        l = { ...l, [t]: { ...d(t), instructions: { ...d(t).instructions, [n]: i } } };
    },
    GAME_SERVER_UPDATE_INSTANCE_SUCCESS: function (e) {
        let { guildId: t, instance: n } = e,
            i = d(t);
        l = { ...l, [t]: { ...i, instances: { ...i.instances, [n.id]: n } } };
    },
    GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, unlockedGameServers: n } = e,
            i = c(t, n);
        l = { ...l, [t]: { ...d(t), entitlements: n, appliedBoosts: i } };
    },
    GAME_SERVER_CREATE: u,
    GAME_SERVER_UPDATE: u,
    GAME_SERVER_DELETE: function (e) {
        let { guildId: t, gameServerId: n } = e;
        if (null == t) return;
        let i = d(t);
        delete i.instances[n], (l = { ...l, [t]: { ...i } });
    },
    GUILD_POWERUP_ENTITLEMENTS_CREATE: function (e) {
        let { guildId: t, entitlements: n } = e,
            i = d(t);
        n
            .filter((e) => e.sku?.tenant_metadata?.guild_monetization?.game_server != null)
            .forEach((e) => {
                i.entitlements[e.id] = e;
            }),
            _(t, i);
    },
    GUILD_POWERUP_ENTITLEMENTS_DELETE: function (e) {
        let { guildId: t, entitlements: n } = e,
            i = d(t);
        n.forEach((e) => {
            delete i.entitlements[e.id];
        }),
            _(t, i);
    },
});
