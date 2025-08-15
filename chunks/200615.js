n.d(t, { F: () => u });
var r = n(951288),
    a = n(647438),
    i = n(481060),
    o = n(906732),
    l = n(963249),
    c = n(474936),
    s = n(638502);
let u = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, o.ZP)(),
        u = a.useRef(null);
    return (0, r.jsx)(i.P3F, {
        className: s.subscribeNow,
        innerRef: u,
        onClick: () => {
            (0, l.Z)({
                subscriptionTier: c.Si.TIER_2,
                analyticsLocations: n,
                returnRef: u,
            });
        },
        children: t,
    });
};
