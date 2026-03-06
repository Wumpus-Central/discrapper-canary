"use strict";
n.d(t, {
    Jr: () => N,
    K: () => m,
    KH: () => I,
    QK: () => T,
    Wp: () => A,
    as: () => C,
    cq: () => E,
    e_: () => v,
    jL: () => S,
    pj: () => y,
    tT: () => g,
    z9: () => h,
});
var r = n(562465),
    i = n(73153),
    s = n(773669),
    a = n(287809),
    o = n(954571),
    l = n(371794),
    u = n(79133),
    c = n(532555),
    d = n(627072),
    _ = n(760321),
    f = n(800007),
    p = n(652215);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t)
        return void setTimeout(() => {
            i.h.dispatch({
                type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: u.q.reduce((e, t) => ((e[t.id] = t), e), {}),
            });
        }, 5e3);
    let n = a.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, l.aP)({
        url: p.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(f.q4),
        query: {
            locale: s.default.locale,
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
        i.h.dispatch({ type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: e, catalog: n });
    });
}
function m() {
    let e = a.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, l.aP)({
        url: p.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(f.q4),
        query: { locale: s.default.locale, include_unpublished_products: e, include_unpublished_collection: e },
        oldFormErrors: !0,
        rejectWithError: !1,
        retries: 2,
    }).then((e) => {
        let t = e.body.products.reduce((e, t) => {
            let n = (0, d.o)(t);
            return (e[n.id] = n), e;
        }, {});
        i.h.dispatch({ type: "GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS", catalog: t });
    });
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return t
        ? (setTimeout(() => {
              i.h.dispatch({
                  type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                  guildId: e,
                  instances: u.L.reduce((e, t) => ((e[t.id] = t), e), {}),
              });
          }, 5e3),
          Promise.resolve())
        : r.Bo.get({ url: p.Rsh.GAME_SERVERS(e), rejectWithError: !0, retries: 2, signal: n }).then((t) => {
              if (null != t.body) {
                  let n = t.body.reduce((e, t) => ((e[t.id] = (0, c.A)(t)), e), {});
                  i.h.dispatch({ type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId: e, instances: n });
              }
          });
}
function g(e, t) {
    return (0, l.aP)({
        url: p.Rsh.STOREFRONT_PRODUCT_BY_SKU_ID(t),
        query: { locale: s.default.locale },
        rejectWithError: !0,
        retries: 3,
    }).then((n) => {
        if (null != n.body) {
            let r = n.body.tenant_metadata?.guild_monetization?.game_server?.instructions.pc ?? [];
            i.h.dispatch({
                type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS",
                guildId: e,
                skuId: t,
                instructions: r,
            });
        }
    });
}
function A(e, t) {
    e &&
        o.default.track(p.HAw.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
            user_id: a.default.getCurrentUser()?.id,
            provider: t,
        });
}
function I() {
    i.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
}
function T(e, t) {
    i.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_UPDATE", pingUrl: e, state: t });
}
function S(e, t, n, i) {
    return r.Bo.post({
        url: p.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        body: { game_server_name: n, game_server_region: i },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function y(e, t, n, i) {
    return r.Bo.patch({
        url: p.Rsh.GUILD_POWERUP_UPDATE(e, t),
        body: { game_server_name: i, sku_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function v(e, t, n) {
    return r.Bo.del({
        url: p.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        query: { entitlement_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function N(e) {
    return r.Bo.get({ url: p.Rsh.GAME_SERVER_REGIONS(e), rejectWithError: !0, oldFormErrors: !0, retries: 3 }).then(
        (e) => {
            i.h.dispatch({
                type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
                regions: e.body.map(_.A).sort((e, t) => e.name.localeCompare(t.name)),
            });
        },
    );
}
function C(e, t) {
    return r.Bo.post({ url: p.Rsh.GAME_SERVER_WAKE(e, t), rejectWithError: !0 }).then((t) => {
        i.h.dispatch({ type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS", guildId: e, instance: (0, c.A)(t.body) });
    });
}
