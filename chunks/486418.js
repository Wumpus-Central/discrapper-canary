n.d(t, { P: () => o });
var i = n(702841),
    r = n(554146),
    a = n(826673),
    s = n(440293),
    _ = n(576705),
    l = n(652215);
function o(e) {
    let t = (0, a.JZ)(r.M.SERVER_SHOP_PHANTOM_PREVIEW),
        n = (0, i.bG)([_.A], () => null != e && _.A.can(l.xBc.ADMINISTRATOR, e)),
        o = e?.features.has(l.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) ?? !1,
        E = (0, s.w)(e?.id),
        d = [
            l.GuildFeatures.CREATOR_MONETIZABLE,
            l.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
            l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
        ].some((t) => e?.features.has(t));
    return null != e && n && !o && d && E && !t;
}
