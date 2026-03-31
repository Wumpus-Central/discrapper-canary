n.d(t, { Z: () => d });
var r = n(627968),
    a = n(64700),
    i = n(397927),
    s = n(688810),
    l = n(532794),
    o = n(788868),
    c = n(319278);
let d = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, s.Ay)(),
        d = a.useRef(null);
    return (0, r.jsx)(i.DUT, {
        className: c.F,
        innerRef: d,
        onClick: () => {
            (0, l.A)({ subscriptionTier: o.pe.TIER_2, analyticsLocations: n, returnRef: d });
        },
        children: t,
    });
};
