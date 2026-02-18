"use strict";
n.d(t, { A: () => b });
var r = n(311907),
    i = n(73153),
    a = n(532555);
let s = 864e5,
    o = 3e5,
    l = {},
    u = { catalog: {}, hasFetchedCatalog: !1, catalogLastFetchedAt: void 0 };
function c() {
    (l = {}), (u = { catalog: {}, hasFetchedCatalog: !1, catalogLastFetchedAt: void 0 });
}
function d(e) {
    return null == l[e] && (l[e] = { catalog: {}, instances: {}, instructions: {}, entitlements: {} }), l[e];
}
function _(e) {
    let { guildId: t, catalog: n } = e;
    l = { ...l, [t]: { ...d(t), catalog: n, hasFetchedCatalog: !0, catalogLastFetchedAt: Date.now() } };
}
function f(e) {
    let { catalog: t } = e;
    u = { catalog: t, hasFetchedCatalog: !0, catalogLastFetchedAt: Date.now() };
}
function h(e) {
    let { guildId: t, instances: n } = e;
    l = { ...l, [t]: { ...d(t), instances: n, hasFetchedInstances: !0, instancesLastFetchedAt: Date.now() } };
}
function p(e) {
    let { guildId: t, skuId: n, instructions: r } = e;
    l = { ...l, [t]: { ...d(t), instructions: { ...d(t).instructions, [n]: r } } };
}
function g(e) {
    let { guildId: t, instance: n } = e,
        r = d(t);
    l = { ...l, [t]: { ...r, instances: { ...r.instances, [n.id]: n } } };
}
function E(e, t) {
    return Object.values(t).reduce(
        (e, t) => e + (t.sku?.tenant_metadata?.guild_monetization?.game_server?.boost_price ?? 0),
        0,
    );
}
function A(e) {
    let { guildId: t, unlockedGameServers: n } = e,
        r = E(t, n);
    l = { ...l, [t]: { ...d(t), entitlements: n, appliedBoosts: r } };
}
function I(e) {
    let { guildId: t, gameServer: n } = e,
        r = d(t);
    l = { ...l, [t]: { ...r, instances: { ...r.instances, [n.id]: (0, a.A)(n) } } };
}
function T(e) {
    let { guildId: t, gameServerId: n } = e,
        r = d(t);
    delete r.instances[n], (l = { ...l, [t]: { ...r } });
}
function y(e) {
    let { guildId: t, entitlements: n } = e,
        r = d(t);
    n
        .filter((e) => e.sku?.tenant_metadata?.guild_monetization?.game_server != null)
        .forEach((e) => {
            r.entitlements[e.id] = e;
        }),
        v(t, r);
}
function S(e) {
    let { guildId: t, entitlements: n } = e,
        r = d(t);
    n.forEach((e) => {
        delete r.entitlements[e.id];
    }),
        v(t, r);
}
function v(e, t) {
    let n = E(e, t.entitlements);
    l = { ...l, [e]: { ...t, appliedBoosts: n } };
}
class C extends r.Ay.PersistedStore {
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
        return u;
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
    shouldFetchGlobalCatalog() {
        let e = u.catalogLastFetchedAt;
        return null == e || e + s < Date.now();
    }
}
let b = new C(i.h, {
    LOGOUT: c,
    GAME_SERVER_FETCH_CATALOG_SUCCESS: _,
    GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS: f,
    GAME_SERVER_FETCH_INSTANCES_SUCCESS: h,
    GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS: p,
    GAME_SERVER_UPDATE_INSTANCE_SUCCESS: g,
    GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: A,
    GAME_SERVER_CREATE: I,
    GAME_SERVER_UPDATE: I,
    GAME_SERVER_DELETE: T,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: y,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: S,
});
