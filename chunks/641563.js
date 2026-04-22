n.d(t, { Z: () => u });
var i = n(627968),
    r = n(64700),
    a = n(939249),
    l = n(688810),
    s = n(532794),
    o = n(758836),
    c = n(788868),
    d = n(447806);
let u = (e) => {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: u } = (0, l.Ay)(),
        _ = r.useRef(null);
    return (0, i.jsx)(a.D, {
        className: d.F,
        innerRef: _,
        onClick: () => {
            n?.(o.sH.SUBSCRIBE_NOW), (0, s.A)({ subscriptionTier: c.pe.TIER_2, analyticsLocations: u, returnRef: _ });
        },
        children: t,
    });
};
