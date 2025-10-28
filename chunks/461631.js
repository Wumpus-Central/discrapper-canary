n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(28664),
    s = n(481060),
    o = n(906732),
    c = n(277511),
    d = n(872269),
    u = n(228168),
    p = n(388032),
    h = n(747615);
function f(e) {
    let { item: t, wishlistId: n, iconSize: i = "refresh_sm", className: f } = e,
        { analyticsLocations: g } = (0, o.ZP)(),
        m = async () => {
            try {
                await c.Z.removeSkuFromWishlist(n, t.skuId, g);
            } catch (e) {
                (0, d.L$)(u.qb.SOMETHING_WENT_WRONG);
            }
        };
    return (0, r.jsx)(a.u, {
        text: p.intl.string(p.t.jTW016),
        children: (0, r.jsx)(s.P3F, {
            onClick: m,
            "aria-label": p.intl.string(p.t.jTW016),
            className: l()(f, h.clickable),
            children: (0, r.jsx)(s.XHJ, {
                size: i,
                className: h.icon,
                color: s.TVs.colors.ICON_FEEDBACK_CRITICAL,
            }),
        }),
    });
}
