n.d(t, {
    Jr: () => L,
    K: () => T,
    KH: () => R,
    QK: () => f,
    Wp: () => O,
    as: () => D,
    cq: () => S,
    e_: () => m,
    jL: () => C,
    pj: () => p,
    tT: () => N,
    z9: () => A,
});
var i = n(636537),
    r = n(228366),
    a = n(773669),
    s = n(287809),
    _ = n(954571),
    l = n(371794),
    o = n(79133),
    E = n(532555),
    d = n(627072),
    c = n(760321),
    u = n(800007),
    I = n(652215);
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t)
        return void setTimeout(() => {
            r.h.dispatch({
                type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: o.q.reduce((e, t) => ((e[t.id] = t), e), {}),
            });
        }, 5e3);
    let n = s.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, l.aP)({
        url: I.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(u.q4),
        query: {
            locale: a.default.locale,
            guild_id: e,
            include_unpublished_products: n,
            include_unpublished_collection: n,
        },
        oldFormErrors: !0,
        rejectWithError: !1,
        retries: 2,
    }).then((t) => {
        let n = t.body.products.reduce((e, t) => {
            let n = (0, d.o)(t);
            return (e[n.id] = n), e;
        }, {});
        r.h.dispatch({ type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: e, catalog: n });
    });
}
function T() {
    let e = s.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, l.aP)({
        url: I.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(u.q4),
        query: { locale: a.default.locale, include_unpublished_products: e, include_unpublished_collection: e },
        oldFormErrors: !0,
        rejectWithError: !1,
        retries: 2,
    }).then((e) => {
        let t = e.body.products.reduce((e, t) => {
            let n = (0, d.o)(t);
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
                  instances: o.L.reduce((e, t) => ((e[t.id] = t), e), {}),
              });
          }, 5e3),
          Promise.resolve())
        : i.Bo.get({ url: I.Rsh.GAME_SERVERS(e), rejectWithError: !0, retries: 2, signal: n }).then((t) => {
              if (null != t.body) {
                  let n = t.body.reduce((e, t) => ((e[t.id] = (0, E.A)(t)), e), {});
                  r.h.dispatch({ type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId: e, instances: n });
              }
          });
}
function N(e, t) {
    return (0, l.aP)({
        url: I.Rsh.STOREFRONT_PRODUCT_BY_SKU_ID(t),
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
function O(e, t) {
    e &&
        _.default.track(I.HAw.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
            user_id: s.default.getCurrentUser()?.id,
            provider: t,
        });
}
function R() {
    r.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
}
function f(e, t) {
    r.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_UPDATE", pingUrl: e, state: t });
}
function C(e, t, n, r) {
    return i.Bo.post({
        url: I.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        body: { game_server_name: n, game_server_region: r },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function p(e, t, n, r) {
    return i.Bo.patch({
        url: I.Rsh.GUILD_POWERUP_UPDATE(e, t),
        body: { game_server_name: r, sku_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function m(e, t, n) {
    return i.Bo.del({
        url: I.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        query: { entitlement_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function L(e) {
    return i.Bo.get({ url: I.Rsh.GAME_SERVER_REGIONS(e), rejectWithError: !0, oldFormErrors: !0, retries: 3 }).then(
        (e) => {
            r.h.dispatch({
                type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
                regions: e.body.map(c.A).sort((e, t) => e.name.localeCompare(t.name)),
            });
        },
    );
}
function D(e, t) {
    return i.Bo.post({ url: I.Rsh.GAME_SERVER_WAKE(e, t), rejectWithError: !0 }).then((t) => {
        r.h.dispatch({ type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS", guildId: e, instance: (0, E.A)(t.body) });
    });
}
