n.d(t, { F: () => d });
var r = n(255367),
    a = n(73800),
    i = n(481060),
    o = n(906732),
    c = n(963249),
    s = n(474936),
    l = n(638502);
let d = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, o.ZP)(),
        d = a.useRef(null);
    return (0, r.jsx)(i.P3F, {
        className: l.subscribeNow,
        innerRef: d,
        onClick: () => {
            (0, c.Z)({
                subscriptionTier: s.Si.TIER_2,
                analyticsLocations: n,
                returnRef: d,
            });
        },
        children: t,
    });
};
