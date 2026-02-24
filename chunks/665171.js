"use strict";
n.d(t, {
    Jr: () => v,
    K: () => h,
    KH: () => A,
    QK: () => I,
    Wp: () => g,
    as: () => N,
    cq: () => m,
    e_: () => y,
    jL: () => T,
    pj: () => S,
    tT: () => E,
    z9: () => p,
});
var r = n(562465),
    i = n(73153),
    s = n(287809),
    a = n(954571),
    o = n(371794),
    l = n(79133),
    u = n(532555),
    c = n(627072),
    d = n(760321),
    _ = n(800007),
    f = n(652215);
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t)
        return void setTimeout(() => {
            i.h.dispatch({
                type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: l.q.reduce((e, t) => ((e[t.id] = t), e), {}),
            });
        }, 5e3);
    let n = s.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, o.aP)({
        url: f.Rsh.COLLECTION_PUBLISHED_LISTINGS_SKU(_.q4),
        query: { guild_id: e, include_unpublished_products: n, include_unpublished_collection: n },
        oldFormErrors: !0,
        rejectWithError: !1,
        retries: 2,
    }).then((t) => {
        let n = t.body.products.reduce((e, t) => {
            let n = (0, c.o)(t);
            return (e[n.id] = n), e;
        }, {});
        i.h.dispatch({ type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: e, catalog: n });
    });
}
function h() {
    let e = s.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, o.aP)({
        url: f.Rsh.COLLECTION_PUBLISHED_LISTINGS_SKU(_.q4),
        query: { include_unpublished_products: e, include_unpublished_collection: e },
        oldFormErrors: !0,
        rejectWithError: !1,
        retries: 2,
    }).then((e) => {
        let t = e.body.products.reduce((e, t) => {
            let n = (0, c.o)(t);
            return (e[n.id] = n), e;
        }, {});
        i.h.dispatch({ type: "GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS", catalog: t });
    });
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return t
        ? (setTimeout(() => {
              i.h.dispatch({
                  type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                  guildId: e,
                  instances: l.L.reduce((e, t) => ((e[t.id] = t), e), {}),
              });
          }, 5e3),
          Promise.resolve())
        : r.Bo.get({ url: f.Rsh.GAME_SERVERS(e), rejectWithError: !0, retries: 2, signal: n }).then((t) => {
              if (null != t.body) {
                  let n = t.body.reduce((e, t) => ((e[t.id] = (0, u.A)(t)), e), {});
                  i.h.dispatch({ type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId: e, instances: n });
              }
          });
}
function E(e, t) {
    let n = s.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, o.aP)({
        url: f.Rsh.PRODUCT_FOR_SKU(t),
        query: { include_unpublished: n },
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
function g(e, t) {
    e &&
        a.default.track(f.HAw.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
            user_id: s.default.getCurrentUser()?.id,
            provider: t,
        });
}
function A() {
    i.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
}
function I(e, t) {
    i.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_UPDATE", pingUrl: e, state: t });
}
function T(e, t, n, i) {
    return r.Bo.post({
        url: f.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        body: { game_server_name: n, game_server_region: i },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function S(e, t, n, i) {
    return r.Bo.patch({
        url: f.Rsh.GUILD_POWERUP_UPDATE(e, t),
        body: { game_server_name: i, sku_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function y(e, t, n) {
    return r.Bo.del({
        url: f.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        query: { entitlement_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function v(e) {
    return r.Bo.get({ url: f.Rsh.GAME_SERVER_REGIONS(e), rejectWithError: !0, oldFormErrors: !0, retries: 3 }).then(
        (e) => {
            i.h.dispatch({
                type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
                regions: e.body.map(d.A).sort((e, t) => e.name.localeCompare(t.name)),
            });
        },
    );
}
function N(e, t) {
    return r.Bo.post({ url: f.Rsh.GAME_SERVER_WAKE(e, t), rejectWithError: !0 }).then((t) => {
        i.h.dispatch({ type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS", guildId: e, instance: (0, u.A)(t.body) });
    });
}
