n.d(t, { Z: () => C });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(509545),
    c = n(74538),
    u = n(474936),
    d = n(106112);
let C = function (e) {
    let { subscriptionTier: t, interval: n = u.rV.MONTH, className: i, isGift: C = !1, variant: m, priceOptions: g, isMarketingPageV2: p } = e;
    if (!(0, a.e7)([o.Z], () => o.Z.isLoadedForPremiumSKUs()))
        return (0, r.jsx)(s.$jN, {
            type: s.$jN.Type.PULSING_ELLIPSIS,
            className: d.priceSpinner
        });
    let x = o.Z.getForSkuAndInterval((0, c.Wz)(t), n),
        f = null != x ? (0, c.gy)(x, g, !1, C) : null;
    return (0, r.jsx)(s.X6q, {
        color: p ? 'none' : 'always-white',
        variant: null != m ? m : 'heading-md/medium',
        className: l()(d.pricePerInterval, i),
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('span', {
                    className: p ? void 0 : d.price,
                    children: f
                }),
                ' / ',
                (0, c.eP)(n)
            ]
        })
    });
};
