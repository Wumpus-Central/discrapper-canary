n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var i = n(562708),
    r = n(834730),
    a = n(688810),
    s = n(139286),
    o = n(322798),
    u = n(375708),
    c = n(670152);
function d(e) {
    let { giftsToNextTier: t, nextTierName: n, nextTierIcon: d, analyticsLocations: p } = e,
        { analyticsLocations: m } = (0, a.Ay)(...(p ?? []));
    return (
        (0, s.A)(
            {
                name: i.ImpressionNames.GIFTING_BADGE_PROGRESS_BANNER,
                type: i.ImpressionTypes.VIEW,
                properties: { gifts_to_next_tier: t, next_tier: n, location_stack: m },
            },
            { trackOnInitialLoad: !0 },
        ),
        (0, l.jsxs)("div", {
            className: c.kL,
            children: [
                (0, l.jsx)("div", {
                    className: c.zc,
                    children:
                        null != d && (0, l.jsx)("img", { src: d, alt: "", width: 32, height: 32, className: c.Kk }),
                }),
                (0, l.jsx)(r.E, {
                    variant: "text-md/medium",
                    children: u.intl.format(o.default["0+xfd9"], { giftsRemaining: t, nextTier: n }),
                }),
            ],
        })
    );
}
