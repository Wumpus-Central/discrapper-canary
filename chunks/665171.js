n.d(t, {
    Jr: () => C,
    K: () => _,
    KH: () => S,
    QK: () => I,
    Wp: () => b,
    as: () => R,
    cq: () => v,
    e_: () => T,
    jL: () => f,
    pj: () => A,
    tT: () => g,
    z9: () => E,
});
var r = n(562465),
    i = n(73153),
    a = n(773669),
    l = n(287809),
    s = n(954571),
    d = n(371794),
    o = n(79133),
    c = n(532555),
    u = n(627072),
    h = n(760321),
    m = n(800007),
    p = n(652215);
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t)
        return void setTimeout(() => {
            i.h.dispatch({
                type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: o.q.reduce((e, t) => ((e[t.id] = t), e), {}),
            });
        }, 5e3);
    let n = l.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, d.aP)({
        url: p.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(m.q4),
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
            let n = (0, u.o)(t);
            return (e[n.id] = n), e;
        }, {});
        i.h.dispatch({ type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: e, catalog: n });
    });
}
function _() {
    let e = l.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, d.aP)({
        url: p.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(m.q4),
        query: { locale: a.default.locale, include_unpublished_products: e, include_unpublished_collection: e },
        oldFormErrors: !0,
        rejectWithError: !1,
        retries: 2,
    }).then((e) => {
        let t = e.body.products.reduce((e, t) => {
            let n = (0, u.o)(t);
            return (e[n.id] = n), e;
        }, {});
        i.h.dispatch({ type: "GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS", catalog: t });
    });
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return t
        ? (setTimeout(() => {
              i.h.dispatch({
                  type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                  guildId: e,
                  instances: o.L.reduce((e, t) => ((e[t.id] = t), e), {}),
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
    return (0, d.aP)({
        url: p.Rsh.STOREFRONT_PRODUCT_BY_SKU_ID(t),
        query: { locale: a.default.locale },
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
function b(e, t) {
    e &&
        s.default.track(p.HAw.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
            user_id: l.default.getCurrentUser()?.id,
            provider: t,
        });
}
function S() {
    i.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
}
function I(e, t) {
    i.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_UPDATE", pingUrl: e, state: t });
}
function f(e, t, n, i) {
    return r.Bo.post({
        url: p.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        body: { game_server_name: n, game_server_region: i },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function A(e, t, n, i) {
    return r.Bo.patch({
        url: p.Rsh.GUILD_POWERUP_UPDATE(e, t),
        body: { game_server_name: i, sku_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function T(e, t, n) {
    return r.Bo.del({
        url: p.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        query: { entitlement_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function C(e) {
    return r.Bo.get({ url: p.Rsh.GAME_SERVER_REGIONS(e), rejectWithError: !0, oldFormErrors: !0, retries: 3 }).then(
        (e) => {
            i.h.dispatch({
                type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
                regions: e.body.map(h.A).sort((e, t) => e.name.localeCompare(t.name)),
            });
        },
    );
}
function R(e, t) {
    return r.Bo.post({ url: p.Rsh.GAME_SERVER_WAKE(e, t), rejectWithError: !0 }).then((t) => {
        i.h.dispatch({ type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS", guildId: e, instance: (0, c.A)(t.body) });
    });
}
