n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    o = n(28664),
    a = n(481060),
    s = n(906732),
    c = n(277511),
    u = n(872269),
    d = n(228168),
    p = n(388032),
    f = n(747615);
function h(e) {
    let { item: t, wishlistId: n, iconSize: i = "refresh_sm", className: h } = e,
        { analyticsLocations: g } = (0, s.ZP)(),
        m = async () => {
            try {
                await c.Z.removeSkuFromWishlist(n, t.skuId, g);
            } catch (e) {
                (0, u.L$)(d.qb.SOMETHING_WENT_WRONG);
            }
        };
    return (0, r.jsx)(o.u, {
        text: p.intl.string(p.t.jTW016),
        children: (0, r.jsx)(a.P3F, {
            onClick: m,
            "aria-label": p.intl.string(p.t.jTW016),
            className: l()(h, f.clickable),
            children: (0, r.jsx)(a.XHJ, {
                size: i,
                className: f.icon,
                color: a.TVs.colors.ICON_FEEDBACK_CRITICAL,
            }),
        }),
    });
}
