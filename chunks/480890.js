"use strict";
n.d(t, { Y: () => c, s: () => d });
var i = n(280450),
    r = n(734057),
    a = n(763827),
    s = n(174459),
    l = n(806931),
    o = n(652215);
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetUserId: i, tileType: r, entrypoint: a } = n;
    return (n) =>
        c({
            menuItemProps: n,
            menuName: e,
            location: t,
            entrypoint: a ?? l.GK.CONTEXT_MENU,
            targetUserId: i,
            tileType: r,
        });
}
function c(e) {
    let {
            menuItemProps: { type: t },
            menuName: n,
            location: l,
            entrypoint: d,
            targetUserId: c,
            tileType: u,
        } = e,
        _ = a.A.getChannelId(),
        E = a.A.getGuildId(),
        A = r.A.getChannel(_)?.type,
        h = i.default.getId();
    s.default.track(o.HAw.CALL_MENU_ITEM_INTERACTED, {
        location: l,
        menu_name: n,
        menu_item_type: t,
        entrypoint: d,
        targets_self: null == c ? void 0 : c === h,
        guild_id: E,
        channel_id: _,
        channel_type: A,
        tile_type: u,
    });
}
