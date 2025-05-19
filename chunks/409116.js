n.d(t, { F: () => d }), n(704826), n(35282);
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    o = n(937615),
    s = n(884697),
    c = n(718574);
let u = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    d = (e) => {
        var t;
        let {
                price: { amount: n, currency: l },
                renderPrice: d,
                icon: b,
                className: f,
                discount: p = s.f_,
                variant: g = 'heading-md/semibold'
            } = e,
            h = u((0, o.T4)(n, l)),
            m =
                p !== s.f_ && p.discountPercentage >= 5
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              h,
                              (0, r.jsx)(a.Text, {
                                  variant: g,
                                  color: 'text-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(p.discountPercentage, '%)')
                              })
                          ]
                      })
                    : h;
        return (0, r.jsxs)(a.X6q, {
            variant: g,
            className: i()(c.container, f),
            children: [b, null != (t = null == d ? void 0 : d(m)) ? t : m]
        });
    };
