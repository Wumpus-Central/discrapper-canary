n.d(t, { F: () => c });
var r = n(200651),
    l = n(192379),
    i = n(481060),
    s = n(906732),
    a = n(963249),
    o = n(474936),
    d = n(243410);
let c = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, s.ZP)(),
        c = l.useRef(null);
    return (0, r.jsx)(i.P3F, {
        className: d.subscribeNow,
        innerRef: c,
        onClick: () => {
            (0, a.Z)({
                subscriptionTier: o.Si.TIER_2,
                analyticsLocations: n,
                returnRef: c
            });
        },
        children: t
    });
};
