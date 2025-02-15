n.d(t, { Z: () => h });
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(481060),
    s = n(884697),
    o = n(409116),
    d = n(200615),
    c = n(981631),
    u = n(388032),
    C = n(227389);
function h(e) {
    let { product: t, isPremiumUser: n, discount: r, className: h, nitroUpsell: m = !1 } = e,
        p = (0, s.ql)(t, c.tuJ.DEFAULT);
    if (null == p) return null;
    if (p.amount <= 0)
        return (0, l.jsx)('div', {
            className: i()(C.priceTagsContainer, h),
            children: (0, l.jsx)(o.F, { price: p })
        });
    let g = (0, s.ql)(t, c.tuJ.PREMIUM_TIER_2),
        f = !n && !(0, s.x6)(t),
        x =
            (0, s.x6)(t) && n
                ? {
                      ...p,
                      amount: r.original
                  }
                : p;
    return (0, l.jsxs)('div', {
        className: i()(C.priceTagsContainer, h),
        children: [
            (0, l.jsx)(o.F, {
                price: x,
                discount: n ? s.f_ : r,
                className: i()(C.price, {
                    [C.striked]: n,
                    [C.dimmed]: n,
                    [C.fullPrice]: f
                })
            }),
            null != g &&
                (0, l.jsx)(o.F, {
                    price: g,
                    discount: n ? r : s.f_,
                    renderPrice: m
                        ? (e) =>
                              (0, l.jsx)(a.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.intl.format(u.t.Sv8iiY, {
                                      price: e,
                                      subscribeNowHook: (e) => (0, l.jsx)(d.F, { text: e })
                                  })
                              })
                        : f
                          ? (e) => u.intl.formatToPlainString(u.t.W3gIWF, { price: e })
                          : void 0,
                    className: i()(C.price, {
                        [C.dimmed]: !n,
                        [C.fullPrice]: f
                    }),
                    variant: n ? void 0 : 'text-xs/semibold',
                    icon: (0, l.jsx)(a.ua7, {
                        text: u.intl.string(u.t.MPFyJy),
                        'aria-label': u.intl.string(u.t.X3Ekj4),
                        children: (e) => {
                            let { ...t } = e;
                            return (0, l.jsx)(a.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                ...t,
                                className: i()(C.premiumIcon, { [C.fullPrice]: f })
                            });
                        }
                    })
                })
        ]
    });
}
