n.d(t, { g: () => c });
var i = n(399606),
    r = n(704215),
    a = n(605236),
    s = n(352981),
    o = n(496675),
    l = n(652515),
    u = n(981631);
function c(e, t) {
    var n;
    let c = (0, l.yV)(t),
        d = (0, a.wE)(r.z.SERVER_SHOP_PHANTOM_PREVIEW),
        f = (0, i.e7)([o.Z], () => null != e && o.Z.can(u.Plq.ADMINISTRATOR, e)),
        _ = null !== (n = null == e ? void 0 : e.hasFeature(u.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) && void 0 !== n && n,
        p = (0, s.y)(null == e ? void 0 : e.id, 'useGuildShopPreviewVisible'),
        h = [u.oNc.CREATOR_MONETIZABLE, u.oNc.CREATOR_MONETIZABLE_PROVISIONAL, u.oNc.ROLE_SUBSCRIPTIONS_ENABLED].some((t) => (null == e ? void 0 : e.hasFeature(t)) === !0);
    return null != e && f && !_ && h && c && p && !d;
}
