n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    l = n(509545),
    u = n(74538),
    c = n(474936),
    d = n(849800);
let f = function (e) {
    let { subscriptionTier: t, interval: n = c.rV.MONTH, className: r, isGift: f = !1, variant: _, priceOptions: p, isMarketingPageV2: h } = e;
    if (!(0, s.e7)([l.Z], () => l.Z.isLoadedForPremiumSKUs()))
        return (0, i.jsx)(o.$jN, {
            type: o.$jN.Type.PULSING_ELLIPSIS,
            className: d.priceSpinner
        });
    let m = l.Z.getForSkuAndInterval((0, u.Wz)(t), n),
        g = null != m ? (0, u.gy)(m, p, !1, f) : null;
    return (0, i.jsx)(o.X6q, {
        color: h ? 'none' : 'always-white',
        variant: null != _ ? _ : 'heading-md/medium',
        className: a()(d.pricePerInterval, r),
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('span', {
                    className: h ? void 0 : d.price,
                    children: g
                }),
                ' / ',
                (0, u.eP)(n)
            ]
        })
    });
};
