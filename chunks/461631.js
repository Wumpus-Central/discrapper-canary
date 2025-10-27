r.d(t, { Z: () => p });
var n = r(951288);
r(647438);
var i = r(120356),
    l = r.n(i),
    s = r(28664),
    a = r(481060),
    c = r(906732),
    o = r(277511),
    u = r(872269),
    d = r(228168),
    f = r(388032),
    m = r(747615);
function p(e) {
    let { item: t, wishlistId: r, iconSize: i = "refresh_sm", className: p } = e,
        { analyticsLocations: h } = (0, c.ZP)(),
        I = async () => {
            try {
                await o.Z.removeSkuFromWishlist(r, t.skuId, h);
            } catch (e) {
                (0, u.L$)(d.qb.SOMETHING_WENT_WRONG);
            }
        };
    return (0, n.jsx)(s.u, {
        text: f.intl.string(f.t.jTW016),
        children: (0, n.jsx)(a.P3F, {
            onClick: I,
            "aria-label": f.intl.string(f.t.jTW016),
            className: l()(p, m.clickable),
            children: (0, n.jsx)(a.XHJ, {
                size: i,
                className: m.icon,
                color: a.TVs.colors.ICON_FEEDBACK_CRITICAL,
            }),
        }),
    });
}
