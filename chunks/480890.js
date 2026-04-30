n.d(t, { Y: () => u, s: () => d });
var i = n(495544),
    l = n(734057),
    a = n(763827),
    r = n(954571),
    s = n(806931),
    o = n(652215);
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetUserId: i, tileType: l, entrypoint: a } = n;
    return (n) =>
        u({
            menuItemProps: n,
            menuName: e,
            location: t,
            entrypoint: a ?? s.GK.CONTEXT_MENU,
            targetUserId: i,
            tileType: l,
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
        h = a.A.getChannelId(),
        E = a.A.getGuildId(),
        A = l.A.getChannel(h)?.type,
        _ = i.default.getId();
    r.default.track(o.HAw.CALL_MENU_ITEM_INTERACTED, {
        location: s,
        menu_name: n,
        menu_item_type: t,
        entrypoint: d,
        targets_self: null == u ? void 0 : u === _,
        guild_id: E,
        channel_id: h,
        channel_type: A,
        tile_type: c,
    });
}
