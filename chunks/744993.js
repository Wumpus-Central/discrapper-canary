n.d(t, {
    EC: () => m,
    LG: () => h,
    NE: () => p,
    g$: () => x,
    po: () => u,
});
var a = n(544891),
    r = n(570140),
    l = n(594174),
    i = n(73346),
    s = n(962774),
    o = n(675984),
    c = n(473682),
    d = n(981631);
function u(e) {
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
    let u = null != (n = null == (t = l.default.getCurrentUser()) ? void 0 : t.isStaff) && n;
    return (0, i.Kb)({
        url: d.ANM.COLLECTION_PUBLISHED_LISTINGS_SKU(c.IU),
        query: {
            guild_id: e,
            include_unpublished_products: u,
            include_unpublished_collection: u,
        },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then((t) => {
        let n = t.body.products.reduce((e, t) => {
            let n = (0, o.m)(t);
            return (e[n.id] = n), e;
        }, {});
        r.Z.dispatch({
            type: "PORTKEY_FETCH_CATALOG_SUCCESS",
            guildId: e,
            catalog: n,
        });
    });
}
function m(e) {
    setTimeout(() => {
        r.Z.dispatch({
            type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
            guildId: e,
            instances: s.qE.reduce((e, t) => ((e[t.gameId] = t), e), {}),
        });
    }, 5000);
}
function x(e) {
    r.Z.dispatch({
        type: "PORTKEY_ACCEPT_TOS",
        acceptedToS: e,
    });
}
function h(e, t) {
    r.Z.dispatch({
        type: "PORTKEY_LOCATION_PING_STATE_UPDATE",
        pingUrl: e,
        state: t,
    });
}
function p(e, t, n, r) {
    return a.tn.post({
        url: d.ANM.GUILD_POWERUP_TOGGLE(e, t),
        body: {
            game_server_name: n,
            game_server_region: r,
        },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
