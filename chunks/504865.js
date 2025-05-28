n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(780384),
    o = n(481060),
    c = n(410030),
    u = n(509545),
    d = n(74538),
    m = n(474936),
    C = n(106112);
let g = function (e) {
    let { subscriptionTier: t, interval: n = m.rV.MONTH, className: i, isGift: g = !1, variant: p, priceOptions: x, isMarketingPageV2: h, enablePremiumRebrandDesign: f } = e,
        v = (0, a.e7)([u.Z], () => u.Z.isLoadedForPremiumSKUs()),
        I = (0, s.ap)((0, c.ZP)());
    if (!v)
        return (0, r.jsx)(o.$jN, {
            type: o.$jN.Type.PULSING_ELLIPSIS,
            className: C.priceSpinner
        });
    let T = u.Z.getForSkuAndInterval((0, d.Wz)(t), n),
        j = null != T ? (0, d.gy)(T, x, !1, g) : null;
    if (f) {
        let e = n === m.rV.YEAR;
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(o.Text, {
                    variant: e ? 'heading-md/semibold' : 'heading-xxl/semibold',
                    color: e ? 'text-muted' : I ? 'header-primary' : 'always-white',
                    tag: 'span',
                    children: (0, r.jsx)('span', { children: j })
                }),
                (0, r.jsxs)(o.Text, {
                    variant: 'text-xs/medium',
                    tag: 'span',
                    color: 'text-muted',
                    children: ['/', (0, d.eP)(n)]
                })
            ]
        });
    }
    return (0, r.jsx)(o.X6q, {
        color: h ? 'none' : 'always-white',
        variant: null != p ? p : 'heading-md/medium',
        className: l()(C.pricePerInterval, i),
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('span', {
                    className: h ? void 0 : C.price,
                    children: j
                }),
                ' / ',
                (0, d.eP)(n)
            ]
        })
    });
};
