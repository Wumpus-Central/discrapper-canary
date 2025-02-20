n.d(t, { Z: () => c });
var i = n(200651),
    r = n(481060),
    a = n(688465),
    l = n(755007),
    s = n(388032),
    o = n(605510);
function c(e) {
    let { orbPrice: t } = e;
    return (0, i.jsxs)('div', {
        className: o.priceLine,
        children: [
            (0, i.jsxs)('div', {
                className: o.orbText,
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: 'text-xs/normal',
                        children: s.NW.string(s.t.eFNRzc)
                    }),
                    (0, i.jsx)(a.Z, {})
                ]
            }),
            (0, i.jsx)(l.Z, { orbAmount: t.amount })
        ]
    });
}
