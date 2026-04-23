n.d(t, { Y: () => u, s: () => d });
var i = n(495544),
    r = n(734057),
    l = n(763827),
    a = n(954571),
    s = n(806931),
    o = n(652215);
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetUserId: i, tileType: r, entrypoint: l } = n;
    return (n) =>
        u({
            menuItemProps: n,
            menuName: e,
            location: t,
            entrypoint: l ?? s.GK.CONTEXT_MENU,
            targetUserId: i,
            tileType: r,
        });
}
function u(e) {
    let {
            menuItemProps: { type: t },
            menuName: n,
            location: s,
            entrypoint: d,
            targetUserId: u,
            tileType: c,
        } = e,
        h = l.A.getChannelId(),
        E = l.A.getGuildId(),
        _ = r.A.getChannel(h)?.type,
        p = i.default.getId();
    a.default.track(o.HAw.CALL_MENU_ITEM_INTERACTED, {
        location: s,
        menu_name: n,
        menu_item_type: t,
        entrypoint: d,
        targets_self: null == u ? void 0 : u === p,
        guild_id: E,
        channel_id: h,
        channel_type: _,
        tile_type: c,
    });
}
