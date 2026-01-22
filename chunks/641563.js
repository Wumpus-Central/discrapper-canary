n.d(t, {
    Z: () => d,
});
var r = n(627968),
    l = n(64700),
    a = n(397927),
    i = n(688810),
    s = n(532794),
    c = n(788868),
    o = n(376435);
let d = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, i.Ay)(),
        d = l.useRef(null);
    return (0, r.jsx)(a.DUT, {
        className: o.F,
        innerRef: d,
        onClick: () => {
            (0, s.A)({
                subscriptionTier: c.pe.TIER_2,
                analyticsLocations: n,
                returnRef: d,
            });
        },
        children: t,
    });
};
