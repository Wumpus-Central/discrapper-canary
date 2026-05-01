n.d(t, { K: () => d, r: () => o });
var i = n(465932),
    a = n(440293),
    r = n(960253),
    s = n(486418),
    l = n(652215);
function o(e) {
    let t = (0, a.w)(e?.id),
        n = (0, r.Oh)(e?.id),
        o = (0, s.P)(e),
        { shouldHideGuildPurchaseEntryPoints: d } = (0, i.MH)(e?.id);
    return null != e && !d && (e.features.has(l.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (t && n) || o);
}
function d(e, t) {
    let n = (0, a.$)(e?.id),
        i = (0, r.l8)(e?.id, t);
    return null != e && (e.features.has(l.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (n && i));
}
