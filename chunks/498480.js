i.d(t, {
    Wp: () => b,
    pj: () => C,
    cq: () => S,
    Jr: () => V,
    hU: () => M,
    as: () => L,
    e_: () => G,
    hE: () => U,
    jL: () => j,
    K: () => x,
    tT: () => I,
    dk: () => y,
    z9: () => v,
    Kz: () => O,
    Ce: () => P,
    KH: () => R,
    QK: () => N,
});
var s = i(390544),
    n = i(636537),
    r = i(228366),
    a = i(773669),
    l = i(287809),
    o = i(174459),
    c = i(371794),
    d = i(814201),
    u = i(281445);
let m = [
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
function g(e, t) {
    return {
        id: e,
        name: t,
        provider: u.X.SHOCKBYTE,
        plans: m,
        baseCost: Math.min(...m.map((e) => e.cost)),
        gameId: "1",
    };
}
let T = [
        g("1", "GameServer Test #1"),
        g("2", "GameServer Test #2"),
        g("3", "GameServer Test #3"),
        g("4", "GameServer Test #4"),
        g("5", "GameServer Test #5"),
        g("6", "GameServer Test #6"),
        g("7", "GameServer Test #7"),
        g("8", "GameServer Test #8"),
        g("9", "GameServer Test #9"),
        g("10", "GameServer Test #10"),
        g("11", "GameServer Test #11"),
        g("12", "GameServer Test #12"),
    ],
    h = [
        {
            id: "1",
            gameId: "1",
            name: "GameServer Test #1",
            port: "25565",
            regionId: "us-east",
            regionName: "US East",
            planId: m[1].id,
            planName: m[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: s.M.ONLINE,
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
            planId: m[1].id,
            planName: m[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: s.M.ONLINE,
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
            planId: m[1].id,
            planName: m[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: s.M.ONLINE,
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
            planId: m[1].id,
            planName: m[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: s.M.ONLINE,
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
            planId: m[1].id,
            planName: m[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: s.M.ONLINE,
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
            planId: m[1].id,
            planName: m[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: s.M.ONLINE,
            serverIP: "127.0.0.1",
            gameServerPanelUrl: "https://google.com",
            entitlementId: "6",
        },
    ];
var E = i(24641);
function p(e) {
    let t = e.skus
            .map((e) => {
                let t = e.tenant_metadata.plan_features.map((e) => ({ title: e.title, description: e.description }));
                return { id: e.id, name: e.name, cost: e.tenant_metadata.boost_price, specifications: t };
            })
            .sort((e, t) => t.cost - e.cost),
        i = t.length > 0 ? Math.min(...t.map((e) => e.cost)) : 0;
    return {
        id: e.id,
        name: e.name,
        gameId: e.tenant_metadata?.guild_monetization?.game_server?.game_application_id ?? "",
        provider: e.tenant_metadata?.guild_monetization?.game_server?.provider,
        plans: t,
        baseCost: i,
        disabled: e.tenant_metadata?.guild_monetization?.game_server?.disabled,
        early_access: e.tenant_metadata?.guild_monetization?.game_server?.early_access,
        can_market: e.tenant_metadata?.guild_monetization?.game_server?.can_market,
    };
}
function _(e) {
    return { id: e.id, name: e.name, countryCode: e.country_code, pingUrl: e.ping_url, enabled: e.enabled };
}
var f = i(628049),
    A = i(652215);
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t)
        return void setTimeout(() => {
            r.h.dispatch({
                type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: T.reduce((e, t) => ((e[t.id] = t), e), {}),
            });
        }, 5e3);
    let i = l.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, c.aP)({
        url: A.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(f.q4),
        query: {
            locale: a.default.locale,
            guild_id: e,
            include_unpublished_products: i,
            include_unpublished_collection: i,
        },
        oldFormErrors: !0,
        rejectWithError: (0, n.fT)(),
        retries: 2,
    }).then((t) => {
        let i = t.body.products.reduce((e, t) => {
            let i = p(t);
            return (e[i.id] = i), e;
        }, {});
        r.h.dispatch({ type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: e, catalog: i });
    });
}
function x() {
    let e = l.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, c.aP)({
        url: A.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(f.q4),
        query: { locale: a.default.locale, include_unpublished_products: e, include_unpublished_collection: e },
        oldFormErrors: !0,
        rejectWithError: (0, n.fT)(),
        retries: 2,
    }).then((e) => {
        let t = e.body.products.reduce((e, t) => {
            let i = p(t);
            return (e[i.id] = i), e;
        }, {});
        r.h.dispatch({ type: "GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS", catalog: t });
    });
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 ? arguments[2] : void 0;
    return t
        ? (setTimeout(() => {
              r.h.dispatch({
                  type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                  guildId: e,
                  instances: h.reduce((e, t) => ((e[t.id] = t), e), {}),
              });
          }, 5e3),
          Promise.resolve())
        : n.Bo.get({ url: A.Rsh.GAME_SERVERS(e), rejectWithError: !0, retries: 2, signal: i }).then((t) => {
              if (null != t.body) {
                  let i = t.body.reduce((e, t) => ((e[t.id] = (0, E.A)(t)), e), {});
                  r.h.dispatch({ type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId: e, instances: i });
              }
          });
}
function I(e, t) {
    return (0, c.aP)({
        url: A.Rsh.STOREFRONT_PRODUCT_BY_SKU_ID(t),
        query: { locale: a.default.locale },
        rejectWithError: !0,
        retries: 3,
    }).then((i) => {
        if (null != i.body) {
            let s = i.body.tenant_metadata?.guild_monetization?.game_server?.instructions.pc ?? [];
            r.h.dispatch({
                type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS",
                guildId: e,
                skuId: t,
                instructions: s,
            });
        }
    });
}
function b(e, t) {
    e &&
        o.default.track(A.HAw.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
            user_id: l.default.getCurrentUser()?.id,
            provider: t,
        });
}
function R() {
    r.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
}
function N(e, t) {
    r.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_UPDATE", pingUrl: e, state: t });
}
function j(e, t, i, s) {
    return n.Bo.post({
        url: A.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        body: { game_server_name: i, game_server_region: s },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function C(e, t, i, s) {
    return n.Bo.patch({
        url: A.Rsh.GUILD_POWERUP_UPDATE(e, t),
        body: { game_server_name: s, sku_id: i },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function G(e, t, i) {
    return n.Bo.del({
        url: A.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        query: { entitlement_id: i },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function V(e) {
    return n.Bo.get({ url: A.Rsh.GAME_SERVER_REGIONS(e), rejectWithError: !0, oldFormErrors: !0, retries: 3 }).then(
        (e) => {
            r.h.dispatch({
                type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
                regions: e.body.map(_).sort((e, t) => e.name.localeCompare(t.name)),
            });
        },
    );
}
function y() {
    return n.Bo.get({ url: A.Rsh.GAME_SERVER_MY_REGIONS, rejectWithError: !0, oldFormErrors: !0, retries: 3 }).then(
        (e) => {
            r.h.dispatch({
                type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
                regions: e.body.regions.map(_).sort((e, t) => e.name.localeCompare(t.name)),
                creationDisabled: !0 === e.body.creation_disabled,
            });
        },
    );
}
function M() {
    return n.Bo.get({ url: A.Rsh.GAME_SERVERS_ME, rejectWithError: !0, oldFormErrors: !0, retries: 3 }).then((e) => {
        let t = e.body;
        r.h.dispatch({
            type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS",
            gameServers: t.game_servers ?? [],
            maxServers: t.max_game_servers,
        });
    });
}
function U(e) {
    let t = d.A.getGameServers().find((t) => t.subscription_id === e);
    null != t &&
        r.h.dispatch({ type: "GAME_SERVER_UPDATE", guildId: void 0, gameServer: { ...t, status: s.M.STARTING } });
}
function P(e, t) {
    let i = d.A.getGameServers().find((t) => t.subscription_id === e);
    return null == i
        ? Promise.resolve()
        : (r.h.dispatch({ type: "GAME_SERVER_UPDATE", guildId: void 0, gameServer: { ...i, name: t } }),
          n.Bo.patch({ url: A.Rsh.GAME_SERVER_ME(i.id), body: { name: t }, rejectWithError: !0 })
              .then(() => {
                  M().catch(() => {});
              })
              .catch((e) => {
                  throw (M().catch(() => {}), e);
              }));
}
function O(e) {
    let t = d.A.getGameServers().find((t) => t.id === e);
    return (
        null != t &&
            r.h.dispatch({ type: "GAME_SERVER_UPDATE", guildId: void 0, gameServer: { ...t, status: s.M.STARTING } }),
        n.Bo.post({ url: A.Rsh.GAME_SERVER_ME_WAKE(e), rejectWithError: !0 })
            .then((e) => {
                let t = e.body;
                r.h.dispatch({
                    type: "GAME_SERVER_UPDATE",
                    guildId: void 0,
                    gameServer: t.status === s.M.SLEEPING ? { ...t, status: s.M.STARTING } : t,
                });
            })
            .catch((e) => {
                throw (M().catch(() => {}), e);
            })
    );
}
function L(e, t) {
    return n.Bo.post({ url: A.Rsh.GAME_SERVER_WAKE(e, t), rejectWithError: !0 }).then((t) => {
        r.h.dispatch({ type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS", guildId: e, instance: (0, E.A)(t.body) });
    });
}
