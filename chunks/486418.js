n.d(t, { P: () => d });
var i = n(702841),
    a = n(554146),
    r = n(826673),
    s = n(440293),
    l = n(576705),
    o = n(652215);
function d(e) {
    let t = (0, r.JZ)(a.M.SERVER_SHOP_PHANTOM_PREVIEW),
        n = (0, i.bG)([l.A], () => null != e && l.A.can(o.xBc.ADMINISTRATOR, e)),
        d = e?.features.has(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) ?? !1,
        c = (0, s.w)(e?.id),
        _ = [
            o.GuildFeatures.CREATOR_MONETIZABLE,
            o.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
            o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
        ].some((t) => e?.features.has(t));
    return null != e && n && !d && _ && c && !t;
}
