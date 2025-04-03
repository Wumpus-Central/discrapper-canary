n.d(t, { F: () => d }), n(757143), n(301563);
var r = n(200651);
n(192379);
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
                icon: b,
                className: p,
                discount: f = s.f_,
                variant: g = 'heading-md/semibold'
            } = e,
            h = u((0, i.T4)(n, l)),
            m =
                f !== s.f_ && f.discountPercentage >= 5
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              h,
                              (0, r.jsx)(o.X6q, {
                                  variant: g,
                                  color: 'text-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(f.discountPercentage, '%)')
                              })
                          ]
                      })
                    : h;
        return (0, r.jsxs)(o.X6q, {
            variant: g,
            className: a()(c.container, p),
            children: [b, null != (t = null == d ? void 0 : d(m)) ? t : m]
        });
    };
