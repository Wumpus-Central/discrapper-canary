n.d(t, {
    K: () => c,
    r: () => l,
});
var r = n(465932),
    i = n(960253),
    a = n(491026),
    s = n(486418),
    o = n(652215);
function l(e) {
    let t = (0, a.YZ)(null == e ? void 0 : e.id, "channel_list"),
        n = (0, i.Oh)(null == e ? void 0 : e.id),
        l = (0, s.P)(e, "channel_list"),
        { shouldHideGuildPurchaseEntryPoints: c } = (0, r.MH)(null == e ? void 0 : e.id);
    return null != e && !c && (e.features.has(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (t && n) || l);
}
function c(e, t) {
    let n = (0, a.p9)(null == e ? void 0 : e.id, "channel_list"),
        r = (0, i.l8)(null == e ? void 0 : e.id, t);
    return null != e && (e.features.has(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (n && r));
}
