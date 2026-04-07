n.d(t, { Z: () => u });
var r = n(627968),
    a = n(64700),
    i = n(397927),
    s = n(688810),
    l = n(532794),
    o = n(758836),
    c = n(788868),
    d = n(319278);
let u = (e) => {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: u } = (0, s.Ay)(),
        m = a.useRef(null);
    return (0, r.jsx)(i.DUT, {
        className: d.F,
        innerRef: m,
        onClick: () => {
            n?.(o.sH.SUBSCRIBE_NOW), (0, l.A)({ subscriptionTier: c.pe.TIER_2, analyticsLocations: u, returnRef: m });
        },
        children: t,
    });
};
