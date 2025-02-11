n.d(t, { Z: () => h });
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    s = n(481060),
    a = n(884697),
    o = n(409116),
    d = n(200615),
    c = n(981631),
    u = n(388032),
    C = n(623862);
function h(e) {
    let { product: t, isPremiumUser: n, discount: r, className: h, nitroUpsell: p = !1 } = e,
        m = (0, a.ql)(t, c.tuJ.DEFAULT);
    if (null == m) return null;
    if (m.amount <= 0)
        return (0, l.jsx)('div', {
            className: i()(C.priceTagsContainer, h),
            children: (0, l.jsx)(o.F, { price: m })
        });
    let f = (0, a.ql)(t, c.tuJ.PREMIUM_TIER_2),
        g = !n && !(0, a.x6)(t),
        x =
            (0, a.x6)(t) && n
                ? {
                      ...m,
                      amount: r.original
                  }
                : m;
    return (0, l.jsxs)('div', {
        className: i()(C.priceTagsContainer, h),
        children: [
            (0, l.jsx)(o.F, {
                price: x,
                discount: n ? a.f_ : r,
                className: i()(C.price, {
                    [C.striked]: n,
                    [C.dimmed]: n,
                    [C.fullPrice]: g
                })
            }),
            null != f &&
                (0, l.jsx)(o.F, {
                    price: f,
                    discount: n ? r : a.f_,
                    renderPrice: p
                        ? (e) =>
                              (0, l.jsx)(s.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.intl.format(u.t.Sv8iiY, {
                                      price: e,
                                      subscribeNowHook: (e) => (0, l.jsx)(d.F, { text: e })
                                  })
                              })
                        : g
                          ? (e) => u.intl.formatToPlainString(u.t.W3gIWF, { price: e })
                          : void 0,
                    className: i()(C.price, {
                        [C.dimmed]: !n,
                        [C.fullPrice]: g
                    }),
                    variant: n ? void 0 : 'text-xs/semibold',
                    icon: (0, l.jsx)(s.ua7, {
                        text: u.intl.string(u.t.MPFyJy),
                        'aria-label': u.intl.string(u.t.X3Ekj4),
                        children: (e) => {
                            let { ...t } = e;
                            return (0, l.jsx)(s.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                ...t,
                                className: i()(C.premiumIcon, { [C.fullPrice]: g })
                            });
                        }
                    })
                })
        ]
    });
}
