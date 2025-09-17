n.d(t, {
    EC: () => x,
    NE: () => v,
    TN: () => f,
    _k: () => _,
    g$: () => b,
    po: () => p,
    s9: () => j,
    yP: () => g,
});
var a = n(544891),
    r = n(570140),
    l = n(594174),
    i = n(626135),
    s = n(73346),
    o = n(962774),
    c = n(101805),
    d = n(675984),
    u = n(113130),
    m = n(473682),
    h = n(981631);
function p(e) {
    var t, n;
    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (a)
        return void setTimeout(() => {
            r.Z.dispatch({
                type: "PORTKEY_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: o.kd.reduce((e, t) => ((e[t.id] = t), e), {}),
            });
        }, 5000);
    let i = null != (n = null == (t = l.default.getCurrentUser()) ? void 0 : t.isStaff()) && n;
    return (0, s.Kb)({
        url: h.ANM.COLLECTION_PUBLISHED_LISTINGS_SKU(m.IU),
        query: {
            guild_id: e,
            include_unpublished_products: i,
            include_unpublished_collection: i,
        },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then((t) => {
        let n = t.body.products.reduce((e, t) => {
            let n = (0, d.m)(t);
            return (e[n.id] = n), e;
        }, {});
        r.Z.dispatch({
            type: "PORTKEY_FETCH_CATALOG_SUCCESS",
            guildId: e,
            catalog: n,
        });
    });
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t
        ? void setTimeout(() => {
              r.Z.dispatch({
                  type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
                  guildId: e,
                  instances: o.qE.reduce((e, t) => ((e[t.gameId] = t), e), {}),
              });
          }, 5000)
        : a.tn
              .get({
                  url: h.ANM.GAME_SERVERS(e),
                  rejectWithError: !0,
              })
              .then((t) => {
                  if (null != t.body) {
                      let n = t.body.reduce((e, t) => ((e[t.gameId] = (0, c.Z)(t)), e), {});
                      r.Z.dispatch({
                          type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
                          guildId: e,
                          instances: n,
                      });
                  }
              });
}
function b(e, t) {
    if (e) {
        var n;
        i.default.track(h.rMx.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
            user_id: null == (n = l.default.getCurrentUser()) ? void 0 : n.id,
            provider: t,
        });
    }
    r.Z.dispatch({
        type: "PORTKEY_ACCEPT_TOS",
        acceptedToS: e,
    });
}
function f() {
    r.Z.dispatch({ type: "PORTKEY_REGION_PING_STATE_RESET" });
}
function g(e, t) {
    r.Z.dispatch({
        type: "PORTKEY_REGION_PING_STATE_UPDATE",
        pingUrl: e,
        state: t,
    });
}
function v(e, t, n, r) {
    return a.tn.post({
        url: h.ANM.GUILD_POWERUP_TOGGLE(e, t),
        body: {
            game_server_name: n,
            game_server_region: r,
        },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function j(e, t, n) {
    return a.tn.del({
        url: h.ANM.GUILD_POWERUP_TOGGLE(e, t),
        query: { entitlement_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function _(e) {
    return a.tn
        .get({
            url: h.ANM.GAME_SERVER_REGIONS(e),
            rejectWithError: !0,
            oldFormErrors: !0,
        })
        .then((e) => {
            r.Z.dispatch({
                type: "PORTKEY_FETCH_REGIONS_SUCCESS",
                regions: e.body.map(u.Z),
            });
        });
}
