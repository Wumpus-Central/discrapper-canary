"use strict";
n.d(t, {
    jL: () => L,
    Wp: () => C,
    K: () => g,
    tT: () => N,
    cq: () => S,
    Jr: () => v,
    z9: () => m,
    pj: () => D,
    as: () => b,
    e_: () => y,
    KH: () => R,
    QK: () => O,
});
var i = n(636537),
    r = n(228366),
    a = n(773669),
    s = n(287809),
    l = n(174459),
    o = n(371794),
    d = n(281445),
    c = n(390544);
let u = [
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
function _(e, t) {
    return {
        id: e,
        name: t,
        provider: d.X.SHOCKBYTE,
        plans: u,
        baseCost: Math.min(...u.map((e) => e.cost)),
        gameId: "1",
    };
}
let E = [
        _("1", "GameServer Test #1"),
        _("2", "GameServer Test #2"),
        _("3", "GameServer Test #3"),
        _("4", "GameServer Test #4"),
        _("5", "GameServer Test #5"),
        _("6", "GameServer Test #6"),
        _("7", "GameServer Test #7"),
        _("8", "GameServer Test #8"),
        _("9", "GameServer Test #9"),
        _("10", "GameServer Test #10"),
        _("11", "GameServer Test #11"),
        _("12", "GameServer Test #12"),
    ],
    A = [
        {
            id: "1",
            gameId: "1",
            name: "GameServer Test #1",
            port: "25565",
            regionId: "us-east",
            regionName: "US East",
            planId: u[1].id,
            planName: u[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: c.M.ONLINE,
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
            planId: u[1].id,
            planName: u[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: c.M.ONLINE,
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
            planId: u[1].id,
            planName: u[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: c.M.ONLINE,
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
            planId: u[1].id,
            planName: u[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: c.M.ONLINE,
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
            planId: u[1].id,
            planName: u[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: c.M.ONLINE,
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
            planId: u[1].id,
            planName: u[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: c.M.ONLINE,
            serverIP: "127.0.0.1",
            gameServerPanelUrl: "https://google.com",
            entitlementId: "6",
        },
    ];
var h = n(532555);
function I(e) {
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
function f(e) {
    return { id: e.id, name: e.name, countryCode: e.country_code, pingUrl: e.ping_url, enabled: e.enabled };
}
var p = n(800007),
    T = n(652215);
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t)
        return void setTimeout(() => {
            r.h.dispatch({
                type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: E.reduce((e, t) => ((e[t.id] = t), e), {}),
            });
        }, 5e3);
    let n = s.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, o.aP)({
        url: T.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(p.q4),
        query: {
            locale: a.default.locale,
            guild_id: e,
            include_unpublished_products: n,
            include_unpublished_collection: n,
        },
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
        retries: 2,
    }).then((t) => {
        let n = t.body.products.reduce((e, t) => {
            let n = I(t);
            return (e[n.id] = n), e;
        }, {});
        r.h.dispatch({ type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: e, catalog: n });
    });
}
function g() {
    let e = s.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, o.aP)({
        url: T.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(p.q4),
        query: { locale: a.default.locale, include_unpublished_products: e, include_unpublished_collection: e },
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
        retries: 2,
    }).then((e) => {
        let t = e.body.products.reduce((e, t) => {
            let n = I(t);
            return (e[n.id] = n), e;
        }, {});
        r.h.dispatch({ type: "GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS", catalog: t });
    });
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return t
        ? (setTimeout(() => {
              r.h.dispatch({
                  type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                  guildId: e,
                  instances: A.reduce((e, t) => ((e[t.id] = t), e), {}),
              });
          }, 5e3),
          Promise.resolve())
        : i.Bo.get({ url: T.Rsh.GAME_SERVERS(e), rejectWithError: !0, retries: 2, signal: n }).then((t) => {
              if (null != t.body) {
                  let n = t.body.reduce((e, t) => ((e[t.id] = (0, h.A)(t)), e), {});
                  r.h.dispatch({ type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId: e, instances: n });
              }
          });
}
function N(e, t) {
    return (0, o.aP)({
        url: T.Rsh.STOREFRONT_PRODUCT_BY_SKU_ID(t),
        query: { locale: a.default.locale },
        rejectWithError: !0,
        retries: 3,
    }).then((n) => {
        if (null != n.body) {
            let i = n.body.tenant_metadata?.guild_monetization?.game_server?.instructions.pc ?? [];
            r.h.dispatch({
                type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS",
                guildId: e,
                skuId: t,
                instructions: i,
            });
        }
    });
}
function C(e, t) {
    e &&
        l.default.track(T.HAw.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
            user_id: s.default.getCurrentUser()?.id,
            provider: t,
        });
}
function R() {
    r.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
}
function O(e, t) {
    r.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_UPDATE", pingUrl: e, state: t });
}
function L(e, t, n, r) {
    return i.Bo.post({
        url: T.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        body: { game_server_name: n, game_server_region: r },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function D(e, t, n, r) {
    return i.Bo.patch({
        url: T.Rsh.GUILD_POWERUP_UPDATE(e, t),
        body: { game_server_name: r, sku_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function y(e, t, n) {
    return i.Bo.del({
        url: T.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        query: { entitlement_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function v(e) {
    return i.Bo.get({ url: T.Rsh.GAME_SERVER_REGIONS(e), rejectWithError: !0, oldFormErrors: !0, retries: 3 }).then(
        (e) => {
            r.h.dispatch({
                type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
                regions: e.body.map(f).sort((e, t) => e.name.localeCompare(t.name)),
            });
        },
    );
}
function b(e, t) {
    return i.Bo.post({ url: T.Rsh.GAME_SERVER_WAKE(e, t), rejectWithError: !0 }).then((t) => {
        r.h.dispatch({ type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS", guildId: e, instance: (0, h.A)(t.body) });
    });
}
