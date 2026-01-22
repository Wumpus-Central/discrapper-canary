n.d(t, {
    Jr: () => v,
    KH: () => E,
    QK: () => b,
    Wp: () => g,
    as: () => S,
    cq: () => h,
    e_: () => A,
    jL: () => y,
    pj: () => O,
    tT: () => m,
    z9: () => _,
}),
    n(638769);
var r = n(562465),
    i = n(73153),
    a = n(287809),
    s = n(954571),
    o = n(371794),
    l = n(79133),
    c = n(532555),
    u = n(627072),
    d = n(760321),
    f = n(800007),
    p = n(652215);

function _(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (r)
        return void setTimeout(() => {
            i.h.dispatch({
                type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: l.q.reduce((e, t) => ((e[t.id] = t), e), {}),
            });
        }, 5e3);
    let s = null != (t = null == (n = a.default.getCurrentUser()) ? void 0 : n.isStaff()) && t;
    return (0, o.aP)({
        url: p.Rsh.COLLECTION_PUBLISHED_LISTINGS_SKU(f.q4),
        query: {
            guild_id: e,
            include_unpublished_products: s,
            include_unpublished_collection: s,
        },
        oldFormErrors: !0,
        rejectWithError: !1,
        retries: 2,
    }).then((t) => {
        let n = t.body.products.reduce((e, t) => {
            let n = (0, u.o)(t);
            return (e[n.id] = n), e;
        }, {});
        i.h.dispatch({
            type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
            guildId: e,
            catalog: n,
        });
    });
}

function h(e) {
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
        : r.Bo.get({
              url: p.Rsh.GAME_SERVERS(e),
              rejectWithError: !0,
              retries: 2,
              signal: n,
          }).then((t) => {
              if (null != t.body) {
                  let n = t.body.reduce((e, t) => ((e[t.id] = (0, c.A)(t)), e), {});
                  i.h.dispatch({
                      type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                      guildId: e,
                      instances: n,
                  });
              }
          });
}

function m(e, t) {
    return r.Bo.get({
        url: p.Rsh.PRODUCT_FOR_SKU(t),
        rejectWithError: !0,
        retries: 3,
    }).then((n) => {
        if (null != n.body) {
            var r, a, s, o;
            let l =
                null !=
                (r =
                    null == (o = n.body.tenant_metadata) ||
                    null == (s = o.guild_monetization) ||
                    null == (a = s.game_server)
                        ? void 0
                        : a.instructions.pc)
                    ? r
                    : [];
            i.h.dispatch({
                type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS",
                guildId: e,
                skuId: t,
                instructions: l,
            });
        }
    });
}

function g(e, t) {
    if (e) {
        var n;
        s.default.track(p.HAw.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
            user_id: null == (n = a.default.getCurrentUser()) ? void 0 : n.id,
            provider: t,
        });
    }
}

function E() {
    i.h.dispatch({
        type: "GAME_SERVER_REGION_PING_STATE_RESET",
    });
}

function b(e, t) {
    i.h.dispatch({
        type: "GAME_SERVER_REGION_PING_STATE_UPDATE",
        pingUrl: e,
        state: t,
    });
}

function y(e, t, n, i) {
    return r.Bo.post({
        url: p.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        body: {
            game_server_name: n,
            game_server_region: i,
        },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}

function O(e, t, n, i) {
    return r.Bo.patch({
        url: p.Rsh.GUILD_POWERUP_UPDATE(e, t),
        body: {
            game_server_name: i,
            sku_id: n,
        },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}

function A(e, t, n) {
    return r.Bo.del({
        url: p.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        query: {
            entitlement_id: n,
        },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}

function v(e) {
    return r.Bo.get({
        url: p.Rsh.GAME_SERVER_REGIONS(e),
        rejectWithError: !0,
        oldFormErrors: !0,
        retries: 3,
    }).then((e) => {
        i.h.dispatch({
            type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
            regions: e.body.map(d.A).sort((e, t) => e.name.localeCompare(t.name)),
        });
    });
}

function S(e, t) {
    return r.Bo.post({
        url: p.Rsh.GAME_SERVER_WAKE(e, t),
        rejectWithError: !0,
    }).then((t) => {
        i.h.dispatch({
            type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
            guildId: e,
            instance: (0, c.A)(t.body),
        });
    });
}
