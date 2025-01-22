n.d(t, {
    F: function () {
        return u;
    }
}),
    n(757143);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(937615),
    o = n(884697),
    c = n(670633);
let d = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    u = (e) => {
        var t;
        let {
                price: { amount: n, currency: i },
                renderPrice: u,
                icon: C,
                className: h,
                discount: p = o.f_,
                variant: f = 'heading-md/semibold'
            } = e,
            m = d((0, a.T4)(n, i)),
            g =
                p !== o.f_ && p.discountPercentage >= 5
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              m,
                              (0, r.jsx)(s.Heading, {
                                  variant: f,
                                  color: 'text-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(p.discountPercentage, '%)')
                              })
                          ]
                      })
                    : m;
        return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(s.Heading, {
                variant: f,
                className: l()(c.container, h),
                children: [C, null !== (t = null == u ? void 0 : u(g)) && void 0 !== t ? t : g]
            })
        });
    };
