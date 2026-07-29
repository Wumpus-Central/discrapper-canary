"use strict";
n.d(t, {
    Wp: () => O,
    pj: () => D,
    cq: () => N,
    Jr: () => b,
    hU: () => P,
    as: () => G,
    e_: () => v,
    hE: () => U,
    jL: () => y,
    K: () => S,
    tT: () => C,
    dk: () => M,
    z9: () => g,
    Ce: () => w,
    KH: () => R,
    QK: () => L,
});
var i = n(390544),
    r = n(562465),
    a = n(228366),
    s = n(773669),
    l = n(287809),
    o = n(174459),
    d = n(371794),
    c = n(814201),
    u = n(281445);
let _ = [
    {
        id: "1",
        name: "GameServer #1",
        cost: 3,
        specifications: [
            { title: "2", description: "GB" },
            { title: "1", description: "vCPU" },
            { title: "25", description: "GB" },
        ],
    },
    {
        id: "2",
        name: "GameServer #2",
        cost: 6,
        specifications: [
            { title: "2", description: "GB" },
            { title: "1", description: "vCPU" },
            { title: "25", description: "GB" },
        ],
    },
    {
        id: "3",
        name: "GameServer #3",
        cost: 12,
        specifications: [
            { title: "2", description: "GB" },
            { title: "1", description: "vCPU" },
            { title: "25", description: "GB" },
        ],
    },
];
function E(e, t) {
    return {
        id: e,
        name: t,
        provider: u.X.SHOCKBYTE,
        plans: _,
        baseCost: Math.min(..._.map((e) => e.cost)),
        gameId: "1",
    };
}
let A = [
        E("1", "GameServer Test #1"),
        E("2", "GameServer Test #2"),
        E("3", "GameServer Test #3"),
        E("4", "GameServer Test #4"),
        E("5", "GameServer Test #5"),
        E("6", "GameServer Test #6"),
        E("7", "GameServer Test #7"),
        E("8", "GameServer Test #8"),
        E("9", "GameServer Test #9"),
        E("10", "GameServer Test #10"),
        E("11", "GameServer Test #11"),
        E("12", "GameServer Test #12"),
    ],
    h = [
        {
            id: "1",
            gameId: "1",
            name: "GameServer Test #1",
            port: "25565",
            regionId: "us-east",
            regionName: "US East",
            planId: _[1].id,
            planName: _[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: i.M.ONLINE,
            serverIP: "127.0.0.1",
            gameServerPanelUrl: "https://google.com",
            entitlementId: "1",
        },
        {
            id: "2",
            gameId: "2",
            name: "GameServer Test #2",
            port: "25565",
            regionId: "us-east",
            regionName: "US East",
            planId: _[1].id,
            planName: _[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: i.M.ONLINE,
            serverIP: "127.0.0.1",
            gameServerPanelUrl: "https://google.com",
            entitlementId: "2",
        },
        {
            id: "3",
            gameId: "3",
            name: "GameServer Test #3",
            port: "25565",
            regionId: "us-east",
            regionName: "US East",
            planId: _[1].id,
            planName: _[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: i.M.ONLINE,
            serverIP: "127.0.0.1",
            gameServerPanelUrl: "https://google.com",
            entitlementId: "3",
        },
        {
            id: "4",
            gameId: "4",
            name: "GameServer Test #4",
            port: "25565",
            regionId: "us-east",
            regionName: "US East",
            planId: _[1].id,
            planName: _[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: i.M.ONLINE,
            serverIP: "127.0.0.1",
            gameServerPanelUrl: "https://google.com",
            entitlementId: "4",
        },
        {
            id: "5",
            gameId: "5",
            name: "GameServer Test #5",
            port: "25565",
            regionId: "us-east",
            regionName: "US East",
            planId: _[1].id,
            planName: _[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: i.M.ONLINE,
            serverIP: "127.0.0.1",
            gameServerPanelUrl: "https://google.com",
            entitlementId: "5",
        },
        {
            id: "6",
            gameId: "6",
            name: "GameServer Test #6",
            port: "25565",
            regionId: "us-east",
            regionName: "US East",
            planId: _[1].id,
            planName: _[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: i.M.ONLINE,
            serverIP: "127.0.0.1",
            gameServerPanelUrl: "https://google.com",
            entitlementId: "6",
        },
    ];
var I = n(24641);
function f(e) {
    let t = e.skus
            .map((e) => {
                let t = e.tenant_metadata.plan_features.map((e) => ({ title: e.title, description: e.description }));
                return { id: e.id, name: e.name, cost: e.tenant_metadata.boost_price, specifications: t };
            })
            .sort((e, t) => t.cost - e.cost),
        n = t.length > 0 ? Math.min(...t.map((e) => e.cost)) : 0;
    return {
        id: e.id,
        name: e.name,
        gameId: e.tenant_metadata?.guild_monetization?.game_server?.game_application_id ?? "",
        provider: e.tenant_metadata?.guild_monetization?.game_server?.provider,
        plans: t,
        baseCost: n,
        disabled: e.tenant_metadata?.guild_monetization?.game_server?.disabled,
        early_access: e.tenant_metadata?.guild_monetization?.game_server?.early_access,
        can_market: e.tenant_metadata?.guild_monetization?.game_server?.can_market,
    };
}
function p(e) {
    return { id: e.id, name: e.name, countryCode: e.country_code, pingUrl: e.ping_url, enabled: e.enabled };
}
var T = n(628049),
    m = n(652215);
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t)
        return void setTimeout(() => {
            a.h.dispatch({
                type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: A.reduce((e, t) => ((e[t.id] = t), e), {}),
            });
        }, 5e3);
    let n = l.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, d.aP)({
        url: m.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(T.q4),
        query: {
            locale: s.default.locale,
            guild_id: e,
            include_unpublished_products: n,
            include_unpublished_collection: n,
        },
        oldFormErrors: !0,
        rejectWithError: (0, r.fT)(),
        retries: 2,
    }).then((t) => {
        let n = t.body.products.reduce((e, t) => {
            let n = f(t);
            return (e[n.id] = n), e;
        }, {});
        a.h.dispatch({ type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: e, catalog: n });
    });
}
function S() {
    let e = l.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, d.aP)({
        url: m.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(T.q4),
        query: { locale: s.default.locale, include_unpublished_products: e, include_unpublished_collection: e },
        oldFormErrors: !0,
        rejectWithError: (0, r.fT)(),
        retries: 2,
    }).then((e) => {
        let t = e.body.products.reduce((e, t) => {
            let n = f(t);
            return (e[n.id] = n), e;
        }, {});
        a.h.dispatch({ type: "GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS", catalog: t });
    });
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return t
        ? (setTimeout(() => {
              a.h.dispatch({
                  type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                  guildId: e,
                  instances: h.reduce((e, t) => ((e[t.id] = t), e), {}),
              });
          }, 5e3),
          Promise.resolve())
        : r.Bo.get({ url: m.Rsh.GAME_SERVERS(e), rejectWithError: !0, retries: 2, signal: n }).then((t) => {
              if (null != t.body) {
                  let n = t.body.reduce((e, t) => ((e[t.id] = (0, I.A)(t)), e), {});
                  a.h.dispatch({ type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId: e, instances: n });
              }
          });
}
function C(e, t) {
    return (0, d.aP)({
        url: m.Rsh.STOREFRONT_PRODUCT_BY_SKU_ID(t),
        query: { locale: s.default.locale },
        rejectWithError: !0,
        retries: 3,
    }).then((n) => {
        if (null != n.body) {
            let i = n.body.tenant_metadata?.guild_monetization?.game_server?.instructions.pc ?? [];
            a.h.dispatch({
                type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS",
                guildId: e,
                skuId: t,
                instructions: i,
            });
        }
    });
}
function O(e, t) {
    e &&
        o.default.track(m.HAw.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
            user_id: l.default.getCurrentUser()?.id,
            provider: t,
        });
}
function R() {
    a.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
}
function L(e, t) {
    a.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_UPDATE", pingUrl: e, state: t });
}
function y(e, t, n, i) {
    return r.Bo.post({
        url: m.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        body: { game_server_name: n, game_server_region: i },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function D(e, t, n, i) {
    return r.Bo.patch({
        url: m.Rsh.GUILD_POWERUP_UPDATE(e, t),
        body: { game_server_name: i, sku_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function v(e, t, n) {
    return r.Bo.del({
        url: m.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        query: { entitlement_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function b(e) {
    return r.Bo.get({ url: m.Rsh.GAME_SERVER_REGIONS(e), rejectWithError: !0, oldFormErrors: !0, retries: 3 }).then(
        (e) => {
            a.h.dispatch({
                type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
                regions: e.body.map(p).sort((e, t) => e.name.localeCompare(t.name)),
            });
        },
    );
}
function M() {
    return r.Bo.get({ url: m.Rsh.GAME_SERVER_MY_REGIONS, rejectWithError: !0, oldFormErrors: !0, retries: 3 }).then(
        (e) => {
            a.h.dispatch({
                type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
                regions: e.body.regions.map(p).sort((e, t) => e.name.localeCompare(t.name)),
                creationDisabled: !0 === e.body.creation_disabled,
            });
        },
    );
}
function P() {
    return r.Bo.get({ url: m.Rsh.GAME_SERVERS_ME, rejectWithError: !0, oldFormErrors: !0, retries: 3 }).then((e) => {
        let t = e.body;
        a.h.dispatch({ type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS", gameServers: t.game_servers ?? [] });
    });
}
function U(e) {
    let t = c.A.getGameServers().find((t) => t.subscription_id === e);
    null != t &&
        a.h.dispatch({ type: "GAME_SERVER_UPDATE", guildId: void 0, gameServer: { ...t, status: i.M.STARTING } });
}
function w(e, t) {
    let n = c.A.getGameServers().find((t) => t.subscription_id === e);
    return null == n
        ? Promise.resolve()
        : (a.h.dispatch({ type: "GAME_SERVER_UPDATE", guildId: void 0, gameServer: { ...n, name: t } }),
          r.Bo.patch({ url: m.Rsh.GAME_SERVER_ME(n.id), body: { name: t }, rejectWithError: !0 })
              .then(() => {
                  P().catch(() => {});
              })
              .catch((e) => {
                  throw (P().catch(() => {}), e);
              }));
}
function G(e, t) {
    return r.Bo.post({ url: m.Rsh.GAME_SERVER_WAKE(e, t), rejectWithError: !0 }).then((t) => {
        a.h.dispatch({ type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS", guildId: e, instance: (0, I.A)(t.body) });
    });
}
