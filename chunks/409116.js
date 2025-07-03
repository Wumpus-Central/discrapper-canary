(n.d(t, { F: () => d }), n(704826), n(35282));
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    o = n(937615),
    s = n(884697),
    c = n(864356);
let u = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    d = (e) => {
        var t;
        let {
                price: { amount: n, currency: l },
                renderPrice: d,
                icon: p,
                className: g,
                discount: f = s.f_,
                variant: h = 'heading-md/semibold'
            } = e,
            b = u((0, o.T4)(n, l)),
            m =
                f !== s.f_ && f.discountPercentage >= 5
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              b,
                              (0, r.jsx)(a.Text, {
                                  variant: h,
                                  color: 'text-feedback-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(f.discountPercentage, '%)')
                              })
                          ]
                      })
                    : b;
        return (0, r.jsxs)(a.X6q, {
            variant: h,
            className: i()(c.container, g),
            children: [p, null != (t = null == d ? void 0 : d(m)) ? t : m]
        });
    };
