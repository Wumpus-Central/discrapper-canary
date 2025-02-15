n.d(t, { F: () => c });
var l = n(200651),
    r = n(192379),
    i = n(481060),
    a = n(906732),
    s = n(963249),
    o = n(474936),
    d = n(8466);
let c = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, a.ZP)(),
        c = r.useRef(null);
    return (0, l.jsx)(i.P3F, {
        className: d.subscribeNow,
        innerRef: c,
        onClick: () => {
            (0, s.Z)({
                subscriptionTier: o.Si.TIER_2,
                analyticsLocations: n,
                returnRef: c
            });
        },
        children: t
    });
};
