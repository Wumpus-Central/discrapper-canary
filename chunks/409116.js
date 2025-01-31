n.d(t, { F: () => u }), n(757143);
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(481060),
    a = n(937615),
    o = n(884697),
    d = n(670633);
let c = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    u = (e) => {
        var t;
        let {
                price: { amount: n, currency: l },
                renderPrice: u,
                icon: C,
                className: h,
                discount: p = o.f_,
                variant: m = 'heading-md/semibold'
            } = e,
            f = c((0, a.T4)(n, l)),
            g =
                p !== o.f_ && p.discountPercentage >= 5
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              f,
                              (0, r.jsx)(s.X6q, {
                                  variant: m,
                                  color: 'text-positive',
                                  className: d.discount,
                                  children: ' (-'.concat(p.discountPercentage, '%)')
                              })
                          ]
                      })
                    : f;
        return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(s.X6q, {
                variant: m,
                className: i()(d.container, h),
                children: [C, null !== (t = null == u ? void 0 : u(g)) && void 0 !== t ? t : g]
            })
        });
    };
