n.d(t, { K: () => o, r: () => l });
var i = n(465932),
    r = n(440293),
    a = n(960253),
    s = n(486418),
    _ = n(652215);
function l(e) {
    let t = (0, r.w)(e?.id),
        n = (0, a.Oh)(e?.id),
        l = (0, s.P)(e),
        { shouldHideGuildPurchaseEntryPoints: o } = (0, i.MH)(e?.id);
    return null != e && !o && (e.features.has(_.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (t && n) || l);
}
function o(e, t) {
    let n = (0, r.$)(e?.id),
        i = (0, a.l8)(e?.id, t);
    return null != e && (e.features.has(_.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (n && i));
}
