"use strict";
n.d(t, { A: () => T });
var r = n(311907),
    i = n(73153),
    a = n(532555);
let s = {};
function o() {
    s = {};
}
function l(e) {
    return null == s[e] && (s[e] = { catalog: {}, instances: {}, instructions: {}, entitlements: {} }), s[e];
}
function u(e) {
    let { guildId: t, catalog: n } = e;
    s = { ...s, [t]: { ...l(t), catalog: n, hasFetchedCatalog: !0 } };
}
function c(e) {
    let { guildId: t, instances: n } = e;
    s = { ...s, [t]: { ...l(t), instances: n, hasFetchedInstances: !0 } };
}
function d(e) {
    let { guildId: t, skuId: n, instructions: r } = e;
    s = { ...s, [t]: { ...l(t), instructions: { ...l(t).instructions, [n]: r } } };
}
function _(e) {
    let { guildId: t, instance: n } = e,
        r = l(t);
    s = { ...s, [t]: { ...r, instances: { ...r.instances, [n.id]: n } } };
}
function f(e, t) {
    return Object.values(t).reduce(
        (e, t) => e + (t.sku?.tenant_metadata?.guild_monetization?.game_server?.boost_price ?? 0),
        0,
    );
}
function p(e) {
    let { guildId: t, unlockedGameServers: n } = e,
        r = f(t, n);
    s = { ...s, [t]: { ...l(t), entitlements: n, appliedBoosts: r } };
}
function h(e) {
    let { guildId: t, gameServer: n } = e,
        r = l(t);
    s = { ...s, [t]: { ...r, instances: { ...r.instances, [n.id]: (0, a.A)(n) } } };
}
function m(e) {
    let { guildId: t, gameServerId: n } = e,
        r = l(t);
    delete r.instances[n], (s = { ...s, [t]: { ...r } });
}
function g(e) {
    let { guildId: t, entitlements: n } = e,
        r = l(t);
    n
        .filter((e) => e.sku?.tenant_metadata?.guild_monetization?.game_server != null)
        .forEach((e) => {
            r.entitlements[e.id] = e;
        }),
        A(t, r);
}
function E(e) {
    let { guildId: t, entitlements: n } = e,
        r = l(t);
    n.forEach((e) => {
        delete r.entitlements[e.id];
    }),
        A(t, r);
}
function A(e, t) {
    let n = f(e, t.entitlements);
    s = { ...s, [e]: { ...t, appliedBoosts: n } };
}
class I extends r.Ay.Store {
    static displayName = "GameServerStore";
    getState() {
        return s;
    }
    getStateForGuild(e) {
        return null != e ? s[e] : void 0;
    }
    getLowestGameCostForGuild(e) {
        if (null == e) return null;
        let t = s[e],
            n = Object.values(t?.catalog ?? {});
        return 0 === n.length ? null : Math.min(...n.map((e) => e.baseCost));
    }
    hasFetchedCatalog(e) {
        return null != e && s[e]?.hasFetchedCatalog === !0;
    }
    hasFetchedInstances(e) {
        return null != e && s[e]?.hasFetchedInstances === !0;
    }
}
let T = new I(i.h, {
    LOGOUT: o,
    GAME_SERVER_FETCH_CATALOG_SUCCESS: u,
    GAME_SERVER_FETCH_INSTANCES_SUCCESS: c,
    GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS: d,
    GAME_SERVER_UPDATE_INSTANCE_SUCCESS: _,
    GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: p,
    GAME_SERVER_CREATE: h,
    GAME_SERVER_UPDATE: h,
    GAME_SERVER_DELETE: m,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: g,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: E,
});
