"use strict";
n.d(t, { K: () => u, r: () => l });
var r = n(465932),
    i = n(960253),
    a = n(491026),
    s = n(486418),
    o = n(652215);
function l(e) {
    let t = (0, a.YZ)(e?.id, "channel_list"),
        n = (0, i.Oh)(e?.id),
        l = (0, s.P)(e, "channel_list"),
        { shouldHideGuildPurchaseEntryPoints: u } = (0, r.MH)(e?.id);
    return null != e && !u && (e.features.has(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (t && n) || l);
}
function u(e, t) {
    let n = (0, a.p9)(e?.id, "channel_list"),
        r = (0, i.l8)(e?.id, t);
    return null != e && (e.features.has(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (n && r));
}
