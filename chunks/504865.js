var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(442837),
    l = r(481060),
    u = r(509545),
    c = r(74538),
    d = r(474936),
    f = r(849800);
function p(e) {
    let { subscriptionTier: n, interval: r = d.rV.MONTH, className: a, isGift: p = !1, variant: h, priceOptions: _, isMarketingPageV2: m } = e;
    if (!(0, s.e7)([u.Z], () => u.Z.isLoadedForPremiumSKUs()))
        return (0, i.jsx)(l.Spinner, {
            type: l.Spinner.Type.PULSING_ELLIPSIS,
            className: f.priceSpinner
        });
    let g = u.Z.getForSkuAndInterval((0, c.Wz)(n), r),
        E = null != g ? (0, c.gy)(g, _, !1, p) : null;
    return (0, i.jsx)(l.Heading, {
        color: m ? 'none' : 'always-white',
        variant: null != h ? h : 'heading-md/medium',
        className: o()(f.pricePerInterval, a),
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('span', {
                    className: m ? void 0 : f.price,
                    children: E
                }),
                ' / ',
                (0, c.eP)(r)
            ]
        })
    });
}
n.Z = p;
