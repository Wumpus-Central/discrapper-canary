n.r(e), n.d(e, { default: () => u });
var a = n(627968);
n(64700);
var d = n(17928),
    p = n(832163),
    t = n(148980);
function u(r) {
    let { applicationId: e, pageIndex: n, skuId: u } = r,
        l = (0, d.bG)([p.A], () => p.A.getGuildIdFromApplicationId(e)),
        i = null != n ? parseInt(n, 10) : 0;
    return null == l ? null : (0, a.jsx)(t.SocialLayerStorefrontInnerWrapper, { guildId: l, skuId: u, pageIndex: i });
}
