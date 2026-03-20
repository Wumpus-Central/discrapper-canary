"use strict";
n.d(t, { K: () => u, r: () => l });
var r = n(465932),
    i = n(440293),
    s = n(960253),
    a = n(486418),
    o = n(652215);
function l(e) {
    let t = (0, i.w)(e?.id),
        n = (0, s.Oh)(e?.id),
        l = (0, a.P)(e),
        { shouldHideGuildPurchaseEntryPoints: u } = (0, r.MH)(e?.id);
    return null != e && !u && (e.features.has(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (t && n) || l);
}
function u(e, t) {
    let n = (0, i.$)(e?.id),
        r = (0, s.l8)(e?.id, t);
    return null != e && (e.features.has(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (n && r));
}
