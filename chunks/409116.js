n.d(t, { F: () => d }), n(704826), n(35282);
var r = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l),
    i = n(481060),
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
                className: f,
                discount: g = s.f_,
                variant: h = 'heading-md/semibold'
            } = e,
            b = u((0, o.T4)(n, l)),
            m =
                g !== s.f_ && g.discountPercentage >= 5
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              b,
                              (0, r.jsx)(i.Text, {
                                  variant: h,
                                  color: 'text-feedback-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(g.discountPercentage, '%)')
                              })
                          ]
                      })
                    : b;
        return (0, r.jsxs)(i.X6q, {
            variant: h,
            className: a()(c.container, f),
            children: [p, null != (t = null == d ? void 0 : d(m)) ? t : m]
        });
    };
