"use strict";
n.d(t, { P: () => c });
var r = n(417597),
    i = n(554146),
    a = n(826673),
    s = n(130978),
    o = n(576705),
    l = n(491026),
    u = n(652215);
function c(e, t) {
    let n = (0, l.NS)(t),
        c = (0, a.JZ)(i.M.SERVER_SHOP_PHANTOM_PREVIEW),
        d = (0, r.bG)([o.A], () => null != e && o.A.can(u.xBc.ADMINISTRATOR, e)),
        _ = e?.features.has(u.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) ?? !1,
        f = (0, s.w)(e?.id, "useGuildShopPreviewVisible"),
        p = [
            u.GuildFeatures.CREATOR_MONETIZABLE,
            u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
            u.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
        ].some((t) => e?.features.has(t));
    return null != e && d && !_ && p && n && f && !c;
}
