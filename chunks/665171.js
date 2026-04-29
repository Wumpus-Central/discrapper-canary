t.d(r, {
    Jr: () => P,
    K: () => S,
    KH: () => C,
    QK: () => I,
    Wp: () => A,
    as: () => v,
    cq: () => h,
    e_: () => f,
    jL: () => G,
    pj: () => m,
    tT: () => T,
    z9: () => R,
});
var u = t(636537),
    o = t(228366),
    n = t(773669),
    E = t(287809),
    i = t(954571),
    l = t(371794),
    _ = t(79133),
    d = t(532555),
    s = t(627072),
    c = t(760321),
    p = t(800007),
    a = t(652215);
function R(e) {
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (r)
        return void setTimeout(() => {
            o.h.dispatch({
                type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: _.q.reduce((e, r) => ((e[r.id] = r), e), {}),
            });
        }, 5e3);
    let t = E.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, l.aP)({
        url: a.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(p.q4),
        query: {
            locale: n.default.locale,
            guild_id: e,
            include_unpublished_products: t,
            include_unpublished_collection: t,
        },
        oldFormErrors: !0,
        rejectWithError: !1,
        retries: 2,
    }).then((r) => {
        let t = r.body.products.reduce((e, r) => {
            let t = (0, s.o)(r);
            return (e[t.id] = t), e;
        }, {});
        o.h.dispatch({ type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: e, catalog: t });
    });
}
function S() {
    let e = E.default.getCurrentUser()?.isStaff() ?? !1;
    return (0, l.aP)({
        url: a.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(p.q4),
        query: { locale: n.default.locale, include_unpublished_products: e, include_unpublished_collection: e },
        oldFormErrors: !0,
        rejectWithError: !1,
        retries: 2,
    }).then((e) => {
        let r = e.body.products.reduce((e, r) => {
            let t = (0, s.o)(r);
            return (e[t.id] = t), e;
        }, {});
        o.h.dispatch({ type: "GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS", catalog: r });
    });
}
function h(e) {
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        t = arguments.length > 2 ? arguments[2] : void 0;
    return r
        ? (setTimeout(() => {
              o.h.dispatch({
                  type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                  guildId: e,
                  instances: _.L.reduce((e, r) => ((e[r.id] = r), e), {}),
              });
          }, 5e3),
          Promise.resolve())
        : u.Bo.get({ url: a.Rsh.GAME_SERVERS(e), rejectWithError: !0, retries: 2, signal: t }).then((r) => {
              if (null != r.body) {
                  let t = r.body.reduce((e, r) => ((e[r.id] = (0, d.A)(r)), e), {});
                  o.h.dispatch({ type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId: e, instances: t });
              }
          });
}
function T(e, r) {
    return (0, l.aP)({
        url: a.Rsh.STOREFRONT_PRODUCT_BY_SKU_ID(r),
        query: { locale: n.default.locale },
        rejectWithError: !0,
        retries: 3,
    }).then((t) => {
        if (null != t.body) {
            let u = t.body.tenant_metadata?.guild_monetization?.game_server?.instructions.pc ?? [];
            o.h.dispatch({
                type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS",
                guildId: e,
                skuId: r,
                instructions: u,
            });
        }
    });
}
function A(e, r) {
    e &&
        i.default.track(a.HAw.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
            user_id: E.default.getCurrentUser()?.id,
            provider: r,
        });
}
function C() {
    o.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
}
function I(e, r) {
    o.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_UPDATE", pingUrl: e, state: r });
}
function G(e, r, t, o) {
    return u.Bo.post({
        url: a.Rsh.GUILD_POWERUP_TOGGLE(e, r),
        body: { game_server_name: t, game_server_region: o },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function m(e, r, t, o) {
    return u.Bo.patch({
        url: a.Rsh.GUILD_POWERUP_UPDATE(e, r),
        body: { game_server_name: o, sku_id: t },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function f(e, r, t) {
    return u.Bo.del({
        url: a.Rsh.GUILD_POWERUP_TOGGLE(e, r),
        query: { entitlement_id: t },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function P(e) {
    return u.Bo.get({ url: a.Rsh.GAME_SERVER_REGIONS(e), rejectWithError: !0, oldFormErrors: !0, retries: 3 }).then(
        (e) => {
            o.h.dispatch({
                type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
                regions: e.body.map(c.A).sort((e, r) => e.name.localeCompare(r.name)),
            });
        },
    );
}
function v(e, r) {
    return u.Bo.post({ url: a.Rsh.GAME_SERVER_WAKE(e, r), rejectWithError: !0 }).then((r) => {
        o.h.dispatch({ type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS", guildId: e, instance: (0, d.A)(r.body) });
    });
}
