n.d(t, {
    Ai: () => T,
    ET: () => N,
    Jh: () => I,
    SX: () => E,
    ed: () => h,
    f7: () => S,
    ft: () => _,
    gU: () => p,
    oT: () => A,
    pK: () => f,
    tR: () => u,
    wN: () => c,
});
var i = n(64700),
    a = n(390544),
    r = n(17928),
    s = n(954571),
    l = n(363487),
    o = n(522055),
    d = n(652215);
function c(e, t, n) {
    i.useEffect(() => {
        s.default.track(d.HAw.OPEN_MODAL, {
            type: "game_servers_perk_clicked",
            guild_id: e,
            location: n,
            location_stack: t,
        });
    }, [e, t, n]);
}
function _(e, t) {
    i.useEffect(() => {
        s.default.track(d.HAw.GAME_SERVER_GAME_SELECT_OPENED, { guild_id: e, type: t });
    }, [e, t]);
}
function E(e, t, n) {
    i.useEffect(() => {
        s.default.track(d.HAw.GAME_SERVER_SETTINGS_OPENED, { guild_id: e, game_server_id: t, type: n });
    }, [e, t, n]);
}
function u(e) {
    let t = (0, l.A)(e),
        n = (0, r.bG)([o.A], () => o.A.getStateForGuild(e)),
        c = i.useRef(!1);
    i.useEffect(() => {
        if (n?.instances == null) return;
        let i = Object.values(n.instances).length,
            r = Object.values(n.instances).filter((e) => e.status === a.M.ONLINE).length;
        c.current ||
            ((c.current = !0),
            s.default.track(d.HAw.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
                guild_id: e,
                is_admin: t,
                num_game_servers: i,
                num_game_servers_online: r,
                num_game_servers_offline: i - r,
            }));
    }, [e, t, n?.instances]);
}
function A(e, t, n, i) {
    s.default.track(d.HAw.GAME_SERVER_GAME_CLICKED, { guild_id: e, product_id: t, product_name: n, location: i });
}
function I(e) {
    let {
        guildId: t,
        productId: n,
        productName: i,
        skuId: a,
        planName: r,
        planCost: l,
        previousPlanCost: o,
        region: c,
        type: _,
    } = e;
    s.default.track(d.HAw.GAME_SERVER_SKU_SELECTED, {
        guild_id: t,
        product_id: n,
        product_name: i,
        sku_id: a,
        plan_name: r,
        plan_cost: l,
        previous_plan_cost: o,
        region: c,
        type: _,
    });
}
function T(e, t, n, i) {
    s.default.track(d.HAw.GAME_SERVER_JOIN_CLICKED, { guild_id: e, game_id: t, game_name: n, game_server_id: i });
}
function h(e, t, n) {
    s.default.track(d.HAw.GAME_SERVER_COPY_IP_CLICKED, { guild_id: e, game_server_id: t, location: n });
}
function S(e, t) {
    s.default.track(d.HAw.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, { guild_id: e, game_server_id: t });
}
function N(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    s.default.track(d.HAw.IMPRESSION_GAME_SERVER_ACTIVITY_BUTTON, {
        game_application_id: t ?? null,
        button_variant: n,
    });
}
function f(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    s.default.track(d.HAw.GAME_SERVER_ACTIVITY_BUTTON_CLICKED, { game_application_id: t ?? null, button_variant: n });
}
function p(e) {
    let { guildId: t, gameApplicationId: n } = e;
    s.default.track(d.HAw.GAME_SERVER_ACTIVITY_BUTTON_GUILD_SELECTED, { guild_id: t, game_application_id: n ?? null });
}
