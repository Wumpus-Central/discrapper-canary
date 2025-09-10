n.d(t, {
    EC: () => u,
    LG: () => x,
    NE: () => h,
    g$: () => m,
    po: () => d,
});
var a = n(544891),
    r = n(570140),
    l = n(73346),
    i = n(962774),
    s = n(675984),
    o = n(473682),
    c = n(981631);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t
        ? void setTimeout(() => {
              r.Z.dispatch({
                  type: "PORTKEY_FETCH_CATALOG_SUCCESS",
                  guildId: e,
                  catalog: i.kd.reduce((e, t) => ((e[t.id] = t), e), {}),
              });
          }, 5000)
        : (0, l.Kb)({
              url: c.ANM.COLLECTION_PUBLISHED_LISTINGS_SKU(o.IU),
              query: { guild_id: e },
              oldFormErrors: !0,
              rejectWithError: !1,
          }).then((t) => {
              let n = t.body.products.reduce((e, t) => {
                  let n = (0, s.m)(t);
                  return (e[n.id] = n), e;
              }, {});
              r.Z.dispatch({
                  type: "PORTKEY_FETCH_CATALOG_SUCCESS",
                  guildId: e,
                  catalog: n,
              });
          });
}
function u(e) {
    setTimeout(() => {
        r.Z.dispatch({
            type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
            guildId: e,
            instances: i.qE.reduce((e, t) => ((e[t.gameId] = t), e), {}),
        });
    }, 5000);
}
function m(e) {
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
function h(e, t, n, r) {
    return a.tn.post({
        url: c.ANM.GUILD_POWERUP_TOGGLE(e, t),
        body: {
            game_server_name: n,
            game_server_region: r,
        },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
