n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(704215),
    s = n(927359),
    o = n(243778),
    c = n(325767),
    d = n(823188),
    u = n(664358);
let h = 'premium_tier_gradient',
    m = 'smaller_sparkle_gradient';
function p(e) {
    let { width: t = 14, height: n = 15, color: r = 'white', foreground: l, ...a } = e;
    return (0, i.jsxs)('svg', {
        ...(0, c.Z)({ ...a }),
        preserveAspectRatio: 'none',
        width: t,
        height: n,
        viewBox: '0 0 14 15',
        className: l,
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, i.jsx)('defs', {
                children: (0, i.jsxs)('linearGradient', {
                    id: h,
                    x1: '0%',
                    y1: '0%',
                    x2: '100%',
                    y2: '0%',
                    children: [
                        (0, i.jsx)('stop', {
                            offset: '0%',
                            stopColor: '#8547C6'
                        }),
                        (0, i.jsx)('stop', {
                            offset: '50%',
                            stopColor: '#B845C1'
                        }),
                        (0, i.jsx)('stop', {
                            offset: '100%',
                            stopColor: '#AB5D8A'
                        })
                    ]
                })
            }),
            (0, i.jsxs)('linearGradient', {
                id: m,
                x1: '-4.95474',
                y1: '5.44067',
                x2: '11.2384',
                y2: '8.58386',
                gradientUnits: 'userSpaceOnUse',
                children: [
                    (0, i.jsx)('stop', { stopColor: '#8547C6' }),
                    (0, i.jsx)('stop', {
                        offset: '0.52899',
                        stopColor: '#B845C1'
                    }),
                    (0, i.jsx)('stop', {
                        offset: '1',
                        stopColor: '#AB5D8A'
                    })
                ]
            }),
            (0, i.jsx)('path', {
                d: 'M8.59403 1.52779C8.04647 0.0480288 5.95353 0.0480288 5.40597 1.52779L4.56476 3.8011C4.36219 4.34854 3.93057 4.78016 3.38313 4.98273L1.10982 5.82394C-0.36994 6.3715 -0.36994 8.46444 1.10982 9.012L3.38313 9.8532C3.93057 10.0558 4.36219 10.4874 4.56476 11.0348L5.40597 13.3081C5.95353 14.7879 8.04647 14.7879 8.59403 13.3081L9.43524 11.0348C9.63781 10.4874 10.0694 10.0558 10.6169 9.8532L12.8902 9.012C14.3699 8.46444 14.3699 6.3715 12.8902 5.82394L10.6169 4.98273C10.0694 4.78016 9.63781 4.34854 9.43524 3.8011L8.59403 1.52779Z',
                fill: r
            })
        ]
    });
}
function g(e) {
    let { className: t, endsAt: n, messageStyle: r, upperCase: c, showSparkles: g, currentEntitlementId: f } = e,
        [_] = (0, o.XR)(a.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL, Number(f)),
        E = (0, s.Z)(n, r);
    return (
        c && (E = E.toUpperCase()),
        (0, i.jsxs)('div', {
            className: l()(t, u.countDown),
            children: [
                g
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(p, {
                                  foreground: u.sparkleStar1,
                                  color: 'url(#'.concat(m, ')')
                              }),
                              (0, i.jsx)(p, {
                                  foreground: u.sparkleStar2,
                                  color: 'url(#'.concat(h, ')')
                              })
                          ]
                      })
                    : null,
                (0, i.jsx)(d.mn, {
                    text: E,
                    colorOptions: _ === a.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL ? d.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL : d.VE.PREMIUM_TIER_2_GREY_FILL
                })
            ]
        })
    );
}
