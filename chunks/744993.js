n.d(t, {
    EC: () => d,
    LG: () => m,
    g$: () => u,
    po: () => c,
});
var a = n(570140),
    r = n(73346),
    l = n(962774),
    i = n(675984),
    s = n(473682),
    o = n(981631);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t
        ? void setTimeout(() => {
              a.Z.dispatch({
                  type: "PORTKEY_FETCH_CATALOG_SUCCESS",
                  guildId: e,
                  catalog: l.kd.reduce((e, t) => ((e[t.id] = t), e), {}),
              });
          }, 5000)
        : (0, r.Kb)({
              url: o.ANM.COLLECTION_PUBLISHED_LISTINGS_SKU(s.IU),
              query: { guild_id: e },
              oldFormErrors: !0,
              rejectWithError: !1,
          }).then((t) => {
              let n = t.body.products.reduce((e, t) => {
                  let n = (0, i.m)(t);
                  return (e[n.id] = n), e;
              }, {});
              a.Z.dispatch({
                  type: "PORTKEY_FETCH_CATALOG_SUCCESS",
                  guildId: e,
                  catalog: n,
              });
          });
}
function d(e) {
    setTimeout(() => {
        a.Z.dispatch({
            type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
            guildId: e,
            instances: l.qE.reduce((e, t) => ((e[t.gameId] = t), e), {}),
        });
    }, 5000);
}
function u(e) {
    a.Z.dispatch({
        type: "PORTKEY_ACCEPT_TOS",
        acceptedToS: e,
    });
}
function m(e, t) {
    a.Z.dispatch({
        type: "PORTKEY_LOCATION_PING_STATE_UPDATE",
        pingUrl: e,
        state: t,
    });
}
