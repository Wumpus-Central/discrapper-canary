"use strict";
n.d(t, { P: () => u });
var i = n(702841),
    r = n(554146),
    s = n(826673),
    a = n(440293),
    o = n(576705),
    l = n(652215);
function u(e) {
    let t = (0, s.JZ)(r.M.SERVER_SHOP_PHANTOM_PREVIEW),
        n = (0, i.bG)([o.A], () => null != e && o.A.can(l.xBc.ADMINISTRATOR, e)),
        u = e?.features.has(l.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) ?? !1,
        c = (0, a.w)(e?.id),
        d = [
            l.GuildFeatures.CREATOR_MONETIZABLE,
            l.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
            l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
        ].some((t) => e?.features.has(t));
    return null != e && n && !u && d && c && !t;
}
