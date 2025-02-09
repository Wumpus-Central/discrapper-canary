n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    s = n(884697),
    o = n(409116),
    d = n(200615),
    c = n(981631),
    u = n(388032),
    C = n(623862);
function h(e) {
    let { product: t, isPremiumUser: n, discount: l, className: h, nitroUpsell: p = !1 } = e,
        m = (0, s.ql)(t, c.tuJ.DEFAULT);
    if (null == m) return null;
    if (m.amount <= 0)
        return (0, r.jsx)('div', {
            className: i()(C.priceTagsContainer, h),
            children: (0, r.jsx)(o.F, { price: m })
        });
    let g = (0, s.ql)(t, c.tuJ.PREMIUM_TIER_2),
        f = !n && !(0, s.x6)(t),
        x =
            (0, s.x6)(t) && n
                ? {
                      ...m,
                      amount: l.original
                  }
                : m;
    return (0, r.jsxs)('div', {
        className: i()(C.priceTagsContainer, h),
        children: [
            (0, r.jsx)(o.F, {
                price: x,
                discount: n ? s.f_ : l,
                className: i()(C.price, {
                    [C.striked]: n,
                    [C.dimmed]: n,
                    [C.fullPrice]: f
                })
            }),
            null != g &&
                (0, r.jsx)(o.F, {
                    price: g,
                    discount: n ? l : s.f_,
                    renderPrice: p
                        ? (e) =>
                              (0, r.jsx)(a.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.intl.format(u.t.Sv8iiY, {
                                      price: e,
                                      subscribeNowHook: (e) => (0, r.jsx)(d.F, { text: e })
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
                    icon: (0, r.jsx)(a.ua7, {
                        text: u.intl.string(u.t.MPFyJy),
                        'aria-label': u.intl.string(u.t.X3Ekj4),
                        children: (e) => {
                            let { ...t } = e;
                            return (0, r.jsx)(a.SrA, {
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
