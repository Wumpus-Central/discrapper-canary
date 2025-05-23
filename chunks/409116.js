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
                className: g,
                discount: b = s.f_,
                variant: f = 'heading-md/semibold'
            } = e,
            h = u((0, o.T4)(n, l)),
            m =
                b !== s.f_ && b.discountPercentage >= 5
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              h,
                              (0, r.jsx)(i.Text, {
                                  variant: f,
                                  color: 'text-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(b.discountPercentage, '%)')
                              })
                          ]
                      })
                    : h;
        return (0, r.jsxs)(i.X6q, {
            variant: f,
            className: a()(c.container, g),
            children: [p, null != (t = null == d ? void 0 : d(m)) ? t : m]
        });
    };
