r.d(t, {
    jL: () => N,
    Wp: () => f,
    K: () => C,
    tT: () => A,
    cq: () => T,
    Jr: () => O,
    z9: () => I,
    pj: () => P,
    as: () => y,
    e_: () => b,
    KH: () => R,
    QK: () => G,
});
var n = r(636537),
    a = r(228366),
    o = r(773669),
    i = r(287809),
    l = r(174459),
    s = r(371794),
    d = r(281445),
    c = r(390544);
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
function m(e, t) {
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
        m("1", "GameServer Test #1"),
        m("2", "GameServer Test #2"),
        m("3", "GameServer Test #3"),
        m("4", "GameServer Test #4"),
        m("5", "GameServer Test #5"),
        m("6", "GameServer Test #6"),
        m("7", "GameServer Test #7"),
        m("8", "GameServer Test #8"),
        m("9", "GameServer Test #9"),
        m("10", "GameServer Test #10"),
        m("11", "GameServer Test #11"),
        m("12", "GameServer Test #12"),
    ],
    p = [
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
var _ = r(532555);
function h(e) {
    let t = e.skus
            .map((e) => {
                let t = e.tenant_metadata.plan_features.map((e) => ({ title: e.title, description: e.description }));
                return { id: e.id, name: e.name, cost: e.tenant_metadata.boost_price, specifications: t };
            })
            .sort((e, t) => t.cost - e.cost),
        r = t.length > 0 ? Math.min(...t.map((e) => e.cost)) : 0;
    return {
        id: e.id,
        name: e.name,
        gameId: e.tenant_metadata?.guild_monetization?.game_server?.game_application_id ?? "",
        provider: e.tenant_metadata?.guild_monetization?.game_server?.provider,
        plans: t,
        baseCost: r,
        disabled: e.tenant_metadata?.guild_monetization?.game_server?.disabled,
        early_access: e.tenant_metadata?.guild_monetization?.game_server?.early_access,
        can_market: e.tenant_metadata?.guild_monetization?.game_server?.can_market,
    };
}
function v(e) {
    return { id: e.id, name: e.name, countryCode: e.country_code, pingUrl: e.ping_url, enabled: e.enabled };
}
var g = r(800007),
    S = r(652215);
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t)
        return void setTimeout(() => {
            a.h.dispatch({
                type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: E.reduce((e, t) => ((e[t.id] = t), e), {}),
            });
        }, 5e3);
    let r = i.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, s.aP)({
        url: S.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(g.q4),
        query: {
            locale: o.default.locale,
            guild_id: e,
            include_unpublished_products: r,
            include_unpublished_collection: r,
        },
        oldFormErrors: !0,
        rejectWithError: !1,
        retries: 2,
    }).then((t) => {
        let r = t.body.products.reduce((e, t) => {
            let r = h(t);
            return (e[r.id] = r), e;
        }, {});
        a.h.dispatch({ type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: e, catalog: r });
    });
}
function C() {
    let e = i.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, s.aP)({
        url: S.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(g.q4),
        query: { locale: o.default.locale, include_unpublished_products: e, include_unpublished_collection: e },
        oldFormErrors: !0,
        rejectWithError: !1,
        retries: 2,
    }).then((e) => {
        let t = e.body.products.reduce((e, t) => {
            let r = h(t);
            return (e[r.id] = r), e;
        }, {});
        a.h.dispatch({ type: "GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS", catalog: t });
    });
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 ? arguments[2] : void 0;
    return t
        ? (setTimeout(() => {
              a.h.dispatch({
                  type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                  guildId: e,
                  instances: p.reduce((e, t) => ((e[t.id] = t), e), {}),
              });
          }, 5e3),
          Promise.resolve())
        : n.Bo.get({ url: S.Rsh.GAME_SERVERS(e), rejectWithError: !0, retries: 2, signal: r }).then((t) => {
              if (null != t.body) {
                  let r = t.body.reduce((e, t) => ((e[t.id] = (0, _.A)(t)), e), {});
                  a.h.dispatch({ type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId: e, instances: r });
              }
          });
}
function A(e, t) {
    return (0, s.aP)({
        url: S.Rsh.STOREFRONT_PRODUCT_BY_SKU_ID(t),
        query: { locale: o.default.locale },
        rejectWithError: !0,
        retries: 3,
    }).then((r) => {
        if (null != r.body) {
            let n = r.body.tenant_metadata?.guild_monetization?.game_server?.instructions.pc ?? [];
            a.h.dispatch({
                type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS",
                guildId: e,
                skuId: t,
                instructions: n,
            });
        }
    });
}
function f(e, t) {
    e &&
        l.default.track(S.HAw.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
            user_id: i.default.getCurrentUser()?.id,
            provider: t,
        });
}
function R() {
    a.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
}
function G(e, t) {
    a.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_UPDATE", pingUrl: e, state: t });
}
function N(e, t, r, a) {
    return n.Bo.post({
        url: S.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        body: { game_server_name: r, game_server_region: a },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function P(e, t, r, a) {
    return n.Bo.patch({
        url: S.Rsh.GUILD_POWERUP_UPDATE(e, t),
        body: { game_server_name: a, sku_id: r },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function b(e, t, r) {
    return n.Bo.del({
        url: S.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        query: { entitlement_id: r },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function O(e) {
    return n.Bo.get({ url: S.Rsh.GAME_SERVER_REGIONS(e), rejectWithError: !0, oldFormErrors: !0, retries: 3 }).then(
        (e) => {
            a.h.dispatch({
                type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
                regions: e.body.map(v).sort((e, t) => e.name.localeCompare(t.name)),
            });
        },
    );
}
function y(e, t) {
    return n.Bo.post({ url: S.Rsh.GAME_SERVER_WAKE(e, t), rejectWithError: !0 }).then((t) => {
        a.h.dispatch({ type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS", guildId: e, instance: (0, _.A)(t.body) });
    });
}
