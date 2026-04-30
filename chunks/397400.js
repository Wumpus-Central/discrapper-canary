"use strict";
n.d(t, {
    Ai: () => E,
    ET: () => A,
    Jh: () => p,
    SX: () => _,
    ed: () => m,
    f7: () => g,
    ft: () => d,
    gU: () => T,
    oT: () => h,
    pK: () => I,
    tR: () => f,
    wN: () => c,
});
var i = n(64700),
    r = n(390544),
    s = n(17928),
    a = n(174459),
    o = n(363487),
    l = n(522055),
    u = n(652215);
function c(e, t, n) {
    i.useEffect(() => {
        a.default.track(u.HAw.OPEN_MODAL, {
            type: "game_servers_perk_clicked",
            guild_id: e,
            location: n,
            location_stack: t,
        });
    }, [e, t, n]);
}
function d(e, t) {
    i.useEffect(() => {
        a.default.track(u.HAw.GAME_SERVER_GAME_SELECT_OPENED, { guild_id: e, type: t });
    }, [e, t]);
}
function _(e, t, n) {
    i.useEffect(() => {
        a.default.track(u.HAw.GAME_SERVER_SETTINGS_OPENED, { guild_id: e, game_server_id: t, type: n });
    }, [e, t, n]);
}
function f(e) {
    let t = (0, o.A)(e),
        n = (0, s.bG)([l.A], () => l.A.getStateForGuild(e)),
        c = i.useRef(!1);
    i.useEffect(() => {
        if (n?.instances == null) return;
        let i = Object.values(n.instances).length,
            s = Object.values(n.instances).filter((e) => e.status === r.M.ONLINE).length;
        c.current ||
            ((c.current = !0),
            a.default.track(u.HAw.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
                guild_id: e,
                is_admin: t,
                num_game_servers: i,
                num_game_servers_online: s,
                num_game_servers_offline: i - s,
            }));
    }, [e, t, n?.instances]);
}
function h(e, t, n, i) {
    a.default.track(u.HAw.GAME_SERVER_GAME_CLICKED, { guild_id: e, product_id: t, product_name: n, location: i });
}
function p(e) {
    let {
        guildId: t,
        productId: n,
        productName: i,
        skuId: r,
        planName: s,
        planCost: o,
        previousPlanCost: l,
        region: c,
        type: d,
    } = e;
    a.default.track(u.HAw.GAME_SERVER_SKU_SELECTED, {
        guild_id: t,
        product_id: n,
        product_name: i,
        sku_id: r,
        plan_name: s,
        plan_cost: o,
        previous_plan_cost: l,
        region: c,
        type: d,
    });
}
function E(e, t, n, i) {
    a.default.track(u.HAw.GAME_SERVER_JOIN_CLICKED, { guild_id: e, game_id: t, game_name: n, game_server_id: i });
}
function m(e, t, n) {
    a.default.track(u.HAw.GAME_SERVER_COPY_IP_CLICKED, { guild_id: e, game_server_id: t, location: n });
}
function g(e, t) {
    a.default.track(u.HAw.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, { guild_id: e, game_server_id: t });
}
function A(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    a.default.track(u.HAw.IMPRESSION_GAME_SERVER_ACTIVITY_BUTTON, {
        game_application_id: t ?? null,
        button_variant: n,
    });
}
function I(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    a.default.track(u.HAw.GAME_SERVER_ACTIVITY_BUTTON_CLICKED, { game_application_id: t ?? null, button_variant: n });
}
function T(e) {
    let { guildId: t, gameApplicationId: n } = e;
    a.default.track(u.HAw.GAME_SERVER_ACTIVITY_BUTTON_GUILD_SELECTED, { guild_id: t, game_application_id: n ?? null });
}
