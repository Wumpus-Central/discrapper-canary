n.d(t, {
    P: () => u,
});
var r = n(417597),
    i = n(554146),
    a = n(826673),
    s = n(130978),
    o = n(576705),
    l = n(491026),
    c = n(652215);

function u(e, t) {
    var n;
    let u = (0, l.NS)(t),
        d = (0, a.JZ)(i.M.SERVER_SHOP_PHANTOM_PREVIEW),
        f = (0, r.bG)([o.A], () => null != e && o.A.can(c.xBc.ADMINISTRATOR, e)),
        p = null != (n = null == e ? void 0 : e.features.has(c.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) && n,
        _ = (0, s.w)(null == e ? void 0 : e.id, "useGuildShopPreviewVisible"),
        h = [
            c.GuildFeatures.CREATOR_MONETIZABLE,
            c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
            c.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
        ].some((t) => (null == e ? void 0 : e.features.has(t)));
    return null != e && f && !p && h && u && _ && !d;
}
