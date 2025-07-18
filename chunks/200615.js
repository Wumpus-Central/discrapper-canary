n.d(t, { F: () => u });
var r = n(255367),
    i = n(73800),
    a = n(481060),
    l = n(906732),
    s = n(963249),
    o = n(474936),
    c = n(831485);
let u = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, l.ZP)(),
        u = i.useRef(null);
    return (0, r.jsx)(a.P3F, {
        className: c.subscribeNow,
        innerRef: u,
        onClick: () => {
            (0, s.Z)({
                subscriptionTier: o.Si.TIER_2,
                analyticsLocations: n,
                returnRef: u
            });
        },
        children: t
    });
};
