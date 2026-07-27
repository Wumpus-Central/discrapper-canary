"use strict";
n.d(t, {
    jL: () => b,
    Wp: () => y,
    K: () => O,
    tT: () => L,
    cq: () => R,
    Jr: () => U,
    z9: () => C,
    pj: () => M,
    as: () => w,
    e_: () => P,
    KH: () => D,
    QK: () => v,
});
var i = n(390544),
    r = n(562465),
    a = n(228366),
    s = n(773669),
    l = n(287809),
    o = n(174459),
    d = n(371794),
    c = n(17928);
let u = [];
function _(e) {
    let { guildId: t, gameServer: n } = e;
    null != t || (u = -1 === u.findIndex((e) => e.id === n.id) ? [...u, n] : u.map((e) => (e.id === n.id ? n : e)));
}
class E extends c.Ay.Store {
    static displayName = "OwnedGameServersStore";
    getGameServers() {
        return u;
    }
}
new E(a.h, {
    LOGOUT: function () {
        u = [];
    },
    GAME_SERVER_FETCH_MY_SERVERS_SUCCESS: function (e) {
        let { gameServers: t } = e;
        u = t;
    },
    GAME_SERVER_CREATE: _,
    GAME_SERVER_UPDATE: _,
    GAME_SERVER_DELETE: function (e) {
        let { guildId: t, gameServerId: n } = e;
        null == t && (u = u.filter((e) => e.id !== n));
    },
});
var A = n(281445);
let h = [
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
function I(e, t) {
    return {
        id: e,
        name: t,
        provider: A.X.SHOCKBYTE,
        plans: h,
        baseCost: Math.min(...h.map((e) => e.cost)),
        gameId: "1",
    };
}
let f = [
        I("1", "GameServer Test #1"),
        I("2", "GameServer Test #2"),
        I("3", "GameServer Test #3"),
        I("4", "GameServer Test #4"),
        I("5", "GameServer Test #5"),
        I("6", "GameServer Test #6"),
        I("7", "GameServer Test #7"),
        I("8", "GameServer Test #8"),
        I("9", "GameServer Test #9"),
        I("10", "GameServer Test #10"),
        I("11", "GameServer Test #11"),
        I("12", "GameServer Test #12"),
    ],
    p = [
        {
            id: "1",
            gameId: "1",
            name: "GameServer Test #1",
            port: "25565",
            regionId: "us-east",
            regionName: "US East",
            planId: h[1].id,
            planName: h[1].name,
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
            planId: h[1].id,
            planName: h[1].name,
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
            planId: h[1].id,
            planName: h[1].name,
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
            planId: h[1].id,
            planName: h[1].name,
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
            planId: h[1].id,
            planName: h[1].name,
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
            planId: h[1].id,
            planName: h[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: i.M.ONLINE,
            serverIP: "127.0.0.1",
            gameServerPanelUrl: "https://google.com",
            entitlementId: "6",
        },
    ];
var T = n(532555);
function m(e) {
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
function g(e) {
    return { id: e.id, name: e.name, countryCode: e.country_code, pingUrl: e.ping_url, enabled: e.enabled };
}
var S = n(800007),
    N = n(652215);
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t)
        return void setTimeout(() => {
            a.h.dispatch({
                type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: f.reduce((e, t) => ((e[t.id] = t), e), {}),
            });
        }, 5e3);
    let n = l.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, d.aP)({
        url: N.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(S.q4),
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
            let n = m(t);
            return (e[n.id] = n), e;
        }, {});
        a.h.dispatch({ type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: e, catalog: n });
    });
}
function O() {
    let e = l.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, d.aP)({
        url: N.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(S.q4),
        query: { locale: s.default.locale, include_unpublished_products: e, include_unpublished_collection: e },
        oldFormErrors: !0,
        rejectWithError: (0, r.fT)(),
        retries: 2,
    }).then((e) => {
        let t = e.body.products.reduce((e, t) => {
            let n = m(t);
            return (e[n.id] = n), e;
        }, {});
        a.h.dispatch({ type: "GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS", catalog: t });
    });
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return t
        ? (setTimeout(() => {
              a.h.dispatch({
                  type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                  guildId: e,
                  instances: p.reduce((e, t) => ((e[t.id] = t), e), {}),
              });
          }, 5e3),
          Promise.resolve())
        : r.Bo.get({ url: N.Rsh.GAME_SERVERS(e), rejectWithError: !0, retries: 2, signal: n }).then((t) => {
              if (null != t.body) {
                  let n = t.body.reduce((e, t) => ((e[t.id] = (0, T.A)(t)), e), {});
                  a.h.dispatch({ type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId: e, instances: n });
              }
          });
}
function L(e, t) {
    return (0, d.aP)({
        url: N.Rsh.STOREFRONT_PRODUCT_BY_SKU_ID(t),
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
function y(e, t) {
    e &&
        o.default.track(N.HAw.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
            user_id: l.default.getCurrentUser()?.id,
            provider: t,
        });
}
function D() {
    a.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
}
function v(e, t) {
    a.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_UPDATE", pingUrl: e, state: t });
}
function b(e, t, n, i) {
    return r.Bo.post({
        url: N.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        body: { game_server_name: n, game_server_region: i },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function M(e, t, n, i) {
    return r.Bo.patch({
        url: N.Rsh.GUILD_POWERUP_UPDATE(e, t),
        body: { game_server_name: i, sku_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function P(e, t, n) {
    return r.Bo.del({
        url: N.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        query: { entitlement_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function U(e) {
    return r.Bo.get({ url: N.Rsh.GAME_SERVER_REGIONS(e), rejectWithError: !0, oldFormErrors: !0, retries: 3 }).then(
        (e) => {
            a.h.dispatch({
                type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
                regions: e.body.map(g).sort((e, t) => e.name.localeCompare(t.name)),
            });
        },
    );
}
function w(e, t) {
    return r.Bo.post({ url: N.Rsh.GAME_SERVER_WAKE(e, t), rejectWithError: !0 }).then((t) => {
        a.h.dispatch({ type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS", guildId: e, instance: (0, T.A)(t.body) });
    });
}
