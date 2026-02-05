n.d(t, {
    Ai: () => v,
    Jh: () => _,
    SX: () => m,
    ed: () => p,
    f7: () => x,
    ft: () => o,
    oT: () => f,
    tR: () => g,
    wN: () => c,
});
var a = n(64700),
    i = n(390544),
    l = n(311907),
    s = n(954571),
    r = n(363487),
    d = n(522055),
    u = n(652215);
function c(e, t, n) {
    a.useEffect(() => {
        s.default.track(u.HAw.OPEN_MODAL, {
            type: "game_servers_perk_clicked",
            guild_id: e,
            location: n,
            location_stack: t,
        });
    }, [e, t, n]);
}
function o(e, t) {
    a.useEffect(() => {
        s.default.track(u.HAw.GAME_SERVER_GAME_SELECT_OPENED, { guild_id: e, type: t });
    }, [e, t]);
}
function m(e, t, n) {
    a.useEffect(() => {
        s.default.track(u.HAw.GAME_SERVER_SETTINGS_OPENED, { guild_id: e, game_server_id: t, type: n });
    }, [e, t, n]);
}
function g(e) {
    let t = (0, r.A)(e),
        n = (0, l.bG)([d.A], () => d.A.getStateForGuild(e)),
        c = a.useRef(!1);
    a.useEffect(() => {
        if (n?.instances == null) return;
        let a = Object.values(n.instances).length,
            l = Object.values(n.instances).filter((e) => e.status === i.M.ONLINE).length;
        c.current ||
            ((c.current = !0),
            s.default.track(u.HAw.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
                guild_id: e,
                is_admin: t,
                num_game_servers: a,
                num_game_servers_online: l,
                num_game_servers_offline: a - l,
            }));
    }, [e, t, n?.instances]);
}
function f(e, t, n, a) {
    s.default.track(u.HAw.GAME_SERVER_GAME_CLICKED, { guild_id: e, product_id: t, product_name: n, location: a });
}
function _(e) {
    let {
        guildId: t,
        productId: n,
        productName: a,
        skuId: i,
        planName: l,
        planCost: r,
        previousPlanCost: d,
        region: c,
        type: o,
    } = e;
    s.default.track(u.HAw.GAME_SERVER_SKU_SELECTED, {
        guild_id: t,
        product_id: n,
        product_name: a,
        sku_id: i,
        plan_name: l,
        plan_cost: r,
        previous_plan_cost: d,
        region: c,
        type: o,
    });
}
function v(e, t, n, a) {
    s.default.track(u.HAw.GAME_SERVER_JOIN_CLICKED, { guild_id: e, game_id: t, game_name: n, game_server_id: a });
}
function p(e, t, n) {
    s.default.track(u.HAw.GAME_SERVER_COPY_IP_CLICKED, { guild_id: e, game_server_id: t, location: n });
}
function x(e, t) {
    s.default.track(u.HAw.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, { guild_id: e, game_server_id: t });
}
