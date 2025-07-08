n.d(t, { F: () => u });
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(906732),
    a = n(963249),
    s = n(474936),
    c = n(831485);
let u = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, i.ZP)(),
        u = l.useRef(null);
    return (0, r.jsx)(o.P3F, {
        className: c.subscribeNow,
        innerRef: u,
        onClick: () => {
            (0, a.Z)({
                subscriptionTier: s.Si.TIER_2,
                analyticsLocations: n,
                returnRef: u
            });
        },
        children: t
    });
};
