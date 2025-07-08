(n.d(t, { F: () => d }), n(704826), n(35282));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(937615),
    s = n(884697),
    c = n(864356);
let u = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    d = (e) => {
        var t;
        let {
                price: { amount: n, currency: i },
                renderPrice: d,
                icon: p,
                className: v,
                discount: f = s.f_,
                variant: m = 'heading-md/semibold'
            } = e,
            b = u((0, o.T4)(n, i)),
            h =
                f !== s.f_ && f.discountPercentage >= 5
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              b,
                              (0, r.jsx)(a.Text, {
                                  variant: m,
                                  color: 'text-feedback-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(f.discountPercentage, '%)')
                              })
                          ]
                      })
                    : b;
        return (0, r.jsxs)(a.X6q, {
            variant: m,
            className: l()(c.container, v),
            children: [p, null != (t = null == d ? void 0 : d(h)) ? t : h]
        });
    };
