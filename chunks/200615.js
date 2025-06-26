r.d(t, { F: () => u });
var n = r(255367),
    i = r(73800),
    o = r(481060),
    l = r(906732),
    a = r(963249),
    s = r(474936),
    c = r(831485);
let u = (e) => {
    let { text: t } = e,
        { analyticsLocations: r } = (0, l.ZP)(),
        u = i.useRef(null);
    return (0, n.jsx)(o.P3F, {
        className: c.subscribeNow,
        innerRef: u,
        onClick: () => {
            (0, a.Z)({
                subscriptionTier: s.Si.TIER_2,
                analyticsLocations: r,
                returnRef: u
            });
        },
        children: t
    });
};
