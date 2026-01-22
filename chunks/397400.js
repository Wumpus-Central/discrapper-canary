n.d(t, {
    Ai: () => b,
    Jh: () => g,
    SX: () => m,
    ed: () => p,
    f7: () => _,
    ft: () => c,
    oT: () => f,
    tR: () => v,
    wN: () => d,
});
var l = n(64700),
    i = n(390544),
    a = n(311907),
    r = n(954571),
    s = n(363487),
    u = n(522055),
    o = n(652215);

function d(e, t, n) {
    l.useEffect(() => {
        r.default.track(o.HAw.OPEN_MODAL, {
            type: "game_servers_perk_clicked",
            guild_id: e,
            location: n,
            location_stack: t,
        });
    }, [e, t, n]);
}

function c(e, t) {
    l.useEffect(() => {
        r.default.track(o.HAw.GAME_SERVER_GAME_SELECT_OPENED, {
            guild_id: e,
            type: t,
        });
    }, [e, t]);
}

function m(e, t, n) {
    l.useEffect(() => {
        r.default.track(o.HAw.GAME_SERVER_SETTINGS_OPENED, {
            guild_id: e,
            game_server_id: t,
            type: n,
        });
    }, [e, t, n]);
}

function v(e) {
    let t = (0, s.A)(e),
        n = (0, a.bG)([u.A], () => u.A.getStateForGuild(e)),
        d = l.useRef(!1);
    l.useEffect(() => {
        if ((null == n ? void 0 : n.instances) == null) return;
        let l = Object.values(n.instances).length,
            a = Object.values(n.instances).filter((e) => e.status === i.M.ONLINE).length;
        d.current ||
            ((d.current = !0),
            r.default.track(o.HAw.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
                guild_id: e,
                is_admin: t,
                num_game_servers: l,
                num_game_servers_online: a,
                num_game_servers_offline: l - a,
            }));
    }, [e, t, null == n ? void 0 : n.instances]);
}

function f(e, t, n, l) {
    r.default.track(o.HAw.GAME_SERVER_GAME_CLICKED, {
        guild_id: e,
        product_id: t,
        product_name: n,
        location: l,
    });
}

function g(e) {
    let {
        guildId: t,
        productId: n,
        productName: l,
        skuId: i,
        planName: a,
        planCost: s,
        previousPlanCost: u,
        region: d,
        type: c,
    } = e;
    r.default.track(o.HAw.GAME_SERVER_SKU_SELECTED, {
        guild_id: t,
        product_id: n,
        product_name: l,
        sku_id: i,
        plan_name: a,
        plan_cost: s,
        previous_plan_cost: u,
        region: d,
        type: c,
    });
}

function b(e, t, n, l) {
    r.default.track(o.HAw.GAME_SERVER_JOIN_CLICKED, {
        guild_id: e,
        game_id: t,
        game_name: n,
        game_server_id: l,
    });
}

function p(e, t, n) {
    r.default.track(o.HAw.GAME_SERVER_COPY_IP_CLICKED, {
        guild_id: e,
        game_server_id: t,
        location: n,
    });
}

function _(e, t) {
    r.default.track(o.HAw.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, {
        guild_id: e,
        game_server_id: t,
    });
}
