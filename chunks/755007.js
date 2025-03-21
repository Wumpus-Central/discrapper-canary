n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    l = n(481060),
    a = n(932563),
    s = n(960919),
    c = n(116264);
function u(e) {
    let { orbAmount: t } = e,
        n = (0, a.c)(),
        i = null != n && n >= t;
    return (0, r.jsxs)(l.Text, {
        variant: 'text-md/semibold',
        className: o()(c.orbPriceTag, { [c.insufficientBalance]: !i }),
        children: [(0, r.jsx)(s.Z, { shouldUseThemeColor: !0 }), t]
    });
}
