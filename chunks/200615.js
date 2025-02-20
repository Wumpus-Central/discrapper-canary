r.d(t, { F: () => d });
var n = r(200651),
    l = r(192379),
    i = r(481060),
    a = r(906732),
    o = r(963249),
    s = r(474936),
    c = r(923250);
let d = (e) => {
    let { text: t } = e,
        { analyticsLocations: r } = (0, a.ZP)(),
        d = l.useRef(null);
    return (0, n.jsx)(i.P3F, {
        className: c.subscribeNow,
        innerRef: d,
        onClick: () => {
            (0, o.Z)({
                subscriptionTier: s.Si.TIER_2,
                analyticsLocations: r,
                returnRef: d
            });
        },
        children: t
    });
};
