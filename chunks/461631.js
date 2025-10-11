n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    l = n(28664),
    o = n(481060),
    s = n(906732),
    d = n(277511),
    C = n(872269),
    c = n(228168),
    u = n(388032),
    p = n(747615);
function _(e) {
    let { item: t, wishlistId: n, iconSize: i = "refresh_sm", className: _ } = e,
        { analyticsLocations: f } = (0, s.ZP)(),
        h = async () => {
            try {
                await d.Z.removeSkuFromWishlist(n, t.skuId, f);
            } catch (e) {
                (0, C.L$)(c.qb.SOMETHING_WENT_WRONG);
            }
        };
    return (0, r.jsx)(l.u, {
        text: u.intl.string(u.t.jTW019),
        children: (0, r.jsx)(o.P3F, {
            onClick: h,
            "aria-label": u.intl.string(u.t.jTW019),
            className: a()(_, p.clickable),
            children: (0, r.jsx)(o.XHJ, {
                size: i,
                className: p.icon,
                color: o.TVs.colors.ICON_FEEDBACK_CRITICAL,
            }),
        }),
    });
}
