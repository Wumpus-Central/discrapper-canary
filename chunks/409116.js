n.d(t, {
    F: function () {
        return u;
    }
}),
    n(757143);
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(481060),
    s = n(937615),
    o = n(884697),
    c = n(670633);
let d = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    u = (e) => {
        var t;
        let {
                price: { amount: n, currency: a },
                renderPrice: u,
                icon: m,
                className: h,
                discount: g = o.f_,
                variant: p = 'heading-md/semibold'
            } = e,
            f = d((0, s.T4)(n, a)),
            C =
                g !== o.f_ && g.discountPercentage >= 5
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              f,
                              (0, r.jsx)(l.Heading, {
                                  variant: p,
                                  color: 'text-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(g.discountPercentage, '%)')
                              })
                          ]
                      })
                    : f;
        return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(l.Heading, {
                variant: p,
                className: i()(c.container, h),
                children: [m, null !== (t = null == u ? void 0 : u(C)) && void 0 !== t ? t : C]
            })
        });
    };
