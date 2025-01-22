r.d(n, {
    g: function () {
        return d;
    }
});
var i = r(399606),
    a = r(704215),
    o = r(605236),
    s = r(352981),
    l = r(496675),
    u = r(652515),
    c = r(981631);
function d(e, n) {
    var r;
    let d = (0, u.yV)(n),
        f = (0, o.wE)(a.z.SERVER_SHOP_PHANTOM_PREVIEW),
        p = (0, i.e7)([l.Z], () => null != e && l.Z.can(c.Plq.ADMINISTRATOR, e)),
        h = null !== (r = null == e ? void 0 : e.hasFeature(c.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) && void 0 !== r && r,
        _ = (0, s.y)(null == e ? void 0 : e.id, 'useGuildShopPreviewVisible'),
        m = [c.oNc.CREATOR_MONETIZABLE, c.oNc.CREATOR_MONETIZABLE_PROVISIONAL, c.oNc.ROLE_SUBSCRIPTIONS_ENABLED].some((n) => (null == e ? void 0 : e.hasFeature(n)) === !0);
    return null != e && p && !h && m && d && _ && !f;
}
