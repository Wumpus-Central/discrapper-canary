"use strict";
n.d(t, { A: () => y });
var r = n(311907),
    i = n(73153),
    a = n(532555);
let s = 864e5,
    o = 3e5,
    l = {};
function u() {
    l = {};
}
function c(e) {
    return null == l[e] && (l[e] = { catalog: {}, instances: {}, instructions: {}, entitlements: {} }), l[e];
}
function d(e) {
    let { guildId: t, catalog: n } = e;
    l = { ...l, [t]: { ...c(t), catalog: n, hasFetchedCatalog: !0, catalogLastFetchedAt: Date.now() } };
}
function _(e) {
    let { guildId: t, instances: n } = e;
    l = { ...l, [t]: { ...c(t), instances: n, hasFetchedInstances: !0, instancesLastFetchedAt: Date.now() } };
}
function f(e) {
    let { guildId: t, skuId: n, instructions: r } = e;
    l = { ...l, [t]: { ...c(t), instructions: { ...c(t).instructions, [n]: r } } };
}
function p(e) {
    let { guildId: t, instance: n } = e,
        r = c(t);
    l = { ...l, [t]: { ...r, instances: { ...r.instances, [n.id]: n } } };
}
function h(e, t) {
    return Object.values(t).reduce(
        (e, t) => e + (t.sku?.tenant_metadata?.guild_monetization?.game_server?.boost_price ?? 0),
        0,
    );
}
function m(e) {
    let { guildId: t, unlockedGameServers: n } = e,
        r = h(t, n);
    l = { ...l, [t]: { ...c(t), entitlements: n, appliedBoosts: r } };
}
function g(e) {
    let { guildId: t, gameServer: n } = e,
        r = c(t);
    l = { ...l, [t]: { ...r, instances: { ...r.instances, [n.id]: (0, a.A)(n) } } };
}
function E(e) {
    let { guildId: t, gameServerId: n } = e,
        r = c(t);
    delete r.instances[n], (l = { ...l, [t]: { ...r } });
}
function A(e) {
    let { guildId: t, entitlements: n } = e,
        r = c(t);
    n
        .filter((e) => e.sku?.tenant_metadata?.guild_monetization?.game_server != null)
        .forEach((e) => {
            r.entitlements[e.id] = e;
        }),
        T(t, r);
}
function I(e) {
    let { guildId: t, entitlements: n } = e,
        r = c(t);
    n.forEach((e) => {
        delete r.entitlements[e.id];
    }),
        T(t, r);
}
function T(e, t) {
    let n = h(e, t.entitlements);
    l = { ...l, [e]: { ...t, appliedBoosts: n } };
}
class S extends r.Ay.PersistedStore {
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
        return null == t || t + s < Date.now();
    }
    shouldFetchInstancesForGuild(e) {
        let t = l[e]?.instancesLastFetchedAt;
        return null == t || t + o < Date.now();
    }
}
let y = new S(i.h, {
    LOGOUT: u,
    GAME_SERVER_FETCH_CATALOG_SUCCESS: d,
    GAME_SERVER_FETCH_INSTANCES_SUCCESS: _,
    GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS: f,
    GAME_SERVER_UPDATE_INSTANCE_SUCCESS: p,
    GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: m,
    GAME_SERVER_CREATE: g,
    GAME_SERVER_UPDATE: g,
    GAME_SERVER_DELETE: E,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: A,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: I,
});
