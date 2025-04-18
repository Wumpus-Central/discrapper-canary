n.d(t, { F: () => u });
var r = n(200651),
    l = n(192379),
    a = n(481060),
    i = n(906732),
    o = n(963249),
    s = n(474936),
    c = n(588910);
let u = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, i.ZP)(),
        u = l.useRef(null);
    return (0, r.jsx)(a.P3F, {
        className: c.subscribeNow,
        innerRef: u,
        onClick: () => {
            (0, o.Z)({
                subscriptionTier: s.Si.TIER_2,
                analyticsLocations: n,
                returnRef: u
            });
        },
        children: t
    });
};
