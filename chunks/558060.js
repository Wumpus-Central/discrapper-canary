n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(481060),
    s = n(884697),
    o = n(409116),
    c = n(200615),
    d = n(981631),
    u = n(388032),
    m = n(487667);
function h(e) {
    let { product: t, isPremiumUser: n, discount: a, className: h, nitroUpsell: g = !1 } = e,
        p = (0, s.ql)(t, d.tuJ.DEFAULT);
    if (null == p) return null;
    if (p.amount <= 0)
        return (0, r.jsx)('div', {
            className: i()(m.priceTagsContainer, h),
            children: (0, r.jsx)(o.F, { price: p })
        });
    let f = (0, s.ql)(t, d.tuJ.PREMIUM_TIER_2),
        C = !n && !(0, s.x6)(t),
        b =
            (0, s.x6)(t) && n
                ? {
                      ...p,
                      amount: a.original
                  }
                : p;
    return (0, r.jsxs)('div', {
        className: i()(m.priceTagsContainer, h),
        children: [
            (0, r.jsx)(o.F, {
                price: b,
                discount: n ? s.f_ : a,
                className: i()(m.price, {
                    [m.striked]: n,
                    [m.dimmed]: n,
                    [m.fullPrice]: C
                })
            }),
            null != f &&
                (0, r.jsx)(o.F, {
                    price: f,
                    discount: n ? a : s.f_,
                    renderPrice: g
                        ? (e) =>
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.intl.format(u.t.Sv8iiY, {
                                      price: e,
                                      subscribeNowHook: (e) => (0, r.jsx)(c.F, { text: e })
                                  })
                              })
                        : C
                          ? (e) => u.intl.formatToPlainString(u.t.W3gIWF, { price: e })
                          : void 0,
                    className: i()(m.price, {
                        [m.dimmed]: !n,
                        [m.fullPrice]: C
                    }),
                    variant: n ? void 0 : 'text-xs/semibold',
                    icon: (0, r.jsx)(l.Tooltip, {
                        text: u.intl.string(u.t.MPFyJy),
                        'aria-label': u.intl.string(u.t.X3Ekj4),
                        children: (e) => {
                            let { ...t } = e;
                            return (0, r.jsx)(l.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                ...t,
                                className: i()(m.premiumIcon, { [m.fullPrice]: C })
                            });
                        }
                    })
                })
        ]
    });
}
