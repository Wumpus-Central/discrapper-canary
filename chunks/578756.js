n.d(t, {
    $M: () => _,
    Dk: () => m,
    GA: () => g,
    Se: () => b,
    cX: () => v,
    cq: () => d,
    g$: () => f,
    lY: () => c,
    wz: () => p,
});
var l = n(473749),
    i = n(660815),
    a = n(442837),
    r = n(626135),
    s = n(639777),
    u = n(60482),
    o = n(981631);
function c(e, t, n) {
    l.useEffect(() => {
        r.default.track(o.rMx.OPEN_MODAL, {
            type: "game_servers_perk_clicked",
            guild_id: e,
            location: n,
            location_stack: t,
        });
    }, [e, t, n]);
}
function d(e, t) {
    l.useEffect(() => {
        r.default.track(o.rMx.GAME_SERVER_GAME_SELECT_OPENED, {
            guild_id: e,
            type: t,
        });
    }, [e, t]);
}
function m(e, t, n) {
    l.useEffect(() => {
        r.default.track(o.rMx.GAME_SERVER_SETTINGS_OPENED, {
            guild_id: e,
            game_server_id: t,
            type: n,
        });
    }, [e, t, n]);
}
function v(e) {
    let t = (0, s.Z)(e),
        n = (0, a.e7)([u.Z], () => u.Z.getStateForGuild(e)),
        c = l.useRef(!1);
    l.useEffect(() => {
        if ((null == n ? void 0 : n.instances) == null) return;
        let l = Object.values(n.instances).length,
            a = Object.values(n.instances).filter((e) => e.status === i.V.ONLINE).length;
        c.current ||
            ((c.current = !0),
            r.default.track(o.rMx.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
                guild_id: e,
                is_admin: t,
                num_game_servers: l,
                num_game_servers_online: a,
                num_game_servers_offline: l - a,
            }));
    }, [e, t, null == n ? void 0 : n.instances]);
}
function g(e, t, n, l) {
    r.default.track(o.rMx.GAME_SERVER_GAME_CLICKED, {
        guild_id: e,
        product_id: t,
        product_name: n,
        location: l,
    });
}
function f(e) {
    let {
        guildId: t,
        productId: n,
        productName: l,
        skuId: i,
        planName: a,
        planCost: s,
        previousPlanCost: u,
        region: c,
        type: d,
    } = e;
    r.default.track(o.rMx.GAME_SERVER_SKU_SELECTED, {
        guild_id: t,
        product_id: n,
        product_name: l,
        sku_id: i,
        plan_name: a,
        plan_cost: s,
        previous_plan_cost: u,
        region: c,
        type: d,
    });
}
function p(e, t, n, l) {
    r.default.track(o.rMx.GAME_SERVER_JOIN_CLICKED, {
        guild_id: e,
        game_id: t,
        game_name: n,
        game_server_id: l,
    });
}
function b(e, t, n) {
    r.default.track(o.rMx.GAME_SERVER_COPY_IP_CLICKED, {
        guild_id: e,
        game_server_id: t,
        location: n,
    });
}
function _(e, t) {
    r.default.track(o.rMx.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, {
        guild_id: e,
        game_server_id: t,
    });
}
