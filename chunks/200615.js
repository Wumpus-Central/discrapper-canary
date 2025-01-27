n.d(t, {
    F: function () {
        return d;
    }
});
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(906732),
    s = n(963249),
    o = n(474936),
    c = n(243410);
let d = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, a.ZP)(),
        d = i.useRef(null);
    return (0, r.jsx)(l.Clickable, {
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
