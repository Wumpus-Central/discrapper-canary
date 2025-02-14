n.d(t, { F: () => c });
var l = n(200651),
    r = n(192379),
    i = n(481060),
    s = n(906732),
    a = n(963249),
    o = n(474936),
    d = n(8466);
let c = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, s.ZP)(),
        c = r.useRef(null);
    return (0, l.jsx)(i.P3F, {
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
