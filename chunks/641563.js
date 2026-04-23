n.d(t, { Z: () => u });
var r = n(627968),
    i = n(64700),
    a = n(939249),
    l = n(688810),
    s = n(532794),
    c = n(758836),
    o = n(788868),
    d = n(447806);
let u = (e) => {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: u } = (0, l.Ay)(),
        _ = i.useRef(null);
    return (0, r.jsx)(a.D, {
        className: d.F,
        innerRef: _,
        onClick: () => {
            n?.(c.sH.SUBSCRIBE_NOW), (0, s.A)({ subscriptionTier: o.pe.TIER_2, analyticsLocations: u, returnRef: _ });
        },
        children: t,
    });
};
