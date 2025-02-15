n.d(t, { F: () => u }), n(757143);
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(481060),
    s = n(937615),
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
                discount: m = o.f_,
                variant: p = 'heading-md/semibold'
            } = e,
            g = c((0, s.T4)(n, r)),
            f =
                m !== o.f_ && m.discountPercentage >= 5
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              g,
                              (0, l.jsx)(a.X6q, {
                                  variant: p,
                                  color: 'text-positive',
                                  className: d.discount,
                                  children: ' (-'.concat(m.discountPercentage, '%)')
                              })
                          ]
                      })
                    : g;
        return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)(a.X6q, {
                variant: p,
                className: i()(d.container, h),
                children: [C, null !== (t = null == u ? void 0 : u(f)) && void 0 !== t ? t : f]
            })
        });
    };
