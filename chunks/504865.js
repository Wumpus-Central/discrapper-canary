n.d(t, { Z: () => p });
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    s = n(780384),
    o = n(481060),
    c = n(410030),
    u = n(509545),
    d = n(74538),
    m = n(474936),
    C = n(106112);
let p = function (e) {
    let { subscriptionTier: t, interval: n = m.rV.MONTH, className: r, isGift: p = !1, variant: g, priceOptions: x, isApplicationHome: f, enablePremiumRebrandDesign: h } = e,
        v = (0, a.e7)([u.Z], () => u.Z.isLoadedForPremiumSKUs()),
        I = (0, s.ap)((0, c.ZP)());
    if (!v)
        return (0, i.jsx)(o.$jN, {
            type: o.$jN.Type.PULSING_ELLIPSIS,
            className: C.priceSpinner
        });
    let T = u.Z.getForSkuAndInterval((0, d.Wz)(t), n),
        j = null != T ? (0, d.gy)(T, x, !1, p) : null;
    if (h) {
        let e = n === m.rV.YEAR;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: e ? 'heading-md/semibold' : 'heading-xxl/bold',
                    color: e ? 'text-muted' : I ? 'header-primary' : 'always-white',
                    tag: 'span',
                    children: (0, i.jsx)('span', { children: j })
                }),
                (0, i.jsxs)(o.Text, {
                    variant: 'text-xs/medium',
                    tag: 'span',
                    color: 'text-muted',
                    children: ['/', (0, d.eP)(n)]
                })
            ]
        });
    }
    return (0, i.jsx)(o.X6q, {
        color: f ? 'none' : 'always-white',
        variant: null != g ? g : 'heading-md/medium',
        className: l()(C.pricePerInterval, r),
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('span', {
                    className: f ? void 0 : C.price,
                    children: j
                }),
                ' / ',
                (0, d.eP)(n)
            ]
        })
    });
};
