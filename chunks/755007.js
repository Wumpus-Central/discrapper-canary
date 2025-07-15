r.d(t, { Z: () => u });
var n = r(255367);
r(73800);
var l = r(120356),
    o = r.n(l),
    i = r(481060),
    a = r(960919),
    s = r(388032),
    c = r(595392);
function u(e) {
    let { orbAmount: t, className: r } = e;
    return (0, n.jsxs)(i.Text, {
        variant: 'text-md/semibold',
        className: o()(c.orbPriceTag, r),
        children: [
            (0, n.jsx)(i.nn4, { children: s.intl.format(s.t['a/Y8PD'], { orbAmount: t }) }),
            (0, n.jsx)(a.Z, { shouldUseThemeColor: !0 }),
            (0, n.jsx)('span', {
                'aria-hidden': !0,
                children: t
            })
        ]
    });
}
