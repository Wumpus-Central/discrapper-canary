"use strict";
n.d(t, { Y: () => c, s: () => u });
var r = n(961350),
    i = n(734057),
    s = n(383501),
    a = n(954571),
    o = n(806931),
    l = n(652215);
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetUserId: r, tileType: i, entrypoint: s } = n;
    return (n) =>
        c({
            menuItemProps: n,
            menuName: e,
            location: t,
            entrypoint: s ?? o.GK.CONTEXT_MENU,
            targetUserId: r,
            tileType: i,
        });
}
function c(e) {
    let {
            menuItemProps: { type: t },
            menuName: n,
            location: o,
            entrypoint: u,
            targetUserId: c,
            tileType: d,
        } = e,
        _ = s.A.getChannelId(),
        f = s.A.getGuildId(),
        p = i.A.getChannel(_)?.type,
        h = r.default.getId();
    a.default.track(l.HAw.CALL_MENU_ITEM_INTERACTED, {
        location: o,
        menu_name: n,
        menu_item_type: t,
        entrypoint: u,
        targets_self: null == c ? void 0 : c === h,
        guild_id: f,
        channel_id: _,
        channel_type: p,
        tile_type: d,
    });
}
