(r.d(t, { F: () => d }), r(704826), r(35282));
var n = r(255367);
r(73800);
var i = r(120356),
    l = r.n(i),
    a = r(481060),
    o = r(937615),
    s = r(884697),
    c = r(864356);
let u = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    d = (e) => {
        var t;
        let {
                price: { amount: r, currency: i },
                renderPrice: d,
                icon: p,
                className: v,
                discount: f = s.f_,
                variant: m = 'heading-md/semibold'
            } = e,
            b = u((0, o.T4)(r, i)),
            h =
                f !== s.f_ && f.discountPercentage >= 5
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              b,
                              (0, n.jsx)(a.Text, {
                                  variant: m,
                                  color: 'text-feedback-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(f.discountPercentage, '%)')
                              })
                          ]
                      })
                    : b;
        return (0, n.jsxs)(a.X6q, {
            variant: m,
            className: l()(c.container, v),
            children: [p, null != (t = null == d ? void 0 : d(h)) ? t : h]
        });
    };
