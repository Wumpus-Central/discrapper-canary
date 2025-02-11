n.d(t, { F: () => c });
var r = n(200651),
    l = n(192379),
    a = n(481060),
    i = n(906732),
    s = n(963249),
    o = n(474936),
    d = n(697938);
let c = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, i.ZP)(),
        c = l.useRef(null);
    return (0, r.jsx)(a.P3F, {
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
