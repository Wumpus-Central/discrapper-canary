n.d(t, { Z: () => p });
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
    f = n(388032),
    h = n(747615);
function p(e) {
    let { item: t, wishlistId: n, iconSize: i = "refresh_sm", className: p } = e,
        { analyticsLocations: g } = (0, s.ZP)(),
        m = async () => {
            try {
                await c.Z.removeSkuFromWishlist(n, t.skuId, g);
            } catch (e) {
                (0, u.L$)(d.qb.SOMETHING_WENT_WRONG);
            }
        };
    return (0, r.jsx)(o.u, {
        text: f.intl.string(f.t.jTW016),
        children: (0, r.jsx)(a.P3F, {
            onClick: m,
            "aria-label": f.intl.string(f.t.jTW016),
            className: l()(p, h.clickable),
            children: (0, r.jsx)(a.XHJ, {
                size: i,
                className: h.icon,
                color: a.TVs.colors.ICON_FEEDBACK_CRITICAL,
            }),
        }),
    });
}
