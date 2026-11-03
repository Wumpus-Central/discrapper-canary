n.d(t, { L5: () => u, VJ: () => E, cl: () => d, iu: () => g });
var l,
    a,
    s = n(582128),
    i = n(440938),
    r = n(174459),
    c = n(652215),
    o = n(758836),
    d =
        (((l = {}).SHOP_CARD = "GAME_SERVER_SHOP_CARD"),
        (l.ACTIVITY_PANEL_DEEP_LINK = "GAME_SERVER_ACTIVITY_PANEL_DEEP_LINK"),
        l),
    u = (((a = {}).OPEN_PLAN_MODAL = "open_game_server_plan_modal"), a);
function m(e) {
    return e.isGroupDM() ? "group_dm" : e.isDM() ? "dm" : "guild_channel";
}
function g(e) {
    let { server: t, channels: n, hasContextMessage: l, source: a } = e;
    r.default.track(c.HAw.GAME_SERVER_SHARE_FORWARDED, {
        destination_type: (function (e) {
            if (0 === e.length) return null;
            let t = new Set(e.map(m)),
                [n] = t;
            return 1 === t.size && null != n ? n : "mixed";
        })(n),
        num_destinations: n.length,
        game_server_id: t.id,
        game_id: t.gameId,
        sku_id: t.instance.planId,
        plan_name: t.planName,
        has_context_message: l,
        source: a,
    });
}
function E() {
    let e = (0, i.uM)();
    return s.useCallback(
        (t, n) => {
            r.default.track(c.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: e?.sessionId,
                page_type: o.G2.GAME_SERVERS,
                page_category: e?.pageCategory,
                page_section: e?.pageSection,
                tile_type: n,
                cta_name: t,
            });
        },
        [e?.sessionId, e?.pageCategory, e?.pageSection],
    );
}
