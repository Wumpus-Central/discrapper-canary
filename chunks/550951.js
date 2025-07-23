n.d(t, { g: () => u });
var r = n(399606),
    i = n(704215),
    a = n(266454),
    o = n(352981),
    s = n(496675),
    l = n(652515),
    c = n(981631);
function u(e, t) {
    var n;
    let u = (0, l.yV)(t),
        d = (0, a.Nj)(i.z.SERVER_SHOP_PHANTOM_PREVIEW),
        _ = (0, r.e7)([s.Z], () => null != e && s.Z.can(c.Plq.ADMINISTRATOR, e)),
        f = null != (n = null == e ? void 0 : e.features.has(c.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) && n,
        p = (0, o.y)(null == e ? void 0 : e.id, 'useGuildShopPreviewVisible'),
        h = [c.oNc.CREATOR_MONETIZABLE, c.oNc.CREATOR_MONETIZABLE_PROVISIONAL, c.oNc.ROLE_SUBSCRIPTIONS_ENABLED].some((t) => (null == e ? void 0 : e.features.has(t)));
    return null != e && _ && !f && h && u && p && !d;
}
