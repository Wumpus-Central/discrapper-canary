"use strict";
n.d(t, { K: () => u, r: () => l });
var i = n(465932),
    r = n(440293),
    s = n(960253),
    a = n(486418),
    o = n(652215);
function l(e) {
    let t = (0, r.w)(e?.id),
        n = (0, s.Oh)(e?.id),
        l = (0, a.P)(e),
        { shouldHideGuildPurchaseEntryPoints: u } = (0, i.MH)(e?.id);
    return null != e && !u && (e.features.has(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (t && n) || l);
}
function u(e, t) {
    let n = (0, r.$)(e?.id),
        i = (0, s.l8)(e?.id, t);
    return null != e && (e.features.has(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (n && i));
}
