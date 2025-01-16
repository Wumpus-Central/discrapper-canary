n.d(t, {
    F: function () {
        return d;
    }
});
var r = n(200651),
    a = n(192379),
    i = n(481060),
    l = n(906732),
    s = n(963249),
    o = n(474936),
    c = n(243410);
let d = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, l.ZP)(),
        d = a.useRef(null);
    return (0, r.jsx)(i.Clickable, {
        className: c.subscribeNow,
        innerRef: d,
        onClick: () => {
            (0, s.Z)({
                subscriptionTier: o.Si.TIER_2,
                analyticsLocations: n,
                returnRef: d
            });
        },
        children: t
    });
};
