n.d(t, {
    Ai: () => g,
    ET: () => x,
    Jh: () => m,
    SX: () => h,
    ed: () => p,
    f7: () => f,
    ft: () => u,
    gU: () => I,
    oT: () => _,
    pK: () => E,
    tR: () => A,
    wN: () => d,
});
var i = n(64700),
    l = n(390544),
    s = n(311907),
    a = n(954571),
    r = n(363487),
    o = n(522055),
    c = n(652215);
function d(e, t, n) {
    i.useEffect(() => {
        a.default.track(c.HAw.OPEN_MODAL, {
            type: "game_servers_perk_clicked",
            guild_id: e,
            location: n,
            location_stack: t,
        });
    }, [e, t, n]);
}
function u(e, t) {
    i.useEffect(() => {
        a.default.track(c.HAw.GAME_SERVER_GAME_SELECT_OPENED, { guild_id: e, type: t });
    }, [e, t]);
}
function h(e, t, n) {
    i.useEffect(() => {
        a.default.track(c.HAw.GAME_SERVER_SETTINGS_OPENED, { guild_id: e, game_server_id: t, type: n });
    }, [e, t, n]);
}
function A(e) {
    let t = (0, r.A)(e),
        n = (0, s.bG)([o.A], () => o.A.getStateForGuild(e)),
        d = i.useRef(!1);
    i.useEffect(() => {
        if (n?.instances == null) return;
        let i = Object.values(n.instances).length,
            s = Object.values(n.instances).filter((e) => e.status === l.M.ONLINE).length;
        d.current ||
            ((d.current = !0),
            a.default.track(c.HAw.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
                guild_id: e,
                is_admin: t,
                num_game_servers: i,
                num_game_servers_online: s,
                num_game_servers_offline: i - s,
            }));
    }, [e, t, n?.instances]);
}
function _(e, t, n, i) {
    a.default.track(c.HAw.GAME_SERVER_GAME_CLICKED, { guild_id: e, product_id: t, product_name: n, location: i });
}
function m(e) {
    let {
        guildId: t,
        productId: n,
        productName: i,
        skuId: l,
        planName: s,
        planCost: r,
        previousPlanCost: o,
        region: d,
        type: u,
    } = e;
    a.default.track(c.HAw.GAME_SERVER_SKU_SELECTED, {
        guild_id: t,
        product_id: n,
        product_name: i,
        sku_id: l,
        plan_name: s,
        plan_cost: r,
        previous_plan_cost: o,
        region: d,
        type: u,
    });
}
function g(e, t, n, i) {
    a.default.track(c.HAw.GAME_SERVER_JOIN_CLICKED, { guild_id: e, game_id: t, game_name: n, game_server_id: i });
}
function p(e, t, n) {
    a.default.track(c.HAw.GAME_SERVER_COPY_IP_CLICKED, { guild_id: e, game_server_id: t, location: n });
}
function f(e, t) {
    a.default.track(c.HAw.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, { guild_id: e, game_server_id: t });
}
function x(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    a.default.track(c.HAw.IMPRESSION_GAME_SERVER_ACTIVITY_BUTTON, {
        game_application_id: t ?? null,
        button_variant: n,
    });
}
function E(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    a.default.track(c.HAw.GAME_SERVER_ACTIVITY_BUTTON_CLICKED, { game_application_id: t ?? null, button_variant: n });
}
function I(e) {
    let { guildId: t, gameApplicationId: n } = e;
    a.default.track(c.HAw.GAME_SERVER_ACTIVITY_BUTTON_GUILD_SELECTED, { guild_id: t, game_application_id: n ?? null });
}
