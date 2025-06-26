n.d(t, { F: () => d }), n(704826), n(35282);
var r = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l),
    o = n(481060),
    i = n(937615),
    s = n(884697),
    c = n(864356);
let u = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    d = (e) => {
        var t;
        let {
                price: { amount: n, currency: l },
                renderPrice: d,
                icon: p,
                className: f,
                discount: b = s.f_,
                variant: g = 'heading-md/semibold'
            } = e,
            h = u((0, i.T4)(n, l)),
            m =
                b !== s.f_ && b.discountPercentage >= 5
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              h,
                              (0, r.jsx)(o.Text, {
                                  variant: g,
                                  color: 'text-feedback-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(b.discountPercentage, '%)')
                              })
                          ]
                      })
                    : h;
        return (0, r.jsxs)(o.X6q, {
            variant: g,
            className: a()(c.container, f),
            children: [p, null != (t = null == d ? void 0 : d(m)) ? t : m]
        });
    };
