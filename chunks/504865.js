n.d(t, { Z: () => m });
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    s = n(481060),
    o = n(509545),
    c = n(74538),
    u = n(474936),
    d = n(106112);
let m = function (e) {
    let { subscriptionTier: t, interval: n = u.rV.MONTH, className: r, isGift: m = !1, variant: C, priceOptions: g, isMarketingPageV2: x, enablePremiumRebrandDesign: p } = e;
    if (!(0, a.e7)([o.Z], () => o.Z.isLoadedForPremiumSKUs()))
        return (0, i.jsx)(s.$jN, {
            type: s.$jN.Type.PULSING_ELLIPSIS,
            className: d.priceSpinner
        });
    let h = o.Z.getForSkuAndInterval((0, c.Wz)(t), n),
        f = null != h ? (0, c.gy)(h, g, !1, m) : null;
    if (p) {
        let e = n === u.rV.YEAR;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(s.Text, {
                    variant: e ? 'heading-md/semibold' : 'heading-xxl/extrabold',
                    color: e ? 'text-muted' : 'text-primary',
                    tag: 'span',
                    children: (0, i.jsx)('span', { children: f })
                }),
                (0, i.jsxs)(s.Text, {
                    variant: 'text-xs/semibold',
                    tag: 'span',
                    color: 'text-muted',
                    children: ['/', (0, c.eP)(n)]
                })
            ]
        });
    }
    return (0, i.jsx)(s.X6q, {
        color: x ? 'none' : 'always-white',
        variant: null != C ? C : 'heading-md/medium',
        className: l()(d.pricePerInterval, r),
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('span', {
                    className: x ? void 0 : d.price,
                    children: f
                }),
                ' / ',
                (0, c.eP)(n)
            ]
        })
    });
};
