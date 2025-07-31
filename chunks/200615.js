n.d(t, { F: () => u });
var r = n(255367),
    a = n(73800),
    i = n(481060),
    o = n(906732),
    c = n(963249),
    s = n(474936),
    l = n(831485);
let u = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, o.ZP)(),
        u = a.useRef(null);
    return (0, r.jsx)(i.P3F, {
        className: l.subscribeNow,
        innerRef: u,
        onClick: () => {
            (0, c.Z)({
                subscriptionTier: s.Si.TIER_2,
                analyticsLocations: n,
                returnRef: u
            });
        },
        children: t
    });
};
