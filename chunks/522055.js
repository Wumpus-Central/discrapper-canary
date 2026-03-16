"use strict";
n.d(t, { A: () => C });
var r = n(311907),
    i = n(73153),
    s = n(410212),
    a = n(532555);
let o = 864e5,
    l = 3e5,
    u = {},
    c = { catalog: {}, hasFetchedCatalog: !1, catalogLastFetchedAt: void 0 };
function d() {
    (u = {}), (c = { catalog: {}, hasFetchedCatalog: !1, catalogLastFetchedAt: void 0 });
}
function _(e) {
    return null == u[e] && (u[e] = { catalog: {}, instances: {}, instructions: {}, entitlements: {} }), u[e];
}
function f(e) {
    let { guildId: t, catalog: n } = e;
    u = { ...u, [t]: { ..._(t), catalog: n, hasFetchedCatalog: !0, catalogLastFetchedAt: Date.now() } };
}
function p(e) {
    let { catalog: t } = e;
    c = { catalog: t, hasFetchedCatalog: !0, catalogLastFetchedAt: Date.now() };
}
function h(e) {
    let { guildId: t, instances: n } = e;
    u = { ...u, [t]: { ..._(t), instances: n, hasFetchedInstances: !0, instancesLastFetchedAt: Date.now() } };
}
function m(e) {
    let { guildId: t, skuId: n, instructions: r } = e;
    u = { ...u, [t]: { ..._(t), instructions: { ..._(t).instructions, [n]: r } } };
}
function E(e) {
    let { guildId: t, instance: n } = e,
        r = _(t);
    u = { ...u, [t]: { ...r, instances: { ...r.instances, [n.id]: n } } };
}
function g(e, t) {
    return Object.values(t).reduce((e, t) => e + ((0, s.A)(t) ?? 0), 0);
}
function A(e) {
    let { guildId: t, unlockedGameServers: n } = e,
        r = g(t, n);
    u = { ...u, [t]: { ..._(t), entitlements: n, appliedBoosts: r } };
}
function I(e) {
    let { guildId: t, gameServer: n } = e,
        r = _(t);
    u = { ...u, [t]: { ...r, instances: { ...r.instances, [n.id]: (0, a.A)(n) } } };
}
function T(e) {
    let { guildId: t, gameServerId: n } = e,
        r = _(t);
    delete r.instances[n], (u = { ...u, [t]: { ...r } });
}
function S(e) {
    let { guildId: t, entitlements: n } = e,
        r = _(t);
    n
        .filter((e) => e.sku?.tenant_metadata?.guild_monetization?.game_server != null)
        .forEach((e) => {
            r.entitlements[e.id] = e;
        }),
        v(t, r);
}
function y(e) {
    let { guildId: t, entitlements: n } = e,
        r = _(t);
    n.forEach((e) => {
        delete r.entitlements[e.id];
    }),
        v(t, r);
}
function v(e, t) {
    let n = g(e, t.entitlements);
    u = { ...u, [e]: { ...t, appliedBoosts: n } };
}
class N extends r.Ay.PersistedStore {
    static displayName = "GameServerStore";
    static persistKey = "GameServerStore";
    initialize(e) {
        null != e && (u = e);
    }
    getState() {
        return u;
    }
    getStateForGuild(e) {
        return null != e ? u[e] : void 0;
    }
    getGlobalCatalogState() {
        return c;
    }
    getGlobalCatalogGame(e) {
        return Object.values(c.catalog).find((t) => t.gameId === e);
    }
    getLowestGameCostForGuild(e) {
        if (null == e) return null;
        let t = u[e],
            n = Object.values(t?.catalog ?? {});
        return 0 === n.length ? null : Math.min(...n.map((e) => e.baseCost));
    }
    hasFetchedCatalog(e) {
        return null != e && u[e]?.hasFetchedCatalog === !0;
    }
    hasFetchedInstances(e) {
        return null != e && u[e]?.hasFetchedInstances === !0;
    }
    shouldFetchCatalogForGuild(e) {
        let t = u[e]?.catalogLastFetchedAt;
        return null == t || t + o < Date.now();
    }
    shouldFetchInstancesForGuild(e) {
        let t = u[e]?.instancesLastFetchedAt;
        return null == t || t + l < Date.now();
    }
    shouldFetchGlobalCatalog() {
        let e = c.catalogLastFetchedAt;
        return null == e || e + o < Date.now();
    }
}
let C = new N(i.h, {
    LOGOUT: d,
    GAME_SERVER_FETCH_CATALOG_SUCCESS: f,
    GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS: p,
    GAME_SERVER_FETCH_INSTANCES_SUCCESS: h,
    GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS: m,
    GAME_SERVER_UPDATE_INSTANCE_SUCCESS: E,
    GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: A,
    GAME_SERVER_CREATE: I,
    GAME_SERVER_UPDATE: I,
    GAME_SERVER_DELETE: T,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: S,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: y,
});
