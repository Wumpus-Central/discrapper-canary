r.d(t, { Z: () => u });
var n = r(255367);
r(73800);
var i = r(120356),
    l = r.n(i),
    a = r(481060),
    o = r(960919),
    s = r(388032),
    c = r(595392);
function u(e) {
    let { orbAmount: t, className: r } = e;
    return (0, n.jsxs)(a.Text, {
        variant: 'text-md/semibold',
        className: l()(c.orbPriceTag, r),
        children: [
            (0, n.jsx)(a.nn4, { children: s.intl.format(s.t['a/Y8PD'], { orbAmount: t }) }),
            (0, n.jsx)(o.Z, { shouldUseThemeColor: !0 }),
            (0, n.jsx)('span', {
                'aria-hidden': !0,
                children: t
            })
        ]
    });
}
