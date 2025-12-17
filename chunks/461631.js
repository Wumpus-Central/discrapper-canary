n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(481060),
    l = n(906732),
    c = n(277511),
    u = n(872269),
    d = n(228168),
    f = n(388032),
    p = n(737343);
function _(e) {
    let { item: t, wishlistId: n, iconSize: i = "refresh_sm", className: _ } = e,
        { analyticsLocations: m } = (0, l.ZP)(),
        h = async () => {
            try {
                await c.Z.removeSkuFromWishlist(n, t.skuId, m);
            } catch (e) {
                (0, u.L$)(d.qb.SOMETHING_WENT_WRONG);
            }
        };
    return (0, r.jsx)(o.u, {
        text: f.intl.string(f.t.jTW016),
        children: (0, r.jsx)(s.P3F, {
            onClick: h,
            "aria-label": f.intl.string(f.t.jTW016),
            className: a()(_, p.clickable),
            children: (0, r.jsx)(s.XHJ, {
                size: i,
                className: p.icon,
                color: s.TVs.colors.ICON_FEEDBACK_CRITICAL,
            }),
        }),
    });
}
