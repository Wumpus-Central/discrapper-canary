n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    l = n(28664),
    o = n(481060),
    s = n(906732),
    c = n(277511),
    u = n(872269),
    d = n(228168),
    f = n(388032),
    g = n(747615);
function p(e) {
    let { item: t, wishlistId: n, iconSize: i = "refresh_sm", className: p } = e,
        { analyticsLocations: m } = (0, s.ZP)(),
        b = async () => {
            try {
                await c.Z.removeSkuFromWishlist(n, t.skuId, m);
            } catch (e) {
                (0, u.L$)(d.qb.SOMETHING_WENT_WRONG);
            }
        };
    return (0, r.jsx)(l.u, {
        text: f.intl.string(f.t.jTW019),
        children: (0, r.jsx)(o.P3F, {
            onClick: b,
            "aria-label": f.intl.string(f.t.jTW019),
            className: a()(p, g.clickable),
            children: (0, r.jsx)(o.XHJ, {
                size: i,
                className: g.icon,
                color: o.TVs.colors.ICON_FEEDBACK_CRITICAL,
            }),
        }),
    });
}
