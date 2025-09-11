n.d(t, {
    EC: () => h,
    LG: () => x,
    NE: () => b,
    g$: () => p,
    po: () => m,
});
var a = n(544891),
    r = n(570140),
    l = n(594174),
    i = n(73346),
    s = n(962774),
    o = n(101805),
    c = n(675984),
    d = n(473682),
    u = n(981631);
function m(e) {
    var t, n;
    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (a)
        return void setTimeout(() => {
            r.Z.dispatch({
                type: "PORTKEY_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: s.kd.reduce((e, t) => ((e[t.id] = t), e), {}),
            });
        }, 5000);
    let o = null != (n = null == (t = l.default.getCurrentUser()) ? void 0 : t.isStaff()) && n;
    return (0, i.Kb)({
        url: u.ANM.COLLECTION_PUBLISHED_LISTINGS_SKU(d.IU),
        query: {
            guild_id: e,
            include_unpublished_products: o,
            include_unpublished_collection: o,
        },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then((t) => {
        let n = t.body.products.reduce((e, t) => {
            let n = (0, c.m)(t);
            return (e[n.id] = n), e;
        }, {});
        r.Z.dispatch({
            type: "PORTKEY_FETCH_CATALOG_SUCCESS",
            guildId: e,
            catalog: n,
        });
    });
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t
        ? void setTimeout(() => {
              r.Z.dispatch({
                  type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
                  guildId: e,
                  instances: s.qE.reduce((e, t) => ((e[t.gameId] = t), e), {}),
              });
          }, 5000)
        : a.tn
              .get({
                  url: u.ANM.GAME_SERVERS(e),
                  rejectWithError: !0,
              })
              .then((t) => {
                  if (null != t.body) {
                      let n = t.body.reduce((e, t) => ((e[t.gameId] = (0, o.Z)(t)), e), {});
                      r.Z.dispatch({
                          type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
                          guildId: e,
                          instances: n,
                      });
                  }
              });
}
function p(e) {
    r.Z.dispatch({
        type: "PORTKEY_ACCEPT_TOS",
        acceptedToS: e,
    });
}
function x(e, t) {
    r.Z.dispatch({
        type: "PORTKEY_LOCATION_PING_STATE_UPDATE",
        pingUrl: e,
        state: t,
    });
}
function b(e, t, n, r) {
    return a.tn.post({
        url: u.ANM.GUILD_POWERUP_TOGGLE(e, t),
        body: {
            game_server_name: n,
            game_server_region: r,
        },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
