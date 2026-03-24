"use strict";
r.d(t, { Z: () => d });
var n = r(627968),
    i = r(64700),
    s = r(397927),
    a = r(688810),
    l = r(532794),
    c = r(788868),
    o = r(376435);
let d = (e) => {
    let { text: t } = e,
        { analyticsLocations: r } = (0, a.Ay)(),
        d = i.useRef(null);
    return (0, n.jsx)(s.DUT, {
        className: o.F,
        innerRef: d,
        onClick: () => {
            (0, l.A)({ subscriptionTier: c.pe.TIER_2, analyticsLocations: r, returnRef: d });
        },
        children: t,
    });
};
