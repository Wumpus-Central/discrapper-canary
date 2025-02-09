n.d(t, { F: () => c });
var r = n(200651),
    l = n(192379),
    i = n(481060),
    a = n(906732),
    s = n(963249),
    o = n(474936),
    d = n(697938);
let c = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, a.ZP)(),
        c = l.useRef(null);
    return (0, r.jsx)(i.P3F, {
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
