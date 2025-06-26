r.d(t, { F: () => d }), r(704826), r(35282);
var n = r(255367);
r(73800);
var i = r(120356),
    o = r.n(i),
    l = r(481060),
    a = r(937615),
    s = r(884697),
    c = r(864356);
let u = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    d = (e) => {
        var t;
        let {
                price: { amount: r, currency: i },
                renderPrice: d,
                icon: p,
                className: b,
                discount: v = s.f_,
                variant: f = 'heading-md/semibold'
            } = e,
            m = u((0, a.T4)(r, i)),
            h =
                v !== s.f_ && v.discountPercentage >= 5
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              m,
                              (0, n.jsx)(l.Text, {
                                  variant: f,
                                  color: 'text-feedback-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(v.discountPercentage, '%)')
                              })
                          ]
                      })
                    : m;
        return (0, n.jsxs)(l.X6q, {
            variant: f,
            className: o()(c.container, b),
            children: [p, null != (t = null == d ? void 0 : d(h)) ? t : h]
        });
    };
