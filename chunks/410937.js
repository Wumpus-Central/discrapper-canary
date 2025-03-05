n.d(t, { Z: () => c });
var r = n(200651),
    i = n(481060),
    a = n(688465),
    s = n(755007),
    l = n(388032),
    o = n(172110);
function c(e) {
    var t;
    let { orbPrice: n } = e;
    return (0, r.jsxs)('div', {
        className: o.priceLine,
        children: [
            (0, r.jsxs)('div', {
                className: o.orbText,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        children: l.NW.string(l.t.eFNRzc)
                    }),
                    (0, r.jsx)(a.Z, {})
                ]
            }),
            (0, r.jsx)(s.Z, {
                orbAmount: null !== (t = null == n ? void 0 : n.amount) && void 0 !== t ? t : 1 / 0,
                showInsufficientOrbBalanceTooltip: !0
            })
        ]
    });
}
