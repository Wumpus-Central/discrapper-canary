i.d(t, { Z: () => p });
var n = i(255367);
i(73800);
var r = i(120356),
    l = i.n(r),
    a = i(442837),
    s = i(780384),
    o = i(481060),
    c = i(410030),
    u = i(509545),
    d = i(74538),
    m = i(474936),
    C = i(106112);
let p = function (e) {
    let { subscriptionTier: t, interval: i = m.rV.MONTH, className: r, isGift: p = !1, variant: g, priceOptions: x, isApplicationHome: f, enablePremiumBrandRefresh: h } = e,
        v = (0, a.e7)([u.Z], () => u.Z.isLoadedForPremiumSKUs()),
        I = (0, s.ap)((0, c.ZP)());
    if (!v)
        return (0, n.jsx)(o.$jN, {
            type: o.$jN.Type.PULSING_ELLIPSIS,
            className: C.priceSpinner
        });
    let T = u.Z.getForSkuAndInterval((0, d.Wz)(t), i),
        j = null != T ? (0, d.gy)(T, x, !1, p) : null;
    if (h) {
        let e = i === m.rV.YEAR;
        return (0, n.jsxs)('div', {
            children: [
                (0, n.jsx)(o.Text, {
                    variant: e ? 'heading-md/semibold' : 'heading-xxl/extrabold',
                    color: e ? 'text-muted' : I ? 'header-primary' : 'always-white',
                    tag: 'span',
                    children: (0, n.jsx)('span', { children: j })
                }),
                (0, n.jsxs)(o.Text, {
                    variant: 'text-xs/medium',
                    tag: 'span',
                    color: 'text-muted',
                    children: ['/', (0, d.eP)(i)]
                })
            ]
        });
    }
    return (0, n.jsx)(o.X6q, {
        color: f ? 'none' : 'always-white',
        variant: null != g ? g : 'heading-md/medium',
        className: l()(C.pricePerInterval, r),
        children: (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)('span', {
                    className: f ? void 0 : C.price,
                    children: j
                }),
                ' / ',
                (0, d.eP)(i)
            ]
        })
    });
};
