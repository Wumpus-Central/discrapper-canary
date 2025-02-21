r.d(t, { F: () => u }), r(757143), r(301563);
var n = r(200651);
r(192379);
var l = r(120356),
    i = r.n(l),
    a = r(481060),
    o = r(937615),
    s = r(884697),
    c = r(776446);
let d = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    u = (e) => {
        var t;
        let {
                price: { amount: r, currency: l },
                renderPrice: u,
                icon: p,
                className: f,
                discount: h = s.f_,
                variant: C = 'heading-md/semibold'
            } = e,
            m = d((0, o.T4)(r, l)),
            b =
                h !== s.f_ && h.discountPercentage >= 5
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              m,
                              (0, n.jsx)(a.X6q, {
                                  variant: C,
                                  color: 'text-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(h.discountPercentage, '%)')
                              })
                          ]
                      })
                    : m;
        return (0, n.jsxs)(a.X6q, {
            variant: C,
            className: i()(c.container, f),
            children: [p, null !== (t = null == u ? void 0 : u(b)) && void 0 !== t ? t : b]
        });
    };
