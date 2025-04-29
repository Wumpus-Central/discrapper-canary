n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(509545),
    c = n(74538),
    u = n(474936),
    d = n(106112);
let f = function (e) {
    let { subscriptionTier: t, interval: n = u.rV.MONTH, className: i, isGift: f = !1, variant: _, priceOptions: p, isMarketingPageV2: h } = e;
    if (!(0, a.e7)([l.Z], () => l.Z.isLoadedForPremiumSKUs()))
        return (0, r.jsx)(s.$jN, {
            type: s.$jN.Type.PULSING_ELLIPSIS,
            className: d.priceSpinner
        });
    let m = l.Z.getForSkuAndInterval((0, c.Wz)(t), n),
        g = null != m ? (0, c.gy)(m, p, !1, f) : null;
    return (0, r.jsx)(s.X6q, {
        color: h ? 'none' : 'always-white',
        variant: null != _ ? _ : 'heading-md/medium',
        className: o()(d.pricePerInterval, i),
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('span', {
                    className: h ? void 0 : d.price,
                    children: g
                }),
                ' / ',
                (0, c.eP)(n)
            ]
        })
    });
};
