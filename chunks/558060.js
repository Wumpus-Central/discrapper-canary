n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(884697),
    o = n(409116),
    c = n(200615),
    d = n(981631),
    u = n(388032),
    C = n(487667);
function h(e) {
    let { product: t, isPremiumUser: n, discount: i, className: h, nitroUpsell: p = !1 } = e,
        f = (0, a.ql)(t, d.tuJ.DEFAULT);
    if (null == f) return null;
    if (f.amount <= 0)
        return (0, r.jsx)('div', {
            className: l()(C.priceTagsContainer, h),
            children: (0, r.jsx)(o.F, { price: f })
        });
    let m = (0, a.ql)(t, d.tuJ.PREMIUM_TIER_2),
        g = !n && !(0, a.x6)(t),
        b =
            (0, a.x6)(t) && n
                ? {
                      ...f,
                      amount: i.original
                  }
                : f;
    return (0, r.jsxs)('div', {
        className: l()(C.priceTagsContainer, h),
        children: [
            (0, r.jsx)(o.F, {
                price: b,
                discount: n ? a.f_ : i,
                className: l()(C.price, {
                    [C.striked]: n,
                    [C.dimmed]: n,
                    [C.fullPrice]: g
                })
            }),
            null != m &&
                (0, r.jsx)(o.F, {
                    price: m,
                    discount: n ? i : a.f_,
                    renderPrice: p
                        ? (e) =>
                              (0, r.jsx)(s.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.intl.format(u.t.Sv8iiY, {
                                      price: e,
                                      subscribeNowHook: (e) => (0, r.jsx)(c.F, { text: e })
                                  })
                              })
                        : g
                          ? (e) => u.intl.formatToPlainString(u.t.W3gIWF, { price: e })
                          : void 0,
                    className: l()(C.price, {
                        [C.dimmed]: !n,
                        [C.fullPrice]: g
                    }),
                    variant: n ? void 0 : 'text-xs/semibold',
                    icon: (0, r.jsx)(s.Tooltip, {
                        text: u.intl.string(u.t.MPFyJy),
                        'aria-label': u.intl.string(u.t.X3Ekj4),
                        children: (e) => {
                            let { ...t } = e;
                            return (0, r.jsx)(s.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                ...t,
                                className: l()(C.premiumIcon, { [C.fullPrice]: g })
                            });
                        }
                    })
                })
        ]
    });
}
