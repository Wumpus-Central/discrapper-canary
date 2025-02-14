n.d(t, { F: () => u }), n(757143);
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    s = n(481060),
    a = n(937615),
    o = n(884697),
    d = n(890998);
let c = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    u = (e) => {
        var t;
        let {
                price: { amount: n, currency: r },
                renderPrice: u,
                icon: C,
                className: h,
                discount: p = o.f_,
                variant: m = 'heading-md/semibold'
            } = e,
            f = c((0, a.T4)(n, r)),
            g =
                p !== o.f_ && p.discountPercentage >= 5
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              f,
                              (0, l.jsx)(s.X6q, {
                                  variant: m,
                                  color: 'text-positive',
                                  className: d.discount,
                                  children: ' (-'.concat(p.discountPercentage, '%)')
                              })
                          ]
                      })
                    : f;
        return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)(s.X6q, {
                variant: m,
                className: i()(d.container, h),
                children: [C, null !== (t = null == u ? void 0 : u(g)) && void 0 !== t ? t : g]
            })
        });
    };
