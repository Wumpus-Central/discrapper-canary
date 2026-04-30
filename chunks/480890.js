"use strict";
n.d(t, { Y: () => c, s: () => u });
var i = n(495544),
    r = n(734057),
    s = n(763827),
    a = n(174459),
    o = n(806931),
    l = n(652215);
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetUserId: i, tileType: r, entrypoint: s } = n;
    return (n) =>
        c({
            menuItemProps: n,
            menuName: e,
            location: t,
            entrypoint: s ?? o.GK.CONTEXT_MENU,
            targetUserId: i,
            tileType: r,
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
        h = r.A.getChannel(_)?.type,
        p = i.default.getId();
    a.default.track(l.HAw.CALL_MENU_ITEM_INTERACTED, {
        location: o,
        menu_name: n,
        menu_item_type: t,
        entrypoint: u,
        targets_self: null == c ? void 0 : c === p,
        guild_id: f,
        channel_id: _,
        channel_type: h,
        tile_type: d,
    });
}
