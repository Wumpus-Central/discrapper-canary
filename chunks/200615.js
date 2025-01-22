n.d(t, {
    F: function () {
        return d;
    }
});
var r = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(906732),
    a = n(963249),
    o = n(474936),
    c = n(243410);
let d = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, s.ZP)(),
        d = i.useRef(null);
    return (0, r.jsx)(l.Clickable, {
        className: c.subscribeNow,
        innerRef: d,
        onClick: () => {
            (0, a.Z)({
                subscriptionTier: o.Si.TIER_2,
                analyticsLocations: n,
                returnRef: d
            });
        },
        children: t
    });
};
